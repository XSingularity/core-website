/**
 * Portfolio projects (Spanish only).
 *
 * `results` renders as a hard performance claim attributed to a real
 * engagement. Only fill it in with a number you can evidence if a prospect
 * asks. Leave it undefined rather than estimating — an invented metric is a
 * liability (PRODUCT.md).
 *
 *   kind: 'demo'         sanitized standalone build; `url` required.
 *   kind: 'open-source'  public repository; `url` points at the repo.
 *   kind: 'case-study'   screenshots + narrative only, no link.
 */
export type ProjectKind = 'demo' | 'case-study' | 'open-source'

export type Project = {
  id: string
  kind: ProjectKind
  img: string
  alt: string
  tags: string[]
  url?: string
  results?: string
  title: string
  client: string
  description: string
}

export const PROJECTS: Project[] = [
  {
    id: 'ferrealianza',
    kind: 'case-study',
    img: '/portfolio/ferrealianza.webp',
    alt: 'Sistema de inventario y pedidos para una ferretería, construido por XSingularity',
    tags: ['Ferretería', 'Pedidos', 'Excel', 'PDF'],
    title: 'Sistema de inventario y pedidos',
    client: 'FerreAlianza',
    description:
      'Catálogo y pedidos para una ferretería. Los administradores cargan productos a mano o desde Excel; el personal busca en el catálogo, arma pedidos con descuentos e impuestos y los exporta a PDF, Excel o texto para enviarlos por WhatsApp.',
  },
  {
    id: 'xinventory',
    kind: 'open-source',
    url: 'https://github.com/omarperezr/xinventory',
    img: '/portfolio/xinventory.webp',
    alt: 'Punto de venta e inventario que funciona sin conexión, construido por XSingularity',
    tags: ['Punto de venta', 'Bs y $', 'Sin conexión'],
    title: 'xinventory — inventario y punto de venta',
    client: 'Producto propio',
    description:
      'Punto de venta para negocios que fijan precios en dólares y cobran en bolívares. Los precios se guardan en dólares y se convierten a la tasa que elijas, así una tasa nueva nunca reescribe lo que ganó una venta pasada. Sigue vendiendo sin internet y sincroniza al volver.',
  },
  {
    id: 'client-progress',
    kind: 'open-source',
    url: 'https://github.com/omarperezr/client_progress_xsingularity',
    img: '/portfolio/client-progress.webp',
    alt: 'Portal de clientes con el avance del proyecto en vivo, construido por XSingularity',
    tags: ['Portal', 'Avance en vivo'],
    title: 'Portal de clientes — avance del proyecto en vivo',
    client: 'Producto propio',
    description:
      'Cada cliente recibe un acceso el primer día. El portal lee el proyecto y muestra avance real, una fecha estimada de entrega calculada con el ritmo del equipo y quién hace qué. Comentas en cualquier tarea y la respuesta llega a quien la está haciendo.',
  },
  {
    id: 'marketplace-responder',
    kind: 'open-source',
    url: 'https://github.com/omarperezr/marketplace_responder',
    img: '/portfolio/marketplace-responder.webp',
    alt: 'Bot de atención al cliente para Facebook Messenger, construido por XSingularity',
    tags: ['Messenger', 'Atención 24/7', 'IA'],
    title: 'Bot de atención al cliente para Messenger',
    client: 'Producto propio',
    description:
      'Responde a los clientes al instante, de día y de noche, desde una base de respuestas que controla el negocio. Entiende la pregunta como sea que esté escrita. Las preguntas nuevas quedan en un panel; las respondes una vez y el bot las contesta solo desde entonces.',
  },
  {
    id: 'smarttybot',
    kind: 'open-source',
    url: 'https://github.com/omarperezr/SmarttyBot',
    img: '/portfolio/smarttybot.webp',
    alt: 'Asistente multiplataforma para Discord, Telegram, Slack y correo, construido por XSingularity',
    tags: ['Telegram', 'Discord', 'Correo'],
    title: 'SmarttyBot — asistente multiplataforma',
    client: 'Producto propio',
    description:
      'Retransmite mensajes entre Discord, Telegram, Slack y correo, y actúa cuando se le pide en lenguaje normal: genera reportes, envía correos, publica en varios canales a la vez.',
  },
  {
    id: 'xcambio',
    kind: 'open-source',
    url: 'https://github.com/omarperezr/XCambio',
    img: '/portfolio/xcambio.webp',
    alt: 'Conversor de bolívares y dólares para Android, construido por XSingularity',
    tags: ['Android', 'Tasa BCV', 'Tasa P2P'],
    title: 'XCambio — conversor de divisas',
    client: 'Producto propio',
    description:
      'Conversor para Android del bolívar. Cambia entre la tasa oficial del BCV, la del mercado P2P, un promedio y una tasa que pones tú, y muestra la brecha entre ellas. Si una fuente falla, las demás siguen funcionando.',
  },
]
