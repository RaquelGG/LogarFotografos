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
import ClearIcon from '@material-ui/icons/Clear';
import SaveIcon from '@material-ui/icons/Save';
import ImagenFondo from "../../common/imagen_fondo/imagen_fondo"
import SelectAllIcon from '@material-ui/icons/SelectAll';
import { FormLabel } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import AlertDialog from '../../common/dialog';


import "./galeria.scss"
import { Button } from '@material-ui/core';
import Loader from '../../common/loader/loader';
import {
    borrarFotoPublica,
    subirFotoPublica,
} from "./conexion";
import { obtenerGaleria } from "../../common/conexion";
import AdminEdicion from "../../common/admin/admin_edicion";
import SelectedImage from "../../cliente/imagenSeleccionada"


function Admin_galeria({ history }) {
    if (!window.session.user || !window.session.pass || !window.session.admin) {
        history.push("/acceso");
    }

    /* ---- Configuración Radio button --- */

    const [servicio, setServicio] = React.useState(); // -- radio button
    const [filtrar, setFiltrar] = React.useState({
        boda: 1,
        preboda: 1,
        postboda: 1
    }); // -- radio button
    const [valServicio, setValServicio] = React.useState("");



    const handleChangeService = event => {
        setServicio(event.target.servicio);
    };

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

    // Para los dialogos
    const [open, setOpen] = React.useState(false);
    const [dialogoTitulo, setDialogoTitulo] = React.useState("Titulo");
    const [dialogoMensaje, setDialogoMensaje] = React.useState("Mensaje");
    // SUBIR FOTOS--------------------------------------------------------------

    const subirFotos = () => {
        if (processing) return;
        setProcessing(true);
        const fotos = document.getElementById("urlFotos").value.split(".jpg");

        if (!fotos || !(filtrar)) {
            abrirDialogo("No se han especificado URLs", "Debes especificar las urls y el evento, puedes pasar a la vez tantas como quieras.");
            setProcessing(false);
            return;
        }

        if (!valServicio) {
            abrirDialogo("Error al subir las imagenes", "Debes de seleccionar el tipo de servicio.");
            setProcessing(false);
            return;
        }

        (async () => {

            fotos.forEach(foto => {
                if (foto.length > 5) {
                    const resultado = subirFotoPublica(foto.trim() + ".jpg", valServicio);
                    if (!resultado) {
                        abrirDialogo("Error al subir las imagenes", "Se ha producido un fallo mientras se subían las URLs de las imagenes.");
                        setProcessing(false);
                        return;
                    }
                }

            });

        })();
        setValServicio(null);
        document.getElementById("urlFotos").value = "";
        setServicio(null);
        abrirDialogo("Se han guardado las URLs correctamente", "Ahora la galería estará más bonita! :)");
        cargarImagenes();
        setProcessing(false);
    };

    const abrirDialogo = (titulo, mensaje) => {
        console.log("Titulo = ", titulo);
        setDialogoTitulo(titulo);
        setDialogoMensaje(mensaje);
        setOpen(true);
    }


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

    return (
        <div className="content-galeria-admin">
            <ImagenFondo id_foto={4} />
            <AdminEdicion id_foto={4} history={history} lugar={"precios"} />
            {
                images
                    ? <Galeria
                        className="galeria"
                        photos={images.map(img => img[0])
                            .filter(img => 
                                (img.alt.localeCompare('preboda') === 0  && filtrar.preboda)||
                                (img.alt.localeCompare('boda') === 0 && filtrar.boda)|| 
                                
                                (img.alt.localeCompare('postboda') === 0 && filtrar.postboda))
                        }
                        
                        renderImage={imageRenderer}
                    />
                    : <Loader className="galeria" />
            }

            <div className="content-cuadro">
                <div className="titulo">
                    <h3 style={{ width: "40%", paddingLeft: "59px" }}>Subir imágenes</h3>
                    <h3 style={{ width: "20%", marginLeft: "-59px" }}>filtrar imágenes</h3>
                    {/*<h3 style={{ width: "20%" }}>cambiar etiqueta</h3>*/}
                </div>

                <div className="contenido">

                    <div className="subir-imagen">
                        <TextField label="Enlaces de imágenes a subir"
                            multiline
                            rows="4"
                            id="urlFotos"
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <FormControl component="fieldset" className="etiqueta">
                                <FormLabel component="legend"> Seleccione Evento</FormLabel>
                                <RadioGroup onChange={handleChangeService} value={servicio} disabled={processing}>
                                    <FormControlLabel onClick={() => setValServicio('boda')} value="boda" control={<Radio />} label="Boda" />
                                    <FormControlLabel onClick={() => setValServicio('preboda')} value="preboda" control={<Radio />} label="Preboda" />
                                    <FormControlLabel onClick={() => setValServicio('postboda')} value="postboda" control={<Radio />} label="Postboda" />
                                </RadioGroup>
                            </FormControl>
                        <div className="guardar">
                            
                            <Button
                                variant="contained"
                                color="primary"
                                className={classes.guardar}
                                onClick={() => subirFotos()}
                                startIcon={<SaveIcon />}
                            >
                                SUBIR
                                </Button>
                        </div>
                    </div>
                    
                        
                            <div className="filtro-imagen">
                        <div style={{ height: "75%", width: "1px", backgroundColor: "#ff80ab" }}></div>
                        <div className="icono">
                            <SearchIcon className={classes.largeIcon} />
                        </div>
                        <div className="tipos">
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch id="filtrarBoda"  onClick={() =>cargarImagenes()} defaultChecked="1" onChange={() => setFiltrar({boda: !filtrar.boda, preboda: filtrar.preboda, postboda: filtrar.postboda})} value="boda" />}
                                    label="BODA"
                                />
                                <FormControlLabel
                                    control={<Switch id="filtrarPreboda"  onClick={() =>cargarImagenes()} defaultChecked="1" onChange={() => setFiltrar({boda: filtrar.boda, preboda: !filtrar.preboda, postboda: filtrar.postboda})} value="preboda" />}
                                    label="PREBODA"
                                />
                                <FormControlLabel
                                    control={
                                        <Switch id="filtrarPostoda"  onClick={() =>cargarImagenes()} defaultChecked="1" onChange={() => setFiltrar({boda: filtrar.boda, preboda: filtrar.preboda, postboda: !filtrar.postboda})} value="postboda" />}
                                    label="POSTBODA"
                                />
                            </FormGroup>
                        </div>
                        <div style={{ height: "75%", width: "1px", backgroundColor: "#ff80ab" }}></div>
                    </div>
                        
                    


                    {
                        /*
                         <div className="etiqueta">
                        <RadioGroup onChange={handleChange}>
                            <FormControlLabel control={<Radio />} label="Boda" />
                            <FormControlLabel control={<Radio />} label="Preboda" />
                            <FormControlLabel control={<Radio />} label="Postboda" />
                        </RadioGroup>
                    </div>
                         */
                    }

                    <div className="line_galAdmin">
                        <div style={{ height: "75%", width: "1px", backgroundColor: "#ff80ab" }}></div>
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
                <AlertDialog
                    titulo={dialogoTitulo}
                    mensaje={dialogoMensaje}
                    open={open}
                    setOpen={setOpen}
                />
            </div>
        </div>
    );
}
export default Admin_galeria;
