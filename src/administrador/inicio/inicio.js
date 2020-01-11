import React, {useState} from 'react';
import Inicio from '../../inicio/inicio';
import Notificador from '../../common/admin/admin_edicion'
import BotonGuardar from '../guardar/InputGuardar'
import './inicio.scss';


function Admin_inicio (){    

    return(
        <div className="content-inicio-admin">
            <Notificador />
            <Inicio />
            <div className="cuadro-imagen">
                <div className="cuadro">
                        <BotonGuardar />
                </div>
            </div>
        </div>
    );
}

export default Admin_inicio;

/*
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
                        </Button> */