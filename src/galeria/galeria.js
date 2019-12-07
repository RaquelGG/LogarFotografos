import { ProGallery } from 'pro-gallery';
import React, {useEffect, useState} from 'react';
import 'pro-gallery/dist/statics/main.css';
import { items } from "./fotos/fotos"; 
import Imagen_fondo from "../common/imagen_fondo/imagen_fondo"
import { options } from "./conf/consts";
import "./galeria.scss";


export function Galeria() {
  
  // The size of the gallery container. The images will fit themselves in it
  const container = {
    width: window.innerWidth,
    height: window.innerHeight
  };

  // The eventsListener will notify you anytime something has happened in the gallery.
  const eventsListener = (eventName, eventData) => console.log({eventName, eventData}); 

  // The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
  const scrollingElement = window;

  return (
    <div className="content_galeria">
      <Imagen_fondo id_fondo={4} size_logo={"200px"}/>
      
      <ProGallery
        items={items}
        //options={options}
        container={container}
        scrollingElement={scrollingElement}
        eventsListener={eventsListener}
        styles={options}
        
        
      />

      </div>
  );
}

  // Enjoy using your new gallery!
  // For more options, visit https://github.com/wix-incubator/pro-gallery

export default Galeria;