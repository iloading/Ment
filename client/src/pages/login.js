function Login() {
    return (
        <div>
            <div className="loginImg">
                <h1>Imagem</h1>
            </div>
            <form>
                <section>
                    <span>Email</span>
                    <input required type="email"/>
                </section>
                <section>
                    <span>Password</span>
                    <input required type="password"/>
                </section>
            </form>
        </div>
      );
    
}

export default Login;