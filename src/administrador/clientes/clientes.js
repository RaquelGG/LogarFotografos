import React, { Component } from './node_modules/react';
import Inicio from '../../inicio/inicio'
import ArrowDownwardIcon from './node_modules/@material-ui/icons/ArrowDownward';
import EditOutlinedIcon from './node_modules/@material-ui/icons/EditOutlined';
import DeleteForeverIcon from './node_modules/@material-ui/icons/DeleteForever';
import { KeyboardDatePicker } from './node_modules/@material-ui/pickers';
import DateFnsUtils from './node_modules/@date-io/date-fns';
import RadioGroup from './node_modules/@material-ui/core/RadioGroup';
import FormControl from './node_modules/@material-ui/core/FormControl';
import FormControlLabel from './node_modules/@material-ui/core/FormControlLabel';
import Radio from './node_modules/@material-ui/core/Radio';
import { MuiPickersUtilsProvider } from './node_modules/@material-ui/pickers';
import SimpleBar from 'simplebar-react';
import { withStyles } from './node_modules/@material-ui/core/styles';
import './node_modules/simplebar/dist/simplebar.min.css';
import './clientes.scss'
import { FormLabel } from './node_modules/@material-ui/core';

class Lista extends Component {
    constructor(props){
        super(props);
        this.state = {
          list: ["03/02/1996", "05/05/1995", "03/02/1996", "05/05/1995", "03/02/1996", "05/05/1995", "03/02/1996", "05/05/1995", "03/02/1996", "05/05/1995", "03/02/1996", "05/05/1995"]
        }        
    }
    
    // Fetch the list on first mount
   /* componentDidMount() {
        this.getList();
    }
    
    // Retrieves the list of items from the Express app
    getList = () => {
        fetch('/api/getList')
        .then(res => res.json())
        .then(list => this.setState({ list }))
    }*/

    render() {
        const { list } = this.state;

        return (
            <SimpleBar className="content-lista" style={{backgroundcolor: '#2C2C2C'}}>
            {/* Check to see if any items are found*/}
            {list.length ? (
                <div className="content-item">
                {/* Render the list of items */}
                {list.map((item) => {
                    return(
                    <div className="cuadro">
                        <div className="item">
                            <div className="nombre">
                                {item}
                            </div>
                            <div className="funciones">
                                <div className="linea"></div>
                                <div className="caja desactivado">
                                    <ArrowDownwardIcon style={{width: "35px", height: "35px", color: "white"}} />
                                </div>
                                <div className="caja activado">
                                    <EditOutlinedIcon style={{width: "35px", height: "35px", color: "white"}} />
                                </div>
                                <div className="caja activado">
                                    <DeleteForeverIcon style={{width: "35px", height: "35px", color: "white"}} />
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
                <h2>No List Items Found</h2>
                </div>
            )
            }
            </SimpleBar>
        );
    }
    
}

function Clientes() {

    const dateObj = new Date();
    const month = dateObj.getUTCMonth(); //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    /* ---- Configuración de la fecha --- */
    const [selectedDate, setSelectedDate] = React.useState(new Date(year, month, day));

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    /* ---------------------------------- */

    /* ---- Configuración Radio button --- */

    const [value, setValue] = React.useState('boda');


    const handleChange = event => {
        setValue(event.target.value);
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
                                    <div className="arrastrar">
                                    </div>
                                    <div className="examinar">
                                        <h1>EXAMINAR EN EL EQUIPO</h1>
                                    </div>
                                </div>
                                <form className="valor">
                                    <div className="mod">
                                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                            <KeyboardDatePicker
                                                disableToolbar
                                                disableFuture
                                                format="dd/MM/yyyy"
                                                margin="normal"
                                                id="date-picker-inline"
                                                label="Fecha"
                                                style={{margin: '0', width: '50%'}}
                                                value={selectedDate}
                                                onChange={handleDateChange}
                                                KeyboardButtonProps={{
                                                    'aria-label': 'change date',
                                                }}
                                            />
                                        </MuiPickersUtilsProvider>
                                        <div className="linea"></div>
                                        <FormControl component="fieldset">
                                            <FormLabel component="legend"> Seleccione Evento</FormLabel>
                                            <RadioGroup onChange={handleChange} value={value}>
                                                <FormControlLabel  value="boda" control={<BlackRadio />} label="Boda" />
                                                <FormControlLabel  value="preboda" control={<BlackRadio />} label="Preboda" />
                                                <FormControlLabel  value="postboda" control={<BlackRadio />} label="Postboda" />
                                            </RadioGroup>
                                        </FormControl>
                                        </div>
                                        <div className="boton">
                                             <input type="submit" className="enviar" value="SUBIR"/>
                                        </div>
                                </form>
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
