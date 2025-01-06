import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCertificate, faProjectDiagram, faEnvelope, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

const Header = ({ toggleTheme, currentTheme }) => {
  return (
    <header style={{ backgroundColor: "#0d1117", color: "#c9d1d9", padding: "20px 0" }}>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Agustina Marini Finoquetto</h1>
        <p style={{ fontSize: "1.2rem", color: "#f5a3f5" }}>Estudiante de Desarrollo Web</p>
      </div>
      <nav>
        <ul style={{ display: "flex", justifyContent: "center", gap: "20px", listStyle: "none", padding: 0 }}>
          <li>
            <a href="#about">
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "5px" }} /> Sobre mí
            </a>
          </li>
          <li>
            <a href="#certifications" >
              <FontAwesomeIcon icon={faCertificate} style={{ marginRight: "5px" }} /> Certificaciones
            </a>
          </li>
          <li>
            <a href="#projects" >
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
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          color: "#c9d1d9",
          fontSize: "1.5rem",
          marginTop: "10px",
          display: "block",
          margin: "0 auto",
        }}
      >
        {currentTheme === "dark" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
      </button>
    </header>
  );
};

export default Header;
