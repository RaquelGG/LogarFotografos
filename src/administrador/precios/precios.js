import React from 'react';
import Imagen_fondo from "../../common/imagen_fondo/imagen_fondo"
import "../../common/admin/precios/precios.scss";
import cuadrado_tick from "../../common/admin/precios/img/cuadrado_tick.svg"
import cuadrado_cruz from "../../common/admin/precios/img/cuadrado_cruz.svg"
import flecha from "../../common/admin/precios/img/flecha.svg"
import AdminEdicion from "../../common/admin/admin_edicion"

// Traduccion 
import { useTranslation } from 'react-i18next';

function Precios() {

    const {t, i18n } = useTranslation();

    return (
        <div className="content_precios">
            <Imagen_fondo id_foto={2} />
            <AdminEdicion />
            
            <div className="resto_contenido">
                <div className="fondo_titulo">
                    
                    <div className="fondo_titulo_giro1"></div>
                    <div className="fondo_titulo_giro2"></div>
                        <div className="alinear_titulo">    
                        <h1 className="titulo sombra_texto">{t('precios.titulo')}</h1>
                        <span><li className="sombra_texto">{t('precios.verFotosBodas')}</li><img src={flecha} className="flecha"/></span>
                    </div>
                </div>
                <div className="opciones">
                    <div className="carta">
                        
                        <div className="opcion">
                            <div className="alinear_fondo opcion_1_admin color_1">
                                <input type="text" className="subtitulo sub_1" defaultValue={t('precios.opcion1.titulo')} />
                            </div>
                           
                            <div className="fondo_blanco">
                                <ul>
                                    <div>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_1 imagen_lista"/><li>{t('precios.ceremonia')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_1 imagen_lista"/><li>{t('precios.exterior')}</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} className="opcion_1 imagen_lista"/><li>{t('precios.casaNovios')}</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} className="opcion_1 imagen_lista"/><li>{t('precios.coctel')}</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} className="opcion_1 imagen_lista"/><li>{t('precios.celebracion')}</li></span>
                                    </div>
                                </ul>
                            </div>
                            
                        </div>

                        <div className="fondo_triangulo"></div>
                        <div className="fondo_precios alinear_fondo">
                            <div className="fondo_giro1">
                                <div className="precios_admin">
                                    <input type="text" className="subtitulo opcion_1_precio_admin color1" defaultValue={t('precios.opcion1.precioFoto')} />
                                    <input type="text" className="subtitulo opcion_1_precio_admin color1" defaultValue={t('precios.opcion1.precioVideo')} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carta sombra">
                        
                        <div className="opcion f_opcion">
                            <div className="alinear_fondo opcion_1_admin color_2">
                                <input type="text" className="subtitulo sub_2" defaultValue={t('precios.opcion2.titulo')} />
                            </div>
                            <div className="fondo_blanco">
                                <ul>
                                    <div>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_2 imagen_lista"/><li>{t('precios.ceremonia')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_2 imagen_lista"/><li>{t('precios.exterior')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_2 imagen_lista"/><li>{t('precios.casaNovios')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_2 imagen_lista"/><li>{t('precios.coctel')}</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} className="opcion_2 imagen_lista"/><li>{t('precios.celebracion')}</li></span>
                                    </div>
                                    <div className="cont_der">
                                        <li className="regalo">{t('precios.regalo')}</li>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_2 imagen_lista"/><li>{t('precios.preboda')}</li></span>
                                        <span className="ver_fotos"><li>{t('precios.verFotosPrebodas')}</li><img src={flecha} className="flecha"/></span>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="fondo_triangulo"></div>
                        <div className="fondo_precios alinear_fondo">
                            <div className="fondo_giro1">
                                <div className="precios_admin">
                                    <input className="subtitulo opcion_1_precio_admin color2" defaultValue={t('precios.opcion2.precioFoto')} />
                                    <input className="subtitulo opcion_1_precio_admin color2" defaultValue={t('precios.opcion2.precioVideo')} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="carta sombra">
                        <div className="opcion f_opcion">
                            <div className="alinear_fondo opcion_1_admin color_3">
                                <input type="text" className="subtitulo sub_3" defaultValue={t('precios.opcion3.titulo')} />
                            </div>
                            <div className="fondo_blanco">
                                <ul>
                                    <div>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>{t('precios.ceremonia')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>{t('precios.exterior')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>{t('precios.casaNovios')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>{t('precios.coctel')}</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>{t('precios.celebracion')}</li></span>
                                    </div>
                                    <div className="cont_der">
                                        <li className="regalo">{t('precios.regalo')}</li>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>{t('precios.preboda')}</li></span>
                                        <span className="ver_fotos"><li>{t('precios.verFotosPrebodas')}</li><img src={flecha} className="flecha"/></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>{t('precios.postboda')}</li></span>
                                        <span className="ver_fotos"><li>{t('precios.verFotosPostbodas')}</li><img src={flecha} className="flecha"/></span>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="fondo_triangulo"></div>
                        <div className="fondo_precios alinear_fondo">
                            <div className="fondo_giro1">
                                <div className="precios_admin">
                                    <input className="subtitulo opcion_1_precio_admin color3" defaultValue={t('precios.opcion3.precioFoto')} />
                                    <input className="subtitulo opcion_1_precio_admin color3" defaultValue={t('precios.opcion3.precioVideo')} />
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
                </div>
            </div>
        </div>

    );
}

export default Precios;