import React, { useState } from 'react';
import Menu from '../menu/menu';
import "./imagen_fondo.scss";
import fondo_off from "./fondo.jpg";

function Imagen_fondo({id_foto, size_logo, logo}) {
    // Cogemos la imagen de fondo del servidor
    const [fondo, setFondo] = useState(null);

    (async () => {
        try {
            const response = await fetch(`https://pruebas.logarfotografos.es/publico/obtenerUrlFondo.php?id_foto=${id_foto}`)
            let respuesta = await response.text();
            setFondo(respuesta.replace("undefined", ""));
            console.log(fondo);
        } catch {
            console.error("ERROR: error obteniendo la imagen de fondo.");
            setFondo(fondo_off);
        }
    })();

    return (
        <div className="content_imagen_fondo" style={{backgroundImage: 'url(' + fondo + ')'}}>
            {//<Menu size_logo={size_logo} logo={logo}/>
            }
        </div>
    );
}

export default Imagen_fondo;