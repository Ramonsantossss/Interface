import React, { useState, useEffect } from 'react';
import './mangas.css';


function Mangas() {
  const [mangasPopular, setMangasPopular] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/all');
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

  return (
    <div className='mangas-container'>
      <center>
      {mangasPopular.map((manga, index) => (
        <div key={index} className='manga-item'>
          <a href={manga.link} target='_blank' rel='noopener noreferrer'>
            <div className='manga-image'>
              <img className='capa' src={manga.imageUrl} alt={manga.title} />
              <div className='titulo-over'>
                <p className='titulo'>{manga.title}</p>
              </div>
            </div>
          </a>
          <div className='manga-info'>
            <p className='manga-type'>{manga.mangaType}</p>
            <p className='manga-rating'>Classificação: {manga.rating}</p>
            <ul className='chapter-list'>
              {manga.chapters.map((chapter, idx) => (
                <li key={idx}>
                  <a href={chapter.chapterLink} target='_blank' rel='noopener noreferrer'>
                    {chapter.chapterTitle}
                  </a>
                  <span className='published'>Publicado: {chapter.publishedAgo}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
        </center>
    </div>
  );
}

export default Mangas;
