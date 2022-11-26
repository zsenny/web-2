import './App.css';
import PrimarySearchAppBar from './components/TopBar';
import Index from './pages/Index';
import IniciarSesion from './pages/IniciarSesion';
import Registrarse from './pages/Registrarse';
import Favoritos from './pages/Favoritos';
import Ajustes from './pages/Ajustes';
import Comic from './pages/Comic'
import LeerComic from './pages/LeerComic'
import EditarComic from './pages/EditarComic'
import HistoriasSubidas from './pages/Perfil'
import Notificaciones from './pages/Notificaciones'
import CrearComic from './pages/CrearComic'
import SubirCapComic from './pages/CrearCapComic'
import EditarCapitulo from './pages/editarCapComic'
import Genero from './pages/Genero'
import AgregarModerador from './pages/AgregarModerador'
import HistoriasPendientesDeAprobar from './pages/HistoriasPendientesDeAprobar'
import HistoriaARevisar from './pages/HistoriaARevisar'
import ComicsConReporte from './pages/ComicsConReporte'
import ComicReportado from './pages/ComicReportado'
import ComentariosReportados from './pages/ComentariosReportados'
import ListaComicsEscondidos from './pages/ListaComicsEscondidos'
import ComicEscondido from './pages/ComicEscondido'


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from 'react';

import PrivateRoute from './components/session/PrivateRoute';
import Logout from "./components/session/Logout";
import Login from "./components/session/Login";
import history from "./utils/History";



function App() {
  return (
    <Fragment>
      <Router history = {history}>
        <PrimarySearchAppBar>
          <Switch>
            <Route exact path="/" component={Index} />
            <PrivateRoute exact path="/IniciarSesion" component={IniciarSesion} />
            <PrivateRoute exact path="/Registrarse" component={Registrarse} />
            <Route exact path="/Genero" component={Genero} />

            <PrivateRoute exact path="/CrearComic" component={CrearComic}/>
            <PrivateRoute exact path="/EditarComic" component={EditarComic}/>
            <PrivateRoute exact path="/CrearCapComic" component={SubirCapComic}/>
            <PrivateRoute exact path="/EditarCapitulo" component={EditarCapitulo}/>

            <PrivateRoute exact path="/Perfil" component={HistoriasSubidas}/>
            <PrivateRoute exact path="/Favoritos" component={Favoritos} />

            <Route exact path="/Comic" component={Comic}/>
            <Route exact path="/LeerComic" component={LeerComic}/>

            <PrivateRoute exact path="/Ajustes" component={Ajustes}/>            

            <PrivateRoute exact path="/AgregarModerador" component={AgregarModerador}/>
            <PrivateRoute exact path="/HistoriasPendientesDeAprobar" component={HistoriasPendientesDeAprobar}/>
            <PrivateRoute exact path="/HistoriaARevisar" component={HistoriaARevisar}/>

            <PrivateRoute exact path="/ComicsConReporte" component={ComicsConReporte}/>
            <PrivateRoute exact path="/ComicReportado" component={ComicReportado}/>
            <PrivateRoute exact path="/ComentariosReportados" component={ComentariosReportados}/>
            <PrivateRoute exact path="/ListaComicsEscondidos" component={ListaComicsEscondidos}/>
            <PrivateRoute exact path="/ComicEscondido" component={ComicEscondido}/>


            <Route exact path="/Notificaciones" component={Notificaciones}/>

            <Route path="/login" component = {Login}/>
            <Route path = "/logout" component = {Logout}/>
            
          </Switch>
        </PrimarySearchAppBar>
      </Router>
    </Fragment>

  );
}

export default App;
