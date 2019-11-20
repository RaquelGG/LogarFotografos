import React from 'react';
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"
import fondo from "./fondo.jpg";
import "./inicio.scss";

function Inicio() {
    return (
        <Imagen_fondo fondo={fondo} size_logo={"546px"}/>
    );
}

export default Inicio;