import React from 'react';
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"
import "./precios.scss";
import cuadrado_tick from "./img/cuadrado_tick.svg"
import cuadrado_cruz from "./img/cuadrado_cruz.svg"
import flecha from "./img/flecha.svg"

// Traduccion 
import { useTranslation } from 'react-i18next';

function Precios() {

    const {t, i18n } = useTranslation();

    return (
        <div className="content_precios">
            <Imagen_fondo id_foto={2} />
            
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
                            <div className="alinear_fondo opcion_1">
                                <h2 className="subtitulo">{t('precios.opcion1.titulo')}</h2>
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
                            <div className="fondo_giro1"></div>
                            <div className="fondo_giro2"></div>
                            <div className="precios">
                                <h2 className="subtitulo opcion_1_precio">{t('precios.opcion1.precioFoto')}</h2>
                                <h2 className="subtitulo opcion_1_precio">{t('precios.opcion1.precioVideo')}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="carta sombra">
                        
                        <div className="opcion f_opcion">
                            <div className="fondo_opcion_color alinear_fondo opcion_2">
                                <h2 className="subtitulo">{t('precios.opcion2.titulo')}</h2>
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
                            <div className="fondo_giro1"></div>
                            <div className="fondo_giro2"></div>
                            <div className="precios">

                                <h2 className="subtitulo opcion_2_precio">{t('precios.opcion2.precioFoto')}</h2>
                                <h2 className="subtitulo opcion_2_precio">{t('precios.opcion2.precioVideo')}</h2>
                            </div>
                        </div>
                    </div>

                    <div className="carta sombra">
                        <div className="opcion f_opcion">
                            <div className="fondo_opcion_color alinear_fondo opcion_3">
                                <h2 className="subtitulo">{t('precios.opcion3.titulo')}</h2>
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
                            <div className="fondo_giro1"></div>
                            <div className="fondo_giro2"></div>
                            <div className="precios">
                                <h2 className="subtitulo opcion_3_precio">{t('precios.opcion3.precioFoto')}</h2>
                                <h2 className="subtitulo opcion_3_precio">{t('precios.opcion3.precioVideo')}</h2>
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