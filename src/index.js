import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Loader from './common/loader/loader';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Traducción
import './common/i18n'

// Para hacer pruebas:
window.session = {
    user: null,
    pass: null,
    admin: null,
}

window.session = {
    user: "admin",
    pass: "admin",
    admin: true,
}

ReactDOM.render(
    <Suspense fallback={<Loader />}>
        <App />
    </Suspense>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
