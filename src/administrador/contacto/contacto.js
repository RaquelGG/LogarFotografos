import React from 'react';
import ImagenFondo from "../../common/imagen_fondo/imagen_fondo"
import ubicacion from "./iconos/ubicacion.svg"
import correo from "./iconos/email.svg"
import telefono from "./iconos/telefono.svg"
import whatsapp from "./iconos/whatsapp.svg"
import facebook from "./iconos/facebook.svg"
import bodasnet from "./iconos/bodasnet.svg"
import Enlace from '@material-ui/icons/Link';
import traduccion from "../../traduccion/es/common.json"
import AdminEdicion from "../../common/admin/admin_edicion";
import "../../common/admin/contacto/contacto.scss";
import { makeStyles } from '@material-ui/core';

function Contacto({history}) {
    if (!window.session.user || !window.session.pass || !window.session.admin) {
        history.push("/acceso");
    }

    const json = traduccion.contacto;

    const useStyles = makeStyles({
        root: {
            paddingLeft: '10px'
        },
    });

    const classes = useStyles();
    let contenido = window.session.contenidoVariable;


    //const { t, i18n } = this.props;
    return (
        <div className="content-contacto">
            <ImagenFondo id_foto={3} />
            <AdminEdicion id_foto={3} />

            <div className="info-contacto">
                <div className="cuadro-giro-superior sombra"> </div>
                <div className="info-contacto-cuadro" >

                    <div className="info-contacto-cuadro-informacion">
                        <div className="info-contacto-cuadro-informacion-datos">
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
                                    <td><img src={ubicacion} alt="Enlace a dirección de Google Maps" className="icono" /></td>
                                    <td className="titulo">DIRECCIÓN</td>
                                    <td><input
                                        onChange={() => window.session.contenidoVariable.contacto.tabla.direccion = document.getElementsByName("direccion")[0].value}
                                        type="text"
                                        name="direccion"
                                        defaultValue={contenido.contacto.tabla.direccion}
                                        className="admin input-data"
                                    /></td>

                                    <td><Enlace className={classes.root} /></td>
                                    <td><input
                                        type="text"
                                        onChange={() => window.session.contenidoVariable.contacto.tabla.direccionUrl = document.getElementsByName("direccionUrl")[0].value}
                                        name="direccionUrl"
                                        defaultValue={json.tabla.direccionUrl}
                                        className="admin input-url"
                                    /></td>
                                </tr>
                                <tr>
                                    <td><img src={correo} alt="Enlace a email" className="icono" /></td>
                                    <td className="titulo">CORREO</td>
                                    <td><input type="text"
                                        onChange={() => window.session.contenidoVariable.contacto.tabla.correo = document.getElementsByName("correo")[0].value}
                                        name="correo"
                                        defaultValue={contenido.contacto.tabla.correo}
                                        className="admin input-data"
                                    /></td>
                                </tr>
                                <tr>
                                    <td><img src={telefono} alt="Número de telefono" className="icono" /></td>
                                    <td className="titulo">TELÉFONO</td>
                                    <td><input type="text"
                                        onChange={() => window.session.contenidoVariable.contacto.tabla.telefono = document.getElementsByName("telefono")[0].value}
                                        name="telefono"
                                        defaultValue={contenido.contacto.tabla.telefono}
                                        className="admin input-data"
                                    /></td>
                                </tr>
                                <tr>
                                    <td><img src={whatsapp} alt="Número de whatsapp" className="icono" /></td>
                                    <td className="titulo">WHATSAPP</td>
                                    <td><input type="text"
                                        onChange={() => window.session.contenidoVariable.contacto.tabla.whatsapp = document.getElementsByName("whatsapp")[0].value}
                                        name="whatsapp"
                                        defaultValue={contenido.contacto.tabla.whatsapp}
                                        className="admin input-data"
                                    /></td>
                                </tr>
                                <tr>
                                    <td><img src={facebook} alt="Enlace a página de facebook" className="icono" /></td>
                                    <td className="titulo">FACEBOOK</td>
                                    <td><input type="text"
                                        onChange={() => window.session.contenidoVariable.contacto.tabla.facebook = document.getElementsByName("facebook")[0].value}
                                        name="facebook"
                                        defaultValue={contenido.contacto.tabla.facebook}
                                        className="admin input-data"
                                    /></td>
                                    <td><Enlace className={classes.root} /></td>
                                    <td><input id="dir"
                                        type="text"
                                        onChange={() => window.session.contenidoVariable.contacto.tabla.facebookUrl = document.getElementsByName("facebookUrl")[0].value}
                                        name="facebookUrl"
                                        defaultValue={contenido.contacto.tabla.facebookUrl}
                                        className="admin input-url"
                                    /></td>
                                </tr>
                                <tr>
                                    <td><img src={bodasnet} alt="Enlace a página de bodas.net" className="icono" /></td>
                                    <td className="titulo">BODAS.NET</td>
                                    <td><input type="text"
                                        onChange={() => window.session.contenidoVariable.contacto.tabla.bodasNet = document.getElementsByName("bodasNet")[0].value}
                                        name="bodasNet"
                                        defaultValue={contenido.contacto.tabla.bodasNet}
                                        className="admin input-data"
                                    /></td>
                                    <td><Enlace className={classes.root} /></td>
                                    <td><input type="text"
                                        onChange={() => window.session.contenidoVariable.contacto.tabla.bodasNetUrl = document.getElementsByName("bodasNetUrl")[0].value}
                                        name="bodasNetUrl"
                                        defaultValue={contenido.contacto.tabla.bodasNetUrl}
                                        className="admin input-url"
                                    /></td>
                                </tr>
                            </table>
                        </div>
                        <div className="img_dueno" />
                    </div>
                    <div className="fake">

                    </div>
                    <div className="cuadro-giro-2 sombra"></div>
                    <div className="cuadro-giro-3 sombra"></div>
                </div>
            </div>
        </div>
    );
}

export default Contacto;