import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={toggleMenu} className="toggle-btn">
        {isOpen ? 'Fechar' : 'Abrir'} Menu
      </button>
      <nav>
        <ul className="menu-items">
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          {/* Adicione mais itens conforme necessário */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
