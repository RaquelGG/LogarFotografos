let ruta = process.env.NODE_ENV === "production" ? 'https://pruebas.logarfotografos.es' : 'http://localhost/sentencias';
//const ruta = 'https://pruebas.logarfotografos.es';
ruta += '/cliente';

// Obtiene la galeria de un usuario
export async function obtenerDatosFotos(id_boda) {
    try {
        const response = await fetch(`${ruta}/obtenerDatosFotos.php`, {
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

        console.log(resultado);
        return resultado;

    } catch (err) {
        console.error("Error obteniendo las imagenes:", err);
    }
}

// Obtiene la galeria de un usuario
export async function obtenerFotoPrivada(nombre, fecha) {
    try {
        const response = await fetch(`${ruta}/obtenerFotoPrivada.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: window.session.user,
                pass: window.session.pass,
                nombre: nombre,
                fecha: fecha
            }),
        });

        // TODO: recoger imagenes del servidor privado
        const resultado = await response.blob();

        console.log("Nombre:", nombre);
        console.log("Fecha:", fecha);
        return await readImage(resultado)

        //return res;

    } catch (err) {
        console.error("Error obteniendo las imagenes:", err);
    }
}

// Seleccionar o deseleccionar imagen
export async function seleccionarFotoCliente(id_foto, seleccionada) {
    try {
        const response = await fetch(`${ruta}/seleccionarFotoCliente.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: window.session.user, pass: window.session.pass, id_foto: id_foto, seleccionada: seleccionada}),
        });
        const resultado = await response.text();

        return true;

    } catch(err) {
        console.error("Error seleccionando la imagen:", err);
        return false
    }
}

// Seleccionar o deseleccionar todas las imagenes
export async function seleccionarTodoCliente(seleccionada) {
    try {
        const response = await fetch(`${ruta}/seleccionarTodo.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: window.session.user, pass: window.session.pass, seleccionada: seleccionada}),
        });
        const resultado = await response.text();

        return true;

    } catch(err) {
        console.error("Error seleccionando las imagenes:", err);
        return false;
    }
}

// Obtener datos cliente
export async function obtenerDatosCliente() {
    try {
        const response = await fetch(`${ruta}/obtenerDatosCliente.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: window.session.user, pass: window.session.pass}),
        });
        const resultado = await response.json();
        
        console.log("datos2:", resultado);

        const datos = resultado;
        console.log(datos);
        return datos;

    } catch(err) {
        console.error("Error obteniendo los datos del cliente:", err);
    }
}

// Seleccionar o deseleccionar todas las imagenes
export async function guardarDescripcionCliente(descripcion) {
    try {
        const response = await fetch(`${ruta}/insertarDescripcion.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: window.session.user, pass: window.session.pass, descripcion: descripcion}),
        });
        const resultado = await response.text();

        return true;

    } catch(err) {
        console.error("Error insertando descripción:", err);
        return false;
    }
}

// Seleccionar o deseleccionar todas las imagenes
export async function finalizarSeleccion() {
    try {
        const response = await fetch(`${ruta}/finalizarSeleccion.php`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({user: window.session.user, pass: window.session.pass}),
        });

        return true;

    } catch(err) {
        console.error("Error insertando descripción:", err);
        return false;
    }
}

function readImage(o){
    return new Promise((resolve, reject) => {
      var fr = new FileReader();  
      fr.onload = () => resolve(fr.result);
      fr.onerror = e => reject(e);
      fr.readAsDataURL(o);
    });
  }
