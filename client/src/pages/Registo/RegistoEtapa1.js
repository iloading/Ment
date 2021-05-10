

function RegistoEtapa1() {
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
    )
}

export default RegistoEtapa1;
