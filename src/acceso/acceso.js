import React from 'react';
import fondo from "./img/fondo.jpg";
import "./acceso.scss";
import { Link } from 'react-router-dom';

function Acceso({match}) {
    const {usuario} = match.params;
    let user = React.createRef();
    let pass = React.createRef();

    // Comprueba si el usuario existe
    async function comprobarUsuario() {
        console.log("Usuario: ", user.current.value);
        console.log("Contraseña: ", pass.current.value);
        let u = user.current.value;
        let p = pass.current.value;

        try {
            const response = await fetch(`http://localhost:3213/comprobarUsuario`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({user: u, pass: p})
            });
            let respuesta = await response.text();
            console.log(respuesta);
            return respuesta;
        } catch {
            console.error("ERROR: Nombre de usuario o contraseña incorrecta");
        }
        return -1;
    }

    return (
        <div className="content_acceso" style={{backgroundImage: 'url(' + fondo + ')'}}>
            <div className="acceso sombra">
                <div className="logo"></div>
                <input type="text" ref={user} className="inp" placeholder="USUARIO" value={usuario}/>
                <input type="password" ref={pass} className="inp" placeholder="CONTRASEÑA"/>
                <button className="button" onClick={() => comprobarUsuario()}>Acceder</button>
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