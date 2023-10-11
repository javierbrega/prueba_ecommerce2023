// database.js

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('mi_base_de_datos.db', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Conexión a la base de datos exitosa');
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS productos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nombre TEXT,
      precio REAL,
      categoria TEXT,
      stock INTEGER
    )
  `);
});

module.exports = db;
