# MCP Practice - Obsidian Prestige (Stitch)

## Resumen
Este proyecto integra pantallas generadas en Stitch en una app web con **Node.js + Express**.

Se trabajó con:
- **OpenCode Desktop**
- **Modelo:** `gpt-5.3-codex`

## Desarrollo de formularios

### 1) Login mock (`StitchLanding/login.html`)
- Se implementó un formulario de inicio de sesión de prueba.
- Validación: usuario y contraseña no vacíos.
- Al enviar:
  - Guarda `mock_auth=true` en `localStorage`.
  - Guarda el usuario en `localStorage` como `mock_user`.
  - Redirige a `/landing/index.html`.

### 2) Integración del usuario en el perfil
- En las pantallas Stitch con encabezado de perfil, el nombre estático fue reemplazado dinámicamente por el usuario guardado en `mock_user`.
- Si no existe usuario, se muestra `Jugador VIP`.

### 3) Protección de acceso mock
- Las pantallas de contenido verifican `mock_auth`.
- Si no hay sesión mock activa, redirigen a `/landing/login.html`.

## Mejoras visuales
- Scrollbar personalizada estilo casino (paleta dorado/obsidiana) en todas las pantallas.
- Login mejorado con imagen de fondo tomada del estilo visual de Stitch y overlay oscuro.

## Guía para ingresar a las páginas con contenido

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar servidor:
   ```bash
   npm start
   ```

3. Abrir en navegador:
   - **Inicio (login):** `http://localhost:3000/`
   - **Home Stitch:** `http://localhost:3000/landing/index.html`
   - **Lobby Principal:** `http://localhost:3000/landing/lobby-principal.html`
   - **Casino en Vivo:** `http://localhost:3000/landing/casino-en-vivo.html`
   - **Billetera / Cajero:** `http://localhost:3000/landing/billetera-cajero.html`
   - **Ruleta Live (Juego de Mesa):** `http://localhost:3000/landing/ruleta-live.html`

4. Rutas no contempladas por Stitch:
   - Se redirigen a la página genérica de construcción:
   `http://localhost:3000/landing/en-construccion.html`
