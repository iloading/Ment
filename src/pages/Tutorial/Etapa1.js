import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaDownload from "../../img/setaDownload.png"
import setaAtras from "../../img/setaAtras.png"
import iconDefinicoes from "../../img/icons/icon_settings.svg";
import setaEsquerda from "../../img/setaEsquerda_cor.svg";
import setaVoltar from "../../img/setaDireita_cor_etapas.svg";
import setaAnterior from "../../img/setaEsquerda_cor_etapas.svg";
import { Link } from "react-router-dom"

function Etapa1() {
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
                        <label className="tituloEtapas_desktop" id="tituloEtapas_desktop">Etapa 1</label>
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
                                <h2 id="tutorial">Etapa 1</h2>
                            </div>
                            <div className="principal">
                                <h2 id="titulo">1. Conteúdos</h2>
                                <p id="texto1fundoAzul">Definição dos conteúdos programáticos</p>
                                <ul id="texto2fundoAzul">
                                    <li>quais serão os conteúdos presentes na sessão de mentoria e partilhar os mesmos com a equipa de mentores;</li>
                                    <li>a seleção dos conteúdos deverá atender, sobretudo, ao nível frequentado pelos alunos mentorandos.</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="principal">
                                <h2 id="titulo2">2. Construção</h2>
                                <p id="texto1fundoClaro">Inicío do processo de construção da mnarrativa que dará o mote às atividades da sessão de mentoria, atendendo aos conteúdos programáticos selecionados:</p>
                                <ul id="texto2fundoClaro">
                                    <li>esta narrativa deve ser criada pelos mentores, com o apoio do professor, <strong>com base em factos reais e ficcionais, e encerrar um desafio</strong> a lançar e resolver na sessão de mentoria;</li>
                                    <li>durante o processo de criação, é fundamental que os mentores sejam estimulados a usar a sua criatividade e espírito crítico e que integrem conhecimentos adquiridos com outros que possam adquirir no processo de pesquisa / partilha de ideias;</li>
                                    <li>no final do processo, deverão estar também <strong>estabelecidas as personagens a atribuir a alunos mentores e mentorandos</strong>, no âmbito da narrativa.</li>
                                </ul>
                                <div id="botao">
                                    <div id="textoEsquerda">
                                        <p id="textoBotao">Para facilitar o processo de contrução da narrativa, disponibilizamos um modelo <i>template</i>.</p>
                                    </div>
                                    <div id="setaDownload">
                                        <img src={setaDownload} alt="icone download" id="Download" />
                                    </div>
                                </div>
                                <Link to="./2"><div id="botao2">
                                    <p id="textoBotao2">Próxima etapa</p>

                                </div></Link>

                            </div>
                        </div>
                    </div>

                    <section className="navegar">
                        <Link to="./0">
                            <div className="botaoNavegar anterior">
                                <img src={setaAnterior} alt="setaAtras" id="setaAnterior" />
                                <label id="anterior">Etapa anterior</label>
                            </div>
                        </Link>

                        <Link to="./2">
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

export default Etapa1
