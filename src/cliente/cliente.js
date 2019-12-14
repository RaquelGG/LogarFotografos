import React, { useEffect, useState } from 'react';
import Menu from "../common/menu/menu"
import logo from "../acceso/img/logo.svg"
import { obtenerGaleria } from "../common/conexion";
import Loader from '../common/loader/loader';
//import Gallery from 'react-grid-gallery';
import dialogo from './dialogo.svg';
import traduccion from "../traduccion/es/common.json";
import "./cliente.scss";

export function Cliente() {

    /* --- Galería --- */

    const [images, setImages] = useState(null);

    /*useEffect(() => {
        async function fetchData() {
            useEffect(async () => setImages(await obtenerGaleria(1)), []);
        }
        fetchData();
    }, []);*/

    

    /* --------------- */

    /* --- JSON --- */
    const json = traduccion.eleccion;
    /* ------------ */

    /* --- Animación cliente --- */
    function abrir_dialogo () {
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
            <Menu size_logo = {"124px"} logo={logo} is_seleccion={true}/>
            <div className="fake-burger" onClick={abrir_dialogo}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
            <div className="burger-dialogo" onClick={abrir_dialogo}>
                <img src={dialogo}/>
            </div>
            {
                /*images
                ? <Gallery className="galeria" images={images} enableImageSelection={true} />
                : <Loader className="galeria"/>*/
            }
            <div className="dialogo">
                <div className="content"> 
                    <div className="input">
                        <h1>{json.opcional}</h1>
                        <h3>{json.explicacion}</h3>
                        <form>
                            <textarea rows="5" cols="50" placeholder={json.mensaje} className="mensaje"/>
                            <input type="submit" className="boton-enviar" value={json.enviar} />
                        </form>
                    </div>
                    <div className="botones">
                        <div>{json.selecTodo}</div>
                        <div>{json.deselecTodo}</div>
                    </div>  
                </div>
            </div>
        </div>
    );
}

export default Cliente;