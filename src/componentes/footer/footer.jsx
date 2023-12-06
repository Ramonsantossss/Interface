import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi'; // Importe os ícones desejados do react-icons
import './footer.css'; // Arquivo de estilos para o footer

function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="final">

      </div>
      <div className="Foer">
        <footer>
          <div className="footer-buttons">
            <button className="round-button"><i className="fas fa-star"></i></button>
            <Link to="/fav" className="home-button round-button"><i className="fas fa-heart"></i></Link>
            <Link to="/" className="home-button round-button"><i className="fas fa-home"></i></Link>
            <Link to="/chat" className="home-button round-button"><i className="fas fa-envelope"></i></Link>
            <button className="round-button" onClick={toggleMenu}>
              {isOpen ? <li className='fas fa-times'></li> : <li className='fas fa-bars'></li>}
            </button>
          </div>
        </footer>
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
          <button className={`toggle-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
          <ul>
            <hr />
            <li>Menu Item 1</li><hr />
            <li>Menu Item 2</li><hr />
            <li>Menu Item 3</li><hr />
            {/* Adicione mais itens conforme necessário */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
