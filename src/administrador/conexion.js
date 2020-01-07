let ruta = process.env.NODE_ENV === "production" ? 'https://pruebas.logarfotografos.es' : 'http://localhost/sentencias';
//const ruta = 'https://pruebas.logarfotografos.es';
ruta += '/administrador';

// Borra una foto pública
export async function borrarFotoPublica(id_foto) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/borrarFotoPublica.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: window.session.user, pass: window.session.pass, id_foto: id_foto})
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// Edita una etiqueta de una foto pública
export async function editarEtiqueta(id_foto, servicio) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/editarEtiqueta.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                id_foto: id_foto,
                servicio: servicio
            })
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// Edita la foto de fondo (cambiando la url)
export async function editarFotoFondo(id_foto, url) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/editarEtiqueta.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                id_foto: id_foto,
                url: url
            })
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// Subir foto pública
export async function subirFotoPublica(url, servicio) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/subirFotoPublica.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                url: url,
                servicio: servicio
            })
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}


/* ----------------------------------------------------------------------------------
                                                ADMINISTRADOR/SELECCION
---------------------------------------------------------------------------------- */

// Borra una foto privada
export async function borrarFotoPrivada(id_foto) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/seleccion/borrarFotoPrivada.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: window.session.user, pass: window.session.pass, id_foto: id_foto})
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// Borra las fotos de una boda
export async function borrarFotosBoda(id_foto) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/seleccion/borrarFotosBoda.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                id_foto: id_foto
            })
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// borrar usuario
export async function borrarUsuario(id_usuario) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/seleccion/borrarUsuario.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                id_usuario: id_usuario
            })
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// crear usuario
export async function crearUsuario(nuevoUser, nuevaPass) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/seleccion/crearUsuario.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                nuevoUser: nuevoUser,
                nuevaPass: nuevaPass
            })
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// crear usuario
export async function comprobarUsuarioExiste(nuevoUser) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/seleccion/comprobarUsuarioExiste.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                nuevoUser: nuevoUser,
            })
        });

        let respuesta = await response.text();
        
        console.log(respuesta);
        return respuesta > 0;
        
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// editar fatos de la selección
export async function editarDatosSeleccion(id_boda, fecha, servicio) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/seleccion/editarDatosSeleccion.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                id_boda: id_boda,
                fecha: fecha,
                servicio: servicio
            })
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// finalizar selección
export async function finalizarSeleccion(id_boda, finalizado) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/seleccion/finalizarSeleccion.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                id_boda: id_boda,
                finalizado: finalizado
            })
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// obtener datos selección
export async function obtenerDatosSeleccion() {
    if (!window.session.admin) return null;
    try {
        const response = await fetch(`${ruta}/seleccion/obtenerDatosSeleccion.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass
            })
        });
        
        const resultado = await response.json();

        const datos = resultado;
        console.log(datos);
        return datos;

    } catch(err) {
        console.error("Error de administrador:", err);
    }
}

// Subir fotos de una boda
export async function subirBoda(nuevoUser, fecha, servicio) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/seleccion/subirBoda.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass,
                nuevoUser, nuevoUser,
                fecha: fecha,
                servicio: servicio
            })
        });
        
        return true;

    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// SUBIR  FOTO PRIVADA