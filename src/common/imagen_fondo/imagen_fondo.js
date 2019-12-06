import React, { useState } from 'react';
import Menu from '../menu/menu';
import "./imagen_fondo.scss";
import fondo_off from "./fondo.jpg";

function Imagen_fondo({id_fondo, size_logo, logo}) {
    // Cogemos la imagen de fondo del servidor
    const [fondo, setFondo] = useState(null);

    (async () => {
        try {
            const response = await fetch(`http://localhost:3213/obtenerUrlFondo/${id_fondo}`)
            let respuesta = await response.text();
            setFondo(respuesta.replace("undefined", "h"));
            console.log(fondo);
        } catch {
            console.error("ERROR: error obteniendo la imagen de fondo.");
            setFondo(fondo_off);
        }
    })();

    return (
        <div className="content_imagen_fondo" style={{backgroundImage: 'url(' + fondo + ')'}}>
            <div className="imagen">
            </div>
            <Menu size_logo={size_logo} logo={logo}/>
        </div>
    );
}

export default Imagen_fondo;