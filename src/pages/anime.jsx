import React, { useState, useEffect } from "react";

import './anime.css'

import DisqusEmbed from './DisqusEmbed.jsx';

import { Link } from "react-router-dom";



 function Anime(props) {

  const { match, location } = props;

  const { id } = match.params;

  const [listaDeEp, setMangasPopular] = useState([]);

  const [infoAnime, setAnimeInfo] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  const [favoritos, setFavoritos] = useState([]);

  const [showVideo, setShowVideo] = useState({ url: "" });



  useEffect(() => {

    // Carregar favoritos do localStorage quando o componente é montado

    const favoritosFromLocalStorage = JSON.parse(localStorage.getItem("favoritos")) || [];

    setFavoritos(favoritosFromLocalStorage);

  }, []);



  



  const lerCapitulo = (capitulo) => {

    // Atualize o último capítulo lido do manga favorito

    const mangaIndex = favoritos.findIndex((manga) => manga.id === id);

    if (mangaIndex !== -1) {

      const novoFavorito = { ...favoritos[mangaIndex], ultimoCapituloLido: capitulo };

      const novosFavoritos = [...favoritos];

      novosFavoritos[mangaIndex] = novoFavorito;

      setFavoritos(novosFavoritos);



      // Salve os favoritos atualizados no localStorage

      localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));

    }

  };



  async function fetchData() {

    try {

      const response = await fetch(`https://appp--trevodev.repl.co/episodios/${id}`);

      if (!response.ok) {

        throw new Error('Erro ao buscar os dados da API');

      }

      const resultado = await response.json();

      setMangasPopular(resultado);

    } catch (error) {

      console.error(error);

      setError(error); // Defina o estado de erro aqui

      setIsLoading(false); // Defina o estado de carregamento para false em caso de erro

    }

  }



  async function AniInfo() {

    try {

      const response = await fetch(`https://appp--trevodev.repl.co/anime/${id}`);

      if (!response.ok) {

        throw new Error('Erro ao buscar os dados da API');

      }

      const resultado = await response.json();

      setAnimeInfo(resultado);

    } catch (error) {

      console.error(error);

      setError(error); // Defina o estado de erro aqui

      setIsLoading(false); // Defina o estado de carregamento para false em caso de erro

    }

  }



  const adicionarAosFavoritos = () => {

    // Verifique se o manga já está nos favoritos

    if (!favoritos.find((manga) => manga.id === id)) {

      // Obtenha as informações relevantes do anime

      const animeInfo = infoAnime[0]; // Supondo que as informações estejam disponíveis no primeiro elemento do array infoAnime

  

      // Se não estiver, adicione-o aos favoritos com as informações relevantes

      const novoFavorito = {

        id,

        category_desc: animeInfo.category_desc,

        category_name: animeInfo.category_name,

        category_icon: animeInfo.category_icon,

      };

      const novosFavoritos = [...favoritos, novoFavorito];

      console.log(novosFavoritos);

      setFavoritos(novosFavoritos);

  

      // Salve os favoritos atualizados no localStorage

      localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));

    }

  };

  



  const removerDosFavoritos = () => {

    // Remova o manga dos favoritos

    const novosFavoritos = favoritos.filter((manga) => manga.id !== id);

    setFavoritos(novosFavoritos);



    // Salve os favoritos atualizados no localStorage

    localStorage.setItem("favoritos", JSON.stringify(novosFavoritos));

  };





  useEffect(() => {

    fetchData();

    AniInfo();

  }, []);





  return (

    <div className="manga">
    <br />
      {/*{isLoading && <p>Carregando...</p>}*/}

      {error && <p>Ocorreu um erro: {error.message}</p>}

      <div className="im">

        {infoAnime.map((item, index) => (

          <div key={index} className="geral">

            <div className="titu">

              <img src={`https://cdn.appanimeplus.tk/img/${item.category_icon}`} className="capa" />

              

              <div className="bloco">

                <h3>{item.category_name}</h3>

                <p>• {item.category_desc}</p>

                {favoritos.find((manga) => manga.id === id) ? (

                // Se o manga está nos favoritos, exiba o ícone de remover

                <button className="botao-redondo" onClick={removerDosFavoritos}>

                  <i className="fa fa-heart"></i>

                </button>

              ) : (

                // Se o manga não está nos favoritos, exiba o ícone de adicionar

                <button className="botao-redondo" onClick={adicionarAosFavoritos}>

                  <i className="fa fa-plus"></i>

                </button>

              )}

              </div>

            </div>



            <div className="tags">

              {infoAnime[0]?.genres.split(', ').map((genre, index) => (

                <h4 key={index}>{genre}</h4>

              ))}

            </div>

          </div>

        ))}

      </div>



      <ul className="caps">

        <Link

          to={`/ep/${id}`}

        >

          <li className="tex">Lista de episódios</li>

        </Link>

      </ul>



      <br /><br />

      <DisqusEmbed />

      <br /><br /><br />

    </div>

  );

}



export default Anime;