import React, { useState } from 'react';
import ImagenFondo from "../common/imagen_fondo/imagen_fondo"
import ubicacion from "./iconos/ubicacion.svg"
import correo from "./iconos/email.svg"
import telefono from "./iconos/telefono.svg"
import whatsapp from "./iconos/whatsapp.svg"
import facebook from "./iconos/facebook.svg"
import bodasnet from "./iconos/bodasnet.svg"
import f_black from "../common/iconos_black/facebook-black.svg";
import e_black from "../common/iconos_black/email-black.svg";
import w_black from "../common/iconos_black/whatsapp-black.svg"
import "../common/admin/contacto/contacto.scss";
import "../common/estilos_comunes.scss";

// Traducción
import { useTranslation} from 'react-i18next';

function Contacto() {

    const {t} = useTranslation();

    const contenidoV = window.session.contenidoVariable.contacto;

    /* --- Obtención de los datos ---*/
    const address = contenidoV.tabla.direccion;
    const link_address = contenidoV.tabla.direccionUrl;
    const link_email = contenidoV.tabla.correo;
    const link_tel = contenidoV.tabla.telefono;
    const link_what = contenidoV.tabla.whatsapp;
    const face = contenidoV.tabla.facebook;
    const link_face = contenidoV.tabla.facebookUrl;
    const bodasNet = contenidoV.tabla.bodasNet;
    const link_bodasNet = contenidoV.tabla.bodasNetUrl;
    /* ------------------------------ */

    function share (destino) {
        if(destino.includes('maps')) {
            window.open(link_address);
        } else if (destino.includes('face')) {
            window.open(link_face);
        } else {
            window.open(link_bodasNet);
        }
    }

    //const [agitar, setAgitar] = useState(false);
    function agitar() {
        const div = document.getElementById("enviarCorreo");
        div.style.animationName = "agitar";
        setTimeout(() => {
            div.style.animationName = "";
        }, 2000);
    }

    function generarToken() {
       // CryptoJS.MD5("Message");
    }

    return (
        <div className = "content-contacto">
            <ImagenFondo id_foto={3} />

            <div className = "info-contacto">
                <div className = "cuadro-giro-superior sombra"> </div>
                <div className = "info-contacto-cuadro" >

                    <div className = "info-contacto-cuadro-informacion">
                        <div className = "info-contacto-cuadro-informacion-datos">
                            <table>
                                <thead>
                                    <tr>
                                        <th colSpan="3">
                                            {//<h1>{this.props.t('contacto.titulo', { framework: "react-i18next" })}</h1>
                                            }
                                            <h1>{t('contacto.titulo')}</h1>
                                        </th>
                                    </tr>
                                    <tr>
                                        <th colSpan="3">
                                            <h3>{t('contacto.subtitulo')}</h3>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><img alt="Enlace a dirección de Google Maps" src = {ubicacion} className = "icono"/></td>
                                        <td className = "titulo">{t('contacto.tabla.title_direccion')}</td>
                                        <td className = "datos"><a onClick={() => share('maps')}>{address}</a></td>
                                    </tr>
                                    <tr>
                                        <td><img alt="Enlace a correo electronico" src = {correo} className = "icono"/></td>
                                        <td className = "titulo">{t('contacto.tabla.title_correo')}</td>
                                        <td className = "datos">
                                            <a onClick={() => agitar()}>
                                                {link_email}
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><img alt="Número de telefono" src = {telefono} className = "icono"/></td>
                                        <td className = "titulo">{t('contacto.tabla.title_tel')}</td>
                                        <td className = "datos"><a href = {"tel: " + link_tel}>{link_tel}</a></td>
                                    </tr>
                                    <tr>
                                        <td><img alt="Número de Whatsapp" src = {whatsapp} className = "icono"/></td>
                                        <td className = "titulo">{t('contacto.tabla.title_whats')}</td>
                                        <td className = "datos"><a href={"https://api.whatsapp.com/send?phone=" + link_what }>{link_what}</a></td>
                                    </tr>
                                    <tr>
                                        <td><img alt="Enlace a página de facebook" src = {facebook} className = "icono"/></td>
                                        <td className = "titulo">{t('contacto.tabla.title_facebook')}</td>
                                        <td className = "datos"><a onClick={() => share('face')}>{face}</a></td>
                                    </tr>
                                    <tr>
                                        <td><img alt="Enlace a página de bodas.net" src = {bodasnet} className = "icono"/></td>
                                        <td className = "titulo">{t('contacto.tabla.title_bodasNet')}</td>
                                        <td className = "datos"><a onClick={() => share('boda')}>{bodasNet}</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="img_dueno" />
                    </div>
                    <div className="fake"></div>
                    <div className = "cuadro-giro-2 sombra"></div>
                    <div className = "cuadro-giro-3 sombra"></div>
                </div>

                <div id="enviarCorreo" className = "info-contacto-formulario sombra">
                    <div className="cuadro-giro-2-3 sombra"></div>
                    <div className = "info-contacto-formulario-contenido">
                        <h1>{t('contacto.formulario.titulo')}</h1>
                        <form>
                            <input type="text" placeholder={t('contacto.formulario.nombre')} name="nombre" className = "nombre"  />
                            <input type="email" placeholder={t('contacto.formulario.email')} name="email" className="email"/>
                            <textarea rows="5" cols="50" placeholder={t('contacto.formulario.mensaje')} name="mensaje" className="mensaje" />
                            <input type="hidden" name="token" value="d4f3e48f-7ae3-4398-ba24-0dca81383e6c"/>
                            <input type="submit" className="enviar puntero" value={t('contacto.formulario.enviar')}/>
                        </form>
                    </div>
                    <div className="redes">
                            <img src={f_black} alt="Enlace a página de facebook" />
                            <img src={e_black} alt="Enlace a email"/>
                            <img src={w_black} alt="Enlace a número de whatsapp" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;