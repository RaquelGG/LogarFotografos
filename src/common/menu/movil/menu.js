import React from 'react';
import Logo from "../../logo/logo";
import Redes from '../../redes/redes';
import "../menu.scss";

function Menu ({logoWidth}) {
    return(
        <div className="content-menu">
                <div className="texto">
                <div className="logo">
                    <Logo width={logoWidth}/>
                </div>

                <div className="rutas">
                    <h2>GALERÍA</h2>
                    <h2>QUÉ OFRECEMOS</h2>
                    <h2>CONTACTO</h2>
                    <h2>NOSOTROS</h2>
                    <Redes/>
                </div>
            </div>
            <h3>TÉRMINOS DE USO \ POLÍTICA DE PRIVACIDAD</h3>
        </div>
    );
}

export default Menu;