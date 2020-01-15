import React from "react";

const NombreImagen = ({ nombre }) => (
    <div
        style={{
            left: "0", 
            bottom: "0",
            width: "100%",
            position: "absolute", 
            zIndex: "4",
            padding: "5px",
            //backgroundColor: "#2c2c2c9e"
            background: "linear-gradient(to top, rgb(43, 43, 43), transparent)"
        }}
    >
        <p className="sombra_texto" style={{color: "white"}}>{nombre}</p>
    </div>
);

export default NombreImagen;