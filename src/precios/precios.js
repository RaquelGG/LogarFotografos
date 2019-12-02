import React from 'react';
import fondo from "./img/fondo.jpg";
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"
import "./precios.scss";
import cuadrado_tick from "./img/cuadrado_tick.svg"
import cuadrado_cruz from "./img/cuadrado_cruz.svg"
import flecha from "./img/flecha.svg"

function Precios() {
    return (
        <div className="content_precios">
            <Imagen_fondo fondo={fondo} size_logo={"200px"}/>
            
            <div className="resto_contenido">
                <div className="fondo_titulo">
                    
                    <div className="fondo_titulo_giro1"></div>
                    <div className="fondo_titulo_giro2"></div>
                        <div className="alinear_titulo">    
                        <h1 className="titulo sombra_texto">Bodas</h1>
                        <span><li className="sombra_texto">Ver fotos de boda</li><img src={flecha} className="flecha"/></span>
                    </div>
                </div>
                <div className="opciones">
                    <div className="carta">
                        
                        <div className="opcion">
                            <div className="alinear_fondo opcion_1">
                                <h2 className="subtitulo">Opcion 1</h2>
                            </div>
                           
                            <div className="fondo_blanco">
                                <ul>
                                    <div>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_1 imagen_lista"/><li>Ceremonia</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_1 imagen_lista"/><li>Exteriores</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} className="opcion_1 imagen_lista"/><li>Casa novios</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} className="opcion_1 imagen_lista"/><li>Cóctel</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} className="opcion_1 imagen_lista"/><li>Celebración hasta el baile nupcial</li></span>
                                    </div>
                                </ul>
                            </div>
                            
                        </div>

                        <div className="fondo_triangulo"></div>
                        <div className="fondo_precios alinear_fondo">
                            <div className="fondo_giro1"></div>
                            <div className="fondo_giro2"></div>
                            <div className="precios">
                                <h2 className="subtitulo opcion_1_precio">Fotos 295€</h2>
                                <h2 className="subtitulo opcion_1_precio">Vídeo 295€</h2>
                            </div>
                        </div>
                    </div>
                    <div className="carta sombra">
                        
                        <div className="opcion f_opcion">
                            <div className="fondo_opcion_color alinear_fondo opcion_2">
                                <h2 className="subtitulo">Opcion 2</h2>
                            </div>
                            <div className="fondo_blanco">
                                <ul>
                                    <div>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_2 imagen_lista"/><li>Ceremonia</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_2 imagen_lista"/><li>Exteriores</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_2 imagen_lista"/><li>Casa novios</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_2 imagen_lista"/><li>Cóctel</li></span>
                                        <span className="alinear"><img src={cuadrado_cruz} className="opcion_2 imagen_lista"/><li>Celebración hasta el baile nupcial</li></span>
                                    </div>
                                    <div className="cont_der">
                                        <li className="regalo">¡Regalo!</li>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_2 imagen_lista"/><li>Preboda</li></span>
                                        <span className="ver_fotos"><li>Ver fotos de preboda</li><img src={flecha} className="flecha"/></span>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="fondo_triangulo"></div>
                        <div className="fondo_precios alinear_fondo">
                            <div className="fondo_giro1"></div>
                            <div className="fondo_giro2"></div>
                            <div className="precios">

                                <h2 className="subtitulo opcion_2_precio">Fotos 395€</h2>
                                <h2 className="subtitulo opcion_2_precio">Vídeo 550€</h2>
                            </div>
                        </div>
                    </div>

                    <div className="carta sombra">
                        <div className="opcion f_opcion">
                            <div className="fondo_opcion_color alinear_fondo opcion_3">
                                <h2 className="subtitulo">Opcion 3</h2>
                            </div>
                            <div className="fondo_blanco">
                                <ul>
                                    <div>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>Ceremonia</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>Exteriores</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>Casa novios</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>Cóctel</li></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>Celebración hasta el baile nupcial</li></span>
                                    </div>
                                    <div className="cont_der">
                                        <li className="regalo">¡Regalo!</li>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>Preboda</li></span>
                                        <span className="ver_fotos"><li>Ver fotos de preboda</li><img src={flecha} className="flecha"/></span>
                                        <span className="alinear"><img src={cuadrado_tick} className="opcion_3 imagen_lista"/><li>Postboda</li></span>
                                        <span className="ver_fotos"><li>Ver fotos de postboda</li><img src={flecha} className="flecha"/></span>
                                    </div>
                                </ul>
                            </div>
                        </div>

                        <div className="fondo_triangulo"></div>
                        <div className="fondo_precios alinear_fondo">
                            <div className="fondo_giro1"></div>
                            <div className="fondo_giro2"></div>
                            <div className="precios">
                                <h2 className="subtitulo opcion_3_precio">Fotos 495€</h2>
                                <h2 className="subtitulo opcion_3_precio">Vídeo 895€</h2>
                            </div>
                        </div>
                    </div>
                    <div className="regalo_video">
                        <div className="flecha_precio"></div>
                        <h2>¡Regalo con vídeo! Vídeo de agradecimiento para visualizarlo en la celebración</h2>
                        <div className="discontinua"></div>
                    </div>
                    <div className="notas">
                        <div className="dec_pag_1 sombra"></div>
                        <div className="dec_pag_2 sombra"></div>
                        <div className="dec_pag_3 sombra">
                            <h3>* Las fotos se entregarán en alta resolución en un pendrive.</h3>
                            <h3>* Los vídeos se entregarán editados en alta resolución en un pendrive.</h3>
                            <h3>* Para álbumes digitales 30x30cm 30 hojas 295€ más.</h3>
                        </div>
                        
                        
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Precios;