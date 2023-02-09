import React from "react";
import "./css/Footer.sass";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

function Footer() {
  return (
    <footer className="social-footer">
      <div className="social-footer-left">
        <a href="#">Logo</a>
      </div>
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
