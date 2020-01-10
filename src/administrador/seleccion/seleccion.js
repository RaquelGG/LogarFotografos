import React, { useEffect, useState } from 'react';
import { obtenerGaleria } from "../../common/conexion";
import Loader from '../../common/loader/loader';
import Gallery from "react-photo-gallery";
import translate from "../../traduccion/es/common.json";
import fondo_arrastrar from "../seleccion/background_arrastrar.svg";
import img_arrastrar from "./img_arrastrar.svg";
import './seleccion.scss';
import {
    obtenerDatosBoda,
    obtenerGaleriaPrivada,

} from "../conexion";
import DragAndDrop from '../dragAndDrop';

export function Seleccion_admin({match}) {
    const id_boda = match.params.id_boda;

    /* --- Galería --- */
    // TODO : Cambiar la galeria por la del sujeto en cuestion

    const [images, setImages] = useState(null);
    const [data, setData] = useState('');

    // Obtenemos las fotos y los datos del servidor
    useEffect(() => {
        async function fetchData() {
            setData(await obtenerDatosBoda(id_boda))
        }
        async function fetchImages() {
            setImages(await obtenerGaleriaPrivada(id_boda))
        }
        fetchImages();
        fetchData();
    }, []);


    /* --------------- */

    /* --- JSON --- */
    let traduccion = translate.seleccion;
    /* ------------ */

    return (
        <div className="content-seleccion">
            <div className="content-titulo">
                <div className="titulo">{data.servicio}</div>
                <div className="nombre">{data.fecha}, {data.usuario}</div>
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
                        <div className="boton puntero">{traduccion.selecTodo}</div>
                        <div className="boton puntero">{traduccion.deselecTodo}</div>
                        <div className="boton puntero">{traduccion.borrarSelec}</div>
                        <div className="recuadro-subida">
                            <div className="subir">
                                <div>{traduccion.subirFoto}</div>
                            </div>
                            <div className="arrastrar sombra">
                                <div className="content-arrastrar">
                                    <img src={fondo_arrastrar} />
                                    <div className="content-img">
                                        <h1>{traduccion.arrastrar}</h1>
                                        <img src={img_arrastrar}/>
                                        <h1>{traduccion.o}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="examinar">{traduccion.examinarEquipo}</div>
                        </div>   
                        <div className="guardar puntero">{traduccion.guardar}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seleccion_admin;