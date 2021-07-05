import React from 'react'
import setaAtras from "../../img/setaAtras.png"
import setaDireita from "../../img/setaDireita.png";
import iconDefinicoes from "../../img/icons/icon_settings.svg";

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
                    <Link to="../" id="seta">
                        <img src={setaAtras} alt="setaAtras" />
                    </Link>
                    <div className="tituloEtapas">
                        <h2 id="tituloEtapas">Tutorial</h2>
                        <h2 id="iconEtapas">Tutorial</h2>
                    </div>

                    <h2 id="tutorial">Tutorial</h2>

                </div>

                <div className="conteudoMid">
                    <div className="listaEtapas">

                        <section>
                            <Link to="tutorial/0" id="linkCaixa">
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
                            <Link to="tutorial/1" id="linkCaixa">
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
                            <Link to="tutorial/2" id="linkCaixa">
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
                            <Link to="tutorial/3" id="linkCaixa">
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
                            <Link to="tutorial/4" id="linkCaixa">
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
                            <Link to="tutorial/5" id="linkCaixa">
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
                            <Link to="tutorial/6" id="linkCaixa">
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
                    <div className="Ajuda">
                        <h1>ola</h1>
                    </div>
                </div>
            </section>
        </article>
    )
}


export default Tutorial

