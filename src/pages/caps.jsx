import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './caps.css';

function Caps(props) {
  const { match } = props;
  const { nome } = match.params;
  const [infoAnime, setAnimeInfo] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [capitulos, setCapitulos] = useState([]);

  // ... (seu código anterior)

  useEffect(() => {
    // Substitua a URL da sua API
    const apiUrl = `https://fine-gold-squid-yoke.cyclic.app/capsmanga?nome=manga/a-epoca-em-que-eramos-jovens`;

    // Chame a API e atualize o estado com os resultados
    fetch(apiUrl)
      .then(response => response.text()) // Alteração aqui para tratar como texto
      .then(data => {
        console.log('Data from API:', data); // Adiciona log para ver o que está sendo retornado
        try {
          const jsonData = JSON.parse(data);
          setCapitulos(jsonData);
        } catch (parseError) {
          console.error('Erro ao fazer o parse do JSON:', parseError);
          throw new Error('Erro ao fazer o parse do JSON');
        }
      })
      .catch(error => {
        console.error('Erro ao obter dados da API:', error);
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, [nome]);

  // ... (seu código posterior)


  async function fetchAnimeInfo() {
    try {
      const response = await fetch(`https://fine-gold-squid-yoke.cyclic.app/infomanga?nome=${nome}`);

      if (!response.ok) {
        throw new Error('Erro ao buscar os dados da API');
      }

      const resultado = await response.json();
      setAnimeInfo(resultado);
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchAnimeInfo();
  }, [nome]);

// ... (seu código anterior)

return (
  <div className="container">
    <div className="rela">
      <img className="image" src={infoAnime.imagemCapa} alt="Capa do Livro" />
      <div className="info">
        <h1 className="title">{infoAnime.titulo}</h1>
      </div>
    </div>
    <p className="description">{infoAnime.descricao}</p>
    <br />
    <h3 className="tabi">Capítulos:</h3>
    <hr />
    <div>
      {isLoading ? (
        <p className="loading">Carregando Capítulos...</p>
      ) : (
        <ul>
          {capitulos.map((capitulo, index) => (
            <li className="bucap" key={index}>
              <Link className="bucapb" onClick={() => console.log(`Capítulo ${index + 1} clicado!`)}>
                Capítulo {index + 1}
            </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
    <hr />
  </div>
);

// ... (seu código posterior)

}

export default Caps;
