import React from 'react'
import setaAtras from "../../img/setaAtras.png"
import setaDireita from "../../img/setaDireita.png";

import iconDefinicoes from "../../img/icons/icon_settings.svg";
import iconOrdenar from "../../img/icons/icon_ordenar.svg";

import { Link } from "react-router-dom"

function Tutorial() {
    return (

        <article className="tutorial">
            <section id="main" className="conteudoMain">
                <div id="bemvindo">
                    <div className="bemvindo_titulos">
                        <h3>Boas</h3>
                        <h1>Tutorial</h1>
                    </div>
                    <div className="icons">
                        <img src={iconDefinicoes} alt="" />
                    </div>
                </div>




                <div className="navTutorial">
                    <Link to="./dashboard" id="seta">
                        <img src={setaAtras} alt="setaAtras" />

                    </Link>

                    <div className="tituloListaEtapas" id="tituloListaEtapas">

                        <label className="tituloEtapas_desktop" id="tituloEtapas_desktop">Etapas</label>
                        <label className="tituloEtapas_mobile" >Tutorial</label>


                        <img src={iconOrdenar} alt="" id="iconOrdenar" />
                    </div>


                    <div className="ajuda" id="ajuda">
                        <label>O que posso aprender?</label>
                    </div>

                    <img src={iconOrdenar} alt="" id="iconOrdenar_mobile" />


                </div>

                <div className="conteudoMid">
                    <div className="listaEtapas">

                        <section>
                            <Link to="/tutorial/0" id="linkCaixa">
                                <div className="textoEsquerda">
                                    <h4>Etapa 0</h4>
                                    <p>Preparação e criação de uma equipa de mentores</p>
                                </div>
                                <div className="setaDireita">
                                    <img src={setaDireita} alt="seta direita" id="seta" />
                                </div>
                            </Link>
                        </section>
                        <section>
                            <Link to="/tutorial/1" id="linkCaixa">
                                <div className="textoEsquerda">
                                    <h4>Etapa 1</h4>
                                    <p>Definição dos conteúdos programáticos e criação da narrativa</p>
                                </div>
                                <div className="setaDireita">
                                    <img src={setaDireita} alt="seta direita" id="seta" />
                                </div>
                            </Link>
                        </section>
                        <section>
                            <Link to="/tutorial/2" id="linkCaixa">
                                <div className="textoEsquerda">
                                    <h4>Etapa 2</h4>
                                    <p>Construção do guião da sessão de mentoria (Atividades e Tarefas)</p>
                                </div>
                                <div className="setaDireita">
                                    <img src={setaDireita} alt="seta direita" id="seta" />
                                </div>
                            </Link>
                        </section>
                        <section>
                            <Link to="/tutorial/3" id="linkCaixa">
                                <div className="textoEsquerda">
                                    <h4>Etapa 3</h4>
                                    <p>Preparação de tarefas e divulgação da sessão de mentoria</p>
                                </div>
                                <div className="setaDireita">
                                    <img src={setaDireita} alt="seta direita" id="seta" />
                                </div>
                            </Link>
                        </section>
                        <section>
                            <Link to="/tutorial/4" id="linkCaixa">
                                <div className="textoEsquerda">
                                    <h4>Etapa 4</h4>
                                    <p>Implementação da sessão de mentoria com base no guião criado</p>
                                </div>
                                <div className="setaDireita">
                                    <img src={setaDireita} alt="seta direita" id="seta" />
                                </div>
                            </Link>
                        </section>
                        <section>
                            <Link to="/tutorial/5" id="linkCaixa">
                                <div className="textoEsquerda">
                                    <h4>Etapa 5</h4>
                                    <p>Reflexão final através do preenchimento de questionários</p>
                                </div>
                                <div className="setaDireita">
                                    <img src={setaDireita} alt="seta direita" id="seta" />
                                </div>
                            </Link>
                        </section>
                        <section>
                            <Link to="/tutorial/6" id="linkCaixa">
                                <div className="textoEsquerda">
                                    <h4>Etapa 6</h4>
                                    <p>Ajudar outros professores através da partilha do trabalho na plataforma</p>
                                </div>
                                <div className="setaDireita">
                                    <img src={setaDireita} alt="seta direita" id="seta" />
                                </div>
                            </Link>
                        </section>

                    </div>
                    <div className="ajuda">
                        <p>Bem vindo ao tutorial! Esta é uma zona onde o esperamos ver várias vezes.
                            Esta zona foi criada para que, ao seu próprio ritmo, possa aprender sobre esta aventura que é a mentoria entre pares.
                            O Tutorial encontra-se divido por várias etapas para uma fácil digestão e para encontrar facilmente os conteúdos que necessita.
                            Cada uma das etapas tem pequenas dicas e ficheiros que pode descarregar para facilitar o seu trabalho e exemplificar vários procedimentos!</p>
                    </div>
                </div>
            </section>
        </article>
    )
}


export default Tutorial

