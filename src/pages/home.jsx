import React, { useState } from 'react';
import './Home.css';
import Mangas from './mangas';
import Api from './apis';
import Centrohome from './Centrohome.jsx';
import Filme from './filmes.jsx'
import Populares from './popular.jsx'

function Home() {
  const [activeTab, setActiveTab] = useState('chats'); // Estado para controlar a aba ativa
  

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="home">
      <div className="tabs">
        <div className={`tab ${activeTab === 'chats' ? 'active' : ''}`} onClick={() => changeTab('chats')}>
          Animes
        </div>
        <div className={`tab ${activeTab === 'status' ? 'active' : ''}`} onClick={() => changeTab('status')}>
          Utilidades
        </div>
        {/*<div className={`tab ${activeTab === 'apis' ? 'active' : ''}`} onClick={() => changeTab('apis')}>
          APIs
        </div>*/}
        <div className={`tab ${activeTab === 'calls' ? 'active' : ''}`} onClick={() => changeTab('calls')}>
          Chat
        </div>
      </div>
      <div className="containe">
        {/* Aqui você colocaria o conteúdo de cada aba */}
        {activeTab === 'chats' && (
      <div className="boxi">
        
      </div>
        )}
        {activeTab === 'apis' && (
        <center>
        <Api />
        </center>
        )}
        {activeTab === 'status' && (
          <>
            <div className='box'>
              <iframe
                src="https://www.youtube.com/embed/dQAKRGdoSQA?si=DYn93hFGeJc9ZGLR"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className='box'>
              <iframe
                src="https://www.youtube.com/embed/dQAKRGdoSQA?si=DYn93hFGeJc9ZGLR"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className='box'>
              <iframe
                src="https://www.youtube.com/embed/dQAKRGdoSQA?si=DYn93hFGeJc9ZGLR"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </>
        )}
        {activeTab === 'calls' && (
          <>
            <div className='box'>
              <h1>EM BREVE!!!</h1>
            </div>
          </>
        )}
      </div>
      <Centrohome />
      <Filme />
      <Populares />

      <br />
    </div>
  );
}

export default Home;
