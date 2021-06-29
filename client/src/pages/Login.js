import loginImg from "../img/loginImg.png";
import icon_mail from "../img/icons/icon_mail.png";
import icon_cadeado from "../img/icons/icon_cadeado.png";
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import AuthContext from "../context/AuthContext";
import { login } from '../API'
function Login() {

    const { getLoggedIn } = useContext(AuthContext)

    const initialValues = {
        email: "",
        password: "",
    }
    const camposValidador = Yup.object().shape({
        email: Yup.string().email("O conteúdo que introduziu não é um email").required("Este campo é obrigatório"),
        password: Yup.string().required("Este campo é obrigatório")
    })
    const onSubmitLogin = async (data) => {
        try {
            await login(data);
            getLoggedIn();
        } catch (error) {

        }
        /* axios.post("http://localhost:3001/auth/login", data).then((res) => {
            console.log("Server Response: " + (res.data.success || res.data.error));
            
        }) */

    }
    return (
        <article className="login">
            <div className="loginImg">
                <img src={loginImg} alt="imagem login" />
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmitLogin} validationSchema={camposValidador}>
                <Form>
                    <section className="tituloPrincipal">
                        <span>Iniciar sessão</span>
                    </section>
                    <section className="campos">

                        <label>Email</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>
                            <img src={icon_mail} alt="icon email" />
                            <Field placeholder="ex: joana.silva12@gmail.com" name="email" id="inputEmail" type="email" />
                        </div>
                        <div className="error">
                            <ErrorMessage name="email" component="p" />
                        </div>
                    </section>
                    <section className="campos">
                        <label>Password</label>

                        <div>
                            <img src={icon_cadeado} alt="icon cadeado" />
                            <Field placeholder="*********" name="password" id="inputPassword" type="password" />
                        </div>
                        <div className="error">
                            <ErrorMessage name="password" component="p" />
                        </div>

                    </section>
                    <section className="botaoSubmit">
                        <button type="submit">Login</button>
                    </section>
                    <section className="tituloFooter">
                        <Link to='/registo'><span><u> Necessita de criar conta? Clique aqui</u></span></Link>
                    </section>
                </Form>
            </Formik>
        </article >


    );

}

export default Login;