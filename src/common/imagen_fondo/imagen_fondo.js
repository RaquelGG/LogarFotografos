import React from 'react';
import Menu from '../menu/menu';
import "./imagen_fondo.scss";

function Imagen_fondo({fondo, size_logo}) {

    return (
        <div className="content_imagen_fondo" style={{backgroundImage: 'url(' + fondo + ')'}}>
            <div className="imagen">
            </div>
            <Menu size_logo={size_logo}/>
        </div>
    );
}

export default Imagen_fondo;