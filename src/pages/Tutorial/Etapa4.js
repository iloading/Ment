import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaDownload from "../../img/setaDownload.png"
import setaAtras from "../../img/setaAtras.png"
import iconDefinicoes from "../../img/icons/icon_settings.svg";
import setaEsquerda from "../../img/setaEsquerda_cor.svg";
import setaVoltar from "../../img/setaDireita_cor_etapas.svg";
import setaAnterior from "../../img/setaEsquerda_cor_etapas.svg";
import { Link } from "react-router-dom"

function Etapa4() {
    return (
        <article className="etapa">
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
                        <label className="tituloEtapas_desktop" id="tituloEtapas_desktop">Etapa 4</label>
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
                                <h2 id="tutorial">Etapa 4</h2>
                            </div>
                            <div className="principal">
                                <h2 id="titulo">1. Implementação</h2>
                                <p id="texto1fundoAzul">Implementação da sessão de mentoria:</p>
                                <ul id="texto2fundoAzul">
                                    <li>com base no guião criado, <strong>os mentores deverão liderar a sessão de mentoria</strong>, trabalhando, em pequenas equipas, com os seus colegas mais novos e levando-os a realizar as atividades previstas;</li>
                                    <li>atendendo aos princípios deste modelo, o ambiente da sessão será marcado pela lógica de desafio, vincadamente presente em elementos como a narrativa em torno da qual se desenvolve a sessão, as personagens desempenhadas por mentores e alunos mentorandos e eventuais recursos (tangíveis e digitais), usados para conferir maior dramaticidade e criatividade às atividades;</li>
                                    <li>os professores presentes deverão observar o desempenho das várias equipas e intervir, apenas se necessário.</li>
                                </ul>
                                <div id="botao">
                                    <div id="textoEsquerda">
                                        <p id="textoBotao">Disponibilizamos o <i>template</i> para o <strong>guião de sessão</strong>.</p>
                                    </div>
                                    <div id="setaDownload">
                                        <img src={setaDownload} alt="icone download" id="Download" />
                                    </div>
                                </div>
                                <Link to="./5"><div id="botao2fundoAzul">
                                    <p id="textoBotao2fundoAzul">Próxima etapa</p>

                                </div></Link>
                            </div>
                        </div>
                    </div>
                    <section className="navegar">
                        <Link to="./3">
                            <div className="botaoNavegar anterior">
                                <img src={setaAnterior} alt="setaAtras" id="setaAnterior" />
                                <label id="anterior">Etapa anterior</label>
                            </div>
                        </Link>

                        <Link to="./5">
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
            {/* <div className="fundoAzulEtapa3">
                <div className="navTutorial">
                    <Link to="../tutorial" id="seta"><img src={setaAtrasBranca} alt="setaAtras" /></Link>
                    <h2 id="tutorial">Etapa 4</h2>
                </div>
                <div className="principal">
                    <h2 id="titulo">1. Implementação</h2>
                    <p id="texto1fundoAzul">Implementação da sessão de mentoria:</p>
                    <ul id="texto2fundoAzul">
                        <li>com base no guião criado, <strong>os mentores deverão liderar a sessão de mentoria</strong>, trabalhando, em pequenas equipas, com os seus colegas mais novos e levando-os a realizar as atividades previstas;</li>
                        <li>atendendo aos princípios deste modelo, o ambiente da sessão será marcado pela lógica de desafio, vincadamente presente em elementos como a narrativa em torno da qual se desenvolve a sessão, as personagens desempenhadas por mentores e alunos mentorandos e eventuais recursos (tangíveis e digitais), usados para conferir maior dramaticidade e criatividade às atividades;</li>
                        <li>os professores presentes deverão observar o desempenho das várias equipas e intervir, apenas se necessário.</li>
                    </ul>
                    <div id="botao">
                        <div id="textoEsquerda">
                            <p id="textoBotao">Disponibilizamos o <i>template</i> para o <strong>guião de sessão</strong>.</p>
                        </div>
                        <div id="setaDownload">
                            <img src={setaDownload} alt="icone download" id="Download" />
                        </div>
                    </div>
                    <Link to="./5"><div id="botao2fundoAzul">
                        <p id="textoBotao2fundoAzul">Próxima etapa</p>

                    </div></Link>
                </div>
            </div> */}
        </article>
    )
}

export default Etapa4
