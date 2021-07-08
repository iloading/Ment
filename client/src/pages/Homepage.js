import React from 'react'
import Carousel from "./components/Carousel";
import navLogo from "../img/logo.svg";
import home1 from "../img/home1.svg";
import home2 from "../img/home2.svg";
import home3 from "../img/home3.svg";
import home4 from "../img/home4.svg";
import home5 from "../img/home5.svg";
import imgBanco from "../img/imgBanco.png";
import comoFunciona1 from "../img/comoFunciona1.svg";
import comoFunciona2 from "../img/comoFunciona2.svg";
import comoFunciona3 from "../img/comoFunciona3.svg";
import comoFunciona4 from "../img/comoFunciona4.svg";

import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom"




function Homepage() {
    let history = useHistory();
    const redirectLogin = () => { history.push("/login") }
    const redirectRegisto = () => { history.push("/registo") }

    return (
        <>
            <article className="homepage">


                <nav>
                    <img src={navLogo} alt="logo navbar" id="logo" />

                    <div id="login">

                        <button type="button" className="botao btnRegisto" onClick={redirectRegisto}>Registar</button>
                        <button type="button" className="botao btnLogin" onClick={redirectLogin}>Entrar</button>
                    </div>



                </nav>
                <section className="topInfo">
                    <div className="img_textos">
                        <h1>Mentoria entre pares</h1>

                        <div id="texto1">

                            <ul>
                                <li> <p>E se aprender pudesse ser divertido?</p></li>
                                <li>    <p>Já pensou em dar mais responsabilidade aos seus alunos?</p></li>
                                <li> <p>Motivar as suas turmas através de mentoria entre pares acabou de se tornar mais fácil, graças à ment.</p></li>
                            </ul>




                        </div>
                        <img src={home1} className="imagem1Homepage_mobile" alt="imagem homepage" />
                        <button type="button" className="botaoRegisto gapBotao">Como funciona?</button>

                    </div>


                    <img src={home1} className="imagem1Homepage_desktop" alt="imagem homepage" />



                </section>

                <section className="construcaoPasso">
                    <img src={home2} className="imagem2Homepage_desktop" alt="imagem homepage" />

                    <div className="img_textos">
                        <h1>Construção passo-a-passo</h1>

                        <div id="texto1">

                            <ol>
                                <li>Navegar no banco de sessões existente</li>
                                <li>Criar uma sessão nova</li>
                                <li>Implementar a sessão com a sua turma</li>
                                <li>Partilhar a sessão com outros professores</li>
                            </ol>




                        </div>
                        <img src={home2} className="imagem2Homepage_mobile" alt="imagem homepage" />



                    </div>




                </section>
                <section className="comoFunciona">
                    <label>Como funciona?</label>

                    <div className="comoFuncionaCards">
                        <div className="card">
                            <label>Banco</label>
                            <p>Explores projetos realizados em todo o país</p>
                            <img src={home3} alt="" />
                        </div>
                        <div className="card">
                            <label>Agilização</label>
                            <p>Estruturação faseada para melhor compreensão</p>
                            <img src={home4} alt="" />
                        </div>
                        <div className="card">
                            <label>Partilha</label>
                            <p>Partilhe as sessões que criou com a comunidade</p>
                            <img src={home5} alt="" />
                        </div>

                    </div>
                    <button type="button" className="botaoRegisto gapBotao" onClick={redirectRegisto}>Registar agora</button>


                </section>
                {/* <section id="apresentacaoBanco">
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
                </section> */}




            </article>
        </>
    )
}

export default Homepage
