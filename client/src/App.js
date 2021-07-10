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
import { Route, Switch, Redirect, useRouteMatch, useLocation } from "react-router-dom";

function App() {
  const { loggedIn } = useContext(AuthContext);
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState()

  useEffect(() => {
    setIsHomePage(location.pathname === '/')
  }, [location])






  return (

    <main className={`App ${!isHomePage ? "layout" : "homepageLayout"}`}>



      <Feedback />
      {loggedIn ? <> <Navbar /><Footer /> </> : <></>
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
          <Dashboard />
        </Route>
        <Route path="/tutorial" exact>
          <Tutorial />
        </Route>
        <Route path="/tutorial/:id">
          <Etapa />
        </Route>
        <Route path="/banco">
          <Banco />
        </Route>
        <Route path="/favoritos">
          <Favoritos />
        </Route>
        <Route path="/perfil">
          <Perfil />
        </Route>
        <Route path="/boasvindas">
          <BoasVindas />
        </Route>
        <Route path="/sessao/:id">
          <Sessao />
        </Route>
        <Route path="/criarsessao">
          <CriarSessao />
        </Route>
        <Route path="/criarequipa">
          <CriarEquipa />
        </Route>
        <Route path="/minhasEquipas">
          <MinhasEquipas />
        </Route>
        <Route path="/perfilequipa/:id">
          <PerfilEquipa />
        </Route>



      </Switch>

    </main>

  );
}

export default App;
