import type { Locale } from '../i18n/config';

/**
 * Portfolio projects.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * IMPORTANT — claimed results
 * ─────────────────────────────────────────────────────────────────────────────
 * The `results` field renders as a hard performance claim attributed to a real
 * engagement. Only fill it in with a number you can evidence if a prospect (or
 * a regulator) asks. Leave it undefined rather than estimating — a card without
 * a metric still sells; an invented metric is a liability.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * How a project is shown
 * ─────────────────────────────────────────────────────────────────────────────
 *   kind: 'demo'         A sanitized, standalone build running on generated
 *                        sample data, deployed to a subdomain you control.
 *                        `url` required. See docs/portfolio-demos.md.
 *
 *   kind: 'open-source'  Public repository. `url` required, points at the repo.
 *
 *   kind: 'case-study'   Screenshots + narrative only, no link. Use for client
 *                        work whose deployment is private.
 *
 * img: put the file in /public/portfolio (webp, ~1200x800).
 * tags: 2-4 short labels (stack, domain). Shown as chips on the card.
 */

export type ProjectKind = 'demo' | 'case-study' | 'open-source';

export type Project = {
  /** Stable key; also used for the demo subdomain slug. */
  id: string;
  kind: ProjectKind;
  img: string;
  alt: string;
  tags: string[];
  /** Required for 'demo' (live instance) and 'open-source' (repository). */
  url?: string;
  /** Verified, evidenced outcome. Omit if you cannot back it up. */
  results?: Record<Locale, string>;
  title: Record<Locale, string>;
  client: Record<Locale, string>;
  description: Record<Locale, string>;
};

export const PROJECTS: Project[] = [
  {
    id: 'xinventory',
    kind: 'open-source',
    url: 'https://github.com/omarperezr/xinventory',
    img: '/portfolio/xinventory.webp',
    alt: 'offline-first inventory and point of sale web application built by XSingularity',
    tags: ['React', 'TypeScript', 'Supabase', 'Offline-first'],
    title: {
      en: 'xinventory — inventory & point of sale',
      es: 'xinventory — inventario y punto de venta',
    },
    client: {
      en: 'Internal product',
      es: 'Producto propio',
    },
    description: {
      en: 'Point of sale for shops that price in dollars but get paid in bolívares. Prices are stored in USD and converted at a chosen reference rate, so a moving exchange rate never rewrites what a past sale earned. Reads fall back to a local cache and writes queue offline, because connectivity in a shop is not reliable.',
      es: 'Punto de venta para comercios que fijan precios en dólares pero cobran en bolívares. Los precios se guardan en USD y se convierten a la tasa de referencia elegida, de modo que una tasa cambiante nunca reescribe lo que ganó una venta pasada. Las lecturas recurren a una caché local y las escrituras se encolan sin conexión, porque la conectividad en tienda no es fiable.',
    },
  },
  {
    id: 'ferrealianza',
    kind: 'case-study',
    img: '/portfolio/ferrealianza.webp',
    alt: 'inventory and ordering system for a hardware retailer built by XSingularity',
    tags: ['React', 'TypeScript', 'Supabase', 'Vite'],
    title: {
      en: 'Inventory & ordering system',
      es: 'Sistema de inventario y pedidos',
    },
    client: {
      en: 'FerreAlianza',
      es: 'FerreAlianza',
    },
    description: {
      en: 'Catalogue and ordering for a hardware retailer. Administrators manage products by hand or by bulk Excel import; staff search the catalogue, build orders with discounts and tax, and export them to PDF, Excel or plain text for sending on.',
      es: 'Catálogo y pedidos para un comercio ferretero. Los administradores gestionan los productos a mano o por importación masiva desde Excel; el personal busca en el catálogo, arma pedidos con descuentos e impuestos y los exporta a PDF, Excel o texto plano para enviarlos.',
    },
  },
  {
    id: 'smarttybot',
    kind: 'open-source',
    url: 'https://github.com/omarperezr/SmarttyBot',
    img: '/portfolio/smarttybot.webp',
    alt: 'multiplatform Discord Telegram Slack and email assistant bot built in Go by XSingularity',
    tags: ['Go', 'SQLite', 'LLM tool calling', 'Docker'],
    title: {
      en: 'SmarttyBot — multiplatform assistant',
      es: 'SmarttyBot — asistente multiplataforma',
    },
    // Not "Open source" — the green badge already says that, and repeating it
    // on the same card wastes the one line that tells you whose project it is.
    client: {
      en: 'Internal product',
      es: 'Producto propio',
    },
    description: {
      en: 'Relays messages between Discord, Telegram, Slack and email, and acts on plain language when addressed — running GitLab reports, sending mail, cross-posting. Messages that do not address it never reach the model, which keeps API usage down, and each platform enables itself only once configured.',
      es: 'Retransmite mensajes entre Discord, Telegram, Slack y correo, y actúa en lenguaje natural cuando se le menciona — genera informes de GitLab, envía correos, publica en varios canales. Los mensajes que no se le dirigen nunca llegan al modelo, lo que mantiene bajo el uso de la API, y cada plataforma se activa solo cuando está configurada.',
    },
  },
  {
    id: 'xcambio',
    kind: 'open-source',
    url: 'https://github.com/omarperezr/XCambio',
    img: '/portfolio/xcambio.webp',
    alt: 'native Android currency converter app for the Venezuelan bolivar built by XSingularity',
    tags: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Android'],
    title: {
      en: 'XCambio — currency converter',
      es: 'XCambio — conversor de divisas',
    },
    client: {
      en: 'Internal product',
      es: 'Producto propio',
    },
    description: {
      en: 'Native Android converter for the Venezuelan bolívar. Switches between the official BCV rate, the P2P market rate, a blended average and a rate you enter yourself, and shows the live gap between the official and parallel markets. Each source is fetched independently, so one failing provider does not blank out the rest.',
      es: 'Conversor nativo de Android para el bolívar venezolano. Alterna entre la tasa oficial del BCV, la del mercado P2P, un promedio y una tasa que introduces tú mismo, y muestra la brecha en vivo entre el mercado oficial y el paralelo. Cada fuente se consulta de forma independiente, así que un proveedor caído no deja las demás en blanco.',
    },
  },
];
