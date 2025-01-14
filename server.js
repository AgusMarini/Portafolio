const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
  service: "hotmail", // Cambia según el proveedor de correo (Outlook, Yahoo, etc.)
  auth: {
    user: process.env.EMAIL_USER, // Lee el correo desde las variables de entorno
    pass: process.env.EMAIL_PASS, // Reemplaza con tu contraseña (o app password si usas Gmail)
  },
});

// Ruta para enviar correos
app.post("/send-email", async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  const mailOptions = {
    from: correo, // El correo del remitente (persona que envía)
    to: "agustina_1312@hotmail.com", // Tu correo donde recibirás los mensajes
    subject: `Mensaje de ${nombre}`, // Asunto del correo
    text: `Correo: ${correo}\n\nMensaje:\n${mensaje}`, // Contenido
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error enviando el correo:", error);
    res.status(500).json({ success: false, message: "Error enviando el correo" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
