// Comprueba si existe el usuario
export async function comprobarUsuario(user, pass) {
    console.log("Usuario: ", user);
    console.log("Contraseña: ", pass);
    try {
        const response = await fetch(`http://localhost:3213/comprobarUsuario`, {
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
        const response = await fetch(`http://localhost:3213/comprobarAdmin`, {
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