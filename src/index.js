import React, { Suspense, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Loader from './common/loader/loader';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {obtenerTextoVariable} from './common/conexion';
import texto from './common/editable.json'


// Traducción
import './common/i18n'

async function obtenerTexto() {
    const respuesta = await obtenerTextoVariable();
    return respuesta ? respuesta : texto;
}

// Para hacer pruebas:
(async () => {
    window.session = {
        user: null,
        pass: null,
        admin: false,
        contenidoVariable: await obtenerTexto()
    }
})();


ReactDOM.render(
    <Suspense fallback={<Loader />}>
        <App />
    </Suspense>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
