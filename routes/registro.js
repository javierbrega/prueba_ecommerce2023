const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose(); // Importa la librería SQLite

const db = new sqlite3.Database('./data/eCommerce.db'); // Conexión a la base de datos

router.get('/', (req, res) => {
  res.render('registro'); // Renderiza la vista de registro
});

router.post('/registrar', (req, res) => {
  const { username, password } = req.body;

  // Valida que se hayan proporcionado tanto un nombre de usuario como una contraseña.
  if (!username || !password) {
    return res.render('registro', { error: 'Se requiere nombre de usuario y contraseña' });
  }

  // Comprueba si el nombre de usuario ya está en uso en la base de datos.
  const query = 'SELECT * FROM usuarios WHERE username = ?';

  db.get(query, [username], (err, row) => {
    if (err) {
      return res.render('registro', { error: 'Error al registrar el usuario' });
    }

    if (row) {
      return res.render('registro', { error: 'El nombre de usuario ya está en uso' });
    }

    // Si el nombre de usuario no está en uso, crea un nuevo usuario en la base de datos.
    const insertQuery = 'INSERT INTO usuarios (username, password) VALUES (?, ?)';

    db.run(insertQuery, [username, password], (err) => {
      if (err) {
        return res.render('registro', { error: 'Error al registrar el usuario' });
      }

      // Redirige a la página de inicio o a donde desees después del registro exitoso.
      res.redirect('/');
    });
  });
});

module.exports = router;
