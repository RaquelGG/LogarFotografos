// Comprueba si existe el usuario
export async function comprobarUsuario(user, pass) {
    console.log("Usuario: ", user);
    console.log("Contraseña: ", pass);
    try {
        const response = await fetch(`https://pruebas.logarfotografos.es/publico/comprobarUsuario.php`, {
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
    } catch {
        console.error("ERROR: Nombre de usuario o contraseña incorrecta");
    }
    return false;
}

// Comprueba si el usuario es administrador
export async function comprobarAdmin(user, pass) {
    try {
        const response = await fetch(`https://pruebas.logarfotografos.es/publico/comprobarAdmin.php`, {
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
    } catch {
        console.error("ERROR: Nombre de usuario o contraseña incorrecta");
    }
    return false;
}

// Obtiene la galería
export async function obtenerGaleria() {
    try {
        const response = await fetch(`https://pruebas.logarfotografos.es/publico/obtenerFotos.php`)
        const resultado = await response.json();

        const fotos = resultado;//.map(JSON.parse);

        console.log(fotos);
        return fotos;
    } catch {
        console.error("ERROR: error obteniendo las imagenes.");
    }
}