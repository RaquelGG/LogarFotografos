import React from "react";
import facebook from './facebook-icon.svg';
import email from './email-icon.svg';
import whatsapp from './whatsapp-icon.svg';
import "./redes.scss";

function Redes() {
    return (
        <>
            <img src={facebook}/>
            <img src={email}/>
            <img src={whatsapp}/>
        </>
    );
}

export default Redes;