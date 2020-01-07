import React, { Component, useState, useEffect, useCallback, setState } from 'react';
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
    obtenerDatosSeleccion
} from "../conexion";
import DragAndDrop from '../dragAndDrop';

function Lista() {
    const [data, setData] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const datos = await obtenerDatosSeleccion();
            setData(datos)
        }
        fetchData();
    }, []);

    const list = data;
    return (
        <SimpleBar className="content-lista" style={{ backgroundcolor: '#2C2C2C' }}>
            {/* Check to see if any items are found*/}
            {list.length ? (
                <div className="content-item">
                    {/* Render the list of items */}
                    {list.map((item) => {
                        return (
                            <div className="cuadro">
                                <div className="item">
                                    <div className="nombre">
                                        {item.fecha}
                                    </div>
                                    <div className="funciones">
                                        <div className="linea"></div>
                                        <div className={`caja ${item.finalizado ? 'activado' : 'desactivado'}`}>
                                            <ArrowDownwardIcon style={{ width: "35px", height: "35px", color: "white" }} />
                                        </div>
                                        <div className="caja activado">
                                            <EditOutlinedIcon style={{ width: "35px", height: "35px", color: "white" }} />
                                        </div>
                                        <div className="caja activado">
                                            <DeleteForeverIcon style={{ width: "35px", height: "35px", color: "white" }} />
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

    const dateObj = new Date();
    const month = dateObj.getUTCMonth(); //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    /* ---- Configuración de la fecha --- */
    const [selectedDate, setSelectedDate] = React.useState(new Date(year, month, day)); // -- fecha

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    /* ---------------------------------- */

    /* ---- Configuración Radio button --- */

    const [servicio, setServicio] = React.useState('boda'); // -- radio button


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
    let fecha = React.createRef();
    let evento = React.createRef();

    // Para finalizar la subida de la boda
    /* Tiene que 
        subir las fotos
        generar un usuario que no exista
        generar una contraseña
        subir la boda con los datos
    */
    
    const subirBoda = () => {
        if (processing) return;
        setProcessing(true);

        (async () => {
            const resultado = await finalizarSeleccion();
            console.log(resultado);
            if (resultado) {
                alert("¡Tu selección ha sido enviada correctamente!");
                history.push("/");
                window.session = null;
                //setData(null);
                
            } else {
                alert("Se ha producido un problema. Vuélvalo a intentar más tarde.");
                setProcessing(false);
            }
        })();
    };

    return (
        <div className="content-clientes-admin">
            <Inicio />
            <div className="contenido">
                <div className="lista">
                    <Lista />
                </div>
                <div className="agregar-contenido">
                    <div className="input-cuadro">
                        <div className="cuadro sombra">
                            <div className="input">
                                <div className="url sombra">
                                <DragAndDrop />
                                    {/*<div className="arrastrar">
                                    </div>
                                    <div className="examinar">
                                        <h1>EXAMINAR EN EL EQUIPO</h1>
                                    </div>*/
                                    }
                                </div>
                                <div className="valor">
                                    <div className="mod">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
                                            <RadioGroup onChange={handleChange} value={servicio}>
                                                <FormControlLabel value="boda" control={<BlackRadio />} label="Boda" />
                                                <FormControlLabel value="preboda" control={<BlackRadio />} label="Preboda" />
                                                <FormControlLabel value="postboda" control={<BlackRadio />} label="Postboda" />
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    <div className="boton">
                                        <button 
                                            className="enviar"
                                            //onClick={() => finalizarSelec()}
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
