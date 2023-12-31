import React, { useState, useEffect } from "react";

import "./Centrohome.css";

import { Link } from "react-router-dom";





function Populares() {

  const [mangasPopular, setMangasPopular] = useState([]);



  async function fetchData() {

    try {

      const response = await fetch('https://appp--trevodev.repl.co/tops');

      if (!response.ok) {

        throw new Error('Erro ao buscar os dados da API');

      }

      const resultado = await response.json();

      setMangasPopular(resultado.slice(1, 11));

    } catch (error) {

      console.error(error);

    }

  }



  useEffect(() => {

    fetchData();

  }, []);



  return (

    <div className="container">


      <div className="titulo">

        <div className="barrinha"></div>

        <h3>Populares</h3>

      </div>

      <ul className="ul">

        {mangasPopular.map((item, index) => (

          <div className="conteudo" key={item}>

              <Link to={`/anime/${item.id}`}>

              <li className="li">

                <div className="foto">

                  <img className="img" src={`https://cdn.appanimeplus.tk/img/${item.category_icon}`} alt="foto" />

                  <div className="texto">

                    <div className="name">

                      <span className="span">

                        {item.category_name}

                      </span>

                    </div><br />

                  </div>



                </div><br />

              </li>

              <br />

            </Link>



          </div>



        ))}

      </ul>

    </div>

  );

}



export default Populares;