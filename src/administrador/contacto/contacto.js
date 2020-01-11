import React from 'react';
import Imagen_fondo from "../../common/imagen_fondo/imagen_fondo"
import ubicacion from "./iconos/ubicacion.svg"
import correo from "./iconos/email.svg"
import telefono from "./iconos/telefono.svg"
import whatsapp from "./iconos/whatsapp.svg"
import facebook from "./iconos/facebook.svg"
import bodasnet from "./iconos/bodasnet.svg"
import Enlace from '@material-ui/icons/Link';
import traduccion from "../../traduccion/es/common.json"
import Admin_edicion from "../../common/admin/admin_edicion";
import "../../common/admin/contacto/contacto.scss";
import { makeStyles } from '@material-ui/core';

function Contacto() {

    const json = traduccion.contacto;

    const useStyles = makeStyles({
        root: {
            paddingLeft: '10px'
        },
    });

    const classes = useStyles();

    //const { t, i18n } = this.props;
    return (
        <div className = "content-contacto">
            <Imagen_fondo id_foto={3} />
            <Admin_edicion/>

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
                                        <input type="text" name="titulo" defaultValue={json.titulo} className="admin input-title"/>
                                    </th>
                                </tr>
                                <tr>
                                    <th colSpan="3">
                                        <input type="text" name="subtitulo" defaultValue={json.subtitulo} className="admin input-subtitle"/>
                                    </th>
                                </tr>
                                <tr>
                                    <td><img src = {ubicacion} className = "icono"/></td>
                                    <td className = "titulo">DIRECCIÓN</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.direccion} className="admin input-data"/></td>
                                    <td><Enlace className={classes.root}/></td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.direccionUrl} className="admin input-url"/></td>
                                </tr>
                                <tr>
                                    <td><img src = {correo} className = "icono"/></td>
                                    <td className = "titulo">CORREO</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.correo} className="admin input-data"/></td>
                                </tr>
                                <tr>
                                    <td><img src = {telefono} className = "icono"/></td>
                                    <td className = "titulo">TELÉFONO</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.telefono} className="admin input-data"/></td>
                                </tr>
                                <tr>
                                    <td><img src = {whatsapp} className = "icono"/></td>
                                    <td className = "titulo">WHATSAPP</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.whatsapp} className="admin input-data"/></td>
                                </tr>
                                <tr>
                                    <td><img src = {facebook} className = "icono"/></td>
                                    <td className = "titulo">FACEBOOK</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.facebook} className="admin input-data"/></td>
                                    <td><Enlace className={classes.root}/></td>
                                    <td><input id="dir" type="text" name="direccion" defaultValue={json.tabla.facebookUrl} className="admin input-url"/></td>
                                </tr>
                                <tr>
                                    <td><img src = {bodasnet} className = "icono"/></td>
                                    <td className = "titulo">BODAS.NET</td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.bodasNet} className="admin input-data"/></td>
                                    <td><Enlace className={classes.root}/></td>
                                    <td><input type="text" name="direccion" defaultValue={json.tabla.bodasNetUrl} className="admin input-url"/></td>
                                </tr>
                            </table>
                        </div>
                        <div className="img_dueno" />
                    </div>
                    <div className="fake">

                    </div>

                    <div className = "cuadro-giro-2 sombra"></div>
                    <div className = "cuadro-giro-3 sombra"></div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;