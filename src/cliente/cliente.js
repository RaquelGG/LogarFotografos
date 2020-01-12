import React, { useEffect, useState, useCallback } from 'react';
import Loader from '../common/loader/loader';
import Gallery from "react-photo-gallery";
import dialogo from './dialogo.svg';
import "./cliente.scss";
import SelectedImage from "./imagenSeleccionada";
import { 
    finalizarSeleccion,
    seleccionarTodoCliente,
    obtenerDatosCliente,
    guardarDescripcionCliente,
    obtenerDatosFotos,
    obtenerFotoPrivada
} from "./conexion";
// Traducción
import { useTranslation} from 'react-i18next';
import Logo from '../common/logo/logo';

export function Cliente({history}) {
    const {t, i18n } = useTranslation();
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
    


    // Para establecer la descripción
    useEffect(() => {
        async function fetchData() {
            const datos = await obtenerDatosCliente();
            console.log("datos", datos, "antes era", data);
            setData(datos)
        }
        async function fetchImages() {
            const resDataImages = await obtenerDatosFotos();
            const datos = await obtenerDatosCliente();

            const clonedImages = resDataImages.slice();
            await Promise.all(clonedImages.map(
                async img => img.src = await obtenerFotoPrivada(img.alt, datos.fecha)
            ));
            setImages(clonedImages);
            console.log("images:", clonedImages);
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
            setProcessing(false);
        })();
    };

    // Para guardar la descripción
    const guardarDescripcion = (descripcion) => {
        (async () => {
            const resultado = await guardarDescripcionCliente(descripcion.current.value);
            if(resultado) setData(descripcion);
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
                alert("¡Tu selección ha sido enviada correctamente!");
                history.push("/");
                window.session = null;
                //setData(null);
                
            } else {
                alert("Se ha producido un problema. Vuélvalo a intentar más tarde.");
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
        <div className="content">
            {/*<Menu size_logo={"124px"} logo={logo} is_seleccion={true} />*/}
            <div className="fake-burger" onClick={abrir_dialogo}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="burger-dialogo" onClick={abrir_dialogo}>
                <img src={dialogo} />
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
                                    defaultValue={data && data.descripcion || ''}
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
        </div>
    );
}

export default Cliente;