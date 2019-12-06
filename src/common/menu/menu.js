import React, { useState } from 'react';
import Redes from '../redes/redes';
import "../menu/menu.scss";
import Logo from '../logo/logo';
import Precios from '../../precios/precios';

function Menu ({size_logo, logo}) {

    function navSlide() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        nav.classList.toggle('nav-active');
    
        //Animar elementos burger menu
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                burger.style.border="2px solid white";
                link.style.animation = '';
            } else{
                burger.style.border="none";
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        })


        //Animar burger
        burger.classList.toggle('toggle');
    }


    return(
        <nav>
            <div className ="content-menu">
                <div className="logo-pc">
                    <Logo size_logo={size_logo} other_logo={logo}/>
                </div>
                <div className="rutas">
                    <div className="sombra"></div>
                    <ul className="nav-links">
                        <li className="logo-movil">
                            <Logo size_logo={"200px"} other_logo={logo}/>
                        </li>
                        <li>
                            <a href="#">GALERÍA</a>
                        </li>
                        <li>
                            <a href="#">PRECIOS</a>
                        </li>
                        <li>
                            <a href="#">CONTACTO</a>
                        </li>
                        <li>
                            <a href="#">NOSOTROS</a>
                        </li>
                        <li className="terminos-movil">
                            <h3>TÉRMINOS DE USO \ POLÍTICA DE PRIVACIDAD</h3>
                        </li>
                        <li className ="redes-movil">
                            <Redes/>
                        </li>
                    </ul>

                    <div className="burger" onClick={navSlide}>
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Menu;