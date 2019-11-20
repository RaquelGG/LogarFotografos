import React from 'react';
import Redes from '../redes/redes';
import "../menu/menu.scss";
import Logo from '../logo/logo';

function Menu ({size_logo}) {

    return(
        <nav>
            <div className="content-menu">
                <div className="logo">
                    <Logo size_logo={size_logo}/>
                </div>

                <div className="rutas">
                    <div className="sombra"></div>
                    <ul class="nav-links">
                        <li>
                            <a href="#">GALERÍA</a>
                        </li>
                        <li>
                            <a href="#">QUÉ OFRECEMOS</a>
                        </li>
                        <li>
                            <a href="#">CONTACTO</a>
                        </li>
                        <li>
                            <a href="#">NOSOTROS</a>
                        </li>
                    </ul>
                    <div className="redes">
                        <Redes/>
                    </div>

                    <div className="burger">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                </div>
            </div> 
            <h3>TÉRMINOS DE USO \ POLÍTICA DE PRIVACIDAD</h3>
        </nav>
    );
}

export default Menu;