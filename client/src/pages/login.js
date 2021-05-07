function Login() {
    return (
        <div>
            <div className="loginImg">
                <h1>Imagem</h1>
            </div>
            <section>

                <div>
                    <span>Email</span>
                    <input required type="email"/>
                </div>
                <div>
                    <span>Password</span>
                    <input required type="email"/>
                </div>
                
            </section>
        </div>
      );
    
}

export default Login;