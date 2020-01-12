import React from 'react';
import "./acceso.scss";
import {Link} from 'react-router-dom';
import {comprobarUsuario, comprobarAdmin} from '../common/conexion';
import Imagen_fondo from '../common/imagen_fondo/imagen_fondo';

function Acceso({match, history}) {
    const {usuario} = match.params;
    let user = React.createRef();
    let pass = React.createRef();
    

    // Comprueba si el usuario existe
    async function acceder() {
        const u = user.current.value;
        const p = pass.current.value;

        if (await comprobarAdmin(u, p)) {
            window.session = {
                user: u,
                pass: p,
                admin: true,
            };
            history.push("/admin"); // Si es admin
        } else if (await comprobarUsuario(u, p)) {
            window.session = {
                user: u,
                pass: p,
                admin: false,
            };
            history.push("/seleccion");// Si es un cliente
        }
        
    }


    return (
        <div className="content_acceso">
            <Imagen_fondo id_foto={1}/>
            <div className="acceso sombra">
                <div className="logo"></div>
                <input type="text" ref={user} className="inp" placeholder="USUARIO" defaultValue={usuario}/>
                <input type="password" ref={pass} className="inp" placeholder="CONTRASEÑA"/>
                <button className="button" onClick={() => acceder()}>Acceder</button>
                <Link to="/"  className="volver">
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