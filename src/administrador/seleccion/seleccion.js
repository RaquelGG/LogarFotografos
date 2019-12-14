import React, { useEffect, useState } from 'react';
import { obtenerGaleria } from "../../common/conexion";
import Loader from '../../common/loader/loader';
import Gallery from 'react-grid-gallery';
import traduccion from "../../traduccion/es/common.json";
import fondo_arrastrar from "../seleccion/background_arrastrar.svg";
import img_arrastrar from "./img_arrastrar.svg";
import './seleccion.scss'

export function Seleccion_admin() {

    /* --- Galería --- */
    // TODO : Cambiar la galeria por la del sujeto en cuestion

    const [images, setImages] = useState(null);

    useEffect(async () => setImages(await obtenerGaleria(1)), []); 

    /* --------------- */

    /* --- JSON --- */
    const json = traduccion.seleccion;
    /* ------------ */

    return (
        <div className="content-seleccion">
            <div className="content-titulo">
                <div className="titulo">{json.boda}</div>
                <div className="nombre">Maria del mar y juan</div>
            </div>
            <div className="content-galeria">
                <div className="galeria">
                    {
                        images
                        ? <Gallery className="galeria" images={images} enableImageSelection={true} />
                        : <Loader className="galeria"/>
                    }
                </div>
                <div className="menu-lateral">
                    <div className="contenido-menu">
                        <div className="boton puntero">{json.selecTodo}</div>
                        <div className="boton puntero">{json.deselecTodo}</div>
                        <div className="boton puntero">{json.borrarSelec}</div>
                        <div className="recuadro-subida">
                            <div className="subir">
                                <div>{json.subirFoto}</div>
                            </div>
                            <div className="arrastrar sombra">
                                <div className="content-arrastrar">
                                    <img src={fondo_arrastrar} />
                                    <div className="content-img">
                                        <h1>{json.arrastrar}</h1>
                                        <img src={img_arrastrar}/>
                                        <h1>{json.o}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="examinar">{json.examinarEquipo}</div>
                        </div>   
                        <div className="guardar puntero">{json.guardar}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seleccion_admin;