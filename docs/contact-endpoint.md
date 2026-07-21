# Contact form endpoint (DigitalOcean Function)

## Why this exists

The website is a **static export** served from DigitalOcean. A static site ships
all of its JavaScript to the browser, so it can never hold a secret. The previous
implementation put a Basic-auth credential in `contact.tsx`, which meant the key
was readable in the public JS bundle *and* in the public GitHub repo.

The fix is not to hide the key better — it is to make the endpoint **safe to call
without one**. The function below is publicly invocable but rejects anything that
is not a genuine submission from the website.

## Layers

| Layer | Stops |
|---|---|
| Origin allowlist | Requests from other sites / naive scripts |
| Cloudflare Turnstile | Automated submissions |
| Honeypot field (`website`) | Form-filling bots |
| Submit-timing check (client) | Instant replay bots |
| Per-IP rate limit | Flooding from one source |
| Payload size + field caps | Oversized/abusive bodies |

No single layer is sufficient. Together they make abuse not worth the effort.

## Required environment variables

Set these in the DO Functions namespace (**never** in this repo):

```
GMAIL_USER=...              # sending account
GMAIL_APP_PASSWORD=...      # Google app password, not the account password
TURNSTILE_SECRET_KEY=...    # from Cloudflare Turnstile dashboard
ALLOWED_ORIGINS=https://www.xsingularity.dev,https://xsingularity.dev
DESTINATION_EMAIL=...       # where submissions are delivered
```

## Function

`packages/default/send-gmail-message/index.js`

```js
const nodemailer = require('nodemailer');

// In-memory rate limit. Resets when the function container recycles, which is
// acceptable here: it blunts floods without needing external state.
const hits = new Map();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

const MAX = { name: 100, email: 200, message: 5000 };

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // crude memory bound
  return recent.length > MAX_PER_WINDOW;
}

async function verifyTurnstile(token, ip) {
  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: process.env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: ip,
    }),
  });
  const data = await res.json();
  return data.success === true;
}

function reply(status, body, origin) {
  return {
    statusCode: status,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': origin || 'null',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
    body,
  };
}

exports.main = async (args) => {
  const http = args.__ow_headers || {};
  const origin = http.origin || '';
  const allowed = (process.env.ALLOWED_ORIGINS || '').split(',').map((s) => s.trim());
  const originOk = allowed.includes(origin);

  if (args.__ow_method === 'options') {
    return reply(204, '', originOk ? origin : '');
  }
  if (!originOk) {
    return reply(403, JSON.stringify({ error: 'Forbidden' }), '');
  }

  const ip = http['x-forwarded-for']?.split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) {
    return reply(429, JSON.stringify({ error: 'Too many requests' }), origin);
  }

  const { name = '', email = '', message = '', website = '', turnstileToken } = args;

  // Honeypot filled => bot. Return 200 so it learns nothing.
  if (String(website).trim() !== '') {
    return reply(200, JSON.stringify({ ok: true }), origin);
  }

  if (!name.trim() || !email.trim() || !message.trim()) {
    return reply(400, JSON.stringify({ error: 'Missing required fields' }), origin);
  }
  if (name.length > MAX.name || email.length > MAX.email || message.length > MAX.message) {
    return reply(400, JSON.stringify({ error: 'Field too long' }), origin);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return reply(400, JSON.stringify({ error: 'Invalid email' }), origin);
  }
  // Header injection guard: newlines in a header field can forge extra headers.
  if (/[\r\n]/.test(name) || /[\r\n]/.test(email)) {
    return reply(400, JSON.stringify({ error: 'Invalid input' }), origin);
  }

  if (process.env.TURNSTILE_SECRET_KEY) {
    if (!turnstileToken || !(await verifyTurnstile(turnstileToken, ip))) {
      return reply(403, JSON.stringify({ error: 'Verification failed' }), origin);
    }
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.GMAIL_USER, pass: process.env.GMAIL_APP_PASSWORD },
  });

  await transporter.sendMail({
    from: process.env.GMAIL_USER,          // must be the authenticated account
    replyTo: `${name} <${email}>`,          // replying goes to the enquirer
    to: process.env.DESTINATION_EMAIL,
    subject: `New enquiry from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return reply(200, JSON.stringify({ ok: true }), origin);
};
```

`packages/default/send-gmail-message/package.json`

```json
{ "name": "send-gmail-message", "main": "index.js", "dependencies": { "nodemailer": "^6.9.7" } }
```

In `project.yml`, the function must be **web-accessible without auth** — the
protection is the logic above, not a shared secret:

```yaml
packages:
  - name: default
    functions:
      - name: send-gmail-message
        runtime: nodejs:18
        web: true
        webSecure: false
```

## Frontend configuration

In `.env.local` (and in the DO build environment) — neither value is secret:

```
NEXT_PUBLIC_CONTACT_ENDPOINT=https://faas-nyc1-....doserverless.co/api/v1/web/fn-.../default/send-gmail-message
NEXT_PUBLIC_TURNSTILE_SITE_KEY=0x4AAAAAAA...
```

If `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is unset the form still works and the
captcha is skipped — origin checks, honeypot and rate limiting still apply. Set
it as soon as the Cloudflare site key exists.

## Deploy

```bash
doctl serverless deploy .
```

Note the new function URL: it changes when the namespace changes.
