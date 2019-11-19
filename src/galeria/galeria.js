import React from 'react';
//import fondo from "./fondo.jpg";
//import Movil from "./movil/inicio";
//import Ordenador from "./ordenador/inicio";
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"
import "./galeria.scss";

const imgWithClick = { cursor: "pointer" };

const Galeria = ({ index, onClick, photo, margin, direction, top, left }) => {
  const imgStyle = { margin: margin };
  if (direction === "column") {
    imgStyle.position = "absolute";
    imgStyle.left = left;
    imgStyle.top = top;
  }

  const handleClick = event => {
    onClick(event, { photo, index });
  };

  return (
    <img
      style={onClick ? { ...imgStyle, ...imgWithClick } : imgStyle}
      {...photo}
      onClick={onClick ? handleClick : null}
      alt="img"
    />
  );
};

export default Galeria;