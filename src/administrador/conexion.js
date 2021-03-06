let ruta = process.env.NODE_ENV === "production" ? 'https://pruebas.logarfotografos.es' : 'http://localhost/sentencias';
//const ruta = 'https://pruebas.logarfotografos.es';
ruta += '/administrador';

// Edita la foto de fondo (cambiando la url)
export async function editarFotoFondo(id_foto, url) {
    if (!window.session.admin) return false;
    console.log("estoy aqui");
    try {
        await fetch(`${ruta}/editarFotoFondo.php`, {
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

// Editar json con texto variable
export async function editarJson() {
    if (!window.session.admin) return false;
    try {
        await fetch(`${ruta}/editarJson.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user, 
                pass: window.session.pass, 
                jsn:  window.session.contenidoVariable
            })
        });
        
        return true;
    } catch(err) {
        console.error("Error de administrador:", err);
    }
    return false;
}
