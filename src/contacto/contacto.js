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
import "./contacto.scss";

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

    const admin = false;
    const json = traduccion.contacto;

    //const { t, i18n } = this.props;
    return (
        <div className = "content-contacto">
            <Imagen_fondo id_fondo={3} />

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
                                        <h1 className={admin ? 'none' : null}>{json.titulo}</h1>
                                        <input type="text" name="titulo" defaultValue={json.titulo} className={admin ? 'admin input-title' : 'none'}/>
                                    </th>
                                </tr>
                                <tr>
                                    <th colSpan="3">
                                        <h3 className={admin ? 'none' : null}>{json.subtitulo}</h3>
                                        <input type="text" name="subtitulo" defaultValue={json.subtitulo} className={admin ? 'admin input-subtitle' : 'none'}/>
                                    </th>
                                </tr>
                                <tr>
                                    <td><img src = {ubicacion} className = "icono"/></td>
                                    <td className = "titulo">DIRECCIÓN</td>
                                    <td className = {admin ? 'none' : 'datos'}>{json.tabla.direccion}</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.direccion} className={admin ? 'admin input-data' : 'none'}/></td>
                                </tr>
                                <tr>
                                    <td><img src = {correo} className = "icono"/></td>
                                    <td className = "titulo">CORREO</td>
                                    <td className = {admin ? 'none' : 'datos'}>{json.tabla.correo}</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.correo} className={admin ? 'admin input-data' : 'none'}/></td>
                                </tr>
                                <tr>
                                    <td><img src = {telefono} className = "icono"/></td>
                                    <td className = "titulo">TELÉFONO</td>
                                    <td className = {admin ? 'none' : 'datos'}>{json.tabla.telefono}</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.telefono} className={admin ? 'admin input-data' : 'none'}/></td>
                                </tr>
                                <tr>
                                    <td><img src = {whatsapp} className = "icono"/></td>
                                    <td className = "titulo">WHATSAPP</td>
                                    <td className = {admin ? 'none' : 'datos'}>{json.tabla.whatsapp}</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.whatsapp} className={admin ? 'admin input-data' : 'none'}/></td>
                                </tr>
                                <tr>
                                    <td><img src = {facebook} className = "icono"/></td>
                                    <td className = "titulo">FACEBOOK</td>
                                    <td className = {admin ? 'none' : 'datos'}>{json.tabla.facebook}</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.facebook} className={admin ? 'admin input-data' : 'none'}/></td>
                                </tr>
                                <tr>
                                    <td><img src = {bodasnet} className = "icono"/></td>
                                    <td className = "titulo">BODAS.NET</td>
                                    <td className = {admin ? 'none' : 'datos'}>{json.tabla.bodasNet}</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.bodasNet} className={admin ? 'admin input-data' : 'none'}/></td>
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
                        <h1>ENVIAR UN MENSAJE</h1>
                        <form>
                            <input type="text" placeholder="Nombre"name="nombre" className = "nombre"  />
                            <input type="email" placeholder="Correo válido" name="email" className="email"/>
                            <textarea rows="5" cols="50" placeholder="Mensaje" name="mensaje" className="mensaje" />
                            <input type="submit" className="enviar" value="ENVIAR MENSAJE"/>
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