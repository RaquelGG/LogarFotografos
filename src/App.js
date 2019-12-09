import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Cliente from './cliente/cliente';
import CrearSeleccion from "./administrador/crear_seleccion/crear_seleccion"
import Loader from './common/loader/loader';

const Inicio = lazy(() => import('./inicio/inicio'));
const Precios = lazy(() => import('./precios/precios'));
const Contacto = lazy(() => import('./contacto/contacto'));
const Galeria = lazy(() => import('./galeria/galeria'));
const Acceso = lazy(() => import('./acceso/acceso'));
const NotFound = lazy(() => import('./common/loader/loader'));




function App() {
    return (
        //<Inicio/>
        //<Menu/>
        //<Inicio/>
        //<Galeria/>
        //<Precios/>
        //<Contacto/>
        //<Acceso/>
        //<CrearSeleccion/>

        <Router>
          <Suspense fallback={<Loader />}>
              <Switch>
                  <Route path='/' exact component={Inicio} />
                  <Route path='/acceso/:usuario?' exact component={Acceso} />
                  <Route path='/galeria/:id' exact component={Galeria} />
                  <Route path='/precios' exact component={Precios} />
                  <Route path='/contacto' exact component={Contacto} />
                  <Route component={NotFound} />
              </Switch>
          </Suspense>
      </Router>
  );
}


export default App;
