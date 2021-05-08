import loginImg from "../img/loginImg.png";
import icon_mail from "../img/icon_mail.png";
import icon_cadiado from "../img/icon_cadiado.png";
import { Formik, Form, Field, ErrorMessage } from 'formik';

function Login() {
    return (
        <div>
            <div className="loginImg">
                <img src={loginImg} alt="" />
            </div>
            <div className="formatoForm">
                <Formik >
                    <Form>
                        <section>
                            <span className="formatoTitulo">Iniciar sessão</span>
                        </section>
                        <section>
                            <span className="formatoLables">e-mail</span>
                            <div className="formatoInput">
                                <img src={icon_mail} alt="" />
                                <input required type="email" placeholder="ex: joana.silva12@gmail.com" />
                            </div>
                        </section>
                        <section>
                            <span className="formatoLables">palavra-passe</span>
                            <div className="formatoInput">
                                <img src={icon_cadiado} alt="" />
                                <input required type="password" placeholder="*********" />
                            </div>
                        </section>

                        <section className="botaoSubmit">
                            <button type="submit">Login</button>
                        </section>

                        <section className="textoFim">
                            <span>Ainda não tem conta? Registe-se aqui</span>
                        </section>

                    </Form>
                </Formik>
            </div>
        </div>
    );

}

export default Login;