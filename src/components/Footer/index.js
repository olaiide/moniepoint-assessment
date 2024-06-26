import "./styles.css";
import qr from "../../assets/Screenshot 2024-05-19 at 14.54.58.png";
import React, { useEffect } from "react";
import AOS from "aos";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // duration of animation in milliseconds
    });
  }, []);
  return (
    <footer className="footer-section">
      <div data-aos="fade-up">
        <ul className="footer-tabs">
          <li>About</li>
          <li>Why Us</li>
          <li>Platform</li>
          <li>Pricing</li>
          <li>Contacts</li>
        </ul>
        <h3 className="footer-mail"> hello@ramos.com</h3>
      </div>
      <hr className="footer-hr" />
      <div className="contact-section" data-aos="fade-up">
        <div>
          <div className="address">
            <span>Warrensville Heights</span>
            <span className="gray">14418 Vineyard Drive, NC</span>
            <span className="gray">44128</span>
          </div>
          <div className="address two">
            <span>Saint Louis</span>
            <span className="gray">1366 Penn Street</span>
            <span className="gray">63101</span>
          </div>
        </div>
        <div className="social-media">
          <span>Linkedin</span>
          <span>Instagram</span>
          <span>Facebook</span>
        </div>
      </div>
      <div className="scan" data-aos="fade-up">
        <h2>
          Ramos<sup>&reg;</sup>
        </h2>
        <span>Policy policy</span>
        <span>License agreement</span>
        <img src={qr} />
      </div>
    </footer>
  );
};

export default Footer;
