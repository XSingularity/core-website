/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: '_static',
  // Emits `es/index.html` instead of `es.html`, so `/es/` resolves as a plain
  // directory index on any static host. Without this, `/es` only works if the
  // host happens to fall back to `<path>.html`.
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // NOTE: security headers cannot be set here — `output: export` produces plain
  // files and Next serves nothing at runtime. They must be configured on the
  // DigitalOcean app spec. See docs/security-headers.md.
}

module.exports = nextConfig
