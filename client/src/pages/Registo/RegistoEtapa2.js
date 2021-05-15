import registo2Img from "../../img/registo2Img.png";
import icon_nome from "../../img/icon_nome.png";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';



function RegistoEtapa2() {


    const initialValues = {
        email: "",
        password: "",
        password_confirm: "",
    }
    const camposValidador = Yup.object().shape({
        email: Yup.string().email("O conteúdo que introduziu não é um email").required(),
        password: Yup.string().required("Password is required"),
        password_confirm: Yup.string().required("Password is required")
    })


    const history = useHistory();

    const redireciona = () => {
        let path = "/registo/3";
        history.push(path);
    }


    return (
        <article className="registoEtapa2">
            <div className="registoImg">
                <img src={registo2Img} alt="" />
            </div>
            <Formik initialValues={initialValues} validationSchema={camposValidador}>
                <Form>
                    <section>
                        <span>Os Seus Dados</span>
                    </section>
                    <section>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur, qui recusandae ut delectus harum nobis aliquid, odit ex deserunt laudantium, assumenda voluptatibus?</p>
                    </section>
                    <section>

                        <label>Email</label>
                        {/* Falta meter estilos nestes erros */}
                        <ErrorMessage name="email" component="p" />
                        <div>
                            <img src={icon_nome} alt="" />
                            <Field placeholder="ex: joana.silva12@gmail.com" name="email" id="inputEmail" type="email" />
                        </div>
                    </section>
                    <section>

                        <label>Password</label>
                        {/* Falta meter estilos nestes erros */}
                        <ErrorMessage name="password" component="p" />
                        <div>
                            <img src={icon_nome} alt="" />
                            <Field placeholder="*********" name="password" id="inputPassword" type="password" />
                        </div>
                    </section>
                    <section>

                        <label>Confirmar Password</label>
                        {/* Falta meter estilos nestes erros */}
                        <ErrorMessage name="password_confirm" component="p" />
                        <div>
                            <img src={icon_nome} alt="" />
                            <Field placeholder="*********" name="password_confirm" id="inputPassword_confirm" type="password" />
                        </div>
                    </section>

                    <section>

                        <button onClick={redireciona}>Próxima Etapa</button>

                    </section>
                </Form>
            </Formik>
        </article>


    );

}

export default RegistoEtapa2;