import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Guardar from '@material-ui/icons/Save';
import { editarFotoFondo, editarJson } from "../conexion";
import './InputGuardar.scss';
import AlertDialog from '../../common/dialog';


function InputGuardar({ id_foto, history, lugar }) {
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
                if (!resultado) abrirDialogo("Error al cambiar la imagen con la URL", "Inténtalo más tarde y comprueba tu conexión a Internet.");
            }
            await editarJson();
            
            abrirDialogo("Se han guardado los cambios", `Y la imagen de fondo está cambiada y la podrás visualizar la próxima vez que accedas a ${lugar}.`);
            if (history) history.push(`/admin/${lugar}`);
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

    // Para los dialogos
    const [open, setOpen] = React.useState(false);
    const [dialogoTitulo, setDialogoTitulo] = React.useState("Titulo");
    const [dialogoMensaje, setDialogoMensaje] = React.useState("Mensaje");

    const abrirDialogo = (titulo, mensaje) => {
        console.log("Titulo = ", titulo);
        setDialogoTitulo(titulo);
        setDialogoMensaje(mensaje);
        setOpen(true);
    }

    return (
        <div className="boton_guardar">
            <TextField
                id="outlined-basic"
                name="url"
                className={classes.textfield}
                label="URL"
                variant="outlined"
                onChange={event => setUrl(event.target.value)}
            />
            <Button
                variant="contained"
                size="large"
                className={classes.button}
                startIcon={<Guardar />}
                onClick={() => guardarCambios()}
            >
                Guardar
            </Button>
            <AlertDialog
                titulo={dialogoTitulo}
                mensaje={dialogoMensaje}
                open={open}
                setOpen={setOpen}
            />
        </div>
    );
}

export default InputGuardar;