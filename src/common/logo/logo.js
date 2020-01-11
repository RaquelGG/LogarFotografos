import React from "react";
import "./logo.scss";

function Logo() {

    function isSeleccion () {
        return window.location.href.includes('seleccion');
    }

    return (
        //entre llaves se pone javascript
        //<img className="logo-logar" src={!!other_logo ? other_logo : logo} width={size_logo} />
        <div className={isSeleccion() ? "logo-logar negro" : "logo-logar blanco"}/>
    );
}

export default Logo;
