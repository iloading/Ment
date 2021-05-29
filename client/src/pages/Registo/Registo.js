//PAGE
import RegistoEtapa1 from "./RegistoEtapa1";
import RegistoEtapa2 from "./RegistoEtapa2";
import RegistoEtapa3 from "./RegistoEtapa3";
import RegistoEtapa4 from "./RegistoEtapa4";
import RegistoEtapa5 from "./RegistoEtapa5";


import { useState } from 'react'




function Registo() {

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


            {etapa === 1 && <RegistoEtapa1 setEtapa={setEtapa} dados={dados} setDados={setDados} />}
            {etapa === 2 && <RegistoEtapa2 setEtapa={setEtapa} dados={dados} setDados={setDados} />}
            {etapa === 3 && <RegistoEtapa3 setEtapa={setEtapa} dados={dados} setDados={setDados} />}
            {etapa === 4 && <RegistoEtapa4 setEtapa={setEtapa} dados={dados} setDados={setDados} />}
            {etapa === 5 && <RegistoEtapa5 dados={dados} setDados={setDados} />}



        </>
    )
}

export default Registo;
