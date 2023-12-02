import React from 'react';
import ReactDom from 'react-dom';
import './header.css';
import Sidebar from '../sidebar/sidebar';

function Header() {
  return (
    <div className='ha'>
      
    <header className="header-main">
      <a href="/">
        <span className="logo-text">
          <span className='white'>Ani</span>Kit
        </span>
        </a>
      <Sidebar/>
        <div className="search-div">
           <div className="search-form">
              <input className='pesquisa'  type="text" id="q" placeholder="Pesquisar Usuario" />
           </div>
        </div>
      
     </header>
      </div>
  )
}

export default Header;






