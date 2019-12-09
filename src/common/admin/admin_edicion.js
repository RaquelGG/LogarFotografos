import React from 'react';
import EditIcon from '@material-ui/icons/EditOutlined';
import { makeStyles } from '@material-ui/core/styles';
import './admin_edicion.scss';


function  Admin_edicion () {

    const useStyles = makeStyles({
        icono: {
            width: '100px',
            height: '100px',
            color: 'white',
            border: '3px',
            paddingLeft: '10px'
        }
    });
    
    const classStyle = useStyles();

    return (
        <div className="content-edicion">
            <div className="rectangulo sombra"></div>
            <div className="img-container">
                <EditIcon className={classStyle.icono}/>
            </div>
            <div className="triangulo">
            </div>
        </div>
    );
}

export default Admin_edicion;

