import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi'; // Importe os ícones desejados do react-icons
import './Sidebar.css'; // Arquivo de estilos para o menu lateral

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sidebar-container">
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-button" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <ul>
          <hr />
          <li>DOWNLOADS</li><hr />
          <li>FOTOS/SFW</li><hr />
          <li>FOTOS/NSFW</li><hr />
          <li>ANIME</li><hr />
          {/* Adicione mais itens conforme necessário */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
