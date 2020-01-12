import React, { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './common/menu/menu'
import Loader from './common/loader/loader';
// TRADUCCIONES
import {obtenerTextoVariable} from './common/conexion';

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
const AdminPrecios = lazy(() => import('./administrador/precios/precios'));

const NotFound = Inicio;

function App() {
    //const [contenidoVariable, setContenidoVariable] = useState('');
    useEffect(() => {
        async function fetchContenidoVariable() {
            //setContenidoVariable(await obtenerTextoVariable());
            //window.session.contenidoVariable = contenidoVariable;
            window.session = {
                user: '',
                pass: '',
                admin: false,
            }
            window.session.contenidoVariable =  await obtenerTextoVariable();
        }
        fetchContenidoVariable();
    }, []);

    function necesitaMenu () {
        return window.location.href.includes('acceso');
    }

    return (
        <Router>
            { necesitaMenu() ? <></> : <Menu />} 
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
                    <Route path='/admin/seleccion/:id_boda' exact component={AdminSeleccion}/>
                    <Route path='/admin/contacto' exact component={AdminContacto}/>
                    <Route path='/admin/precios' exact component={AdminPrecios} />

                    <Route component={NotFound} />
                </Switch>
            </Suspense>
      </Router>
  );
}

export default App; 