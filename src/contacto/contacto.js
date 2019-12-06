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
import "./contacto.scss";

function Contacto() {
    
    return (
        <div className = "content-contacto">
            <Imagen_fondo fondo={3} size_logo={"198px"}/>

            <div className = "info-contacto">
                <div className = "cuadro-giro-superior sombra"> </div>
                <div className = "info-contacto-cuadro" >

                    <div className = "info-contacto-cuadro-informacion">
                        <div className = "info-contacto-cuadro-informacion-datos">
                            <table>
                                <tr>
                                    <th colSpan="3">
                                        <h1>LOGAR FOTÓGRAFOS</h1>
                                    </th>
                                </tr>
                                <tr>
                                    <th colSpan="3">
                                        <h3>FOTÓGRAFOS PROFESIONALES</h3>
                                    </th>
                                </tr>
                                <tr>
                                    <td><img src = {ubicacion} className = "icono"/></td>
                                    <td className = "titulo">DIRECCIÓN</td>
                                    <td className = "datos">C/SOL Nº1, BERJA, ALMERÍA</td>
                                </tr>
                                <tr>
                                    <td><img src = {correo} className = "icono"/></td>
                                    <td className = "titulo">CORREO</td>
                                    <td className = "datos">LOGARFOTOGRAFOS@LIVE.ES</td>
                                </tr>
                                <tr>
                                    <td><img src = {telefono} className = "icono"/></td>
                                    <td className = "titulo">TELÉFONO</td>
                                    <td className = "datos">(+34) 689 13 77 01</td>
                                </tr>
                                <tr>
                                    <td><img src = {whatsapp} className = "icono"/></td>
                                    <td className = "titulo">WHATSAPP</td>
                                    <td className = "datos">(+34) 609 41 04 71</td>
                                </tr>
                                <tr>
                                    <td><img src = {facebook} className = "icono"/></td>
                                    <td className = "titulo">FACEBOOK</td>
                                    <td className = "datos">LOGAR FOTÓGRAFOS</td>
                                </tr>
                                <tr>
                                    <td><img src = {bodasnet} className = "icono"/></td>
                                    <td className = "titulo">BODAS.NET</td>
                                    <td className = "datos">LOGAR FOTÓGRAFOS</td>
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
                    <div className = "info-contacto-formulario-contenido">
                        <h1>ENVIAR UN MENSAJE</h1>
                        <form>
                            <input type="text" name="nombre" className = "nombre" value="Nombre" />
                            <input type="email" name="email" className="email" value="Correo válido"/>
                            <textarea rows="5" cols="50" name="mensaje" className="mensaje" >Mensaje</textarea>
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