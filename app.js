// Importa los módulos necesarios
const express = require('express');
const app = express();
const path = require('path');
const indexRouter = require('./routes/index');
const sqlite3 = require('sqlite3').verbose(); // Importa la librería SQLite

// Conecta a la base de datos SQLite
const db = new sqlite3.Database('./data/eCommerce.db', (err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err.message);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Configuración de vistas y motor de plantillas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Rutas estáticas
app.use(express.static(path.join(__dirname, 'public')));

// Rutas de la aplicación
app.use('/', indexRouter);

// Puerto de escucha
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
