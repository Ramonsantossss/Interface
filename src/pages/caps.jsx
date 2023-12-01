import React, { useState, useEffect } from 'react';
//import './manga.scss';
//import DisqusEmbed from './DisqusEmbed';
import { Link } from "react-router-dom";

function Caps(props){
  const { match, location } = props;
  const { nome } = match.params;

  return (
    <>
    <h1>EM PRODUÇÃO...</h1>
    </>
  )

}

export default Caps;