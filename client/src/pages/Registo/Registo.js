//PAGE
import RegistoEtapa1 from "./RegistoEtapa1";
import RegistoEtapa2 from "./RegistoEtapa2";
import RegistoEtapa3 from "./RegistoEtapa3";
import RegistoEtapa4 from "./RegistoEtapa4";
import RegistoEtapa5 from "./RegistoEtapa5";


import { useState } from 'react'




function Registo() {
    /* Global */
    const [etapa, setEtapa] = useState(1);
    const [dados, setDados] = useState({
        name: null,
        cargo: null,
        email: null,
        password: null,
        password_confirm: null,
        avatar: null,
        school: null,
        disciplina: null,
    });
    /* Etapa 1 */
    /* Validade do Email | 0 = loading | 1 = erro | 2 = sucesso */
    const [validadeEmail, setValidadeEmail] = useState(null);
    const [validadeFormulario1, setvalidadeFormulario1] = useState(false);
    /* Etapa 2 */


    /*  const initialValues = {
         name: "",
         cargo: "Aluno",
         email: "",
         password: "",
         password_confirm: "",
         school: "",
         disciplina: "mat",
     }
 
 
     const onSubmit = (data) => {
         axios.post('http://localhost:3001/auth/register', data).then((response) => {
             console.log(data);
             console.log(response);
         })
 
     } */


    return (
        <>


            {etapa === 1 && <RegistoEtapa1 etapa={etapa} setEtapa={setEtapa} dados={dados} setDados={setDados} validadeEmail={validadeEmail} setValidadeEmail={setValidadeEmail} validadeFormulario1={validadeFormulario1} setvalidadeFormulario1={setvalidadeFormulario1} />}
            {etapa === 2 && <RegistoEtapa2 etapa={etapa} setEtapa={setEtapa} dados={dados} setDados={setDados} />}
            {etapa === 3 && <RegistoEtapa3 etapa={etapa} setEtapa={setEtapa} dados={dados} setDados={setDados} />}
            {etapa === 4 && <RegistoEtapa4 etapa={etapa} setEtapa={setEtapa} dados={dados} setDados={setDados} />}
            {etapa === 5 && <RegistoEtapa5 etapa={etapa} setEtapa={setEtapa} dados={dados} setDados={setDados} />}



        </>
    )
}

export default Registo;
