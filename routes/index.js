const express = require("express");
const router = express.Router(); // Debes crear un router de Express

// Ruta para la página de inicio
router.get("/", (req, res) => {
  res.render("index"); // Esto asume que tienes una vista llamada 'index.ejs'
});

// Ruta para el dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard"); // Esto asume que tienes una vista llamada 'dashboard.ejs'
});

module.exports = router;

// En el archivo 'routes/index.js'

const bcrypt = require("bcrypt");

// Usuarios de ejemplo (simulación)
const users = [
  {
    id: 1,
    username: "usuario1",
    password: "$2b$10$UDgB.Qycys9G6o5Q.F44nOQFCQ0L.UDj3HTC1Nh.VSNj56ezTsH5O",
  }, // Contraseña: password1
  // Puedes agregar más usuarios aquí
];

// Ruta para el formulario de inicio de sesión (POST)
router.post("/login", (req, res) => {
  // Obtener el nombre de usuario y la contraseña desde la solicitud
  const { username, password } = req.body;

  // Buscar al usuario por nombre de usuario en la lista de usuarios
  const user = users.find((u) => u.username === username);

  if (user && bcrypt.compareSync(password, user.password)) {
    // Si el usuario existe y la contraseña coincide, redirige al dashboard
    res.redirect("/dashboard");
  } else {
    // Si las credenciales son incorrectas, muestra un mensaje de error en la vista 'index.ejs'
    res.render("index", { error: "Credenciales incorrectas" });
  }
});
