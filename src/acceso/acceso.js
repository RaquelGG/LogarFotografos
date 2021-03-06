import React, { useState } from 'react';
import "./acceso.scss";
import {Link} from 'react-router-dom';
import {comprobarUsuario, comprobarAdmin} from '../common/conexion';
import ImagenFondo from '../common/imagen_fondo/imagen_fondo';

function Acceso({match, history, setUserType}) {
    const usuario = match.params.usuario;
    let user = React.createRef();
    let pass = React.createRef();

    const [error, setError] = useState(false);
    
    setUserType('acceso');
    // Comprueba si el usuario existe
    async function acceder() {
        const u = user.current.value;
        const p = pass.current.value;

        if (await comprobarAdmin(u, p)) {
            window.session.user = u;
            window.session.pass = p;
            
            window.session.admin = true;

            history.push("/admin"); // Si es admin
            setUserType('admin');
        } else if (await comprobarUsuario(u, p)) {

            window.session.user = u;
            window.session.pass = p;
            window.session.admin = false;
            
            history.push("/seleccion");// Si es un cliente
            setUserType('publico');
        } else {
            setError(true);
        }
    }

    function updateMenu () {
        setUserType('publico');
    }

    return (
        <div className="content_acceso">
            <ImagenFondo id_foto={1}/>
            <div className="acceso sombra">
                <div className="logo"></div>
                <input type="text" ref={user} className="inp" placeholder="USUARIO" defaultValue={usuario}/>
                <input type="password" ref={pass} className="inp" placeholder="CONTRASEÑA"/>
                {
                    error 
                        ? <p className="error">Usuario o contraseña incorrecta</p>
                        : null
                }
                
                <button className="button" onClick={() => acceder()}>Acceder</button>
                <Link to="/" className="volver" onClick={() => updateMenu()}>
                    <h4 className="volver">Volver a la página principal</h4>
                </Link>
            </div>
            <div className="triangulo1"></div>
            <div className="triangulo2"></div>
            <div className="triangulo3"></div>
        </div>
    );  
}

export default Acceso;