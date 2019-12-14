import React, { useEffect, useState, useCallback } from 'react';
import Menu from "../common/menu/menu"
import logo from "../acceso/img/logo.svg"
import { obtenerGaleria } from "../common/conexion";
import Loader from '../common/loader/loader';
import Gallery from "react-photo-gallery";
import dialogo from './dialogo.svg';
import traduccion from "../traduccion/es/common.json";
import "./cliente.scss";
import SelectedImage from "./imagenSeleccionada";
import { obtenerGaleriaPrivada, seleccionarTodoCliente } from "../common/conexion";

export function Cliente() {
    const user = 'user1';
    const pass = 'user1';
    /* --- Galería --- */

    const [images, setImages] = useState(null);
    // Para seleccionar
    const [selectAll, setSelectAll] = useState(-1);
    const [processing, setProcessing] = useState(false);

    // Obtenemos las fotos del servidor
    useEffect(() => {
        async function fetchData() {
            setImages(await obtenerGaleriaPrivada(user, pass))
        }
        fetchData();
    }, []);

    // Para poder seleccionar las imagenes
    const seleccionarTodo = (seleccionar) => {
        if (processing) return;
        setProcessing(true);
        (async () => {
            const resultado = await seleccionarTodoCliente(user, pass, seleccionar);
            if (resultado) setSelectAll(seleccionar ? 1 : 0);
            setProcessing(false);
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

    /* --- JSON --- */
    const json = traduccion.seleccion;
    /* ------------ */

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
            <Menu size_logo={"124px"} logo={logo} is_seleccion={true} />
            <div className="fake-burger" onClick={abrir_dialogo}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="burger-dialogo" onClick={abrir_dialogo}>
                <img src={dialogo} />
            </div>
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
            <div className="dialogo">
                <div className="content">
                    <div className="input">
                        <div className="inner">
                            <h1>{json.opcional}</h1>
                            <h3>{json.explicacion}</h3>
                            <form>
                                <textarea rows="5" cols="50" placeholder={json.mensaje} className="mensaje" />
                                <div style={{ marginBottom: "20px" }} className="boton-enviar">{json.guardar}</div>
                                <input type="submit" className="boton-enviar" value={json.enviar} />
                            </form>
                        </div>
                    </div>
                    <div className="botones">
                        <button
                            onClick={() => seleccionarTodo(true)}
                            disabled={processing}
                        >
                                {json.selecTodo}
                        </button>
                        <button
                            onClick={() => seleccionarTodo(false)}
                            disabled={processing}
                        >
                            {json.deselecTodo}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cliente;