import React from 'react';
import EditIcon from '@material-ui/icons/EditOutlined';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import './admin_edicion.scss';
import { Button } from '@material-ui/core';

function  Admin_edicion () {

    const useStyles = makeStyles({
        icono: {
            width: '100px',
            height: '100px',
            color: 'white',
            border: '3px',
            paddingLeft: '10px'
        },
        boton: {
            width: '100%',
            height: '100%',
            backgroundColor: '#ed2b8d',
            color: 'white',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            '&:hover': {
                background: '#b50060',
            } 
        },
        textfield: {
            '& .MuiFormLabel-root': {
                color:'white'
            },
            '& .MuiInputBase-input': {
                color: 'white'
            },
            borderRightStyle: 'none',
            width: '100%',
            input: {
                color: 'white',
            },
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
    });
    
    const classStyle = useStyles();

    return (
        <div className="content-edicion">
            <div className="rectangulo sombra"></div>
            <div className="img-container">
                <EditIcon className={classStyle.icono}/>
            </div>
            <div className="opciones sombra">
                <div className="fondo" >
                    <TextField id="outlined-basic" multiline rows="6" className={classStyle.textfield} label="URL de la nueva imagen" variant="outlined" />
                </div>
                <div className="boton">
                    <Button 
                        variant="contained" 
                        color="primary"
                        className={classStyle.boton}
                    > 
                    Guardar Cambios
                    </Button>
                </div>
            </div>
            <div className="triangulo">
            </div>
        </div>
    );
}

export default Admin_edicion;

