import React from 'react';
import Inicio from '../../inicio/inicio';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Guardar from '@material-ui/icons/Save';
import Notificador from '../../common/admin/admin_edicion'
import './inicio.scss';

function Admin_inicio (){
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

    return(
        <div className="content-inicio-admin">
            <Notificador />
            <Inicio />
            <div className="cuadro-imagen">
                <div className="cuadro">
                    <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" className={classes.textfield} label="URL" variant="outlined" />
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            startIcon={<Guardar/>}
                        >
                            Guardar
                        </Button> 
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Admin_inicio;
