import React from 'react'
import navLogo from "../img/logo.png";
import home1 from "../img/home1.png";
import { useHistory } from "react-router-dom"

function Homepage() {
    let history = useHistory();
    const redirectLogin = () => { history.push("/login") }
    return (
        <>
            <article className="homepage">
                <nav>
                    <img src={navLogo} alt="" id="logo" />

                    <button type="button" className="botaoLogin" id="login" onClick={redirectLogin}>Entrar</button>

                </nav>
                <section>
                    <h1>Mentoria entre pares</h1>

                    <div id="texto1">
                        <p>E se aprender pudesse ser divertido?</p>
                        <p>Já pensou em dar mais responsabilidade aos seus alunos?</p>
                        <p>Motivar as suas turmas através de mentoria entre pares acabou de se tornar mais fácil, graças à ment.</p>

                    </div>



                    <button type="button" className="botaoRegisto">Quero-me registar!</button>

                    <img src={home1} alt="" />

                </section>
            </article>
        </>
    )
}

export default Homepage
