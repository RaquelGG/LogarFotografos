import React from 'react';
import fondo from "./img/fondo.jpg";
import "./acceso.scss";
import { Link, Redirect } from 'react-router-dom';
import {comprobarUsuario, comprobarAdmin} from '../common/conexion';

function Acceso({match}) {
    const {usuario} = match.params;
    let user = React.createRef();
    let pass = React.createRef();
    

    // Comprueba si el usuario existe
    async function acceder() {
        const u = user.current.value;
        const p = pass.current.value;
        //console.log("Usuario: ", u);
        //console.log("Contraseña: ", p);

        if (await comprobarUsuario(u, p)) {
            if (await comprobarAdmin(u, p)) {
                return <Redirect exact to="/admin"/>; // Si es admin
            }
            return <Redirect exact to="/seleccion"/>;// Si es un cliente
        }
    }

    return (
        <div className="content_acceso" style={{backgroundImage: 'url(' + fondo + ')'}}>
            <div className="acceso sombra">
                <div className="logo"></div>
                <input type="text" ref={user} className="inp" placeholder="USUARIO" value={usuario}/>
                <input type="password" ref={pass} className="inp" placeholder="CONTRASEÑA"/>
                <button className="button" onClick={() => acceder()}>Acceder</button>
                <Link to="/" className="volver">
                    <h4>Volver a la página principal</h4>
                </Link>
            </div>
            <div className="triangulo1"></div>
            <div className="triangulo2"></div>
            <div className="triangulo3"></div>
        </div>
    );  
}

export default Acceso;