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

import { useContext } from 'react'

import AuthContext from "./context/AuthContext";



//REACT ROUTER
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  const { loggedIn } = useContext(AuthContext)

  return (

    <main className="App">

      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>



        <Route path='/registo'>
          {loggedIn ? <Redirect to="/dashboard" /> : <Registo />}

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
        <Route path="/sessao">
          <Sessao />
        </Route>

      </Switch>

    </main>

  );
}

export default App;
