

//PAGE
import RegistoEtapa1 from "./RegistoEtapa1";
import RegistoEtapa2 from "./RegistoEtapa2";


//REACT ROUTER
import { Route, Switch, useLocation } from "react-router-dom";

function Registo() {
    const location = useLocation();
    const path = parseInt(location.pathname.split("/")[2]);
    console.log(location.pathname.split("/")[1]);
    return (
        <div>
            {path === 1 && <RegistoEtapa1 />}
            {path === 2 && <RegistoEtapa2 />}

        </div>
    )
}

export default Registo;
