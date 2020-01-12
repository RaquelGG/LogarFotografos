import React, { useState, useCallback, useEffect } from 'react';
import Galeria from "react-photo-gallery";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import SearchIcon from '@material-ui/icons/Search';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Notificador from '../../common/admin/admin_edicion'
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';
import SelectAllIcon from '@material-ui/icons/SelectAll';
import "./galeria.scss"
import { Button } from '@material-ui/core';
import Loader from '../../common/loader/loader';
import { 
    subirFotoPublica,
    borrarFotoPublica,
    editarEtiqueta,

 } from "./conexion";
 import {obtenerGaleria} from "../../common/conexion";
 import SelectedImage from "../../cliente/imagenSeleccionada"


function Admin_galeria ({history}) {
    if (!window.session.user || !window.session.pass || !window.session.admin) {
        history.push("/acceso");
    }
    const useStyles = makeStyles({
        textField: {
            width: '65%',
            paddingRight: '5%',
            marginLeft: '5%',
            alignContent: 'center',
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
        largeIcon: {
            width: '50%',
            height: '50%'
        },
        deseleccionar: {
            width: '90%',
            height: '40%',
            marginLeft: '5%',
            marginRight: '5%'
        },
        borrar: {
            width: '90%',
            height: '40%',
            marginTop: '2%',
        },
        guardar: {
            width: '90%',
            marginTop: '2%',
            height: '75%',
            fontSize: '19px'
        }
    });

    const classes = useStyles();

    /* ---- Control de Switches ---- */
    const [state, setState] = React.useState({
        boda: false,
        preboda: false,
        postboda: false
      });

    /* --- Manejor de eventos ------- */

    const handleChange = name => event => {
        setState({ ...state, [name]: event.target.checked });
    };

    // GALERIA --------------------------------------------------------------------
    const [images, setImages] = useState([]);
    // Para seleccionar
    const [selectAll, setSelectAll] = useState(-1);
    // Para no sobrecargar el servidor comprobando si está procesando
    const [processing, setProcessing] = useState(false);

    // Cargar imagenes
    async function cargarImagenes() {
        setImages((await obtenerGaleria()).map(img => [img, false])); // ò.ó
    }
    // Cogemos las imagenes del servidor
    useEffect(() => {
        async function fetchImages() {
            cargarImagenes();
        }
        fetchImages();
    }, []);

    useEffect(() => {
        console.log("Images:", images);
    }, [images]);

    // Para borrar las fotos seleccionadas
    const borrarFotos = () => {
        if (processing) return;
        setProcessing(true);
        
        // Borra las que están seleccionadas.
            images.forEach(img => {
                console.log("is selected:", img[1]);
                if (img[1]) {
                    (async () => {
                        await borrarFotoPublica(img[0].key);
                        console.log("img key:", img[0].key);
                    })();
                }
            });            
        cargarImagenes();
        setProcessing(false);
    };

    const selectionChangeHandler = (index, isSelected, imgs) => {
        console.log("selection changed for index", index, "s", isSelected);
        const clonedImages = imgs.slice();
        console.log("we got", imgs.length, "and", clonedImages.length);
        clonedImages[index][1] = isSelected;
        setImages(clonedImages);
    };

    const imageRenderer = useCallback(
        ({ index, left, top, key, photo }) => (
            <SelectedImage
                selected={
                    selectAll === -1
                    ? photo.isSelected
                    : selectAll === 1
                }
                key={key}
                margin={"2px"}
                index={index}
                photo={photo}
                left={left}
                top={top}
                onSelectionChange={s => selectionChangeHandler(index, s, images)}
            />
        ),
        [selectAll, images]
    );

    /* ------------------------------ */

    return(
        <div className="content-galeria-admin">
            <Notificador />
            {
                images
                    ? <Galeria
                        className="galeria"
                        photos = {images.map(img => img[0])}
                        renderImage = {imageRenderer}
                    />
                    : <Loader className="galeria" />
            }
            
            <div className="content-cuadro">
                <div className="titulo">
                    <h3 style={{width: "40%", paddingLeft: "59px"}}>Subir imágenes</h3>
                    <h3 style={{width: "20%", marginLeft: "-59px"}}>filtrar imágenes</h3>
                    <h3 style={{width: "20%"}}>cambiar etiqueta</h3>
                </div>

                <div className="contenido">

                    <div className="subir-imagen">
                        <TextField label="Enlaces de imágenes a subir"
                            multiline
                            rows="4"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <div className="guardar">
                        <Button 
                                variant="contained" 
                                color="primary"
                                className={classes.guardar}
                                startIcon={<SaveIcon />}
                                >
                                    GUARDAR
                                </Button>
                        </div>
                    </div>

                    <div className="filtro-imagen">
                        <div style={{height: "75%", width: "1px", backgroundColor: "#ff80ab"}}></div>
                        <div className="icono">
                            <SearchIcon className={classes.largeIcon}/>
                        </div>
                        <div className="tipos">
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch defaultChecked="true" onChange={handleChange('boda')} value="boda" />}
                                    label="BODA"
                                />
                                <FormControlLabel
                                    control={<Switch defaultChecked="true" onChange={handleChange('preboda')} value="preboda" />}
                                    label="PREBODA"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch defaultChecked="true" onChange={handleChange('postboda')} value="postboda" />}
                                    label="POSTBODA"
                                />
                            </FormGroup>
                        </div>
                        <div style={{height: "75%", width: "1px", backgroundColor: "#ff80ab"}}></div>
                    </div>
                    <div className="etiqueta">
                        <RadioGroup onChange={handleChange}>
                            <FormControlLabel  control={<Radio />} label="Boda" />
                            <FormControlLabel  control={<Radio />} label="Preboda" />
                            <FormControlLabel  control={<Radio />} label="Postboda" />
                        </RadioGroup>
                    </div>                    
                    <div className="line_galAdmin">
                        <div style={{height: "75%", width: "1px", backgroundColor: "#ff80ab"}}></div>
                    </div>
                    <div className="botones">
                        <div className="seleccion">
                            <Button 
                                variant="contained" 
                                color="primary"
                                className={classes.deseleccionar}
                                onClick={() => setSelectAll(0)}
                                startIcon={<ClearIcon />}
                                >
                                    DESELECCIONAR FOTOS
                                </Button>
                            <Button 
                                variant="contained" 
                                color="primary"
                                className={classes.borrar}
                                startIcon={<SelectAllIcon />}
                                onClick={() => borrarFotos()}
                                >
                                    BORRAR SELECCIONADAS
                                </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Admin_galeria;
