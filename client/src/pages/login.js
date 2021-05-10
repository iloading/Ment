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
        email: Yup.string().email("O conteúdo que introduziu não é um email").required(),
        password: Yup.string()
            .required("Password is required")
    })
    const onSubmitLogin = (data) => {
        axios.post("http://localhost:3001/auth/login", data).then((res) => {
            console.log("Server Response:" + res.data);
        })
        console.log(data);
    }
    return (
        <article className="login">
            <div className="loginImg">
                <img src={loginImg} alt="" />
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmitLogin} validationSchema={camposValidador}>
                <Form>
                    <section>
                        <span>Iniciar sessão</span>
                    </section>
                    <section>

                        <label>e-mail</label>
                        {/* Falta meter estilos nestes erros */}
                        <ErrorMessage name="email" component="p" />
                        <div>
                            <img src={icon_mail} alt="" />
                            <Field placeholder="ex: joana.silva12@gmail.com" name="email" id="inputEmail" type="email" />
                        </div>
                    </section>
                    <section>
                        <label>palavra-passe</label>

                        <div>
                            <img src={icon_cadiado} alt="" />
                            <Field placeholder="*********" name="password" id="inputPassword" type="password" />
                        </div>
                    </section>
                    <section className="botaoSubmit">
                        <button type="submit">Login</button>
                    </section>
                    <section>
                        <span>Ainda não tem conta? Registe-se aqui</span>
                    </section>
                </Form>
            </Formik>
        </article>


    );

}

export default Login;