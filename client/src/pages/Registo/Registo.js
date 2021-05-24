

//PAGE
import RegistoEtapa1 from "./RegistoEtapa1";
import RegistoEtapa2 from "./RegistoEtapa2";
import RegistoEtapa3 from "./RegistoEtapa3";
import RegistoEtapa4 from "./RegistoEtapa4";
import RegistoEtapa5 from "./RegistoEtapa5";



//REACT ROUTER
import { useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from 'yup';

function Registo() {


    const initialValues = {
        name: "",
        cargo: "Aluno",
        email: "",
        password: "",
        password_confirm: "",
        escola: "",
        disciplina: "mat",
    }
    const camposValidador = Yup.object().shape({
        name: Yup.string().required("Name is required"),
        cargo: Yup.string().required("Cargo is required"),
        email: Yup.string().email("O conteúdo que introduziu não é um email").required(),
        password: Yup.string().required("Password is required"),
        password_confirm: Yup.string().required("Password is required"),
        escola: Yup.string().required("Name is required"),
        disciplina: Yup.string().required("Name is required"),
    })


    const location = useLocation();
    const path = parseInt(location.pathname.split("/")[2]);
    console.log(parseInt(location.pathname.split("/")[2]));
    return (
        <div className="registo">
            <Formik initialValues={initialValues} validationSchema={camposValidador}>
                <Form className="formularioRegisto">

                    {(isNaN(path)) && <RegistoEtapa1 />}
                    {path === 2 && <RegistoEtapa2 />}
                    {path === 3 && <RegistoEtapa3 />}
                    {path === 4 && <RegistoEtapa4 />}
                    {path === 5 && <RegistoEtapa5 />}


                </Form>
            </Formik>
        </div>
    )
}

export default Registo;
