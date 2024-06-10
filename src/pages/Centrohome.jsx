import React, { useState, useEffect } from "react";
import "./Centrohome.css";
import { Link } from "react-router-dom";


function Centrohome() {
  const [mangasPopular, setMangasPopular] = useState([]);
  async function fetchData() {
    try {
      const response = await fetch('https://api-trevomangas.onrender.com/all');
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
        <h3>Recents</h3>
      </div>
      <ul className="ul">
        {mangasPopular.map((item, index) => (
          <div className="conteudo" key={item}>
            <Link to={`/anime/${item.id}`}>
              <li className="li">
                <div className="foto">
                  <img className="img" src={`${item.coverUrl}`} alt="foto" />
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

export default Centrohome;
