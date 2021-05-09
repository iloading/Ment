import loginImg from "../img/loginImg.png";
import icon_mail from "../img/icon_mail.png";
import icon_cadiado from "../img/icon_cadiado.png";
//import { Formik, Form, Field, ErrorMessage } from 'formik';

function Login() {
    return (
        <article className="login">
           <div className="loginImg">
               <img src={loginImg} alt="" />
           </div>
          
           <form>
               <section>
                   <span>Iniciar sessão</span>
               </section>
               <section>
                   <label>e-mail</label>
                   <div>
                       <img src={icon_mail} alt="" />
                       <input required type="email" placeholder="ex: joana.silva12@gmail.com" />
                   </div>
               </section>
               <section>
                   <label>palavra-passe</label>
                   <div>
                       <img src={icon_cadiado} alt="" />
                       <input required type="password" placeholder="*********" />
                   </div>
               </section>
               <section className="botaoSubmit">
                   <button type="submit">Login</button>
               </section>
               <section>
                   <span>Ainda não tem conta? Registe-se aqui</span>
               </section>
           </form>
       </article>

        
    );

}

export default Login;