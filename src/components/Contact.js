import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-info">
        <h2>Contacto</h2>
        <p>
          <span>Email:</span> agustina_1312@hotmail.com
        </p>
        <p>
          <span>Teléfono:</span> +54 223 4462089
        </p>
        <p>
          <span>País:</span> Argentina
        </p>
        <p>
          <span>Ciudad:</span> Mar del Plata
        </p>
      </div>
      <div className="form-container" data-aos="fade-up">
      <h2>Envíame un mensaje</h2>
        <form>
          <div className="input-group">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" required />
          </div>
          <div className="input-group">
            <label htmlFor="correo">Correo</label>
            <input type="email" id="correo" name="correo" placeholder="Tu correo electrónico" required />
          </div>
          <div className="input-group">
            <label htmlFor="mensaje">Mensaje</label>
            <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí" required></textarea>
          </div>
          <button type="submit" className="send-button">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
