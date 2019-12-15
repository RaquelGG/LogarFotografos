import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './common/menu/menu'
import Loader from './common/loader/loader';
// TRADUCCIONES
import { withTranslation, Trans } from 'react-i18next';

const Inicio = lazy(() => import('./inicio/inicio'));
const Precios = lazy(() => import('./precios/precios'));
const Contacto = lazy(() => import('./contacto/contacto'));
const Galeria = lazy(() => import('./galeria/galeria'));
const Acceso = lazy(() => import('./acceso/acceso'));
const Admin = lazy(() => import('./administrador/clientes/clientes'));
const Cliente = lazy(() => import('./cliente/cliente'));
const AdminInicio = lazy(() => import('./administrador/inicio/inicio'));
const AdminGaleria = lazy(() => import('./administrador/galeria/galeria'));
const AdminSeleccion = lazy(() => import('./administrador/seleccion/seleccion'));
const AdminContacto = lazy(() => import('./administrador/contacto/contacto'));

const NotFound = Inicio;

function App() {
    return (
        <Router>
            <Menu/>
            <Suspense fallback={<Loader />}>
                <Switch>
                    <Route path='/' exact component={Inicio} />
                    <Route path='/acceso/:usuario?' exact component={Acceso} />
                    {/*<Route path='/galeria/:id' exact component={Galeria} />*/}
                    <Route path='/galeria' exact component={Galeria} />
                    <Route path='/precios' exact component={Precios} />
                    <Route path='/contacto' exact component={Contacto} />
                    <Route path='/admin' exact component={Admin} />
                    <Route path='/seleccion' exact component={Cliente} />
                    <Route path='/admin/inicio' exact component={AdminInicio} />
                    <Route path='/admin/galeria' exact component={AdminGaleria} />
                    <Route path='/admin/seleccion' exact component={AdminSeleccion}/>
                    <Route path='/admin/contacto' exact component={AdminContacto}/>

                    <Route component={NotFound} />
                </Switch>
            </Suspense>
      </Router>
  );
}


export default withTranslation('common')(App); 