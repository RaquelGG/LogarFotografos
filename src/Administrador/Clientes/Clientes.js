import React, { Component } from 'react';
import Inicio from '../../inicio/inicio'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './Clientes.scss'

class Lista extends Component {
    constructor(props){
        super(props);
        this.state = {
          list: ["03/02/1996", "05/05/1995", "03/02/1996", "05/05/1995", "03/02/1996", "05/05/1995", "03/02/1996", "05/05/1995", "03/02/1996", "05/05/1995", "03/02/1996", "05/05/1995"]
        }
    }
    
    // Fetch the list on first mount
   /* componentDidMount() {
        this.getList();
    }
    
    // Retrieves the list of items from the Express app
    getList = () => {
        fetch('/api/getList')
        .then(res => res.json())
        .then(list => this.setState({ list }))
    }*/

    render() {
        const { list } = this.state;

        return (
            <SimpleBar className="content-lista" style={{backgroundcolor: '#2C2C2C'}}>
            {/* Check to see if any items are found*/}
            {list.length ? (
                <div className="content-item">
                {/* Render the list of items */}
                {list.map((item) => {
                    return(
                    <div className="cuadro">
                        <div className="item">
                            <div className="nombre">
                                {item}
                            </div>
                            <div className="funciones">
                                <div className="linea"></div>
                                <div className="caja desactivado">
                                    <ArrowDownwardIcon style={{width: "35px", height: "35px", color: "white"}} />
                                </div>
                                <div className="caja activado">
                                    <EditOutlinedIcon style={{width: "35px", height: "35px", color: "white"}} />
                                </div>
                                <div className="caja activado">
                                    <DeleteForeverIcon style={{width: "35px", height: "35px", color: "white"}} />
                                </div>
                            </div>
                        </div>
                        <div className="borde"></div>
                    </div>
                    );
                })}
                </div>
            ) : (
                <div>
                <h2>No List Items Found</h2>
                </div>
            )
            }
            </SimpleBar>
        );
    }
    
}

function Clientes() {
    return (
        <div className="content-clientes-admin">
            <Inicio />
            <div className="contenido">
                <div className="lista">
                    <Lista />
                </div>
                <div className="agregar-contenido">
                    <div className="input-cuadro">
                        <div className="cuadro sombra">
                            <div className="input">
                                <div className="url sombra">
                                    <div className="arrastrar">
                                    </div>
                                    <div className="examinar">
                                        <h1>EXAMINAR EN EL EQUIPO</h1>
                                    </div>
                                </div>
                                <form className="valor">
                                    <input type="text" name="nombre" className = "nombre" value="NOMBRE/S" />
                                    <input type="text" name="nombre" className = "nombre" value="SERVICIO REALIZADO" />
                                    <input type="submit" className="enviar" value="SUBIR"/>
                                </form>
                            </div>
                        </div>
                        <div className="cuadro-triangulos">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clientes;