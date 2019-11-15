import React from 'react';
import "./imagen_fondo.scss";

function Imagen_fondo({Movil, Ordenador, fondo}) {
    let dim = "height";
    let val = window.innerHeight;
    if (window.innerWidth > window.innerHeight) {
        dim = "width";
        val = window.innerWidth;
    }
    const movil = window.matchMedia("(max-width: 600px)").matches;
    
    return (
        <div className="content_imagen_fondo">
            <div className="imagen">
                <img src={fondo} {...{[dim]: val}}/>
            </div>
            <div>
            { movil ? <Movil/> : <Ordenador/> }
            </div>
        </div>
    );
}

export default Imagen_fondo;