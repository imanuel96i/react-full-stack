// Autores: Manuel Vidal, Benjamín Álvarez, Ignacio Korenhof
// Fecha creación: 08/02/23
// Fecha modificación: 14/02/23

// Importacionesimport React from "react";
import "./css/Footer.sass";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import logo from "./assets/img/logo.png";

function Footer() {
  return (
    <footer className="social-footer">
      <div className="social-footer-left">
        <a href="#s">
          <img src={logo} width="120" alt="imagen" className="logo"/>
        </a>
      </div>
      <div className="copy">&copy; Proyecto Metra 2023. Todos los derechos reservados</div>
      <div className="social-footer-icons">
        <ul className="menu-simple">
          <li>
            <a
              href="https://es-la.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook className="Rrss" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className="Rrss" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="Rrss" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <AiFillTwitterSquare className="Rrss" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
