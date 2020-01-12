import React, { useState, useCallback, useEffect } from 'react';
import Loader from '../../common/loader/loader';
import Galeria from "react-photo-gallery";
import './seleccion.scss';
import {
    obtenerDatosBoda,
    obtenerDatosFotos,
    obtenerFotoPrivada,
    borrarFotoPrivada
} from "./conexion";
import { subirFotosBoda } from "../clientes/conexion"
import DragAndDrop from '../dragAndDrop';
import SelectedImage from "../../cliente/imagenSeleccionada"


export function Seleccion_admin({ match, history }) {
    if (!window.session.user || !window.session.pass || !window.session.admin) {
        history.push("/acceso");
    }
    const id_boda = match.params.id_boda;

    /* --- Galería --- */
    // Para no sobrecargar el servidor comprobando si está procesando
    const [processing, setProcessing] = useState(false);
    // Para seleccionar
    const [selectAll, setSelectAll] = useState(-1);
    // Cambiar la galeria por la del sujeto en cuestion
    const [images, setImages] = useState([]);
    const [data, setData] = useState('');
    // Para el drag and drop
    const [file, setFile] = useState(); // Contiene el archivo subido


    async function cargarImagenes(seleccion) {
        const resDataImages = await obtenerDatosFotos(id_boda);
        const datos = await obtenerDatosBoda(id_boda);
        const clonedImages = resDataImages.slice();
        await Promise.all(clonedImages.map(
            async img => img.src = await obtenerFotoPrivada(img.alt, datos.fecha)
        ));
        setImages(clonedImages.map(img => [img, seleccion]));
        console.log("images:", clonedImages);
        setSelectAll(seleccion);
    }
    // Obtenemos las fotos y los datos del servidor
    useEffect(() => {
        async function fetchData() {
            setData(await obtenerDatosBoda(id_boda));
        }
        async function fetchImages() {
            await cargarImagenes(false);
        }

        fetchData();
        fetchImages();
    }, []);

    const subirFotos = () => {
        if (processing) return;
        setProcessing(true);

        if (file) {
            (async () => {
                const resSubirFotos = await subirFotosBoda(file, data.fecha);

                if (resSubirFotos) {
                    alert(`¡Se ha subido correctamente!`);
                    setFile(undefined);
                    await cargarImagenes(false);
                } else {
                    alert("Se ha producido un problema mientras se subían las imagenes.");
                }
            })();

        } else {
            alert("Debes subir las fotos en un .zip.");
        }
    }

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
        [selectAll, images]
    );

    // Enlaza los ticks con las imagenes seleccionadas
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
            if (img[1]) {
                (async () => {
                    await borrarFotoPrivada(img[0].alt, data.fecha);
                })();
            }
        });
        cargarImagenes();
        setProcessing(false);
    };


    /* --------------- */

    return (
        <div className="content-seleccion">
            <div className="content-titulo">
                {<div className="titulo">{data.servicio}</div>}
                {<div className="nombre">{data.fecha}, {data.usuario}</div>}
            </div>
            <div className="content-galeria">
                <div className="galeria">
                    {
                        images
                            ? <Galeria
                                className="galeria"
                                photos={images.map(img => img[0])}
                                renderImage={imageRenderer}
                            />
                            : <Loader className="galeria" />
                    }
                </div>
                <div className="menu-lateral">
                    <div className="contenido-menu">
                        <div onClick={() => cargarImagenes(1)} className="boton puntero">Seleccionar todo</div>
                        <div onClick={() => cargarImagenes(0)} className="boton puntero">Deseleccionar todo</div>
                        <div onClick={() => borrarFotos()} className="boton puntero">Borrar selección</div>
                        <div className="recuadro-subida">
                            <div className="arrastrar sombra">
                                <div className="content-arrastrar">
                                    <DragAndDrop onFileSelected={f => setFile(f)} />

                                </div>
                            </div>
                        </div>
                        <div onClick={() => subirFotos()} className="guardar puntero">Subir imágenes</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Seleccion_admin;