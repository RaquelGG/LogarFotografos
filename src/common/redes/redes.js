import React from "react";
import facebook from './img/facebook-icon.svg';
import email from './img/email-icon.svg';
import whatsapp from './img/whatsapp-icon.svg';
import "./redes.scss";

function Redes() {
    return (
        <>
            <img src={facebook} alt="Facebook"/>
            <img src={email} alt="email"/>
            <img src={whatsapp} alt="WhatsApp"/>
        </>
    );
}

export default Redes;