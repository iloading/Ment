import React from 'react'
import navLogo from "../img/logo.png";
import home1 from "../img/home1.png";
import imgBanco from "../img/imgBanco.png";
import comofuncionaHome from "../img/comofuncionaHome.png";
import { useHistory, Link } from "react-router-dom"

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
                <section id="apresentacaoBanco">
                    <h2>Um banco de narrativas na sua mão</h2>


                    <img src={imgBanco} alt="" />

                </section>
                <section id="comoFunciona">
                    <h2>Como funciona:</h2>


                    <img src={comofuncionaHome} alt="" />

                    <div id="texto2">
                        <p>Na ment pode:</p>
                        <ul>
                            <li>Visitar vários projetos de mentoria entre pares realizados em todo o país, de vários disciplinas, anos de escolaridade e até matérias específicas;</li>
                            <li>Agilizar processo de criação, com assistência em todas as etapas;</li>
                            <li>Gerir membros, através da organização por equipas;</li>
                            <li>Visitar outros projetos já realizados e encontrar a inspiração que tanto precisa!</li>
                        </ul>

                    </div>


                    <Link to="/123">Parece complicado? Veja como funciona passo-a-passo clicando aqui.</Link>

                </section>
            </article>
        </>
    )
}

export default Homepage
