import React, { useEffect, useState } from 'react';
import "./imagen_fondo.scss";
import fondo_off from "./fondo.jpg";
import { obtenerUrlFondo } from "../conexion";


function Imagen_fondo({id_foto}) {
    // Cogemos la imagen de fondo del servidor
    const [fondo, setFondo] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setFondo(await obtenerUrlFondo(id_foto, fondo_off))
        }
        fetchData();
    }, [id_foto]);

    return (
        <div className="content_imagen_fondo" style={{backgroundImage: 'url(' + fondo + ')'}}>
        </div>
    );
}

export default Imagen_fondo;