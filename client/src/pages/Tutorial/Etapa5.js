import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaDownload from "../../img/setaDownload.png"
import setaAtras from "../../img/setaAtras.png"
import iconDefinicoes from "../../img/icons/icon_settings.svg";
import setaEsquerda from "../../img/setaEsquerda_cor.svg";
import setaVoltar from "../../img/setaDireita_cor_etapas.svg";
import setaAnterior from "../../img/setaEsquerda_cor_etapas.svg";
import { Link } from "react-router-dom"

function Etapa5() {
    return (
        <article className="etapa f1">
            <section className="conteudoMain">

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
                        <label className="tituloEtapas_desktop" id="tituloEtapas_desktop">Etapa 5</label>
                        <label className="tituloEtapas_mobile" >Tutorial</label>
                    </div>
                    <div className="tituloNavegar" id="tituloNavegar">
                        <label>Navegar</label>
                    </div>
                </div>

                <div className="conteudoMid">
                    <div className="etapaLista">
                        <div className="fundoAzul">
                            <div className="navTutorial">
                                <Link to="../tutorial" id="seta"><img src={setaAtrasBranca} alt="setaAtras" /></Link>
                                <h2 id="tutorial">Etapa 5</h2>
                            </div>
                            <div className="principal">
                                <h2 id="titulo">1. Questionário</h2>
                                <p id="texto1fundoAzul">Preenchimento de questionário pós-sessão de mentoria:</p>
                                <ul id="texto2fundoAzul">
                                    <li>como forma de estimular a reflexão dos alunos envolvidos, sugere-se que ambos preencham um breve questionário, online, posteriormente à sessão;</li>
                                    <li>apesar de idênticos, sugere-se que o questionário atribuído aos mentores incida numa reflexão acerca da experiência de participação nas várias etapas do projeto e que aquele atribuído aos alunos mentorandos se centre na sessão de mentoria.</li>
                                </ul>
                                <div id="botao">
                                    <div id="textoEsquerda">
                                        <p id="textoBotao">Disponibilizamos o <i>template</i> para os questionários de reflexão para os alunos (mentores e mentorandos).</p>
                                    </div>
                                    <div id="setaDownload">
                                        <img src={setaDownload} alt="icone download" id="Download" />
                                    </div>
                                </div>
                                <Link to="./6"><div id="botao2fundoAzul">
                                    <p id="textoBotao2fundoAzul">Próxima etapa</p>

                                </div></Link>
                            </div>
                        </div>
                    </div>

                    <section className="navegar">
                        <Link to="./4">
                            <div className="botaoNavegar anterior">
                                <img src={setaAnterior} alt="setaAtras" id="setaAnterior" />
                                <label id="anterior">Etapa anterior</label>
                            </div>
                        </Link>

                        <Link to="./6">
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
            {/* <div className="fundoAzul">
                <div className="navTutorial">
                    <Link to="../tutorial" id="seta"><img src={setaAtrasBranca} alt="setaAtras" /></Link>
                    <h2 id="tutorial">Etapa 5</h2>
                </div>
                <div className="principal">
                    <h2 id="titulo">1. Questionário</h2>
                    <p id="texto1fundoAzul">Preenchimento de questionário pós-sessão de mentoria:</p>
                    <ul id="texto2fundoAzul">
                        <li>como forma de estimular a reflexão dos alunos envolvidos, sugere-se que ambos preencham um breve questionário, online, posteriormente à sessão;</li>
                        <li>apesar de idênticos, sugere-se que o questionário atribuído aos mentores incida numa reflexão acerca da experiência de participação nas várias etapas do projeto e que aquele atribuído aos alunos mentorandos se centre na sessão de mentoria.</li>
                    </ul>
                    <div id="botao">
                        <div id="textoEsquerda">
                            <p id="textoBotao">Disponibilizamos o <i>template</i> para os questionários de reflexão para os alunos (mentores e mentorandos).</p>
                        </div>
                        <div id="setaDownload">
                            <img src={setaDownload} alt="icone download" id="Download" />
                        </div>
                    </div>
                    <Link to="./6"><div id="botao2fundoAzul">
                        <p id="textoBotao2fundoAzul">Próxima etapa</p>

                    </div></Link>
                </div>
            </div> */}
        </article>
    )
}

export default Etapa5
