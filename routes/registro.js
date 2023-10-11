const express = require('express');
const router = express.Router();

// Ruta para mostrar el formulario de registro
router.get('/', (req, res) => {
  res.render('registro'); 
});

// Ruta para procesar los datos del formulario de registro
router.post('/registrar', (req, res) => {
  // Aquí puedes agregar la lógica para registrar a los usuarios en tu base de datos.
  // Esto puede incluir validación de datos, creación de usuarios en la base de datos, etc.

  // Redirige a la página de inicio o a donde desees después del registro.
  res.redirect('/');
});

module.exports = router;
