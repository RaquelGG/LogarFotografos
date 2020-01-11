import React from 'react';
import EditIcon from '@material-ui/icons/EditOutlined';
import { makeStyles } from '@material-ui/core/styles';
import InputGuardar from '../../administrador/guardar/InputGuardar'

import './admin_edicion.scss';

function  Admin_edicion () {

    function handleclick () {
        const pag = window.location.href; 
        switch(pag) {
            case pag.includes('contacto'):
                manejoContacto();
                break;
            
            case pag.includes('galeria'):
                manejoGaleria();
                break;
            case pag.includes('precios'):
                manejoPrecios();
                break;
            default:
        }
    }

    /*
        Manejo de las distintas páginas de administrador
    */

    function manejoContacto() {

    }

    function manejoGaleria() {

    }

    function manejoPrecios() {
        
    }

    /* -------------------------------------------------- */

    const useStyles = makeStyles({
        icono: {
            width: '100px',
            height: '100px',
            color: 'white',
            border: '3px',
            paddingLeft: '10px'
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
                <InputGuardar />
            </div>
            <div className="triangulo">
            </div>
        </div>
    );
}

export default Admin_edicion;