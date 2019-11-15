import React from 'react';
import Logo from "../../common/logo/logo";
import MenuIcon from '../../common/menu/menu-icon/menu-icon';
import Redes from '../../common/redes/redes';
import "../inicio.scss";

function Inicio() {
    return (
        <div className="content">
            <div className="menu">
                <MenuIcon/>
            </div>
            <div className="logo">
                <Logo width="250px"/>
            </div>
            <div className="redes">
                <Redes/>
            </div>
        </div>
    );
}

export default Inicio;