


import Avatar from "../components/Avatar";

import { Formik, Form } from "formik";
import * as Yup from 'yup';


function RegistoEtapa4({ setEtapa, dados, setDados }) {

    const initialValues = {

    }
    const camposValidador = Yup.object().shape({

    })

    const onSubmit = (data) => {

        setEtapa(5)



    }
    /* const history = useHistory();

    const redireciona = () => {
        let path = "/registo/5";
        history.push(path);
    }
 */

    return (
        <Formik initialValues={initialValues} validationSchema={camposValidador} onSubmit={onSubmit}>
            <Form className="formularioRegisto">
                <article className="avatar">
                    <h1>ola</h1>
                    <Avatar />

                    <section className="botao">

                        <button>Escolher Avatar</button>

                    </section>

                </article>


            </Form>
        </Formik>


    );

}

export default RegistoEtapa4;