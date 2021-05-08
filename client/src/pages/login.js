import loginImg from "../img/loginImg.png";


function Login() {
    return (
        <div>
            <div className="loginImg">
                <img src={loginImg} alt="" />
            </div>
            <div className="formatoForm">
                <form>
                    <section className="formatoSecoes">
                        <span>Iniciar sessão</span>
                    </section>
                    <section className="formatoSecoes">
                        <span>Email</span>
                        <div> 
                            <input required type="email"/>
                        </div>
                        
                    </section>
                    <section className="formatoSecoes">
                        <span>Password</span>
                        <input required type="password"/>
                    </section>
                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
      );
    
}

export default Login;