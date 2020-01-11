let ruta = process.env.NODE_ENV === "production" ? 'https://pruebas.logarfotografos.es' : 'http://localhost/sentencias';
//const ruta = 'https://pruebas.logarfotografos.es';
ruta += '/administrador/galeria';


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