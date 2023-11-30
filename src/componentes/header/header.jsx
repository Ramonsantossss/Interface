import React from 'react';
import ReactDom from 'react-dom';
import './header.css';
import Sidebar from '../sidebar/sidebar';

function Header() {
  return (
    <header className="header-main">
        <span className="logo-text">
          
          <span className='white'>Ani</span>Kit
        </span>
      <Sidebar/>
        <div className="search-div">
           <div className="search-form">
              <input className='pesquisa'  type="text" id="q" placeholder="Pesquisar Usuario" />
           </div>
        </div>
      
     </header>
  )
}

export default Header;






