const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const landingDir = path.join(__dirname, 'StitchLanding');

app.use('/landing', express.static(landingDir));

app.get('/', (_req, res) => {
  res.redirect('/landing/login.html');
});

app.get('/app', (_req, res) => {
  res.redirect('/landing/index.html');
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
