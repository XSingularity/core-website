import type { Locale } from './config';

/**
 * All user-facing copy. Components read from here via `useDict()` so a new
 * locale is a data change, not a component change.
 *
 * Structural data that is NOT translated (image paths, links, tech logos,
 * team member names) stays in the components — only prose lives here.
 */
export type Dictionary = {
  nav: {
    items: { id: string; label: string }[];
    bookCall: string;
    openMenu: string;
    closeMenu: string;
    openFaq: string;
    home: string;
  };
  intro: {
    badge: string;
    headlineTyped: string;
    headlineRest: string;
    lead: string;
    valueProps: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  workflow: {
    eyebrow: string;
    title: string;
    lead: string;
    stepLabel: string;
    steps: { title: string; text: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    lead: string;
    onGithub: string;
    onLinkedin: string;
    roles: Record<string, string>;
  };
  services: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    lead: string;
    visit: string;
    viewSource: string;
    prev: string;
    next: string;
    region: string;
    goTo: string;
    demoBadge: string;
    caseStudyBadge: string;
    openSourceBadge: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    errorGeneric: string;
    errorRateLimit: string;
    errorCaptcha: string;
    errorUnconfigured: string;
    successTitle: string;
    successBody: string;
    close: string;
  };
  faq: {
    title: string;
    items: { q: string; a: string }[];
  };
  footer: {
    rights: string;
  };
  langBanner: {
    message: string;
    accept: string;
    dismiss: string;
  };
  a11y: {
    scrollTop: string;
    languageSwitcher: string;
  };
};

const en: Dictionary = {
  nav: {
    items: [
      { id: 'Home', label: 'Home' },
      { id: 'Workflow', label: 'Workflow' },
      { id: 'Team', label: 'Team' },
      { id: 'Services', label: 'Services' },
      { id: 'Portfolio', label: 'Portfolio' },
      { id: 'Contact', label: 'Contact' },
    ],
    bookCall: 'Book a call',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    openFaq: 'Open FAQ',
    home: 'XSingularity home',
  },
  intro: {
    badge: 'Software studio — taking on new projects',
    headlineTyped: 'Your product, built right',
    headlineRest: 'and built to scale.',
    lead: "We design, build and run web, backend and cloud products for teams that can't afford to get it wrong. You bring the idea — we handle everything between it and your users.",
    valueProps: [
      'Senior engineers on every project — no hand-offs to juniors.',
      'A clear plan and honest timeline before we write a line of code.',
      'One partner from first idea to production, support included.',
    ],
    ctaPrimary: 'Book a free 30-min call',
    ctaSecondary: 'See our work →',
  },
  workflow: {
    eyebrow: 'how we work',
    title: 'From idea to launch, without surprises',
    lead: 'Five clear steps, one accountable team. You see progress every week and know exactly where your project stands — from the first conversation to long after launch.',
    stepLabel: 'STEP',
    steps: [
      {
        title: 'PLANNING',
        text: 'We analyze the requirements of your project, making sure we fully understand your needs, goals and constraints before a single line of code is written.',
      },
      {
        title: 'CODE IMPLEMENTATION',
        text: 'Our engineers turn the requirements into solid, efficient and well-tested code using modern, industry best practices.',
      },
      {
        title: 'TESTING & QA',
        text: 'Every change goes through automated tests and quality controls so your software ships flawlessly and stays reliable.',
      },
      {
        title: 'DEPLOYMENT',
        text: 'We set up your entire infrastructure — servers, pipelines and configuration — and ship to production with zero drama.',
      },
      {
        title: 'SUPPORT',
        text: 'We provide ongoing monitoring and support so your business keeps running smoothly long after launch.',
      },
    ],
  },
  team: {
    eyebrow: 'the people',
    title: 'The team behind your project',
    lead: 'No layers, no account managers in between — you talk directly to the engineers and designers building your product.',
    onGithub: 'on GitHub',
    onLinkedin: 'on LinkedIn',
    roles: {
      CEO: 'CEO',
      COO: 'COO',
      'Creative Director': 'Creative Director',
      'IT Support': 'IT Support',
      CFO: 'CFO',
    },
  },
  services: {
    eyebrow: 'what we do',
    title: 'Everything your product needs, under one roof',
    lead: 'Strategy, design, engineering and support — one team accountable for the whole result, so nothing falls between vendors.',
    items: [
      {
        title: 'Project management',
        text: 'One dedicated lead, weekly demos and a roadmap you can actually read. You always know what shipped, what’s next and what it costs.',
      },
      {
        title: 'UX/UI design',
        text: 'We research your users before we design for them. The result: interfaces people understand in seconds and keep coming back to.',
      },
      {
        title: 'Technical support',
        text: 'When something breaks at 2 a.m., we’re the ones awake. Monitoring, maintenance and fast response — long after launch day.',
      },
      {
        title: 'Frontend design',
        text: 'Fast, polished interfaces that turn visitors into customers — built to feel instant on any device.',
      },
      {
        title: 'Backend development',
        text: 'Secure, tested APIs and infrastructure that handle your busiest day as smoothly as your slowest — and grow with you.',
      },
    ],
  },
  portfolio: {
    eyebrow: 'our work',
    title: 'Portfolio',
    lead: 'A look at what we build — client engagements, internal products and open source.',
    visit: 'Open live demo →',
    viewSource: 'View source →',
    prev: 'Previous project',
    next: 'Next project',
    region: 'Portfolio projects',
    goTo: 'Go to project',
    demoBadge: 'Live demo',
    caseStudyBadge: 'Case study',
    openSourceBadge: 'Open source',
  },
  contact: {
    eyebrow: 'get in touch',
    title: "Let's talk about your project",
    lead: "Tell us what you're building and where you're stuck. We'll reply within one business day with honest advice — even if the answer is that you don't need us yet.",
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send message',
    sending: 'Sending your message…',
    errorGeneric: "We couldn't send your message. Please try again, or email us directly.",
    errorRateLimit: 'Too many messages sent from here. Please try again in a few minutes.',
    errorCaptcha: 'Please complete the verification check and try again.',
    errorUnconfigured: 'The contact form is not configured. Please email us directly.',
    successTitle: 'Thanks for your message.',
    successBody: "We'll get back to you within one business day.",
    close: 'Close',
  },
  faq: {
    title: "FAQ's",
    items: [
      {
        q: 'What technologies and programming languages do you utilize in your work?',
        a: "We specialize in languages like Python, Javascript, Go, Solidity and technologies such as React, Docker, Node JS, AWS. However, if there's any other language that you want to work with, we can totally assist you with that.",
      },
      {
        q: 'What is the minimum budget and the project size you are willing to work with?',
        a: 'Our minimum budget to work with is $10.000. But you can contact us and we can make an exception if you need.',
      },
      {
        q: 'Will you sign an NDA?',
        a: 'Yes, sure. If you want to sign an NDA, we are always ready to do so.',
      },
    ],
  },
  footer: {
    rights: 'XSingularity',
  },
  langBanner: {
    message: '¿Prefieres ver este sitio en español?',
    accept: 'Ver en español',
    dismiss: 'Stay in English',
  },
  a11y: {
    scrollTop: 'Scroll back to top',
    languageSwitcher: 'Change language',
  },
};

const es: Dictionary = {
  nav: {
    items: [
      { id: 'Home', label: 'Inicio' },
      { id: 'Workflow', label: 'Proceso' },
      { id: 'Team', label: 'Equipo' },
      { id: 'Services', label: 'Servicios' },
      { id: 'Portfolio', label: 'Portafolio' },
      { id: 'Contact', label: 'Contacto' },
    ],
    bookCall: 'Agendar llamada',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    openFaq: 'Abrir preguntas frecuentes',
    home: 'Inicio de XSingularity',
  },
  intro: {
    badge: 'Estudio de software — aceptando nuevos proyectos',
    headlineTyped: 'Tu producto, bien hecho',
    headlineRest: 'y listo para escalar.',
    lead: 'Diseñamos, construimos y operamos productos web, backend y cloud para equipos que no se pueden permitir equivocarse. Tú traes la idea — nosotros nos encargamos de todo lo que hay entre ella y tus usuarios.',
    valueProps: [
      'Ingenieros senior en cada proyecto — sin delegar a juniors.',
      'Un plan claro y plazos honestos antes de escribir una línea de código.',
      'Un solo socio desde la idea hasta producción, soporte incluido.',
    ],
    ctaPrimary: 'Agenda una llamada gratis de 30 min',
    ctaSecondary: 'Ver nuestro trabajo →',
  },
  workflow: {
    eyebrow: 'cómo trabajamos',
    title: 'De la idea al lanzamiento, sin sorpresas',
    lead: 'Cinco pasos claros, un equipo responsable. Ves el avance cada semana y sabes exactamente en qué punto está tu proyecto — desde la primera conversación hasta mucho después del lanzamiento.',
    stepLabel: 'PASO',
    steps: [
      {
        title: 'PLANIFICACIÓN',
        text: 'Analizamos los requisitos de tu proyecto y nos aseguramos de entender por completo tus necesidades, objetivos y limitaciones antes de escribir una sola línea de código.',
      },
      {
        title: 'IMPLEMENTACIÓN',
        text: 'Nuestros ingenieros convierten los requisitos en código sólido, eficiente y bien probado, siguiendo las mejores prácticas del sector.',
      },
      {
        title: 'PRUEBAS Y QA',
        text: 'Cada cambio pasa por pruebas automatizadas y controles de calidad para que tu software salga impecable y siga siendo fiable.',
      },
      {
        title: 'DESPLIEGUE',
        text: 'Montamos toda tu infraestructura — servidores, pipelines y configuración — y desplegamos a producción sin dramas.',
      },
      {
        title: 'SOPORTE',
        text: 'Ofrecemos monitorización y soporte continuo para que tu negocio siga funcionando mucho después del lanzamiento.',
      },
    ],
  },
  team: {
    eyebrow: 'las personas',
    title: 'El equipo detrás de tu proyecto',
    lead: 'Sin capas ni gestores de cuenta de por medio — hablas directamente con los ingenieros y diseñadores que construyen tu producto.',
    onGithub: 'en GitHub',
    onLinkedin: 'en LinkedIn',
    roles: {
      CEO: 'CEO',
      COO: 'COO',
      'Creative Director': 'Director creativo',
      'IT Support': 'Soporte IT',
      CFO: 'CFO',
    },
  },
  services: {
    eyebrow: 'qué hacemos',
    title: 'Todo lo que tu producto necesita, en un solo lugar',
    lead: 'Estrategia, diseño, ingeniería y soporte — un equipo responsable del resultado completo, para que nada se pierda entre proveedores.',
    items: [
      {
        title: 'Gestión de proyectos',
        text: 'Un responsable dedicado, demos semanales y una hoja de ruta que de verdad se entiende. Siempre sabes qué se entregó, qué sigue y cuánto cuesta.',
      },
      {
        title: 'Diseño UX/UI',
        text: 'Investigamos a tus usuarios antes de diseñar para ellos. El resultado: interfaces que se entienden en segundos y a las que la gente vuelve.',
      },
      {
        title: 'Soporte técnico',
        text: 'Cuando algo se rompe a las 2 de la madrugada, nosotros estamos despiertos. Monitorización, mantenimiento y respuesta rápida — mucho después del lanzamiento.',
      },
      {
        title: 'Diseño frontend',
        text: 'Interfaces rápidas y cuidadas que convierten visitantes en clientes — pensadas para sentirse instantáneas en cualquier dispositivo.',
      },
      {
        title: 'Desarrollo backend',
        text: 'APIs e infraestructura seguras y probadas que soportan tu día más intenso igual de bien que el más tranquilo — y crecen contigo.',
      },
    ],
  },
  portfolio: {
    eyebrow: 'nuestro trabajo',
    title: 'Portafolio',
    lead: 'Una muestra de lo que construimos — proyectos de clientes, productos propios y código abierto.',
    visit: 'Abrir demo en vivo →',
    viewSource: 'Ver código →',
    prev: 'Proyecto anterior',
    next: 'Proyecto siguiente',
    region: 'Proyectos del portafolio',
    goTo: 'Ir al proyecto',
    demoBadge: 'Demo en vivo',
    caseStudyBadge: 'Caso de estudio',
    openSourceBadge: 'Código abierto',
  },
  contact: {
    eyebrow: 'contacto',
    title: 'Hablemos de tu proyecto',
    lead: 'Cuéntanos qué estás construyendo y dónde te has atascado. Te respondemos en un día hábil con una opinión honesta — incluso si la respuesta es que todavía no nos necesitas.',
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensaje',
    submit: 'Enviar mensaje',
    sending: 'Enviando tu mensaje…',
    errorGeneric: 'No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos directamente.',
    errorRateLimit: 'Se han enviado demasiados mensajes desde aquí. Inténtalo de nuevo en unos minutos.',
    errorCaptcha: 'Completa la verificación e inténtalo de nuevo.',
    errorUnconfigured: 'El formulario no está configurado. Escríbenos directamente por correo.',
    successTitle: 'Gracias por tu mensaje.',
    successBody: 'Te responderemos en un día hábil.',
    close: 'Cerrar',
  },
  faq: {
    title: 'Preguntas frecuentes',
    items: [
      {
        q: '¿Qué tecnologías y lenguajes de programación utilizan?',
        a: 'Nos especializamos en lenguajes como Python, Javascript, Go y Solidity, y en tecnologías como React, Docker, Node JS y AWS. Si necesitas trabajar con otro lenguaje, también podemos ayudarte.',
      },
      {
        q: '¿Cuál es el presupuesto mínimo y el tamaño de proyecto con el que trabajan?',
        a: 'Nuestro presupuesto mínimo es de $10.000. Aun así, puedes contactarnos y podemos hacer una excepción si lo necesitas.',
      },
      {
        q: '¿Firman un acuerdo de confidencialidad (NDA)?',
        a: 'Sí, por supuesto. Si quieres firmar un NDA, siempre estamos dispuestos a hacerlo.',
      },
    ],
  },
  footer: {
    rights: 'XSingularity',
  },
  langBanner: {
    message: 'Would you prefer to view this site in English?',
    accept: 'View in English',
    dismiss: 'Seguir en español',
  },
  a11y: {
    scrollTop: 'Volver arriba',
    languageSwitcher: 'Cambiar idioma',
  },
};

export const dictionaries: Record<Locale, Dictionary> = { en, es };
