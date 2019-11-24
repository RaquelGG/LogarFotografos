import React from 'react';
import fondo from "./fondo.jpg";
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"
import ubicacion from "./iconos/ubicacion.svg"
import correo from "./iconos/email.svg"
import telefono from "./iconos/telefono.svg"
import whatsapp from "./iconos/whatsapp.svg"
import facebook from "./iconos/facebook.svg"
import bodasnet from "./iconos/bodasnet.svg"
import prov from "./fondo_prov.png"
import "./contacto.scss";

function Contacto() {
    
    return (
        <div className = "content-contacto">
            <Imagen_fondo fondo={fondo} size_logo={"198px"}/>

            <div className = "info-contacto">
                <div className = "cuadro-giro-superior"> </div>
                <div className = "info-contacto-cuadro sombra" >

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
                    </div>
                
                    <img src = {prov} />
                </div>
                <div className = "cuadro-giro-2 sombra"></div>
                <div className = "cuadro-giro-3 sombra"></div>
            </div>
        </div>
    );
}

export default Contacto;