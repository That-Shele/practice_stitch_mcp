# MCP Practice - Obsidian Prestige (Stitch)
## Nuestro proyecto

**Obsidian Casino** es una experiencia de casino online con una interfaz oscura y acentos dorados. La pantalla **Casino en Vivo** presenta mesas de ruleta, blackjack, baccarat y juegos de espectáculo, con filtros por categoría, salas VIP e indicadores de actividad en directo.

## Resumen
Este proyecto integra pantallas generadas en Stitch en una app web **estática** (HTML/CSS/JS puro, sin build).

Se trabajó con:
- **OpenCode Desktop**
- **Modelo:** `gpt-5.3-codex`

## Desarrollo de formularios

### 1) Login mock (`views/login.html`)
- Se implementó un formulario de inicio de sesión de prueba.
- Validación: usuario y contraseña no vacíos.
- Al enviar:
  - Guarda `mock_auth=true` en `localStorage`.
  - Guarda el usuario en `localStorage` como `mock_user`.
  - Redirige a `views/lobby-principal.html`.

### 2) Integración del usuario en el perfil
- En las pantallas Stitch con encabezado de perfil, el nombre estático fue reemplazado dinámicamente por el usuario guardado en `mock_user`.
- Si no existe usuario, se muestra `Jugador VIP`.

### 3) Protección de acceso mock
- Las pantallas de contenido verifican `mock_auth`.
- Si no hay sesión mock activa, redirigen a `views/login.html`.

## Mejoras visuales
- Scrollbar personalizada estilo casino (paleta dorado/obsidiana) en todas las pantallas.
- Login mejorado con imagen de fondo tomada del estilo visual de Stitch y overlay oscuro.

## Guía para ingresar a las páginas con contenido

1. Abrir `index.html` con doble clic (modo `file://`) **o** levantar servidor local:
   ```bash
   npm start
   ```
   También puedes usar servidor estático opcional:
   ```bash
   npx serve .
   ```

2. En la portada (`index.html`), clic en **"Login mock"**.

3. En el login (pantalla inicial):
   - Escribir cualquier usuario y contraseña.
   - Clic en **"Ingresar al Casino"**.

4. Ya dentro (vista principal), usar el **menú lateral izquierdo**:
   - Clic en **"Lobby Principal"** → abre `lobby-principal.html`.
   - Clic en **"Casino en Vivo"** → abre `casino-en-vivo.html`.
   - Clic en **"Mi Billetera / Cajero"** → abre `billetera-cajero.html`.
   - Clic en **"Juegos de Mesa"** → abre `ruleta-live.html`.

5. Desde **Casino en Vivo** también puedes entrar a una mesa con los botones:
   - **"Entrar a la Mesa"** / **"Apostar en Vivo"** / **"Tomar Asiento"** (según tarjeta).
   - Estas acciones llevan a flujo de juego o, si no existe pantalla específica, a la vista de construcción.

6. Para salir de la sesión mock:
   - En el menú lateral, sección **Cuenta & Servicios**, clic en **"Cerrar sesión"**.

### Atajos directos por archivo
- Portada: `index.html`
- Login: `views/login.html`
- Lobby Principal: `views/lobby-principal.html`
- Casino en Vivo: `views/casino-en-vivo.html`
- Billetera / Cajero: `views/billetera-cajero.html`
- Ruleta Live: `views/ruleta-live.html`

## Rutas no contempladas por Stitch
- Se redirigen a la página genérica de construcción:
  `views/en-construccion.html`


## Enlace a Stitch
`https://stitch.withgoogle.com/projects/16024140600771838651`

## Participantes

- Maynor Bolaños: Operador de Agente y QA bolanosmaynor@outlook.com
- Geovany Calles: Diseñador Stitch geo.calles@gmail.com
