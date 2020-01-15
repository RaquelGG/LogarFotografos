import React, { Link } from "react";
import facebook from './img/facebook-icon.svg';
import email from './img/email-icon.svg';
import whatsapp from './img/whatsapp-icon.svg';
import "./redes.scss";
import texto from '../editable.json'
import '../estilos_comunes.scss';


function Redes() {
    let facebook_ref = "";
    let whatsapp_ref = "";

    if (window.session.contenidoVariable) {
        const resultado = window.session.contenidoVariable;
        const contenidoV = resultado.contacto;
        facebook_ref = contenidoV.tabla.facebookUrl;
        whatsapp_ref = contenidoV.tabla.whatsapp;
    } else {
        const resultado = texto;
        const contenidoV = resultado.contacto;
        facebook_ref = contenidoV.tabla.facebookUrl;
        whatsapp_ref = contenidoV.tabla.whatsapp;

    }

    function agitar() {
        const div = document.getElementById("enviarCorreo");
        if (div) {
            div.style.animationName = "agitar";
            setTimeout(() => {
                div.style.animationName = "";
            }, 1000);
        }

    }


    function share(destino) {
        if (destino.includes('facebook')) {
            window.open(facebook_ref);
        } else if (destino.includes('email')) {
            console.log("state: ", window.history.state);
            if (!((window.history.state) == "/contacto")) {
                window.history.replaceState("/contacto", "Contacto", "/contacto");
                window.history.go(0);
            }
            agitar();
        } else {
            window.open("https://api.whatsapp.com/send?phone=" + whatsapp_ref);
        }
    }

    return (
        <>
            <img className="puntero" onClick={() => share("facebook")} src={facebook} alt="facebook" />
            <img id="icono_id" className="puntero" onClick={() => share("email")} src={email} alt="email" />
            <img className="puntero" onClick={() => share("whatsapp")} src={whatsapp} alt="whatsApp" />
        </>
    );
}

export default Redes;