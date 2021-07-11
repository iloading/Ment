//STYLES
import "./styles/app.scss";

//PAGES
import Login from "./pages/Login";
import Registo from "./pages/Registo/Registo";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Tutorial from "./pages/Tutorial/Tutorial";
import Etapa from "./pages/Tutorial/Etapa";
import Banco from "./pages/Banco";
import Favoritos from "./pages/Favoritos";
import Perfil from "./pages/Perfil";
import Sessao from "./pages/Sessao";
import BoasVindas from "./pages/BoasVindas";
import EditarSessao from "./pages/EditarSessao";
import CriarSessao from "./pages/CriarSessao/CriarSessao";
import CriarEquipa from "./pages/CriarEquipa/CriarEquipa";
import MinhasEquipas from "./pages/MinhasEquipas";
import PerfilEquipa from "./pages/PerfilEquipa";
import Navbar from "./pages/components/Navbar"
import Footer from "./pages/components/Footer"
import { useContext, useState, useEffect } from 'react'

import AuthContext from "./context/AuthContext";
import Feedback from './pages/components/Feedback'


//REACT ROUTER
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

function App() {
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState()
  const [hideNav, setHideNav] = useState()
  const [hideFooter, sethideFooteH] = useState()
  useEffect(() => {
    setIsHomePage(location.pathname === '/')
    setHideNav(location.pathname.startsWith('/sessao') || location.pathname.startsWith('/criarsessao') || location.pathname.startsWith("/tutorial/0") || location.pathname.startsWith("/tutorial/1") || location.pathname.startsWith("/tutorial/2") || location.pathname.startsWith("/tutorial/3") || location.pathname.startsWith("/tutorial/4") || location.pathname.startsWith("/tutorial/5") || location.pathname.startsWith("/tutorial/6") || location.pathname.startsWith('/criarEquipa') || location.pathname.startsWith('/editarsessao') || location.pathname.startsWith('/boasvindas'));
    sethideFooteH(location.pathname.startsWith('/boasvindas'));
    window.scrollTo(0, 0)

  }, [location, loggedIn])






  return (

    <main className={`App ${!isHomePage ? "layout" : "homepageLayout"}`}>


      {loggedIn !== undefined && <>
        <Feedback />
        {loggedIn ? <>
          {!hideNav ? <Navbar /> : ''}
          {!hideFooter ? <Footer /> : ''}

        </> : <></>
        }


        <Switch>

          <Route path="/" exact>
            {loggedIn ? <Redirect to="/dashboard" /> : <Homepage />}
          </Route>



          <Route path='/registo'>
            {loggedIn ? <Redirect to="/boasvindas" /> : <Registo />}

          </Route>
          <Route path="/login">
            {loggedIn ? <Redirect to="/dashboard" /> : <Login />}
          </Route>


          <Route path="/dashboard">
            {!loggedIn ? <Redirect to="/login" /> : <Dashboard />}

          </Route>
          <Route path="/tutorial" exact>
            <Tutorial />
          </Route>
          <Route path="/tutorial/:id">
            <Etapa />
          </Route>
          <Route path="/banco">
            {!loggedIn ? <Redirect to="/login" /> : <Banco />}
          </Route>
          <Route path="/favoritos">
            {!loggedIn ? <Redirect to="/login" /> : <Favoritos />}

          </Route>
          <Route path="/perfil">
            {!loggedIn ? <Redirect to="/login" /> : <Perfil />}

          </Route>
          <Route path="/boasvindas">
            {!loggedIn ? <Redirect to="/login" /> : <BoasVindas />}

          </Route>

          <Route path="/criarsessao">
            {!loggedIn ? <Redirect to="/login" /> : <CriarSessao />}

          </Route>
          <Route path="/criarEquipa">
            {!loggedIn ? <Redirect to="/login" /> : <CriarEquipa />}

          </Route>
          <Route path="/sessao/:id/editarsessao">
            {!loggedIn ? <Redirect to="/login" /> : <EditarSessao />}

          </Route>
          <Route path="/sessao/:id">
            {!loggedIn ? <Redirect to="/login" /> : <Sessao />}

          </Route>
          <Route path="/minhasEquipas">
            {!loggedIn ? <Redirect to="/login" /> : <MinhasEquipas />}

          </Route>
          <Route path="/perfilequipa/:id">
            {!loggedIn ? <Redirect to="/login" /> : <PerfilEquipa />}

          </Route>



        </Switch>
      </>
      }
    </main>

  );
}

export default App;
