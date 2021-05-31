



import avatar_1 from "../../img/avatar/avatar_1.png";
import setaAtras from "../../img/setaAtras.png";

import { Formik, Form} from "formik";
import { Link } from 'react-router-dom';
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

                    <div className="titulo">
                        <img src={setaAtras} alt="" />
                        <label>Escolher avatar</label>
                    </div>
                   
                    
                    
                    <section className="avatarSelect">
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                        <div>
                            <img src={avatar_1} alt="" />
                        </div>
                    </section>

                     <section className="botao">

                        <button type="submit" >Selecionar</button>

                    </section>

                    <section className="tituloFooter">
                        <Link>Criar sem alunos. Pode adicionar noutra altura.</Link>
                    </section>

                </article>


            </Form>
        </Formik>


    );

}

export default RegistoEtapa4;