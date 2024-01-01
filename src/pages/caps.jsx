import React, { useState, useEffect } from 'react';

function Caps(props) {
  const { match } = props;
  const { nome } = match.params;
  const [infoAnime, setAnimeInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchAnimeInfo() {
    try {
      const response = await fetch(`https://fine-gold-squid-yoke.cyclic.app/infomanga?nome=${nome}`);

      if (!response.ok) {
        throw new Error('Erro ao buscar os dados da API');
      }

      const resultado = await response.json();
      setAnimeInfo(resultado);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
      setError(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAnimeInfo();
  }, [nome]);

  return (
    <div className="container">
      {isLoading ? (
        <p className="loading">Carregando...</p>
      ) : error ? (
        <p className="error">Erro ao buscar os dados da API.</p>
      ) : (
        infoAnime && (
          <>
            <div className="rela">
              <img className="image" src={infoAnime.imagemCapa} alt="Capa do Livro" />
              <div className="info">
                <h1 className="title">{infoAnime.titulo}</h1>
              </div>
            </div>
                <p className="description">{infoAnime.descricao}</p>
              
          </>
        )
      )}
    </div>
  );
}

export default Caps;
