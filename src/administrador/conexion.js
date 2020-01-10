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
        const response = await fetch(`${ruta}/editarFotoFondo.php`, {
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


// obtener datos selección de una id_boda
export async function obtenerDatosBoda(id_boda) {
    if (!window.session.admin) return null;
    console.log("id_boda", id_boda)
    try {
        const response = await fetch(`${ruta}/seleccion/obtenerDatosBoda.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass,
                id_boda: id_boda
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
        const response = await fetch(`${ruta}/seleccion/subirBoda.php`, {
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

        const response = await fetch(`${ruta}/seleccion/subirFotosBoda.php`, {
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
        const response = await fetch(`${ruta}/seleccion/borrarBoda.php`, {
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


// borrar boda
export async function obtenerIdUsuario(nuevoUser) {
    if (!window.session.admin) return false;
    try {
        const response = await fetch(`${ruta}/seleccion/obtenerIdUsuario.php`, {
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

// Obtiene la galeria de un usuario
export async function obtenerGaleriaPrivada(id_boda) {
    try {
        const response = await fetch(`${ruta}/seleccion/obtenerFotosPrivadas.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass,
                id_boda: id_boda
            }),
        });

        // TODO: recoger imagenes del servidor privado
        const resultado = await response.json();

        const fotos = resultado;//.map(JSON.parse);
        console.log(fotos);
        return fotos;

    } catch(err) {
        console.error("Error obteniendo las imagenes:", err);
    }
}

// SUBIR  FOTO PRIVADA


