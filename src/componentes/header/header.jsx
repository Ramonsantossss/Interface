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
             {/* <div className='pesquisa'><i className="fas fa-bars"></i></div> */}
           </div>
        </div>
      
     </header>
      </div>
  )
}

export default Header;






