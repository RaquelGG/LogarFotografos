import React, {useState} from 'react';
import Inicio from '../../inicio/inicio';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Guardar from '@material-ui/icons/Save';
import Notificador from '../../common/admin/admin_edicion'
import './inicio.scss';
import { editarFotoFondo } from "../conexion";


function Admin_inicio (){

    const [url, setUrl] = useState('');

    const useStyles = makeStyles({
        textfield: {
            borderRightStyle: 'none',
            width: '80%',
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

    // Para guardar la url
    const guardarUrl = () => {
        console.log("Url fondo:", url);
        
        
        (async () => {
            if (url.length < 20) {
                alert("La URL de imagen es inválida");
                return;
            }
            const resultado = await editarFotoFondo(1, url);
            if (resultado) window.location.href = window.location.href;
            else alert("No se ha podido subir la imagen");

        })();
    };

    return(
        <div className="content-inicio-admin">
            <Notificador />
            <Inicio />
            <div className="cuadro-imagen">
                <div className="cuadro">
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
                            onClick = {() => guardarUrl()}
                        >
                            Guardar
                        </Button> 
                </div>
            </div>
        </div>
    );
}

export default Admin_inicio;
