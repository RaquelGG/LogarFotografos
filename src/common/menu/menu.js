import React from 'react';
import Redes from '../redes/redes';
import "../menu/menu.scss";
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';

function Menu ({is_seleccion}) {

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
                    <Logo />
                </div>
                <div className="rutas">
                    <div className="sombra"></div>
                    <ul className="nav-links">
                        <li className="logo-movil">
                            <Logo />
                        </li>
                        <li onClick={navSlide}>
                            <Link to="/">INICIO</Link>
                        </li>
                        <li onClick={navSlide}>
                            <Link to="/precios">PRECIOS</Link>
                        </li>
                        <li onClick={navSlide}>
                            <Link to="/galeria">GALERÍA</Link>
                        </li>
                        <li onClick={navSlide}>
                            <Link to="/contacto">CONTACTO</Link>
                        </li>
                        
                        <li className="terminos-movil">
                            <h3><a>TÉRMINOS DE USO</a>\<a>POLÍTICA DE PRIVACIDAD</a></h3>
                        </li>
                        <li className ="redes-movil">
                            <Redes/>
                        </li>
                    </ul>

                    <div className={(is_seleccion) ? "burger seleccion" : "burger"} onClick={navSlide}>
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