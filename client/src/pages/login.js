import loginImg from "../img/loginImg.png";
import icon_mail from "../img/icon_mail.png";
import icon_cadiado from "../img/icon_cadiado.png";


function Login() {
    return (
        <div>
            <div className="loginImg">
                <img src={loginImg} alt="" />
            </div>
            <div className="formatoForm">
                <form>
                    <section>
                        <span className="formatoTitulo">Iniciar sessão</span>
                    </section>
                    <section>
                        <span className="formatoLables">e-mail</span>
                        <div className="formatoInput"> 
                            <img src={icon_mail} alt="" />
                            <input required type="email" placeholder="ex: joana.silva12@gmail.com"/>
                        </div>
                    </section>    
                    <section>
                        <span className="formatoLables">palavra-passe</span>
                        <div className="formatoInput"> 
                            <img src={icon_cadiado} alt="" />
                            <input required type="email" placeholder="*********"/>
                        </div>
                    </section>

                    <section className="botaoSubmit">
                        <button type="submit">Login</button>
                    </section>
                    
                        
            
                        
                   
                
                </form>
            </div>
        </div>
      );
    
}

export default Login;