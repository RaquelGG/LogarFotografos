import React from 'react';
import fondo from "./fondo.jpg";
import Movil from "./movil/inicio";
import Ordenador from "./ordenador/inicio";
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"
import "./inicio.scss";

function Inicio() {
    return (
        <Imagen_fondo Movil={Movil} Ordenador={Ordenador} fondo={fondo}/>
    );
}

export default Inicio;