import React from 'react';
import Galeria from '../../galeria/galeria';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Notificador from '../../common/admin/admin_edicion'
import "./galeria.scss"
import { Button } from '@material-ui/core';

function Admin_galeria (){

    const useStyles = makeStyles({
        textField: {
            width: '97%',
            alignContent: 'center',
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: '#ed2b8d',
                },
                '&:hover fieldset': {
                  borderColor: '#ed2b8d',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#ed2b8d',
                },
            },
        },
        largeIcon: {
            width: '50%',
            height: '50%'
        },
        deseleccionar: {
            width: '90%',
            height: '40%',
            marginLeft: '5%',
            marginRight: '5%'
        },
        borrar: {
            width: '90%',
            height: '40%',
            marginTop: '2%',
        },
        guardar: {
            width: '90%',
            height: '90%',
        }
    });

    const classes = useStyles();

    /* ---- Control de Switches ---- */
    const [state, setState] = React.useState({
        boda: false,
        preboda: false,
        postboda: false
      });

    /* --- Manejor de eventos ------- */

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    /* ------------------------------ */

    return(
        <div className="content-galeria-admin">
            <Notificador />
            <Galeria />
            <div className="content-cuadro">
                <div className="titulo">
                    <h3 style={{width: "30%", paddingLeft: "59px"}}>Subir imágenes</h3>
                    <h3 style={{width: "20%", marginLeft: "-59px"}}>filtrar imágenes</h3>
                    <h3 style={{width: "20%"}}>cambiar etiqueta</h3>
                </div>

                <div className="contenido">

                    <div className="subir-imagen">
                            <TextField label="URL"
                                multiline
                                rows="4"
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                    </div>

                    <div className="filtro-imagen">
                        <div style={{height: "75%", width: "1px", backgroundColor: "#ff80ab"}}></div>
                        <div className="icono">
                            <SearchIcon className={classes.largeIcon}/>
                        </div>
                        <div className="tipos">
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={state.gilad} onChange={handleChange('boda')} value="boda" />}
                                    label="BODA"
                                />
                                <FormControlLabel
                                    control={<Switch checked={state.jason} onChange={handleChange('preboda')} value="preboda" />}
                                    label="PREBODA"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch checked={state.antoine} onChange={handleChange('postboda')} value="postboda" />}
                                    label="POSTBODA"
                                />
                            </FormGroup>
                        </div>
                        <div style={{height: "75%", width: "1px", backgroundColor: "#ff80ab"}}></div>
                    </div>
                    <div className="etiqueta">
                        <RadioGroup onChange={handleChange}>
                            <FormControlLabel  control={<Radio />} label="Female" />
                            <FormControlLabel  control={<Radio />} label="Male" />
                            <FormControlLabel  control={<Radio />} label="Other" />
                        </RadioGroup>
                    </div>
                    <div className="botones">
                        <div style={{height: "75%", width: "1px", backgroundColor: "#ff80ab", paddingtop: "25%"}}/>
                        <div className="seleccion">
                            <Button 
                                variant="contained" 
                                color="primary"
                                className={classes.deseleccionar}
                                >
                                    DESELECCIONAR FOTOS
                                </Button>
                            <Button 
                                variant="contained" 
                                color="primary"
                                className={classes.borrar}
                                >
                                    BORRAR SELECCIONADAS
                                </Button>
                        </div>
                        <div className="guardar">
                        <Button 
                                variant="contained" 
                                color="primary"
                                className={classes.guardar}
                                >
                                    GUARDAR
                                </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Admin_galeria;
