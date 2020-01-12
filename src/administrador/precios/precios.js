import React from 'react';
import ImagenFondo from "../../common/imagen_fondo/imagen_fondo"
import "../../common/admin/precios/precios.scss";
import "../../common/estilos_comunes.scss";
import cuadrado_tick from "../../common/admin/precios/img/cuadrado_tick.svg"
import cuadrado_cruz from "../../common/admin/precios/img/cuadrado_cruz.svg"
import flecha from "../../common/admin/precios/img/flecha.svg"
import AdminEdicion from "../../common/admin/admin_edicion"
import { editarJson } from '../conexion'

// Traduccion 
import { useTranslation } from 'react-i18next';

function Precios({history}) {
    if (!window.session.user || !window.session.pass || !window.session.admin) {
        history.push("/acceso");
    }

    const {t} = useTranslation();
    let contenido = window.session.contenidoVariable;

    async function cambioContenido() {
        await editarJson(contenido);
    }

    return (
        <div className="content_precios">
            <ImagenFondo id_foto={2} />
            <AdminEdicion />

            <div className="resto_contenido">
                <div className="fondo_titulo">

                    <div className="fondo_titulo_giro1"></div>
                    <div className="fondo_titulo_giro2"></div>
                    <div className="alinear_titulo">
                        <h1 className="titulo sombra_texto">{t('precios.titulo')}</h1>
                        <span className="puntero" onClick={() => history.push("/admin/galeria/bodas")} ><li className="sombra_texto">{t('precios.verFotosBodas')}</li><img src={flecha} className="flecha" /></span>
                    </div>
                </div>
                <div className="opciones">
                    <div className="carta">

                        <div className="opcion">
                            <div className="alinear_fondo opcion_1_admin color_1">
                                <input type="text" 
                                    className="subtitulo sub_1"
                                    name = "titulo1"
                                    defaultValue={contenido.precios.opcion1.titulo}
                                    onChange={() => contenido.precios.opcion1.titulo = document.getElementsByName("titulo1")[0].value}
                                />
                            
                            </div>

                            <div className="fondo_blanco">
                                <ul>
                                    <div>
                                        <span className="alinear"><img src={cuadrado_tick} alt="Fotos de ceremonia incluidas" className="opcion_1 imagen_lista" /><li>{t('precios.ceremonia')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} alt="Fotos exteriores incluidas"  className="opcion_1 imagen_lista" /><li>{t('precios.exterior')}</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} alt="Fotos en casa de novios no incluidas" className="opcion_1 imagen_lista" /><li>{t('precios.casaNovios')}</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} alt="Fotos en cóctel no incluidas" className="opcion_1 imagen_lista" /><li>{t('precios.coctel')}</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} alt="Fotos hasta baile nupcial no incluidas" className="opcion_1 imagen_lista" /><li>{t('precios.celebracion')}</li></span>
                                    </div>
                                </ul>
                            </div>

                        </div>

                        <div className="fondo_triangulo"></div>
                        <div className="fondo_precios alinear_fondo">
                            <div className="fondo_giro1">
                                <div className="precios_admin">
                                    <input type="text"
                                        className="subtitulo opcion_1_precio_admin color1"
                                        defaultValue={contenido.precios.opcion1.precioFoto}
                                        name="opcion1PrecioFoto"
                                        onChange={() => contenido.precios.opcion1.precioFoto = document.getElementsByName("opcion1PrecioFoto")[0].value}

                                    />
                                    <input type="text"
                                        className="subtitulo opcion_1_precio_admin color1"
                                        defaultValue={contenido.precios.opcion1.precioVideo}
                                        name="opcion2PrecioVideo"
                                        onChange={() => contenido.precios.opcion1.precioVideo = document.getElementsByName("opcion2PrecioVideo")[0].value}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carta sombra">

                        <div className="opcion f_opcion">
                            <div className="alinear_fondo opcion_1_admin color_2">
                                <input type="text" 
                                    className="subtitulo sub_2" 
                                    defaultValue={contenido.precios.opcion2.titulo}
                                    name = "titulo2"
                                    onChange={() => contenido.precios.opcion2.titulo = document.getElementsByName("titulo2")[0].value}

                                />
                            </div>
                            <div className="fondo_blanco">
                                <ul>
                                    <div>
                                        <span className="alinear"><img src={cuadrado_tick} alt="Fotos de ceremonia incluidas" className="opcion_2 imagen_lista" /><li>{t('precios.ceremonia')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} alt="Fotos exteriores incluidas"  className="opcion_2 imagen_lista" /><li>{t('precios.exterior')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} alt="Fotos en casa de novios incluidas" className="opcion_2 imagen_lista" /><li>{t('precios.casaNovios')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} alt="Fotos en cóctel incluidas" className="opcion_2 imagen_lista" /><li>{t('precios.coctel')}</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} alt="Fotos hasta baile nupcial incluidas" className="opcion_2 imagen_lista" /><li>{t('precios.celebracion')}</li></span>
                                    </div>
                                    <div className="cont_der">
                                        <li className="regalo">{t('precios.regalo')}</li>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_2 imagen_lista" /><li>{t('precios.preboda')}</li></span>
                                        <span  onClick={() => history.push("/admin/galeria/prebodas")} className="ver_fotos puntero"><li>{t('precios.verFotosPrebodas')}</li><img src={flecha} className="flecha" /></span>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="fondo_triangulo"></div>
                        <div className="fondo_precios alinear_fondo">
                            <div className="fondo_giro1">
                                <div className="precios_admin">
                                    <input type="text"
                                        className="subtitulo opcion_1_precio_admin color2"
                                        defaultValue={contenido.precios.opcion2.precioFoto}
                                        name="opcion2PrecioFoto"
                                        onChange={() => contenido.precios.opcion2.precioFoto = document.getElementsByName("opcion2PrecioFoto")[0].value}

                                    />
                                    <input type="text"
                                        className="subtitulo opcion_1_precio_admin color2"
                                        defaultValue={contenido.precios.opcion2.precioVideo}
                                        name="opcion2PrecioVideo"
                                        onChange={() => contenido.precios.opcion2.precioVideo = document.getElementsByName("opcion2PrecioVideo")[0].value}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carta sombra">
                        <div className="opcion f_opcion">
                            <div className="alinear_fondo opcion_1_admin color_3">
                                <input type="text" 
                                className="subtitulo sub_3" 
                                defaultValue={contenido.precios.opcion3.titulo}
                                name = "titulo3"
                                onChange={() => contenido.precios.opcion3.titulo = document.getElementsByName("titulo3")[0].value}

                                />
                            </div>
                            <div className="fondo_blanco">
                                <ul>
                                    <div>
                                        <span className="alinear"><img src={cuadrado_tick} alt="Fotos de ceremonia incluidas" className="opcion_3 imagen_lista" /><li>{t('precios.ceremonia')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} alt="Fotos exteriores incluidas"  className="opcion_3 imagen_lista" /><li>{t('precios.exterior')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} alt="Fotos en casa de novios incluidas" className="opcion_3 imagen_lista" /><li>{t('precios.casaNovios')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} alt="Fotos en cóctel incluidas" className="opcion_3 imagen_lista" /><li>{t('precios.coctel')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} alt="Fotos hasta baile nupcial incluidas" className="opcion_3 imagen_lista" /><li>{t('precios.celebracion')}</li></span>
                                    </div>
                                    <div className="cont_der">
                                        <li className="regalo">{t('precios.regalo')}</li>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista" /><li>{t('precios.preboda')}</li></span>
                                        <span  onClick={() => history.push("/admin/galeria/prebodas")} className="ver_fotos puntero"><li>{t('precios.verFotosPrebodas')}</li><img src={flecha} className="flecha" /></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista" /><li>{t('precios.postboda')}</li></span>
                                        <span  onClick={() => history.push("/admin/galeria/postbodas")} className="ver_fotos puntero"><li>{t('precios.verFotosPostbodas')}</li><img src={flecha} className="flecha" /></span>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="fondo_triangulo"></div>
                        <div className="fondo_precios alinear_fondo">
                            <div className="fondo_giro1">
                                <div className="precios_admin">
                                    <input type="text"
                                        className="subtitulo opcion_1_precio_admin color3"
                                        defaultValue={contenido.precios.opcion3.precioFoto}
                                        name="opcion3PrecioFoto"
                                        onChange={() => contenido.precios.opcion3.precioFoto = document.getElementsByName("opcion3PrecioFoto")[0].value}

                                    />
                                    <input type="text"
                                        className="subtitulo opcion_1_precio_admin color3"
                                        defaultValue={contenido.precios.opcion3.precioVideo}
                                        name="opcion3PrecioVideo"
                                        onChange={() => contenido.precios.opcion3.precioVideo = document.getElementsByName("opcion3PrecioVideo")[0].value}

                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="regalo_video">
                        <div className="flecha_precio"></div>
                        <h2>{t('precios.textoRegalo')}</h2>
                        <div className="discontinua"></div>
                    </div>
                    <div className="notas">
                        <div className="dec_pag_1 sombra"></div>
                        <div className="dec_pag_2 sombra"></div>
                        <div className="dec_pag_3 sombra">
                            <h3>{t('precios.texto1')}</h3>
                            <h3>{t('precios.texto2')}</h3>
                            <h3>{t('precios.texto3')}</h3>
                        </div>
                    </div>
                    <button onClick={() => cambioContenido()} className="guardar">Guardar texto</button>
                </div>
            </div>
        </div>

    );
}

export default Precios;