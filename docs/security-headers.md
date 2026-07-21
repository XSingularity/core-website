# Security headers (DigitalOcean App Platform)

`output: export` produces plain files. Next serves nothing at runtime, so
`headers()` in `next.config.js` does nothing in production — the headers must be
set by whatever serves the files. On DO App Platform that is the app spec.

Add to the static site component in your app spec (`doctl apps spec get <id> > spec.yaml`,
edit, then `doctl apps update <id> --spec spec.yaml`):

```yaml
static_sites:
  - name: core-website
    source_dir: /
    output_dir: /_static
    catchall_document: 404.html
    headers:
      - path: /
        name: X-Content-Type-Options
        value: nosniff
      - path: /
        name: Referrer-Policy
        value: strict-origin-when-cross-origin
      - path: /
        name: X-Frame-Options
        value: DENY
      - path: /
        name: Permissions-Policy
        value: "camera=(), microphone=(), geolocation=(), payment=()"
      - path: /
        name: Strict-Transport-Security
        value: "max-age=63072000; includeSubDomains; preload"
      - path: /
        name: Content-Security-Policy
        value: >-
          default-src 'self';
          script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://challenges.cloudflare.com;
          style-src 'self' 'unsafe-inline';
          img-src 'self' data: https://www.googletagmanager.com https://www.google-analytics.com;
          font-src 'self';
          connect-src 'self' https://www.google-analytics.com https://*.doserverless.co;
          frame-src https://challenges.cloudflare.com;
          frame-ancestors 'none';
          base-uri 'self';
          form-action 'self';
          upgrade-insecure-requests
```

## Notes on the CSP

- `'unsafe-inline'` in `script-src` is required by the inlined Google Analytics
  bootstrap and Next's inline hydration data. Removing it means moving to a
  nonce-based CSP, which a static export cannot generate per-request. This is
  the practical ceiling for a fully static site.
- `connect-src` must list the DO Functions host the contact form posts to.
  Tighten `https://*.doserverless.co` to your exact namespace host once stable.
- `frame-src`/`script-src` entries for `challenges.cloudflare.com` are only
  needed while Turnstile is enabled.
- `frame-ancestors 'none'` and `X-Frame-Options: DENY` overlap deliberately;
  the latter covers older browsers.

## Verifying

After deploying:

```bash
curl -sI https://www.xsingularity.dev/ | grep -iE 'content-security|strict-transport|x-frame|referrer|permissions|x-content'
```

Then check the browser console on a hard reload — CSP violations are reported
there, and a too-strict policy will silently break analytics or the form.
