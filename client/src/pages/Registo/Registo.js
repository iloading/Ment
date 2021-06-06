//PAGE
import RegistoEtapa1 from "./RegistoEtapa1";
import RegistoEtapa2 from "./RegistoEtapa2";
import RegistoEtapa3 from "./RegistoEtapa3";
import RegistoEtapa4 from "./RegistoEtapa4";
/* import RegistoEtapa5 from "./RegistoEtapa5"; */


import { useState } from 'react'




function Registo() {
    /* Global */
    const [etapa, setEtapa] = useState(1);
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


            {etapa === 1 && <RegistoEtapa1 etapa={etapa} setEtapa={setEtapa} dados={dados} setDados={setDados} validadeEmail={validadeEmail} setValidadeEmail={setValidadeEmail} validadeFormulario1={validadeFormulario1} setvalidadeFormulario1={setvalidadeFormulario1} />}
            {etapa === 2 && <RegistoEtapa2 etapa={etapa} setEtapa={setEtapa} dados={dados} setDados={setDados} validadeFormulario2={validadeFormulario2} setvalidadeFormulario2={setvalidadeFormulario2} />}
            {etapa === 3 && <RegistoEtapa3 etapa={etapa} setEtapa={setEtapa} dados={dados} setDados={setDados} avataresBD={avataresBD} setAvataresBD={setAvataresBD} />}
            {etapa === 4 && <RegistoEtapa4 etapa={etapa} setEtapa={setEtapa} dados={dados} setDados={setDados} validadeFormulario4={validadeFormulario4} setvalidadeFormulario4={setvalidadeFormulario4} />}
            {/* {etapa === 5 && <RegistoEtapa5 etapa={etapa} setEtapa={setEtapa} dados={dados} setDados={setDados} />}
 */}


        </>
    )
}

export default Registo;
