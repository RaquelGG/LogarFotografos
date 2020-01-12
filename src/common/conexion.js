const ruta = process.env.NODE_ENV === "production" ? 'https://pruebas.logarfotografos.es' : 'http://localhost/sentencias';
//const ruta = 'https://pruebas.logarfotografos.es';
// Obtiene la imagen de fondo
export async function obtenerUrlFondo(id_foto, fondo_off) {
    console.log("fondo: ", id_foto);
    try {
        const url = `${ruta}/publico/obtenerUrlFondo.php?id_foto=${id_foto}`;
        console.log("La ruta es: ", url);
        const response = await fetch(url);
        let fondo = await response.text();
        console.log(fondo);
        return fondo;
    } catch(err) {
        console.error("error obteniendo la imagen de fondo:.", err);
        return fondo_off;
    }
}

// Comprueba si existe el usuario
export async function comprobarUsuario(user, pass) {
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
        return respuesta == 1;
    } catch(err) {
        console.error("Nombre de usuario o contraseña incorrecta:", err);
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
        return respuesta == 1;
    } catch(err) {
        console.error("Nombre de usuario o contraseña incorrecta:", err);
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
        console.error("error obteniendo las imagenes:", err);
    }
}
