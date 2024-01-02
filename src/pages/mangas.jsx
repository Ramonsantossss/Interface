import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Importe Link diretamente
import './mangas.css';


function Mangas() {
  const [mangasPopular, setMangasPopular] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://fine-gold-squid-yoke.cyclic.app/dublados');
        if (!response.ok) {
          throw new Error('Erro ao buscar os dados da API');
        }
        const resultado = await response.json();
        setMangasPopular(resultado);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
// clover
  return (
    <div className='mangas-container'>
      {mangasPopular.map((manga, index) => (
        <div key={index} className='manga-item'>
            <Link to={`${manga.category_id}`}>
            <div className='manga-image'>
              <img className='capa' src={`https://cdn.appanimeplus.tk/img/${manga.category_icon}`} alt="foto" />
              <div className='titulo-over'> 
                <p className='titulo'>{manga.category_name}</p>
              </div>
            </div>
          </Link>
          <div className='manga-info'>
            <p className='manga-type'>Dublado</p>
            <p className='manga-rating'>Classificação: {manga.favoritecount}</p>
          </div>
        </div>
      ))}
      <br /><br /><br /><br />
    </div>
  );
}




export default Mangas;
