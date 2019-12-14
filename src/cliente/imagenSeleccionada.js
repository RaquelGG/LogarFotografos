import React, { useState, useEffect } from "react";
import { seleccionarFotoCliente } from "../common/conexion";
import Checkmark from "./checkmark";


const imgStyle = {
    transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const selectedImgStyle = {
    transform: "translateZ(0px) scale3d(0.9, 0.9, 1)",
    transition: "transform .135s cubic-bezier(0.0,0.0,0.2,1),opacity linear .15s"
};
const cont = {
    backgroundColor: "#eee",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative"
};

const SelectedImage = ({
    index,
    photo,
    margin,
    direction,
    top,
    left,
    selected
}) => {
    const [isSelected, setIsSelected] = useState(selected);
    const [processing, setProcessing] = useState(false);
    //calculate x,y scale
    const sx = (100 - (30 / photo.width) * 100) / 100;
    const sy = (100 - (30 / photo.height) * 100) / 100;
    selectedImgStyle.transform = `translateZ(0px) scale3d(${sx}, ${sy}, 1)`;

    useEffect(() => {
        setIsSelected(selected);
    }, [selected]);

    if (direction === "column") {
        cont.position = "absolute";
        cont.left = left;
        cont.top = top;
    }

    const handleOnClick = e => {
        if (processing) return;
        setProcessing(true);
        // Cambiamos la selección en el servidor
        (async () => {
            const resultado = await seleccionarFotoCliente(photo.key, !isSelected);
            if (resultado) setIsSelected(!isSelected);
            setProcessing(false);
        })();
            
    };

    
    

    useEffect(() => {
        setIsSelected(selected);
    }, [selected]);

    return (
        <div
            style={{ margin, height: photo.height, width: photo.width, ...cont }}
            className={!isSelected ? "not-selected" : ""}
        >
            <Checkmark selected={isSelected} />
            <img
                alt={photo.alt}
                style={
                    isSelected ? { ...imgStyle, ...selectedImgStyle } : { ...imgStyle }
                }
                key={photo.key}
                width={photo.width}
                height={photo.height}
                src={photo.src}
                srcSet={photo.srcSet}
                alt={photo.alt}
                title={photo.alt}
                onClick={handleOnClick}
            />
            <style>{`.not-selected:hover{outline:2px solid #06befa}`}</style>
        </div>
    );
};

export default SelectedImage;
