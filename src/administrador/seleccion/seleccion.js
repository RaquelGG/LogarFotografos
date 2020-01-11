import React, { useState, useCallback, useEffect } from 'react';
import { obtenerGaleria } from "../../common/conexion";
import Loader from '../../common/loader/loader';
import Galeria from "react-photo-gallery";
import translate from "../../traduccion/es/common.json";
import fondo_arrastrar from "../seleccion/background_arrastrar.svg";
import img_arrastrar from "./img_arrastrar.svg";
import './seleccion.scss';
import {
    obtenerDatosBoda,
    obtenerDatosFotos,
    obtenerFotoPrivada

} from "./conexion";
import DragAndDrop from '../dragAndDrop';
import SelectedImage from "../../cliente/imagenSeleccionada"
// Traduccion 
import { useTranslation } from 'react-i18next';


export function Seleccion_admin({ match }) {
    const id_boda = match.params.id_boda;

    const {t, i18n } = useTranslation();

    /* --- Galería --- */
    // Para no sobrecargar el servidor comprobando si está procesando
    const [processing, setProcessing] = useState(false);
    // Para seleccionar
    const [selectAll, setSelectAll] = useState(-1);
    // TODO : Cambiar la galeria por la del sujeto en cuestion
    const [images, setImages] = useState(null);
    const [data, setData] = useState('');

    // Obtenemos las fotos y los datos del servidor
    useEffect(() => {
        async function fetchData() {
            setData(await obtenerDatosBoda(id_boda));
        }
        async function fetchImages() {
            const resDataImages = await obtenerDatosFotos(id_boda);
            const datos = await obtenerDatosBoda(id_boda);

            /*resDataImages.map(
                img => (async () => {
                    img.src = await obtenerFotoPrivada(img.alt, datos.fecha);
                })()
            );*/
            const clonedImages = resDataImages.slice();
            await Promise.all(clonedImages.map(
                async img => img.src = await obtenerFotoPrivada(img.alt, datos.fecha)
            ));
            setImages(clonedImages);
            console.log("images:", clonedImages);
        }

        fetchData();
        fetchImages();
    }, []);

    // Para seleccionar
    // images[0].src = "" --- esto NO causa que se actualice
    // setImages(...) --- esta es la única forma de que sí se actualice

    const imageRenderer = useCallback(
        ({ index, left, top, key, photo }) => (
            <SelectedImage
                selected={
                    selectAll === -1
                        ? photo.isSelected
                        : selectAll === 1
                }
                key={key}
                margin={"2px"}
                index={index}
                photo={photo}
                left={left}
                top={top}
                onSelectionChange={s => selectionChangeHandler(index, s)}
            />
        ),
        [selectAll]
    );

    const selectionChangeHandler = (index, isSelected) => {
        console.log("selection changed for index", index, "s", isSelected);
        const clonedImages = images.slice();
        console.log("we got", images.length, "and", clonedImages.length);
        clonedImages[index][1] = isSelected;
        setImages(clonedImages);
    };

    // Para borrar las fotos seleccionadas
    const borrarFotos = () => {
        if (processing) return;
        setProcessing(true);

        // Borra las que están seleccionadas.
        // TODO
        images.forEach(img => {
            console.log("is selected:", img.isSelected);
            if (img[1]) {
                (async () => {
                    //await borrarFotoPublica(img.key);
                    console.log("img key:", img.key);
                })();
            }
        });

        setProcessing(false);
    };


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
                            ? <Galeria
                                className="galeria"
                                photos={images}
                                renderImage={imageRenderer}
                            />
                            : <Loader className="galeria" />
                    }
                </div>
                <div className="menu-lateral">
                    <div className="contenido-menu">
                        <div className="boton puntero">Seleccionar todo</div>
                        <div className="boton puntero">Deseleccionar todo</div>
                        <div onClick={() => borrarFotos()} className="boton puntero">Borrar selección</div>
                        <div className="recuadro-subida">
                            <div className="subir">
                                <div>{t('seleccion.subirFoto')}</div>
                            </div>
                            <div className="arrastrar sombra">
                                <div className="content-arrastrar">
                                    <img src={fondo_arrastrar} />
                                    <div className="content-img">
                                        <h1>{t('seleccion.arrastrar')}</h1>
                                        <img src={img_arrastrar} />
                                        <h1>{t('seleccion.o')}</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="examinar">Examinar equipo</div>
                        </div>
                        <div className="guardar puntero">Guardar</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seleccion_admin;