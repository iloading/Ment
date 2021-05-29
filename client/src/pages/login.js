import loginImg from "../img/loginImg.png";
import icon_mail from "../img/icon_mail.png";
import icon_cadiado from "../img/icon_cadiado.png";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Login() {

    const initialValues = {
        email: "",
        password: "",
    }
    const camposValidador = Yup.object().shape({
        email: Yup.string().email("O conteúdo que introduziu não é um email").required("Este campo é obrigatório"),
        password: Yup.string()
            .required("Este campo é obrigatório")
    })
    const onSubmitLogin = (data) => {
        axios.post("http://localhost:3001/auth/login", data).then((res) => {
            console.log("Server Response: " + (res.data.success || res.data.error));
            /* console.log(res.data); */
        })

    }
    return (
        <article className="login">
            <div className="loginImg">
                <img src={loginImg} alt="" />
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmitLogin} validationSchema={camposValidador}>
                <Form>
                    <section className="tituloPrincipal">
                        <span>Iniciar sessão</span>
                    </section>
                    <section>

                        <label>e-mail</label>
                        {/* Falta meter estilos nestes erros */}
                        <ErrorMessage name="email" component="p" className="error" />
                        <div>
                            <img src={icon_mail} alt="" />
                            <Field placeholder="ex: joana.silva12@gmail.com" name="email" id="inputEmail" type="email" />
                        </div>
                    </section>
                    <section>
                        <label>palavra-passe</label>
                        <ErrorMessage name="password" component="p" className="error" />
                        <div>
                            <img src={icon_cadiado} alt="" />
                            <Field placeholder="*********" name="password" id="inputPassword" type="password" />
                        </div>
                    </section>
                    <section className="botaoSubmit">
                        <button type="submit">Login</button>
                    </section>
                    <section className="tituloFooter">
                        <span>Necessita de criar conta? Carregue aqui</span>
                    </section>
                </Form>
            </Formik>
        </article>


    );

}

export default Login;