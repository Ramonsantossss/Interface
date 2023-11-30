import React, { useState, useEffect } from 'react';

function Mangas() {
  const [mangasPopular, setMangasPopular] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch('https://mkitapi.onrender.com/all');
      if (!response.ok) {
        throw new Error('Erro ao buscar os dados da API');
      }
      const resultado = await response.json();
      setMangasPopular(resultado);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='mangas'>
      <h2>Mangas</h2>
      {mangasPopular.map((manga, index) => (
        <div key={index} className='manga-item'>
          <h3>{manga.title}</h3>
          <img src={manga.imageUrl} alt={manga.title} />
          <p>Tipo: {manga.mangaType}</p>
          <p>Classificação: {manga.rating}</p>
          <a href={manga.link} target='_blank' rel='noopener noreferrer'>Link para o mangá</a>
          <h4>Capítulos:</h4>
          <ul>
            {manga.chapters.map((chapter, idx) => (
              <li key={idx}>
                <a href={chapter.chapterLink} target='_blank' rel='noopener noreferrer'>
                  {chapter.chapterTitle}
                </a>
                <span> - Publicado: {chapter.publishedAgo}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Mangas;
