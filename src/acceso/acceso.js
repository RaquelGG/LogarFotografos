import React from 'react';
import fondo from "./img/fondo.jpg";
import "./acceso.scss";

function Acceso() {
    return (
        <div className="content_acceso" style={{backgroundImage: 'url(' + fondo + ')'}}>
            <div className="acceso sombra">
                <div className="logo"></div>
                <input type="text" id="user" className="inp" placeholder="USUARIO"/>
                <input type="password" id="pass" className="inp" placeholder="CONTRASEÑA"/>
                <button className="button">Acceder</button>
                <a href=""><h4 className="volver">Volver a la página principal</h4></a>
            </div>
            <div className="triangulo1"></div>
            <div className="triangulo2"></div>
            <div className="triangulo3"></div>
        </div>
    );  
}

export default Acceso;