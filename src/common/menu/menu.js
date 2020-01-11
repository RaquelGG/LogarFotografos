import React from 'react';
import Redes from '../redes/redes';
import "../menu/menu.scss";
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';

// Traduccion 
import { useTranslation } from 'react-i18next';


function Menu ({is_seleccion}) {

    const {t, i18n } = useTranslation();

    let last = '.inicio';

    function navSlide() {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        nav.classList.toggle('nav-active');
        
        if(last != null) quitarBorde(last); // Si se puede mejorar, mejor
    
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

    function manejoInicio () {
        if(!paginaInicio() && tamanoInicio()) {
            return true;
        } else {
            return false;
        }
    }

    function detectarMovil(elemento) {
        if(window.innerWidth <= 800) {
          navSlide();
          const burger = document.querySelector('.burger');
          if(elemento == 'inicio') {
                burger.className = "burger";
          } else {
                burger.className = "burger seleccion";
                burger.style.border = "2px solid #707070";
          }          
          last = '.' + elemento;
        } else {
            setUnderline(elemento);
        }
    }

    function quitarBorde(elemento) {
        const aux = document.querySelector(elemento);
        aux.style.borderBottom="none";
    }

    function setUnderline (elemento) {
        if(last != null && elemento != null) {
           quitarBorde(last);
        }
        elemento = '.' + elemento;

        const link = document.querySelector(elemento);
        
        link.style.borderBottom="4px solid #FEDC03";
        last = elemento;
    }

    /* 
        Control para movil
    */

    function paginaInicio () {
        const pag = window.location.href;
        return  (pag.includes('contacto') || pag.includes('precios') || pag.includes('galeria') || pag.includes('seleccion'));
    }

    function tamanoInicio () {
        const tamano = window.innerWidth;
        return tamano <= 728;
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
                        <li className="inicio" onClick={() => detectarMovil('inicio')} >
                            <Link to="/">{t('menu.inicio')}</Link>
                        </li>
                        <li className="precio" onClick={() => detectarMovil('precio')}>
                            <Link to="/precios">{t('menu.precios')}</Link>
                        </li>
                        <li className="galeria" onClick={() => detectarMovil('galeria')}>
                            <Link to="/galeria">{t('menu.galeria')}</Link>
                        </li>
                        <li className="contacto" onClick={() => detectarMovil('contacto')}>
                            <Link to="/contacto">{t('menu.contacto')}</Link>
                        </li>
                        <li className="terminos-movil">
                            <h3><a>{t('menu.terminos')}</a><div className="linea"><h3>\</h3></div><a>{t('menu.politica')}</a></h3>
                        </li>
                        <li className ="redes-movil">
                            <Redes/>
                        </li>
                    </ul>

                    <div className={manejoInicio() ? "burger" : "burger seleccion"} onClick={navSlide}>
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