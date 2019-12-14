import React from 'react';
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"
import ubicacion from "./iconos/ubicacion.svg"
import correo from "./iconos/email.svg"
import telefono from "./iconos/telefono.svg"
import whatsapp from "./iconos/whatsapp.svg"
import facebook from "./iconos/facebook.svg"
import bodasnet from "./iconos/bodasnet.svg"
import f_black from "./iconos/facebook-black.svg";
import e_black from "./iconos/email-black.svg";
import w_black from "./iconos/whatsapp-black.svg"
import traduccion from "../traduccion/es/common.json"
import "../common/admin/contacto/contacto.scss";

// Traducción
/*import i18next from 'i18next';

import common_es from "../traduccion/es/common.json";
import common_en from "../traduccion/en/common.json";

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'es',                              // language to use
    resources: {
        es: {
            common: common_es               // 'common' is our custom namespace
        },
        en: {
            common: common_en
        },
    },
});*/

function Contacto() {

    const json = traduccion.contacto;

    /* --- Obtención de los datos ---*/
    const address = json.tabla.direccion;
    const link_address = json.tabla.direccionUrl;
    const link_email = json.tabla.correo;
    const link_tel = json.tabla.telefono;
    const link_what = json.tabla.whatsapp;
    const face = json.tabla.facebook;
    const link_face = json.tabla.facebookUrl;
    const bodasNet = json.tabla.bodasNet;
    const link_bodasNet = json.tabla.bodasNetUrl;
    /* ------------------------------ */

    //const { t, i18n } = this.props;
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
                                        <h1>{json.titulo}</h1>
                                    </th>
                                </tr>
                                <tr>
                                    <th colSpan="3">
                                        <h3>{json.subtitulo}</h3>
                                    </th>
                                </tr>
                                <tr>
                                    <td><img src = {ubicacion} className = "icono"/></td>
                                    <td className = "titulo">{json.tabla.title_direccion}</td>
                                    <td className = "datos"><a href = {link_address}>{address}</a></td>
                                </tr>
                                <tr>
                                    <td><img src = {correo} className = "icono"/></td>
                                    <td className = "titulo">{json.tabla.title_correo}</td>
                                    <td className = "datos"><a href = {"mailto: " + link_email}>{link_email}</a></td>
                                </tr>
                                <tr>
                                    <td><img src = {telefono} className = "icono"/></td>
                                    <td className = "titulo">{json.tabla.title_tel}</td>
                                    <td className = "datos"><a href = {"tel: " + link_tel}>{link_tel}</a></td>
                                </tr>
                                <tr>
                                    <td><img src = {whatsapp} className = "icono"/></td>
                                    <td className = "titulo">{json.tabla.title_whats}</td>
                                    <td className = "datos"><a href={"https://api.whatsapp.com/send?phone=" + link_what }>{link_what}</a></td>
                                </tr>
                                <tr>
                                    <td><img src = {facebook} className = "icono"/></td>
                                    <td className = "titulo">{json.tabla.title_facebook}</td>
                                    <td className = "datos"><a href={link_face}>{face}</a></td>
                                </tr>
                                <tr>
                                    <td><img src = {bodasnet} className = "icono"/></td>
                                    <td className = "titulo">{json.tabla.title_bodasNet}</td>
                                    <td className = "datos"><a href={link_bodasNet}>{bodasNet}</a></td>
                                </tr>
                            </table>
                        </div>
                        <img className="img_dueno" />
                    </div>
                    <div className="fake">

                    </div>

                    <div className = "cuadro-giro-2 sombra"></div>
                    <div className = "cuadro-giro-3 sombra"></div>
                </div>
                

                <div className = "info-contacto-formulario sombra">
                    <div className="cuadro-giro-2-3 sombra"></div>
                    <div className = "info-contacto-formulario-contenido">
                        <h1>{json.formulario.titulo}</h1>
                        <form>
                            <input type="text" placeholder={json.formulario.nombre} name="nombre" className = "nombre"  />
                            <input type="email" placeholder={json.formulario.email} name="email" className="email"/>
                            <textarea rows="5" cols="50" placeholder={json.formulario.mensaje} name="mensaje" className="mensaje" />
                            <input type="submit" className="enviar" value={json.formulario.enviar}/>
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