import loginImg from "../img/loginImg.png";
import icon_mail from "../img/icon_mail.png";
import icon_cadiado from "../img/icon_cadiado.png";
//import { Formik, Form, Field, ErrorMessage } from 'formik';

function Login() {
    return (
        <article>
            <div className="loginImg">
                <img src={loginImg} alt="" />
            </div>
            <div className="formatoForm">
                <form>
                    <section>
                        <span className="formatoTitulo">Iniciar sessão</span>
                    </section>
                    <section>
                        <label className="formatoLables">e-mail</label>
                        <div className="formatoInput">
                            <img src={icon_mail} alt="" />
                            <input required type="email" placeholder="ex: joana.silva12@gmail.com" />
                        </div>
                    </section>
                    <section>
                        <label className="formatoLables">palavra-passe</label>
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

                </form>

            </div>
        </article>
    );

}

export default Login;