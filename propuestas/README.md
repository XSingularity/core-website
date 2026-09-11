# Propuestas interactivas

Un solo archivo, `propuesta.html`, que se abre con doble clic y se manda como archivo o se publica. No usa base de datos ni servidor: todo lo que se ve pasa en el navegador. Esta carpeta no forma parte del sitio; Next.js con `output: export` solo publica `src/app` y `public`, así que nada de aquí sale en línea.

## Cómo está armado el archivo

Tres bloques, en este orden, marcados con comentarios grandes dentro del HTML:

1. **CONFIGURACIÓN** (`const CONFIG`, arriba del todo). Cliente, negocio, locales, tasa, simulaciones encendidas, datos de ejemplo y precios. Es lo único que hace falta tocar para un cliente nuevo.
2. **TEXTOS** (`<!-- TEXTO: ... -->`). Portada, «Hoy y después», «Qué incluye», «Funciones», «En qué orden», pie. Se editan a mano en el HTML.
3. **MOTOR** (`<script>` al final). Arma la sección «Pruébelo aquí mismo» a partir de `CONFIG.simulaciones` y la sección «Cuánto cuesta» a partir de `CONFIG.precios`. No hace falta tocarlo.

## Encender o apagar simulaciones

En `CONFIG.simulaciones` cada línea es una simulación. Con `//` delante está apagada; sin `//`, encendida. El orden de la lista es el orden en la página. Puede haber varias a la vez.

```js
simulaciones: [
  'pieza',        // encendida
  'cobrar',       // encendida
  // 'fiado',     // apagada
],
```

Sin editar el archivo: abra `propuesta.html?sim=cobrar,fiado` para ver esa combinación, o `propuesta.html?sim=todas` para verlas todas. Sirve para revisar rápido y también como enlace si se publica.

### Simulaciones disponibles

| Clave | Módulo de xinventory | Qué muestra |
|---|---|---|
| `pieza` | Inventario, catálogo, Redes, bot | La hoja «Agregar producto o servicio» real. Al cargar, aparece la pieza en el catálogo, el texto de la publicación y la respuesta del bot. El control «Simular: se vendió» la saca de todo. |
| `cobrar` | Vender y Cobrar | Lista de productos con foto, precio en $ y Bs; carrito con IVA incluido; diálogo «Cobrar» con los 11 métodos de pago, monto en $ o Bs, pagos parciales y cambio. |
| `fiado` | Fiado | KPIs «Por cobrar», «Clientes», «Deuda más vieja»; detalle por cliente con «Total de la venta / Pagado en caja / Abonado / Saldo» y el diálogo «Abonar». |
| `sucursales` | Sucursales | Unidades y valor por local, existencia por pieza y el diálogo «Traslado de mercancía» con validación de existencia. |
| `envios` | Envíos | Despachos con courier y guía, estado en la fila (Preparando, Despachado, En tránsito, Entregado, Devuelto, Cancelado), rastro y «Nuevo envío». |
| `citas` | Citas | Agenda del día por profesional, «Nueva cita» con servicios y duración, horas ocupadas, choque de horario y mensaje de WhatsApp de confirmación. |
| `historial` | Historial y cierre de caja | Ventas del día, detalle con la tasa sellada y el diálogo «Cerrar caja» (Cuadra / Sobra / Falta). |
| `finanzas` | Finanzas | Períodos Hoy, 7d, 30d, 90d, 1a, Todo; KPIs y estado de resultados hasta la utilidad neta. |

Todas las pantallas están recreadas a partir del código de xinventory (textos, orden de campos, reglas de dinero). `bot_existe: false` hace que `pieza` marque el bot como «falta por construir»; en `true` lo marca como existente.

## Precios

Todo en `CONFIG.precios`. Los montos son texto: `'$60'`, `'Se cotiza aparte'`, `'desde $799'`. Estructura:

- `intro`: párrafo bajo el título.
- `una_vez` y `mensual`: las dos tarjetas grandes. Campos `titulo`, `monto`, `nota` (texto pequeño al lado del monto), `detalle`, y `pendiente: true` para pintar el monto en ámbar (cuando todavía no hay número).
- `incluye_titulo`, `incluye_intro`, `incluye`: la lista de lo que cubre la mensualidad. Cada elemento admite HTML (`<b>...</b>`).
- `extras`: módulos opcionales. Cada uno tiene `titulo`, `intro`, sus propias tarjetas `una_vez` y `mensual`, y un desglose plegable (`desglose_titulo`, `desglose` con `que`, `detalle` y `supuesto: true` para la etiqueta «supuesto»). Puede haber varios extras o ninguno (`extras: []`).
- `pago`: cómo se paga.

## Datos del cliente

- `cliente`, `titulo`, `fecha`: portada y título de la pestaña.
- `negocio`: nombre que usan la publicación y el bot.
- `locales`: sucursales; el primero es el principal y aparece en el chip de arriba del teléfono.
- `dominio`: dirección del catálogo; la página lo marca como supuesto.
- `tasa`: bolívares por dólar en todas las pantallas.
- `demo`: productos, servicios, clientes, vendedoras, profesionales y ciudades de ejemplo. Cámbielos por algo parecido al negocio del cliente; nunca datos reales de otro cliente.

## Textos

Cada sección tiene un comentario `<!-- TEXTO: ... -->`. Se edita el HTML directamente. Si una sección no aplica, se borra entera (de `<section` a `</section>`) y su enlace en `<nav class="top">`.

## Cliente nuevo

1. Copie `propuesta.html` con otro nombre, por ejemplo `carlos-ferreteria.html`, en esta misma carpeta.
2. Cambie `CONFIG` (cliente, negocio, locales, tasa, simulaciones, demo, precios).
3. Edite los textos marcados.
4. Ábralo en el navegador y pruebe cada simulación.

## Compartir o publicar

- **Como archivo**: mande el `.html` por WhatsApp o correo. Se abre sin internet; solo la tipografía de Google se cae a la del sistema.
- **En Vercel**: cópielo como `index.html` a una carpeta vacía junto con `vercel.json` (está en esta carpeta; pone `noindex` y URLs limpias) y corra `vercel deploy --prod` con la cuenta de XSingularity. El proyecto `propuesta-xsingularity` ya existe y su dominio es `propuesta-xsingularity.vercel.app`.

## Agregar una simulación nueva

En el bloque MOTOR, copie cualquier entrada `SIMS.xxx = { titulo, nota, puntos, render(root) }` y regístrela con una clave nueva. `render` recibe el contenedor y dibuja con `phone(html, pestañaActiva)`; tiene a la mano `toast(xi, mensaje)`, `dialog(xi, html)`, `usd(n)`, `bs(n)`, `money(n)` y los datos de `CONFIG.demo`. Después agregue la clave a `CONFIG.simulaciones` y a la tabla de arriba.
