import React, { useCallback, useMemo } from 'react'
import { useDropzone } from 'react-dropzone';

// Estilos
const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#2C2C2C',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#2C2C2C',
    outline: 'none',
    transition: 'border .24s ease-in-out',
    cursor: 'pointer'
};

const activeStyle = {
    borderColor: '#2196f3',
    backgroundColor: '#F4EAFF'
};


function Basic({ onFileSelected }) {
    const onDrop = useCallback(acceptedFiles => {
        // Do something with the files
        onFileSelected(acceptedFiles[0]);
    }, [])
    const {
        acceptedFiles,
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({ onDrop });

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
    }), [
        isDragActive,
    ]);


    const files = acceptedFiles.map(file => (
        <li key={file.path}>
            {file.path} - {bytesToSize(file.size)}
    </li>
    ));


    return (
        <section className="container">
            <center>
            <div {...getRootProps({ className: 'dropzone', style })}>
                <input {...getInputProps()} />
                <p>Arrastra y suelta el .zip aquí, o pulsa aquí para examinar</p>
            </div>
            <aside>
                
                    <h4>
                        {
                            files.length === 0
                                ? "No se han subido archivos"
                                : "Archivos"
                        }
                    </h4>
                    <p>{files}</p>
                
                
            </aside>
            </center>
        </section>
    );
}

// Muestra lo que pesa lo seleccionado
function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 }

export default Basic;