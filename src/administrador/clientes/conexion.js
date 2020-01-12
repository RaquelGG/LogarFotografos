let ruta = process.env.NODE_ENV === "production" ? 'https://pruebas.logarfotografos.es' : 'http://localhost/sentencias';
//const ruta = 'https://pruebas.logarfotografos.es';
ruta += '/administrador/seleccion';

/* ----------------------------------------------------------------------------------
                                                ADMINISTRADOR/SELECCION
---------------------------------------------------------------------------------- */

// Borra una foto privada
export async function borrarFotoPrivada(id_foto) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/borrarFotoPrivada.php`, {
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

// borrar usuario
export async function borrarUsuario(id_usuario) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/borrarUsuario.php`, {
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
        const response = await fetch(`${ruta}/crearUsuario.php`, {
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

// comprueba si el usuario existe
export async function comprobarUsuarioExiste(nuevoUser) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/comprobarUsuarioExiste.php`, {
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

// editar fotos de la selección
export async function editarDatosSeleccion(id_boda, fecha, servicio) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/editarDatosSeleccion.php`, {
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
        const response = await fetch(`${ruta}/finalizarSeleccion.php`, {
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
        const response = await fetch(`${ruta}/obtenerDatosSeleccion.php`, {
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

// Subir una boda
export async function subirBoda(id_usuario, fecha, servicio) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/subirBoda.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass,
                id_usuario, id_usuario,
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

// Subir fotos de una boda
export async function subirFotosBoda(fotos, fecha) {
    if (!window.session.admin) return false;
    try {
        const formData = new FormData();
        formData.append("user", window.session.user);
        formData.append("pass", window.session.pass);
        formData.append("fotos", fotos); // En la posición 0; es decir, el primer elemento
        formData.append("fecha", fecha);

        const response = await fetch(`${ruta}/subirFotosBoda.php`, {
            method: 'POST',
            body: formData
            
        });
        
        return true;

    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}

// borrar boda
export async function borrarBoda(id_boda, fecha) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/borrarBoda.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                id_boda: id_boda,
                fecha: fecha
            })
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}


// Obtenemos un id de usuario a partir de su nombre de usuario
export async function obtenerIdUsuario(nuevoUser) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/obtenerIdUsuario.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                nuevoUser: nuevoUser
            })
        });

        const respuesta = await response.text();
        
        console.log(respuesta);
        console.log(window.session.user);
        return respuesta;
        
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return null;
}