import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Guardar from '@material-ui/icons/Save';
import { editarFotoFondo, editarJson } from "../conexion";
import './InputGuardar.scss';


function InputGuardar ({id_foto, history}) {
    if (!window.session.user || !window.session.pass || !window.session.admin) {
        history.push("/acceso");
    }

    const [url, setUrl] = useState('');

    // Para guardar la url
    const guardarCambios = () => {
        console.log("Url fondo:", url);
        console.log("Id fondo:", id_foto);
        console.log("admin:", window.session.admin);

        
        (async () => {
            console.log("url long:", url.length);
            if (url.length > 20) {
                const resultado = await editarFotoFondo(id_foto, url);
                if (resultado) window.location.href = window.location.href;
                else alert("No se ha podido subir la imagen");
            }
            await editarJson();
            alert("Se han guardado los cambios.");
        })();
    };

    const useStyles = makeStyles({
        textfield: {
            borderRightStyle: 'none',
            width: '80%',
            '& .MuiOutlinedInput-root': {
                backgroundColor: 'white',
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
            '& .MuiInputLabel-outlined': {
                color: '#ed2b8d',
            },
        },
        button: {
            height: '56px',
            background: '#ed2b8d',
            color: '#FFF',
            width: '20%',
            fontWeight: 'bold',
            '&:hover': {
                background: '#b50060',
            } 
        }
    });
    const classes = useStyles();

    return(
        <div className="boton_guardar">
            <TextField 
                id="outlined-basic"
                name = "url"
                className={classes.textfield} 
                label="URL" 
                variant="outlined"
                onChange = {event => setUrl(event.target.value)}
            />
            <Button
                variant="contained"
                size="large"
                className={classes.button}
                startIcon={<Guardar/>}
                onClick = {() => guardarCambios()}
            >
                Guardar
            </Button> 
        </div>
    );
}

export default InputGuardar;