const ruta = process.env.NODE_ENV === "production" ? 'https://pruebas.logarfotografos.es' : 'http://localhost/sentencias';

// Obtiene la imagen de fondo
export async function obtenerUrlFondo(id_foto, fondo_off) {
    try {
        const response = await fetch(`${ruta}/publico/obtenerUrlFondo.php?id_foto=${id_foto}`)
        let fondo = await response.text();
        console.log(fondo);
        return fondo;
    } catch(err) {
        console.error("ERROR: error obteniendo la imagen de fondo.", err);
        return fondo_off;
    }
}

// Comprueba si existe el usuario
export async function comprobarUsuario(user, pass) {
    console.log("Usuario: ", user);
    console.log("Contraseña: ", pass);
    try {
        const response = await fetch(`${ruta}/publico/comprobarUsuario.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user, pass: pass})
        });
        let respuesta = await response.text();
        
        console.log(respuesta);
        return respuesta === 1;
    } catch(err) {
        console.error("ERROR: Nombre de usuario o contraseña incorrecta", err);
    }
    return false;
}

// Comprueba si el usuario es administrador
export async function comprobarAdmin(user, pass) {
    try {
        const response = await fetch(`${ruta}/publico/comprobarAdmin.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: user, pass: pass})
        });
        let respuesta = await response.text();
        console.log(respuesta);
        return respuesta === 1;
    } catch(err) {
        console.error("ERROR: Nombre de usuario o contraseña incorrecta", err);
    }
    return false;
}

// Obtiene la galería
export async function obtenerGaleria() {
    try {
        const response = await fetch(`${ruta}/publico/obtenerFotos.php`)
        const resultado = await response.json();

        const fotos = resultado;//.map(JSON.parse);

        console.log(fotos);
        return fotos;
    } catch(err) {
        console.error("ERROR: error obteniendo las imagenes.", err);
    }
}