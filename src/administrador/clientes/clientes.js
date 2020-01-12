import React, { useState, useEffect } from 'react';
import Inicio from '../../inicio/inicio'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import SimpleBar from 'simplebar-react';
import { withStyles } from '@material-ui/core/styles';
import 'simplebar/dist/simplebar.min.css';
import './clientes.scss'
import { FormLabel } from '@material-ui/core';
import {
    obtenerDatosSeleccion,
    subirBoda,
    comprobarUsuarioExiste,
    crearUsuario,
    borrarUsuario,
    subirFotosBoda,
    borrarBoda,
    obtenerIdUsuario

} from "./conexion";
import DragAndDrop from '../dragAndDrop';

const [data, setData] = useState(false);

async function obtenerDatos() {
    setData(await obtenerDatosSeleccion());
}

export function Lista({ history }) {

    /* DATOS PARA LA LISTA */


    useEffect(() => {
        async function fetchData() {
            await obtenerDatos();
        }
        fetchData();
    }, []);

    // Para guardar la descripción
    const eliminarFotosBoda = (id_boda, fecha) => {
        console.log("id_boda seleccionada: ", id_boda);
        console.log("fecha seleccionada: ", fecha);
        (async () => {
            await borrarBoda(id_boda, fecha);
            await obtenerDatos();
        })();
    };

    const abrirEdicion = (id_boda) => {
        console.log("id_boda seleccionada: ", id_boda);
        history.push(`/admin/seleccion/${id_boda}`);
    }

    const list = data;
    return (
        <SimpleBar className="content-lista" style={{ backgroundcolor: '#2C2C2C' }}>
            {/* Check to see if any items are found*/}
            {list ? (
                <div className="content-item">
                    {/* Render the list of items */}
                    {list.map((item) => {
                        return (
                            <div className="cuadro">
                                <div className="item">
                                    <div className="nombre">
                                        {item.fecha}, {item.servicio}
                                    </div>
                                    <div className="funciones">
                                        <div className="linea"></div>
                                        <div className={`caja ${item.finalizado ? 'activado' : 'desactivado'}`}>
                                            <ArrowDownwardIcon style={{ width: "35px", height: "35px", color: "white" }} />
                                        </div>
                                        <div className="caja activado">
                                            <EditOutlinedIcon onClick={() => abrirEdicion(parseInt(item.id_boda))} style={{ width: "35px", height: "35px", color: "white" }} />
                                        </div>

                                        <div className="caja activado">
                                            <DeleteForeverIcon onClick={() => eliminarFotosBoda(item.id_boda, item.fecha)} style={{ width: "35px", height: "35px", color: "white" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="borde"></div>
                            </div>
                        );
                    })}
                </div>
            ) : (
                    <div>
                        <h2>No se han encontrado elementos</h2>
                    </div>
                )
            }
        </SimpleBar>
    );

}

export function Clientes({ history }) {
    // Si no es admin, se redirige a acceso
    if (!window.session.user || !window.session.pass || !window.session.admin) {
        history.push("/acceso");
    }

    /* ---- Configuración de la fecha --- */
    const [selectedDate, setSelectedDate] = React.useState(new Date()); // -- fecha
    const [file, setFile] = useState();

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    /* ---------------------------------- */

    /* ---- Configuración Radio button --- */

    const [servicio, setServicio] = React.useState(); // -- radio button
    const [valServicio, setValServicio] = React.useState();


    const handleChange = event => {
        setServicio(event.target.servicio);
    };
    /* ----------------------------------- */

    /* --- Personalización de los Radio --- */

    const BlackRadio = withStyles({
        root: {
            color: '#2C2C2C',
            '&$checked': {
                color: '#2C2C2C',
            },
        },
        checked: {},
    })(props => <Radio color="default" {...props} />);





    /* ----------------------------------- */
    // Para guardar variables
    const [processing, setProcessing] = useState(false); // Para esperar mientras se está procesando

    // Para finalizar la subida de la boda
    /* Tiene que 
        subir las fotos
        generar un usuario que no exista
        generar una contraseña
        subir la boda con los datos
    */
    function generarCadena(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    // SUBIR BODA -------------------------------
    const subirFotos = () => {
        if (processing) return;
        setProcessing(true);

        if (!valServicio) {
            alert("Debes de seleccionar un servicio y fecha");
            setProcessing(false);
            return;
        }

        const fecha = selectedDate.toJSON().slice(0, 10);
        console.log("Servicio:", valServicio);
        console.log("Fecha:", fecha);

        let error = false;

        let nuevoUser;
        let nuevaPass = generarCadena(5);

        (async () => {
            let existe = false;
            do {
                nuevoUser = generarCadena(5);
                existe = await comprobarUsuarioExiste(nuevoUser);
            } while (existe);

            console.log("Usuario:", nuevoUser);
            console.log("Contraseña:", nuevaPass);

            await crearUsuario(nuevoUser, nuevaPass);
            const id_usuario = await obtenerIdUsuario(nuevoUser);
            const resultado = await subirBoda(id_usuario, fecha, valServicio)
            if (resultado) {
                console.log("file:", file);
                if (file) {
                    (async () => {
                        const resSubirFotos = await subirFotosBoda(file, fecha);

                        if (resSubirFotos) {
                            alert(`
                            ¡Se ha subido correctamente!\n
                            Url: https://www.logarfotografos.es/acceso/${nuevoUser}\n
                            Usuario: ${nuevoUser} Contraseña: ${nuevaPass}
                        `);
                            setFile(undefined);
                            await obtenerDatos();
                        } else {
                            alert("Se ha producido un problema mientras se subían las imagenes.");
                            error = true;
                        }
                    })();


                } else {
                    alert("Debes subir las fotos en un .zip.");
                    error = true;
                }

            } else {
                alert("Se ha producido un problema. Vuélvalo a intentar más tarde.");
                error = true;
            }

            if (error) {
                await borrarBoda(fecha);
                await borrarUsuario(id_usuario);
            }
            setProcessing(false);
        })();
    };

    return (
        <div className="content-clientes-admin">
            <Inicio />
            <div className="contenido">
                <div className="lista">
                    <Lista history={history} />
                </div>
                <div className="agregar-contenido">
                    <div className="input-cuadro">
                        <div className="cuadro sombra">
                            <div className="input">
                                <div className="url sombra">
                                    <DragAndDrop onFileSelected={f => setFile(f)} />
                                    {/*<div className="arrastrar">
                                    </div>
                                    <div className="examinar">
                                        <h1>EXAMINAR EN EL EQUIPO</h1>
                                    </div>*/
                                    }
                                </div>
                                <div className="valor">
                                    <div className="mod">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils} disabled={processing} ref={selectedDate}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                disableFuture
                                                format="dd/MM/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Fecha"
                                                style={{ margin: '0', width: '50%' }}
                                                value={selectedDate}
                                                ref={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                        <div className="linea"></div>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend"> Seleccione Evento</FormLabel>
                                            <RadioGroup onChange={handleChange} value={servicio} disabled={processing}>
                                                <FormControlLabel onClick={() => setValServicio('Boda')} value="boda" control={<BlackRadio />} label="Boda" />
                                                <FormControlLabel onClick={() => setValServicio('Preboda')} value="preboda" control={<BlackRadio />} label="Preboda" />
                                                <FormControlLabel onClick={() => setValServicio('Postboda')} value="postboda" control={<BlackRadio />} label="Postboda" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div className="boton">
                                        <button
                                            className="enviar"
                                            onClick={() => subirFotos()}
                                            disabled={processing}
                                        >
                                            SUBIR
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cuadro-triangulos">
                            <div className="triangulo gr"></div>
                            <div className="triangulo pe"></div>
                            <div className="triangulo me"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clientes;
