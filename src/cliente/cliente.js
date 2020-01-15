import React, { useEffect, useState, useCallback } from 'react';
import Loader from '../common/loader/loader';
import Gallery from "react-photo-gallery";
import dialogo from './dialogo.svg';
import "./cliente.scss";
import SelectedImage from "./imagenSeleccionada";
import ImagenFondo from '../common/imagen_fondo/imagen_fondo';

import {
    finalizarSeleccion,
    seleccionarTodoCliente,
    obtenerDatosCliente,
    guardarDescripcionCliente,
    obtenerDatosFotos,
    obtenerFotoPrivada
} from "./conexion";
// Traducción
import { useTranslation } from 'react-i18next';
import Logo from '../common/logo/logo';
import AlertDialog from '../common/dialog';


export function Cliente({ history }) {
    const { t } = useTranslation();
    // Si no es cliente, se redirige a acceso
    if (!window.session.user || !window.session.pass || window.session.admin) {
        history.push("/acceso");
    }

    /* --- Galería --- */
    // Para cargar los datos, incluido el comentario
    const [data, setData] = useState(false);

    const [images, setImages] = useState(null);
    // Para seleccionar
    const [selectAll, setSelectAll] = useState(-1);
    // Para no sobrecargar el servidor comprobando si está procesando
    const [processing, setProcessing] = useState(false);

    let descripcion = React.createRef();

    // Para los dialogos
    const [open, setOpen] = React.useState(true);
    const [dialogoTitulo, setDialogoTitulo] = React.useState("Autoguardado");
    const [dialogoMensaje, setDialogoMensaje] = React.useState("Tu selección se guardará en todo momento, por eso, no necesitamos botón de guardar. ¡Tómate tu tiempo para elegir las imágenes perfectas! cuando ya hayas terminado de elegir definitivamente, pulsa el botón de [GUARDAR TODO Y ENVIAR], pero cuidado, una vez lo pulses no podrás volver a entrar.");

    const abrirDialogo = (titulo, mensaje) => {
        console.log("Titulo = ", titulo);
        setDialogoTitulo(titulo);
        setDialogoMensaje(mensaje);
        setOpen(true);
    }



    // Para establecer la descripción
    useEffect(() => {
        async function fetchData() {
            const datos = await obtenerDatosCliente();
            setData(datos)
        }
        async function fetchImages() {
            const resDataImages = await obtenerDatosFotos();
            const datos = await obtenerDatosCliente();

            if (datos) {
                const clonedImages = resDataImages.slice();
                await Promise.all(clonedImages.map(
                    async img => img.src = await obtenerFotoPrivada(img.alt, datos.fecha)
                ));
                setImages(clonedImages);
            }


            console.log("images:", images);
        }
        fetchImages();
        fetchData();
    }, []);

    // Para poder seleccionar las imagenes
    const seleccionarTodo = (seleccionar) => {
        if (processing) return;
        setProcessing(true);
        (async () => {
            const resultado = await seleccionarTodoCliente(seleccionar);
            if (resultado) setSelectAll(seleccionar ? 1 : 0);
            else abrirDialogo("Error de conexión", "Asegúrate de tener conexión a internet, o los cambios no se guardarán.");
            setProcessing(false);
        })();
    };

    // Para guardar la descripción
    const guardarDescripcion = (descripcion) => {
        if (processing) return;
        (async () => {
            const resultado = await guardarDescripcionCliente(descripcion.current.value);
            if (resultado) setData(descripcion);
            else abrirDialogo("Error de conexión", "Asegúrate de tener conexión a internet, o los cambios no se guardarán.");
            setProcessing(false);
        })();
    };

    // Para finalizar
    const finalizarSelec = () => {
        if (processing) return;
        setProcessing(true);

        (async () => {
            const resultado = await finalizarSeleccion();
            console.log(resultado);
            if (resultado) {
                abrirDialogo("Se ha enviado correctamente", "¡Ahora ya tenemos tu selección!");
                setTimeout(() => {
                    history.push("/");
                    window.session = null;
                }, 2000);

                //setData(null);
            } else {
                abrirDialogo("Oh, oh", "Se ha producido un problema, vuelve a finalizar tu selección más tarde.");
                setProcessing(false);
            }
        })();
    };

    const imageRenderer = useCallback(
        ({ index, left, top, key, photo }) => (
            <SelectedImage
                selected={
                    selectAll === -1
                        ? photo.isSelected
                        : selectAll === 1
                }
                key={photo.key}
                margin={"2px"}
                index={index}
                photo={photo}
                left={left}
                top={top}
            />
        ),
        [selectAll]
    );

    /* --------------- */

    /* --- Animación cliente --- */
    function abrir_dialogo() {
        const dialogo = document.querySelector('.dialogo');
        const burger_dialogo = document.querySelector('.burger-dialogo');
        const fake = document.querySelector('.fake-burger');

        fake.classList.toggle('abrir-fake-burger');
        dialogo.classList.toggle('abrir-dialogo');
        burger_dialogo.classList.toggle('cerrar-burger');
        fake.classList.toggle('toggle');
    }
    /* ------------------------- */

    return (
        <>
            <ImagenFondo id_foto={5} />
            <div className="content">
                <div className="fake-burger" onClick={abrir_dialogo}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
                <div className="burger-dialogo" onClick={abrir_dialogo}>
                    <img src={dialogo} alt="Abrir dialogo" />
                </div>
                <div className="galeria_seleccion">
                    {
                        images
                            ? <Gallery
                                className="galeria"
                                photos={images}
                                // seleccionar
                                renderImage={imageRenderer}
                            />
                            : <Loader className="galeria" />
                    }
                </div>
                <div className="dialogo">
                    <div className="logo-dialogo">
                        <Logo />
                    </div>
                    <div className="content">
                        <div className="input">
                            <div className="inner">
                                <h1>{t('seleccion.opcional')}</h1>
                                <h3>{t('seleccion.explicacion')}</h3>
                                <div className="formulario">
                                    <textarea
                                        rows="5" cols="50"
                                        placeholder={t('seleccion.mensaje')}
                                        className="mensaje"
                                        ref={descripcion}
                                        defaultValue={(data && data.descripcion) || ''}
                                        onChange={() => guardarDescripcion(descripcion)}
                                    />
                                    {/*<button
                                    onClick={() => guardarDescripcion(descripcion)}
                                    disabled={processing}
                                    style={{ marginBottom: "20px" }} 
                                    className="boton-enviar">
                                    {json.guardar}
                                </button>*/}
                                    <button
                                        onClick={() => finalizarSelec()}
                                        className="boton-enviar">
                                        {t('seleccion.enviar')}
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="botones">
                            <button
                                onClick={() => seleccionarTodo(true)}
                                disabled={processing}
                            >
                                {t('seleccion.selecTodo')}
                            </button>
                            <button
                                onClick={() => seleccionarTodo(false)}
                                disabled={processing}
                            >
                                {t('seleccion.deselecTodo')}
                            </button>
                        </div>
                    </div>
                </div>
                <AlertDialog
                    titulo={dialogoTitulo}
                    mensaje={dialogoMensaje}
                    open={open}
                    setOpen={setOpen}
                />
            </div>
        </>


    );
}

export default Cliente;