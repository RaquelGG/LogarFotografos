import React from 'react';
import Menu from "../../common/menu/ordenador/menu"
import "../inicio.scss";

function Inicio() {
    return (
        <div className="content">
            {/*<div className="logo">
                <Logo width="550px"/>
            </div>*/}
            <div className="menu">
                <Menu logoWidth="450px" />
            </div>
        </div>
    );
}

export default Inicio;