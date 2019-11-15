import React from 'react';
import fondo from "./fondo.jpg";
import Movil from "./movil/contacto";
import Ordenador from "./ordenador/contacto";
import "./contacto.scss";

function Inicio() {
    let dim = "height";
    let val = window.innerHeight;
    if (window.innerWidth > window.innerHeight) {
        dim = "width";
        val = window.innerWidth;
    }
    const movil = window.matchMedia("(max-width: 600px)").matches;
    
    return (
        <div className="content">
            <div className="imagen">
                <img src={fondo} {...{[dim]: val}}/>
            </div>
            <div>
            { movil ? <Movil/> : <Ordenador/> }
            </div>
        </div>
    );
}

export default Contacto;