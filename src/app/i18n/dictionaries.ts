/**
 * All user-facing copy, Spanish only (decision 2026-08-24: the English locale
 * is retired). Components import `dict` directly; a copy change is a data
 * change, not a component change.
 *
 * Voice: plain Venezuelan Spanish, tú, "tu negocio", outcomes before
 * technology, every number with a source and a country. See PRODUCT.md.
 */

export type Stat = {
  value: string;
  label: string;
  /** What this number does to a business and to a Venezuelan's day. */
  impact?: string;
  /** Source shown under the number — name, place, date. Never omit. */
  source: string;
  url: string;
};

export const dict = {
  nav: {
    items: [
      { id: 'Sintomas', label: 'Síntomas' },
      { id: 'Calculadora', label: 'Cuánto pierdes' },
      { id: 'Como', label: 'Cómo trabajamos' },
      { id: 'Precios', label: 'Cómo cobramos' },
      { id: 'Portafolio', label: 'Portafolio' },
      { id: 'Contacto', label: 'Contacto' },
    ],
    diagnostic: 'Diagnóstico gratis',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    home: 'Inicio de XSingularity',
  },

  hero: {
    title: 'Que tu negocio no se detenga.',
    lead:
      'Somos una consultora venezolana con visión de software: revisamos cómo funciona tu negocio, encontramos dónde se te está yendo el dinero y construimos el sistema que lo recupera. Con electricidad o sin electricidad, con internet o sin él, no se te pierde ni una venta; cada cobro queda cuadrado en bolívares o dólares, sea en efectivo, Pago Móvil, Zelle o USDT; y cada noche sabes exactamente cuánto vendiste.',
    /** Phone-only lead: one sentence, so the amber key stays on the first screen (2026-09-03). */
    leadMobile: 'Cada noche sabes exactamente cuánto vendiste, pase lo que pase durante el día.',
    /**
     * The hero's moment (chosen 2026-09-03): the day's total keeps counting
     * through the blackout. Seven events on desktop; the phone shows the
     * ones in `caja.phone`. Times and amounts are sample data.
     */
    caja: {
      title: 'Las ventas del día siguen sumando aunque se vaya la electricidad, y cada problema del día queda resuelto',
      label: 'Ventas de hoy',
      sample: 'ejemplo',
      source: 'Cifras de ejemplo. Así se ve xinventory, el punto de venta que construimos.',
      events: [
        { time: '8:00 a. m.', text: 'Abres la caja.' },
        { time: '10:14 a. m.', text: 'Se fue la electricidad. La caja sigue.' },
        { time: '11:02 a. m.', text: 'Volvió la electricidad. 2 ventas sincronizadas.' },
        { time: '12:40 p. m.', text: 'Cambió la tasa. Precios al día.' },
        { time: '3:05 p. m.', text: '12 pedidos por WhatsApp. Anotados.' },
        { time: '5:20 p. m.', text: 'Se acabó la harina. Pedido al proveedor.' },
        { time: '8:00 p. m.', text: 'Cierre: Pago Móvil, Zelle y efectivo cuadrados.' },
      ],
      /** Indexes into `events` that the phone's single tape line shows. */
      phone: [0, 1, 2, 3, 6],
    },
    pointLabel: 'Todo lo que necesitas, en un solo punto.',
    doors: [
      {
        id: 'negocio',
        title: '¿Ya tienes un negocio?',
        text: 'Te decimos en 2 minutos qué te está costando dinero y qué arreglar primero.',
        cta: 'Empezar el diagnóstico',
        href: '#Diagnostico',
      },
      {
        id: 'idea',
        title: '¿Tienes una idea?',
        text: 'La hacemos realidad: precio fijo, fecha fija y el código es tuyo desde el primer día.',
        cta: 'Cuéntanos tu idea',
        href: '#Contacto',
      },
    ],
    ctaPrimary: 'Diagnóstico gratis · 2 min',
    ctaSecondary: 'Ver lo que construimos',
  },

  termometro: {
    title: 'Trabajar en Venezuela tiene reglas que un sistema de afuera no conoce.',
    lead: 'Un sistema hecho para otro país da por sentado que hay electricidad, internet y una sola moneda. Aquí no. Estos son los números, medidos por los gremios y el Banco Central, no por nosotros.',
    swipe: 'Desliza para ver los seis',
    stats: [
      {
        value: '44%',
        label: 'de las horas de trabajo sin electricidad en la industria venezolana',
        impact: 'Media jornada sin caja ni computadora. Si tu sistema depende del enchufe, con cada apagón las ventas quedan en un cuaderno o se pierden.',
        source: 'Conindustria, 2.º trimestre 2026',
        url: 'https://www.infobae.com/venezuela/2026/08/19/el-sector-manufacturero-de-venezuela-se-desacelera-y-pierde-casi-la-mitad-de-sus-horas-laborales-por-falta-de-electricidad/',
      },
      {
        value: '57',
        label: 'cortes de electricidad por trimestre en cada empresa: casi cinco por semana',
        impact: 'Cinco veces por semana se apaga la computadora y la cola espera. Un sistema que registra en el teléfono no espera a que vuelva la electricidad.',
        source: 'Conindustria, 2.º trimestre 2026',
        url: 'https://www.larepublica.co/globoeconomia/los-devastadores-apagones-ponen-en-riesgo-a-la-recuperacion-industrial-de-venezuela-4461201',
      },
      {
        value: '70%',
        label: 'de los venezolanos compran en negocios sin planta eléctrica',
        impact: 'La bodega, la farmacia y la ferretería venden a oscuras. La venta solo se pierde si no puedes cobrarla y anotarla.',
        source: 'Consecomercio, agosto 2026',
        url: 'https://www.consecomercio.org/blog/noticias-consecomercio-1/consecomercio-propone-un-conjunto-de-medidas-que-evitan-el-cierre-de-negocios-y-protegen-el-empleo-ante-los-cortes-electricos-380',
      },
      {
        value: '73%',
        label: 'tuvo fallas de internet o de teléfono en el último mes',
        impact: 'Quedarse sin internet pasa todos los meses. Si tu caja vive en la nube, ese día no trabajas; si vive en tu teléfono y sincroniza después, ni lo notas.',
        source: 'Cedice Libertad, enero 2025',
        url: 'https://www.bancaynegocios.com/cedice-72-de-los-usuarios-de-internet-ha-migrado-a-planes-de-operadores-privados',
      },
      {
        value: 'Pago Móvil',
        label: 'ya superó al punto de venta como forma de cobrar',
        impact: 'Tus clientes ya pagan desde el teléfono. Cuadrar cada Pago Móvil a mano al cierre cuesta horas y deja pasar errores.',
        source: 'Banco Central de Venezuela, julio 2025',
        url: 'https://www.bancaynegocios.com/uso-del-pago-movil-supero-a-los-puntos-de-venta-y-se-convirtio-en-el-canal-mas-usado-del-pais/',
      },
      {
        value: '125%',
        label: 'creció el comercio electrónico en Venezuela en 2025',
        impact: 'Cada vez más gente compra sin pisar el local. Un catálogo por WhatsApp o una tienda sencilla te abre esa venta.',
        source: 'Cavecom-e, enero 2026',
        url: 'https://www.eluniversal.com/economia/229656/el-comercio-electronico-en-venezuela-se-dispara-un-125-y-apunta-a-la-formalizacion-masiva',
      },
    ] as Stat[],
  },

  sintomas: {
    title: '¿Tu negocio te está mandando señales?',
    lead: 'Ocho cosas que pasan todos los días en negocios que todavía no tienen sistema. Marca las tuyas.',
    items: [
      'Cuando se va la electricidad, dejas de vender o anotas en papel.',
      'Tus precios en bolívares se actualizan a mano cada vez que cambia la tasa.',
      'No sabes exactamente cuánto ganaste el mes pasado.',
      'Te enteras de que un producto se agotó cuando un cliente lo pide.',
      'Respondes los WhatsApp de tus clientes a las 11 de la noche… o no los respondes.',
      'Cuadras Pago Móvil, Zelle, USDT y efectivo en un cuaderno.',
      'Tu inventario vive en un Excel que solo una persona entiende.',
      'Te piden vender por internet y no tienes tienda ni sistema para hacerlo.',
    ],
    countLabel: (n: number) =>
      n === 0 ? 'Ninguna marcada todavía' : n === 1 ? '1 señal marcada' : `${n} señales marcadas`,
    verdictLow: 'Con 3 o más, ya te está costando dinero. Sigue marcando o mira la calculadora.',
    verdictHigh: 'Ya te está costando dinero. Escríbenos y en 20 minutos te decimos cuánto y qué arreglar primero.',
    cta: 'Enviar mis señales por WhatsApp',
    ctaNoWa: 'Enviar mis señales',
    ctaAlt: 'Prefiero el diagnóstico de 2 minutos',
    whatsappIntro: 'Hola, vengo de xsingularity.dev. Estas señales me suenan:',
  },

  calculadora: {
    title: 'Pon tus números. Te decimos cuánto se te va cada mes.',
    lead: 'Una estimación con tus datos, no una promesa. Puedes cambiar cada supuesto.',
    fields: {
      hoursNoPower: { label: 'Horas sin electricidad a la semana', hint: 'Promedio nacional en la industria: 16 h (Conindustria, 2.º trim. 2026)' },
      salesPerHour: { label: 'Cuánto vendes por hora, en $', hint: 'Un promedio; no hace falta que sea exacto' },
      unanswered: { label: 'Mensajes de clientes que se quedan sin responder al día', hint: 'WhatsApp, Instagram, Messenger' },
      ticket: { label: 'Venta promedio, en $', hint: 'Lo que te deja un cliente típico' },
    },
    resultLabel: 'Estimación de lo que pierdes al mes',
    breakdownPower: 'por vender en papel o dejar de vender cuando se va la electricidad',
    breakdownWhatsapp: 'por mensajes que no se convierten en ventas',
    assumptionPower: 'Supuesto: sin sistema, las ventas de esas horas se pierden o se anotan mal. Un sistema que funciona sin conexión las registra igual.',
    assumptionWhatsapp: 'Supuesto: 1 de cada 5 mensajes sin responder era una venta. Responder en 5 minutos en vez de 30 multiplica por 21 la probabilidad de cerrarla (Lead Response Management Study).',
    compare: 'Casi siempre, lo que pierdes en un mes cuesta más que el sistema que lo evita.',
    cta: 'Quiero recuperar ese dinero',
    ctaShort: 'Recuperarlo',
    barLabel: 'Pierdes al mes',
    assumptionsLabel: 'Supuestos y fuentes',
    whatsappIntro: 'Hola, vengo de xsingularity.dev. Según la calculadora pierdo aproximadamente',
    sourcesLabel: 'Fuentes',
    sources: [
      { label: 'Conindustria, 2.º trimestre 2026 — 214 de 488 horas sin electricidad', url: 'https://www.infobae.com/venezuela/2026/08/19/el-sector-manufacturero-de-venezuela-se-desacelera-y-pierde-casi-la-mitad-de-sus-horas-laborales-por-falta-de-electricidad/' },
      { label: 'Lead Response Management Study — 5 min vs 30 min', url: 'https://www.leadresponsemanagement.org/lrm_study' },
    ],
  },

  demo: {
    title: 'Se fue la electricidad. Se cayó el internet. No se te pierde ni una venta.',
    lead: 'Esta es una muestra de xinventory, nuestro punto de venta, con datos de ejemplo. Apaga la electricidad y sigue cobrando: cada venta se guarda en el teléfono y se sincroniza sola cuando vuelve la conexión.',
    sampleNote: 'Productos y tasa de ejemplo. El sistema real usa tu inventario y la tasa que elijas.',
    powerOn: 'Hay electricidad e internet',
    powerOff: 'Se fue la electricidad',
    sell: 'Cobrar',
    products: [
      { name: 'Harina de maíz 1 kg', usd: 1.2 },
      { name: 'Cemento 42,5 kg', usd: 8.5 },
      { name: 'Acetaminofén 10 tab.', usd: 1.9 },
      { name: 'Aceite 1 L', usd: 2.4 },
    ],
    rateLabel: 'Tasa de ejemplo',
    statusOnline: 'Conectado · todo sincronizado',
    statusOffline: (n: number) => `Sin conexión · ${n} ${n === 1 ? 'venta guardada' : 'ventas guardadas'} en el teléfono`,
    syncing: (n: number) => `Volvió la electricidad · sincronizando ${n} ${n === 1 ? 'venta' : 'ventas'}…`,
    synced: 'Todo sincronizado. No se perdió nada.',
    todayLabel: 'Vendido hoy',
  },

  como: {
    title: 'Primero revisamos. Después construimos. Y nos quedamos.',
    lead: 'No vendemos programas: hacemos que tu negocio funcione mejor. Por eso el primer paso es gratis y el último no termina.',
    steps: [
      {
        title: 'Revisamos',
        text: 'Cómo vendes, cómo cobras, cómo llevas el inventario y dónde se pierde el dinero. En 2 minutos en la web o en una llamada de 30 minutos.',
      },
      {
        title: 'Te decimos qué arreglar primero',
        text: 'Por escrito, en 2 días hábiles: las 3 cosas que más dinero te hacen perder y cuánto costaría resolverlas. Sin compromiso.',
      },
      {
        title: 'Lo construimos',
        text: 'Precio fijo, fecha fija. Ves el avance en vivo desde el primer día y el código es tuyo mientras lo hacemos.',
      },
      {
        title: 'Nos quedamos',
        text: 'Cargamos tus datos, entrenamos a tu gente y seguimos atentos: soporte incluido y, si quieres, un aliado mensual.',
      },
    ],
  },

  diagnostico: {
    title: 'Dos minutos ahora. Una respuesta escrita en dos días hábiles.',
    lead: 'Cuatro preguntas y tu nombre, por WhatsApp. Te contestamos por escrito con las tres cosas que más te están costando y qué haríamos primero. Gratis y honesto: incluso si la respuesta es que todavía no nos necesitas.',
    leadNoWa: 'Cuatro preguntas y tu nombre. Te contestamos por escrito con las tres cosas que más te están costando y qué haríamos primero. Gratis y honesto: incluso si la respuesta es que todavía no nos necesitas.',
    q1: { label: '¿Qué tipo de negocio tienes?', options: ['Abasto / bodegón / supermercado', 'Ferretería / repuestos', 'Farmacia', 'Restaurante / comida', 'Distribuidora / mayorista', 'Servicios (taller, clínica, salón…)', 'Tienda en línea / redes', 'Tengo una idea nueva'] },
    q2: { label: '¿Qué te duele más?', options: ['Se va la electricidad y dejo de vender', 'La tasa y los precios en Bs', 'No sé cuánto gano', 'El inventario', 'Responder a los clientes', 'Cuadrar los pagos', 'Quiero vender por internet'] },
    q3: { label: '¿Cómo cobras hoy?', options: ['Efectivo $', 'Efectivo Bs', 'Pago Móvil', 'Punto de venta', 'Zelle', 'USDT / Binance'] },
    q4: { label: '¿Tienes sistema o página hoy?', options: ['Nada, todo en papel o WhatsApp', 'Excel', 'Un sistema que no me sirve', 'Una página que nadie visita'] },
    more: 'Dos preguntas más, si quieres',
    name: 'Tu nombre',
    namePlaceholder: 'Josefina',
    business: 'Nombre del negocio',
    businessPlaceholder: 'Ferretería La Esperanza',
    submit: 'Enviar por WhatsApp',
    submitNoWa: 'Enviar mis respuestas',
    submitAlt: 'O usa el formulario',
    whatsappIntro: 'Hola, vengo de xsingularity.dev y quiero el diagnóstico gratis.',
    promise: 'Respuesta por escrito en 2 días hábiles. Sin llamadas de venta.',
  },

  precios: {
    title: 'Cómo se define lo que pagas.',
    lead: 'Precio fijo y por escrito antes de que gastes un bolívar. No publicamos tarifas de estante: dos negocios del mismo tamaño casi nunca necesitan lo mismo.',
    factorsTitle: 'Tres cosas mueven el precio',
    factors: [
      { title: 'Cuánto de tu negocio entra', text: 'Arreglar un solo proceso —cobrar, pedidos, citas— no cuesta lo mismo que conectar el negocio completo.' },
      { title: 'Cuántos datos hay que mudar', text: 'Pasar un cuaderno no es lo mismo que pasar años de Excel con clientes, deudas y existencias.' },
      { title: 'Con qué tiene que hablar', text: 'WhatsApp, redes, pagos, facturación o el sistema que ya usas: cada conexión suma trabajo.' },
    ],
    waysTitle: 'Dos formas de trabajar',
    ways: [
      {
        id: 'listo',
        name: 'Lo que ya está construido',
        text: 'Sistemas que hoy están andando en negocios venezolanos: inventario, caja, catálogo, citas. Se configuran con tu nombre y tus datos y empiezas la misma semana.',
        features: [
          'Una puesta en marcha: migramos tus datos y entrenamos a tu gente',
          'Una cuota mensual que cubre servidores, respaldos, actualizaciones y soporte',
          'Módulos que enciendes el día que los necesitas, no antes',
        ],
        cta: 'Ver si me sirve',
        wa: 'Hola, vengo de xsingularity.dev. Quiero saber si uno de los sistemas que ya tienen me sirve.',
        highlight: true,
      },
      {
        id: 'medida',
        name: 'Lo que hay que construir',
        text: 'Cuando lo que tu negocio necesita todavía no existe. Precio fijo y fecha fija acordados antes de escribir la primera línea de código.',
        features: [
          'Primero el diagnóstico: qué arreglar, en qué orden y qué cuesta cada parte',
          'Pagas por hitos, nunca todo por adelantado',
          'El código es tuyo desde el primer día',
        ],
        cta: 'Cuéntanos tu caso',
        wa: 'Hola, vengo de xsingularity.dev. Quiero contarles lo que mi negocio necesita.',
      },
    ],
    promise: 'Tu número llega por escrito, en 2 días hábiles, después de un diagnóstico gratis. Es fijo, no cambia según la cara del cliente, y no pagas nada hasta que lo apruebas.',
    cta: 'Quiero mi diagnóstico gratis',
    note: 'Pagas por partes, nunca todo por adelantado. Zelle, PayPal, Payoneer, USDT, transferencia o bolívares.',
    faq: [
      {
        q: '¿Por qué no publican precios?',
        a: 'Porque un precio de estante tendría que traer margen de sobra por si acaso, y terminarías pagando el problema de otro negocio. Preferimos ver el tuyo primero: el diagnóstico es gratis, el precio te llega por escrito en 2 días hábiles y no se mueve después.',
      },
      {
        q: '¿Cuestan menos que otras empresas?',
        a: 'Sí, y no es magia: somos un equipo pequeño y senior que construye con herramientas de inteligencia artificial, sin oficinas ni gerentes de cuenta. Ese ahorro es tuyo. Lo que no recortamos: ingenieros con experiencia en cada proyecto, pruebas antes de entregar y soporte después.',
      },
      {
        q: '¿Y si no me alcanza?',
        a: 'Casi siempre lo que pierdes en un mes haciéndolo a mano pesa más que arreglarlo, y eso lo vemos en el diagnóstico con tus números. Si en tu caso no se paga solo, te lo decimos: no vendemos sistemas que no se devuelven.',
      },
      {
        q: '¿Cómo pago?',
        a: 'Como te resulte más fácil: Zelle, PayPal, Payoneer, USDT, transferencia bancaria o bolívares. Dividimos el pago por hitos: la mitad al empezar y la mitad al entregar en proyectos pequeños; en tercios en los grandes. Nunca todo por adelantado.',
      },
      {
        q: '¿Y si mi negocio es muy pequeño?',
        a: 'Empieza por el diagnóstico gratis. Si la respuesta honesta es que todavía no necesitas un sistema, te lo decimos y te sugerimos qué hacer mientras tanto.',
      },
      {
        q: '¿Firman un acuerdo de confidencialidad?',
        a: 'Sí, siempre que lo pidas. Lo que vemos de tu negocio se queda entre nosotros.',
      },
    ],
  },

  longevidad: {
    title: 'Los negocios no mueren de viejos. Mueren de no saber.',
    lead: 'En la región, la mayoría de los negocios no llega a los cinco años. Los que sobreviven tienen algo en común: saben cuánto venden, cuánto tienen y cuánto ganan, todos los días.',
    stats: [
      {
        value: '33%',
        label: 'de los negocios en Colombia siguen abiertos a los 5 años',
        source: 'Confecámaras, 2023',
        url: 'https://confecamaras.org.co/segun-estudio-de-confecamaras-el-33-5-de-las-empresas-del-pais-sobreviven-al-termino-de-5-anos/',
      },
      {
        value: '7,7 años',
        label: 'vive en promedio un negocio en México. Uno de 2 personas dura unos 7 años; uno de 11 a 15 personas, casi 21',
        source: 'INEGI, esperanza de vida de los negocios',
        url: 'https://iplaneg.guanajuato.gob.mx/seieg/wp-content/uploads/2022/07/Presentacion_Esperanza_de_vida_de_los_negocios_en_Mexico_1424446285.pdf',
      },
      {
        value: '70%',
        label: 'de las empresas que cierran se quedaron sin dinero antes de darse cuenta',
        source: 'CB Insights, 2026',
        url: 'https://www.cbinsights.com/research/report/startup-failure-reasons-top/',
      },
    ] as Stat[],
    note: 'No existe una cifra oficial para Venezuela; usamos datos de la región y lo decimos.',
    cta: 'Quiero que el mío dure',
  },

  transparencia: {
    title: 'Ves cómo lo construimos, desde el primer día.',
    lead: 'Casi todas las empresas te enseñan el resultado al final. Tú recibes un acceso el primer día, y el código con él.',
    points: [
      { title: 'Tu propio panel del proyecto', text: 'Avance en vivo, fecha estimada de entrega calculada con nuestro ritmo real, quién hace qué y cuánto debería tomar. No hace falta una reunión para enterarte.' },
      { title: 'Un espacio para preguntar en cada tarea', text: 'Preguntas sobre cualquier tarea y le llega a quien la está haciendo. La respuesta vuelve al mismo sitio, sin perderse en un chat.' },
      { title: 'El código es tuyo mientras lo hacemos', text: 'Te damos acceso al repositorio en GitHub o GitLab: cada cambio, cada tarea, todo el código, en tiempo real. No solo al entregar.' },
    ],
    cta: 'Empieza tu proyecto y recibe tu acceso',
  },

  portafolio: {
    title: 'Sistemas que ya funcionan en negocios venezolanos.',
    lead: 'Un cliente y cinco productos propios, construidos y mantenidos por nosotros.',
    visit: 'Abrir demo',
    prev: 'Proyecto anterior',
    next: 'Proyecto siguiente',
    region: 'Proyectos del portafolio',
    goTo: 'Ir al proyecto',
    demoBadge: 'Demo en vivo',
    caseStudyBadge: 'Cliente',
    openSourceBadge: 'Producto propio',
  },

  equipo: {
    title: 'Hablas directo con quien lo construye.',
    lead: 'Cinco personas, en Venezuela, con nombre y cara. Sin gerentes de cuenta ni intermediarios.',
    onLinkedin: 'en LinkedIn',
    roles: {
      CEO: 'Director general',
      COO: 'Director de operaciones',
      'Creative Director': 'Director creativo',
      'IT Support': 'Soporte técnico',
      CFO: 'Director financiero',
    } as Record<string, string>,
  },

  contacto: {
    title: 'Cuéntanos qué te está costando dinero.',
    lead: 'O cuéntanos tu idea. Te respondemos en un día hábil con una opinión honesta, incluso si la respuesta es que todavía no nos necesitas.',
    name: 'Nombre',
    email: 'Correo',
    message: 'Mensaje',
    namePlaceholder: 'Josefina González',
    emailPlaceholder: 'josefina@minegocio.com',
    messagePlaceholder: '¿Qué te está costando dinero? ¿Qué quieres construir?',
    submit: 'Enviar mensaje',
    sending: 'Enviando tu mensaje…',
    errorGeneric: 'No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp; por ahí respondemos más rápido.',
    errorRateLimit: 'Se han enviado demasiados mensajes desde aquí. Inténtalo en unos minutos o escríbenos por WhatsApp.',
    errorCaptcha: 'Completa la verificación e inténtalo de nuevo.',
    errorUnconfigured: 'El formulario no está disponible en este momento. Escríbenos por WhatsApp.',
    successTitle: 'Gracias por tu mensaje.',
    successBody: 'Te respondemos en un día hábil, normalmente mucho antes. ¿Necesitas respuesta ya? Escríbenos por WhatsApp.',
    close: 'Cerrar',
    whatsappTitle: '¿Prefieres escribirnos directo?',
    whatsappBody: 'Por WhatsApp es donde más rápido respondemos. Sin formulario y sin esperar un correo.',
    whatsappCta: 'Escríbenos por WhatsApp',
    or: 'o',
    bookCall: 'Agenda una llamada de 30 min',
  },

  a11y: {
    scrollTop: 'Volver arriba',
    whatsapp: 'Escríbenos por WhatsApp',
    externalSource: 'Abrir fuente en una pestaña nueva',
  },
} as const;

export type Dictionary = typeof dict;
