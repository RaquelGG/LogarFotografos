import React from 'react';
import AdminEdicion from '../../common/admin/admin_edicion'
import BotonGuardar from '../guardar/InputGuardar'
import ImagenFondo from "../../common/imagen_fondo/imagen_fondo"

import './inicio.scss';


function Admin_inicio ({history}) {
    if (!window.session.user || !window.session.pass || !window.session.admin) {
        history.push("/acceso");
    }

    console.log("history de inicio: ", history);
    
    return(
        <div className="content-inicio-admin">
            <ImagenFondo id_foto={1} />
            
            <div className="cuadro-imagen">
                <div className="cuadro">
                        <BotonGuardar id_foto={1} history={history} lugar={"inicio"}  />
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