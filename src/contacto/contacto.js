import React from 'react';
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"
import ubicacion from "./iconos/ubicacion.svg"
import correo from "./iconos/email.svg"
import telefono from "./iconos/telefono.svg"
import whatsapp from "./iconos/whatsapp.svg"
import facebook from "./iconos/facebook.svg"
import bodasnet from "./iconos/bodasnet.svg"
import f_black from "../common/iconos_black/facebook-black.svg";
import e_black from "../common/iconos_black/email-black.svg";
import w_black from "../common/iconos_black/whatsapp-black.svg"
import traduccion from "../traduccion/es/common.json"
import "../common/admin/contacto/contacto.scss";

// Traducción
import { useTranslation} from 'react-i18next';

function Contacto() {

    const {t, i18n } = useTranslation();

    const json = traduccion.contacto;
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

    return (
        <div className = "content-contacto">
            <Imagen_fondo id_foto={3} />

            <div className = "info-contacto">
                <div className = "cuadro-giro-superior sombra"> </div>
                <div className = "info-contacto-cuadro" >

                    <div className = "info-contacto-cuadro-informacion">
                        <div className = "info-contacto-cuadro-informacion-datos">
                            <table>
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
                                <tr>
                                    <td><img src = {ubicacion} className = "icono"/></td>
                                    <td className = "titulo">{t('contacto.tabla.title_direccion')}</td>
                                    <td className = "datos"><a href = {link_address}>{address}</a></td>
                                </tr>
                                <tr>
                                    <td><img src = {correo} className = "icono"/></td>
                                    <td className = "titulo">{t('contacto.tabla.title_correo')}</td>
                                    <td className = "datos"><a href = {"mailto: " + link_email}>{link_email}</a></td>
                                </tr>
                                <tr>
                                    <td><img src = {telefono} className = "icono"/></td>
                                    <td className = "titulo">{t('contacto.tabla.title_tel')}</td>
                                    <td className = "datos"><a href = {"tel: " + link_tel}>{link_tel}</a></td>
                                </tr>
                                <tr>
                                    <td><img src = {whatsapp} className = "icono"/></td>
                                    <td className = "titulo">{t('contacto.tabla.title_whats')}</td>
                                    <td className = "datos"><a href={"https://api.whatsapp.com/send?phone=" + link_what }>{link_what}</a></td>
                                </tr>
                                <tr>
                                    <td><img src = {facebook} className = "icono"/></td>
                                    <td className = "titulo">{t('contacto.tabla.title_facebook')}</td>
                                    <td className = "datos"><a href={link_face}>{face}</a></td>
                                </tr>
                                <tr>
                                    <td><img src = {bodasnet} className = "icono"/></td>
                                    <td className = "titulo">{t('contacto.tabla.title_bodasNet')}</td>
                                    <td className = "datos"><a href={link_bodasNet}>{bodasNet}</a></td>
                                </tr>
                            </table>
                        </div>
                        <div className="img_dueno" />
                    </div>
                    <div className="fake"></div>
                    <div className = "cuadro-giro-2 sombra"></div>
                    <div className = "cuadro-giro-3 sombra"></div>
                </div>

                <div className = "info-contacto-formulario sombra">
                    <div className="cuadro-giro-2-3 sombra"></div>
                    <div className = "info-contacto-formulario-contenido">
                        <h1>{t('contacto.formulario.titulo')}</h1>
                        <form>
                            <input type="text" placeholder={t('contacto.formulario.nombre')} name="nombre" className = "nombre"  />
                            <input type="email" placeholder={t('contacto.formulario.email')} name="email" className="email"/>
                            <textarea rows="5" cols="50" placeholder={t('contacto.formulario.mensaje')} name="mensaje" className="mensaje" />
                            <input type="submit" className="enviar" value={t('contacto.formulario.enviar')}/>
                        </form>
                    </div>
                    <div className="redes">
                            <img src={f_black}/>
                            <img src={e_black} />
                            <img src={w_black} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;