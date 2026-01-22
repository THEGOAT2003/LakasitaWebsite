import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerBlock">
        <h3 className="footerText">951 10 64 60</h3>
        <h3 className="footerText">lakasitatapas@gmail.com</h3>
      </div>

      {/* ✅ CENTER BLOCK */}
      <div className="footerBlock footerBlockCenter">
        <h3 className="footerText">
          Av. Marqués del Duero, 71 29670 San Pedro Alcántara, Málaga
        </h3>
        <h3 className="footerText">29670 San Pedro Alcántara, Málaga</h3>
        <Link className="footerPolicyLink" to="/privacy-policy">
          Política de Privacidad
        </Link>
      </div>

      <div className="footerSocial">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/lakasita_tapas/?hl=es"
          aria-label="La Kasita Instagram"
          className="footerIconLink"
        >
          <FaInstagram size={24} />
        </a>

        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/profile.php?id=61585457215055"
          aria-label="La Kasita Facebook"
          className="footerIconLink"
        >
          <FaFacebookF size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;