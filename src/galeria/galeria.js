import React, { useEffect, useState } from 'react';
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"
import "./galeria.scss";
import { obtenerGaleria } from "../common/conexion";
import Loader from '../common/loader/loader';
import Gallery from 'react-grid-gallery';


export function Galeria() {
    const [images, setImages] = useState(null);

    useEffect(async () => setImages(await obtenerGaleria()), []);

    return (
        <div className="content_galeria">
            <Imagen_fondo id_fondo={4} size_logo={"200px"} />
            {
                images
                ? <Gallery className="galeria" images={images} enableImageSelection={false} />
                : <Loader />
            }
        </div>
    );
}
export default Galeria;