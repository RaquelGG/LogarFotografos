let ruta = process.env.NODE_ENV === "production" ? 'https://pruebas.logarfotografos.es' : 'http://localhost/sentencias';
//const ruta = 'https://pruebas.logarfotografos.es';
ruta += '/administrador/seleccionPrivada';


// obtener datos selección de una id_boda
export async function obtenerDatosBoda(id_boda) {
    if (!window.session.admin) return null;
    console.log("id_boda", id_boda)
    try {
        const response = await fetch(`${ruta}/obtenerDatosBoda.php`, {
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

        console.log(resultado);
        return resultado;

    } catch (err) {
        console.error("Error de administrador:", err);
    }
}


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

        //--
        /*let reader = new FileReader();
        reader.readAsDataURL(resultado); // Lee el contenido como url
        reader.onloadend = function () {
            let res = reader.result;

            console.log("resultado", res);
            return res;

        }*/
        return await readImage(resultado)

        //return res;

    } catch (err) {
        console.error("Error obteniendo las imagenes:", err);
    }
}

// SUBIR  FOTO PRIVADA

function readImage(o){
    return new Promise((resolve, reject) => {
      var fr = new FileReader();  
      fr.onload = () => resolve(fr.result);
      fr.onerror = e => reject(e);
      fr.readAsDataURL(o);
    });
  }

