import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCertificate, faProjectDiagram, faEnvelope, faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Header = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-content">
        <h1>Agustina Marini Finoquetto</h1>
        <p>Estudiante de Desarrollo Web</p>
      </div>
      <nav>
        {/* Botón de menú hamburguesa */}
        <button onClick={toggleMenu} className="menu-toggle">
          <FontAwesomeIcon icon={faBars} />
        </button>

        {/* Menú de navegación */}
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <a href="#about">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} /> Sobre mí
            </a>
          </li>
          <li>
            <a href="#certifications">
              <FontAwesomeIcon icon={faCertificate} style={{ marginRight: "5px" }} /> Certificaciones
            </a>
          </li>
          <li>
            <a href="#projects">
              <FontAwesomeIcon icon={faProjectDiagram} style={{ marginRight: "5px" }} /> Proyectos
            </a>
          </li>
          <li>
            <a href="#contact">
              <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: "5px" }} /> Contacto
            </a>
          </li>
        </ul>
      </nav>

      {/* Botón para alternar el tema */}
      <button onClick={toggleTheme} className="theme-toggle">
        {currentTheme === "dark" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
    </header>
  );
};

export default Header;
