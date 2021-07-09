import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaDownload from "../../img/setaDownload.png"
import setaAtras from "../../img/setaAtras.png"
import iconDefinicoes from "../../img/icons/icon_settings.svg";
import setaEsquerda from "../../img/setaEsquerda_cor.svg";
import setaVoltar from "../../img/setaDireita_cor_etapas.svg";
import setaAnterior from "../../img/setaEsquerda_cor_etapas.svg";

import { Link } from "react-router-dom"

function Etapa3() {
    return (
        <article className="etapa">
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

                <div className="titulosTop">
                    <Link to="./" id="seta">
                        <img src={setaAtras} alt="setaAtras" id="setaMobile" />
                        <img src={setaEsquerda} alt="setaAtras" id="setaDesktop" />
                    </Link>
                    <div className="tituloListaEtapas" id="tituloListaEtapas">
                        <label className="tituloEtapas_desktop" id="tituloEtapas_desktop">Etapa 3</label>
                        <label className="tituloEtapas_mobile" >Tutorial</label>
                    </div>
                    <div className="tituloNavegar" id="tituloNavegar">
                        <label>Navegar</label>
                    </div>
                </div>

                <div className="conteudoMid">
                    <div className="etapaLista">
                        <div className="fundoAzulEtapa3">
                            <div className="navTutorial">
                                <Link to="../tutorial" id="seta"><img src={setaAtrasBranca} alt="setaAtras" /></Link>
                                <h2 id="tutorial">Etapa 3</h2>
                            </div>
                            <div className="principal">
                                <h2 id="titulo">1. Execução</h2>
                                <p id="texto1fundoAzul">Execução das tarefas planeadas:</p>
                                <ul id="texto2fundoAzul">
                                    <li>esta fase implica <strong>trabalho colaborativo</strong> entre os mentores, a desenvolver tanto em <strong>sala de aula</strong>, como <strong>autonomamente</strong>, sob supervisão docente;</li>
                                    <li>é fundamental que todos os intervenientes tenham acesso à evolução das várias tarefas em curso, sendo que, para tal, a partilha de todos os ficheiros e o preenchimento dos mesmos, de forma colaborativa, é fundamental;</li>
                                    <li>é também importante o professor (gestor do projeto) proporcionar momentos de partilha e discussão de ideias entre os mentores, relativamente a tomadas de decisão, que surjam, no decurso do trabalho, sobre o modo de funcionamento da sessão de mentoria. O assumir de responsabilidades por parte dos mentores, nesta fase, terá impacto na forma como estes se sentirão envolvidos e comprometidos com o desempenho da sua função.</li>
                                </ul>
                                <div id="botao">
                                    <div id="textoEsquerda">
                                        <p id="textoBotao">Aqui pode encontrar recursos-modelo de preparação de tarefas.</p>
                                    </div>
                                    <div id="setaDownload">
                                        <img src={setaDownload} alt="icone download" id="Download" />
                                    </div>
                                </div>
                                <Link to="./4"><div id="botao2fundoAzul">
                                    <p id="textoBotao2fundoAzul">Próxima etapa</p>

                                </div></Link>
                            </div>
                        </div>
                    </div>
                    <section className="navegar">
                        <Link to="./2">
                            <div className="botaoNavegar anterior">
                                <img src={setaAnterior} alt="setaAtras" id="setaAnterior" />
                                <label id="anterior">Etapa anterior</label>
                            </div>
                        </Link>

                        <Link to="./4">
                            <div id="seguinte" className="botaoNavegar proxima">
                                <label id="proximo">Próxima etapa</label>
                                <img src={setaVoltar} alt="setaAtras" id="setaProximo" />
                            </div>
                        </Link>
                        <Link to="./">
                            <div id="voltar" className="botaoNavegar">
                                <img src={setaEsquerda} alt="setaAtras" id="setaDesktop" />
                                <label>Voltar à listagem</label>
                            </div>
                        </Link>
                    </section>
                </div>


            </section>

        </article>
    )
}

export default Etapa3
