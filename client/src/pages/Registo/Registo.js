//PAGE
import RegistoEtapa1 from "./RegistoEtapa1";
import RegistoEtapa2 from "./RegistoEtapa2";
import RegistoEtapa3 from "./RegistoEtapa3";
import RegistoEtapa4 from "./RegistoEtapa4";
/* import RegistoEtapa5 from "./RegistoEtapa5"; */


import { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'




function Registo() {




    /* Global */

    const [dados, setDados] = useState({
        name: null,
        role: null,
        email: null,
        password: null,
        password_confirm: null,
        avatar: null,
        school: null,
        course: null,
    });
    /* Etapa 1 */
    /* Validade do Email | 0 = loading | 1 = erro | 2 = sucesso */
    const [validadeEmail, setValidadeEmail] = useState(null);
    const [validadeFormulario1, setvalidadeFormulario1] = useState(false);
    /* Etapa 2 */
    const [validadeFormulario2, setvalidadeFormulario2] = useState(false);

    /* Etapa 3 */
    const [avataresBD, setAvataresBD] = useState(null)
    /* Etapa 4 */
    const [validadeFormulario4, setvalidadeFormulario4] = useState(false);






    return (
        <>

            <Switch>

                <Route path={['/registo/1', '/registo']} exact>{<RegistoEtapa1 dados={dados} setDados={setDados} validadeEmail={validadeEmail} setValidadeEmail={setValidadeEmail} validadeFormulario1={validadeFormulario1} setvalidadeFormulario1={setvalidadeFormulario1} />}</Route>
                <Route path='/registo/2'>{<RegistoEtapa2 dados={dados} setDados={setDados} validadeFormulario2={validadeFormulario2} setvalidadeFormulario2={setvalidadeFormulario2} />}
                </Route>
                <Route path='/registo/3'>{<RegistoEtapa3 dados={dados} setDados={setDados} avataresBD={avataresBD} setAvataresBD={setAvataresBD} />}
                </Route>
                <Route path='/registo/4'>{<RegistoEtapa4 dados={dados} setDados={setDados} validadeFormulario4={validadeFormulario4} setvalidadeFormulario4={setvalidadeFormulario4} />}
                </Route>

            </Switch>


        </>
    )
}

export default Registo;
