//STYLES
import "./styles/app.scss";

//PAGES
import Grid from "./pages/cssgridteste";
import Login from "./pages/Login";
import Registo from "./pages/Registo/Registo";

//REACT ROUTER
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/registo">
          <Registo />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
