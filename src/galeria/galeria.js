import React, { useEffect, useState, useCallback } from 'react';
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"

import "./galeria.scss";
import { obtenerGaleria } from "../common/conexion";
import Loader from '../common/loader/loader';
//import Gallery from 'react-grid-gallery';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
//import SelectedImage from "./imagenSeleccionada";



export function Galeria() {
    // Para obtener las imagenes
    const [images, setImages] = useState(null);
    // Para abrir imagen
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    // Para seleccionar
    //const [selectAll, setSelectAll] = useState(false);

    // Obtenemos las fotos del servidor
    useEffect(() => {
        async function fetchData() {
            setImages(await obtenerGaleria())
        }
        fetchData();
    }, []);

    // Para que la imagen se abra en grande
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    /*// Para poder seleccionar las imagenes
    const toggleSelectAll = () => {
        setSelectAll(!selectAll);
    };

    const imageRenderer = useCallback(
        ({ index, left, top, key, photo }) => (
            <SelectedImage
                selected={selectAll}
                key={key}
                margin={"0"}
                index={index}
                photo={photo}
                left={left}
                top={top}
            />
        ),
        [selectAll]
    );*/

    return (
        <div className="content_galeria">
            <Imagen_fondo id_foto={4} />
            <div className="galeria">
                {
                    images
                        ? <>
                            <Gallery
                                photos={images}
                                onClick={openLightbox}
                                //direction="column"
                                //margin = "0"

                                // seleccionar
                                //renderImage={imageRenderer}

                            />
                            <ModalGateway>
                                {viewerIsOpen ? (
                                    <Modal onClose={closeLightbox}>
                                        <Carousel
                                            currentIndex={currentImage}
                                            views={images.map(x => ({
                                                ...x,
                                                srcset: x.srcSet
                                            }))}
                                        />
                                    </Modal>
                                ) : null}
                            </ModalGateway>
                        </>
                        : <Loader />
                }
            </div>

        </div>
    );
}
export default Galeria;