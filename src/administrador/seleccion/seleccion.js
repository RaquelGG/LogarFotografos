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

// Traducción
import { useTranslation} from 'react-i18next';

export function Seleccion_admin({match}) {
    const {t, i18n } = useTranslation();

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

    return (
        <div className="content-seleccion">
            <div className="content-titulo">
                {<div className="titulo">{data.servicio}</div>}
               { <div className="nombre">{data.fecha}, {data.usuario}</div> }
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
                        <div className="boton puntero">{t('seleccion.selecTodo')}</div>
                        <div className="boton puntero">{t('seleccion.deselecTodo')}</div>
                        <div className="boton puntero">{t('seleccion.borrarSelec')}</div>
                        <div className="recuadro-subida">
                            <div className="subir">
                                <div>{t('seleccion.subirFoto')}</div>
                            </div>
                            <div className="arrastrar sombra">
                                <div className="content-arrastrar">
                                    <img src={fondo_arrastrar} />
                                    <div className="content-img">
                                        <h1>{t('seleccion.arrastrar')}</h1>
                                        <img src={img_arrastrar}/>
                                        <h1>{t('seleccion.o')}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="examinar">{t('seleccion.examinarEquipo')}</div>
                        </div>   
                        <div className="guardar puntero">{t('seleccion.guardar')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seleccion_admin;