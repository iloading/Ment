import React from 'react'
import Carousel from "./components/Carousel";
import navLogo from "../img/logo.svg";
import home1 from "../img/home1.svg";
import imgBanco from "../img/imgBanco.png";
import comoFunciona1 from "../img/comoFunciona1.svg";
import comoFunciona2 from "../img/comoFunciona2.svg";
import comoFunciona3 from "../img/comoFunciona3.svg";
import comoFunciona4 from "../img/comoFunciona4.svg";

import { useHistory } from "react-router-dom"




function Homepage() {
    let history = useHistory();
    const redirectLogin = () => { history.push("/login") }

    return (
        <>
            <article className="homepage">


                <nav>
                    <img src={navLogo} alt="logo navbar" id="logo" />

                    <button type="button" className="botaoLogin" id="login" onClick={redirectLogin}>Entrar</button>

                </nav>
                <section>
                    <h1>Mentoria entre pares</h1>

                    <div id="texto1">
                        <p>E se aprender pudesse ser divertido?</p>
                        <p>Já pensou em dar mais responsabilidade aos seus alunos?</p>
                        <p>Motivar as suas turmas através de mentoria entre pares acabou de se tornar mais fácil, graças à ment.</p>

                    </div>

                    <img src={home1} className="imagem1Homepage" alt="imagem homepage" />

                    <button type="button" className="botaoRegisto gapBotao">Como funciona?</button>

                </section>
                <section id="apresentacaoBanco">
                    <h2 className="gapTexto">Um banco de narrativas na sua mão</h2>


                    <img src={imgBanco} alt="imagem banco" />

                </section>


                <section id="comoFunciona">
                    <h2>Como funciona:</h2>

                    <div id="sectionComoFunciona">
                        <label id="comoFuncionaTexto">
                            <label className="textoCentroVertical">
                                <h3 id="textoComoFunciona">Banco</h3>
                                <p id="textoComoFunciona2">Explore projetos realizados em todo o país</p>
                            </label>
                            <img src={comoFunciona1} alt="imagem1 como funciona" id="imagem" />

                        </label>

                        <label id="comoFuncionaTexto2">

                            <img src={comoFunciona2} alt="imagem2 como funciona" id="imagem" />

                            <label className="textoCentroVertical">
                                <h3 id="textoComoFunciona">Agilização</h3>
                                <p id="textoComoFunciona2">Estruturação etapa-a-etapa</p>
                            </label>

                        </label>

                        <label id="comoFuncionaTexto">
                            <label className="textoCentroVertical">
                                <h3 id="textoComoFunciona">Gestão</h3>
                                <p id="textoComoFunciona2">Organização por equipas</p>
                            </label>
                            <img src={comoFunciona3} alt="imagem3 como funciona" id="imagem" />

                        </label>

                        <label id="comoFuncionaTexto2">

                            <img src={comoFunciona4} alt="imagem4 como funciona" id="imagem" />

                            <label className="textoCentroVertical">
                                <h3 id="textoComoFunciona">Partilha</h3>
                                <p id="textoComoFunciona2">Partilhe as sessões que criou com a comunidade!</p>
                            </label>

                        </label>
                    </div>


                    <button type="button" className="botaoRegisto gapBotao">Registe-se já!</button>

                </section>


                <section id="feedback">
                    <h2 className="gapTexto">O que outros docentes dizem sobre nós:</h2>
                </section>
                <section id="carousel">

                    <Carousel />
                </section>




            </article>
        </>
    )
}

export default Homepage
