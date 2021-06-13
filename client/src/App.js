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

import { useContext } from 'react'

import AuthContext from "./context/AuthContext";



//REACT ROUTER
import { Route, Switch } from "react-router-dom";

function App() {
  const { loggedIn } = useContext(AuthContext)

  return (

    <main className="App">

      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        {loggedIn === false &&
          <>
            <Route path='/registo'>
              <Registo />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </>}

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

      </Switch>

    </main>

  );
}

export default App;
