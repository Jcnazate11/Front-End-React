import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../index.css';

function Footer() {
  return (
    <div>
      <div className="bg-white pt-4 pb-4 relative">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src={'/images/Logo2.png'} alt="logo" className="h-16 w-auto" />
              <span className="custom-gradient-text">Bienvenido a Juliana Pastelería</span>
            </div>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="text-5xl" style={{ color: "#f288c6" }} />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} className="text-5xl" style={{ color: "#ffa1cf" }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="text-5xl" style={{ color: "#ffa1cf" }} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ffa1cf] py-2">
        <div className="text-center text-white">
          &copy; 2024 MyApp, Jeanhela Nazate, Cristhopher Villamarin, Johan Romo.
        </div>
      </div>
    </div>
  );
}

export default Footer;
