//STYLES
import "./styles/app.scss";

//PAGES
import Login from "./pages/Login";
import Registo from "./pages/Registo/Registo";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";


//REACT ROUTER
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <main className="App">

      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path={["/registo/:id", "/registo"]}>
          <Registo />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>

    </main>
  );
}

export default App;
