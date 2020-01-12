import React, { useEffect, useState, useCallback } from 'react';
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"

import "./galeria.scss";
import { obtenerGaleria } from "../common/conexion";
import Loader from '../common/loader/loader';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";



export function Galeria({match}) {
    const [filtro, setFiltro] = useState(match.params.id);
    
    // Para obtener las imagenes
    const [images, setImages] = useState(null);
    const [filteredImages, setFilteredImages] = useState(null);

    // Para abrir imagen
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    // Obtenemos las fotos del servidor
    useEffect(() => {
        async function fetchFotos() {
            console.log("filtro: ", filtro);
            const res = await obtenerGaleria();
            if (res) {
                setFilteredImages(filtro
                    ? res.filter(img => img.alt === filtro)
                    : res);
            }
            setImages(await obtenerGaleria());
            

            console.log("Contador imagenes totales: ", res.length);
            console.log("Contador imagenes filtro: ", res.filter(img => img.alt.includes(filtro)).length);
        }
        async function fetchFiltro() {
            //setFiltro(); // Si se filtra por Boda, Preboda o Postboda
        }
        fetchFiltro();
        fetchFotos();
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


    return (
        <div className="content_galeria">
            <Imagen_fondo id_foto={4} />
            <div className="galeria_div">
                {
                    filteredImages
                        ? <>
                            <Gallery
                                photos={filteredImages}
                                onClick={openLightbox}
                                //direction="column"
                                //margin = "0"

                                

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