import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaDownload from "../../img/setaDownload.png"
import setaAtras from "../../img/setaAtras.png"
import iconDefinicoes from "../../img/icons/icon_settings.svg";
import setaEsquerda from "../../img/setaEsquerda_cor.svg";
import setaVoltar from "../../img/setaDireita_cor_etapas.svg";
import setaAnterior from "../../img/setaEsquerda_cor_etapas.svg";

import { Link } from "react-router-dom"

function Etapa2() {
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
                        <label className="tituloEtapas_desktop" id="tituloEtapas_desktop">Etapa 2</label>
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
                                <h2 id="tutorial">Etapa 2</h2>
                            </div>
                            <div className="principal">
                                <h2 id="titulo">1. Atividades</h2>
                                <p id="texto1fundoAzul">Definição das atividades que permitirão pôr em prática a narrativa criada, na sessão de mentoria:</p>
                                <ul id="texto2fundoAzul">
                                    <li>começar por <strong>estabelecer o fio condutor das atividades</strong>, em função do tempo disponível para a sessão de mentoria;</li>
                                    <li>identificar, no âmbito de cada atividade, <strong>o que é esperado dos mentores e dos alunos mentorandos</strong>;</li>
                                    <li><strong>associar cada atividade</strong> (mesmo que composta por várias minitarefas) <strong>a um momento de interação</strong>. Assim, será facilitado o processo de construção do guião e, no dia da sessão, todos conseguirão acompanhar mais eficazmente a sequência das atividades de cada equipa;</li>
                                    <li>inerente ao processo de criação de cada atividade, deverá estar o objetivo final da sessão. Assim, é aconselhável que a idealização de cada atividade dê destaque à prática de uma competência específica da área disciplinar em causa e que o grau de complexidade das tarefas propostas vá aumentando, gradualmente, ao longo da sessão.</li>
                                </ul>
                                <h2 id="titulo">2. Outros parâmetros</h2>
                                <p id="texto1fundoAzul">Definição de outros parâmetors relativos às atividades do guião:</p>
                                <ul id="texto2fundoAzul">
                                    <li>depois de definidas as atividades, em função das competências em detaque, <strong>dar atenção aos restantes parâmetros sugeridos no guião</strong>, nomeadamente, <strong>recursos, e durançao das atividades</strong>. Ao nível dos recursos, sugere-se que aos mentores seja dada tanta liberdade quanto possível na escolha das soluções (tangíveis e digitais) que possam mediar a implementação e sucesso das atividades e contribuir para a facilitação da interação e colaboração entre pares.</li>
                                </ul>
                                <div id="botao">
                                    <div id="textoEsquerda">
                                        <p id="textoBotao">Para facilitar o processo de contrução do guião, disponibilizamos um modelo <i>template</i>.</p>
                                    </div>
                                    <div id="setaDownload">
                                        <img src={setaDownload} alt="icone download" id="Download" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="fundoBranco">
                            <div className="principal">
                                <h2 id="titulo2">3. Divisão de tarefas</h2>
                                <p id="texto1fundoClaro">A partir do momento em que as atividades do guião estiverem delineadas, é fundamental dividir as tarefas de preparação entre os mentores, em função das diferentes dinâmicas de trabalho previstas. Devem, assim, ser definidos:</p>
                                <ul id="texto2fundoClaro">
                                    <li><strong>os pares de mentores</strong> que irão trabalhar em conjunto na sessão de mentoria;</li>
                                    <li>a equipa de mentores focada na preparação de tarefas de âmbito <strong>pedagógico</strong>;</li>
                                    <li>a equipa de mentores focada na preparação de tarefas do âmbito da <strong>divulgação e logística</strong>;</li>
                                    <li>as equipas da sessão de mentoria (com mentores e alunos mentorandos).</li>
                                </ul>
                                <div id="botao">
                                    <div id="textoEsquerda">
                                        <p id="textoBotao">Para facilitar o processo de organização e distribuição de tarefas, disponibilizamos um modelo <i>template</i> que deverá ser partilhado entre todos.</p>
                                    </div>
                                    <div id="setaDownload">
                                        <img src={setaDownload} alt="icone download" id="Download" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="fundoCinza">
                            <div className="principal">
                                <h2 id="titulo2">4. Identificação de tarefas</h2>
                                <p id="texto1fundoClaro">Identificação das tarefas a preparar previamente à sessão de mentoria:</p>
                                <ul id="texto2fundoClaro">
                                    <li><strong>por cada par de mentores</strong> (relativas, por exemplo, à personalização de determinada personagem, atendendo às preferências e características de cada par de mentores);</li>
                                    <li><strong>pela equipa focada em tarefas de âmbito pedagógico</strong> (por exemplo):
                                        <ul id="textoSecundario">
                                            <li>instruções de referência / respostas modelo relativas a cada atividade do guião</li>
                                            <li>outras atividades da responsabilidade dos mentores, que exijam a aplicação de conhecimentos específicos da área disciplinar em causa</li>
                                        </ul>
                                    </li>
                                    <li>no final do processo, deverão estar também <strong>estabelecidas as personagens a atribuir a alunos mentores e mentorandos</strong>, no âmbito da narrativa.</li>
                                </ul>
                                <h2 id="titulo2">5. Distribuição de tarefas</h2>
                                <p id="texto1fundoClaro">Distribuição de tarefas pelos vários grupos de trabalho.</p>
                                <div id="botao">
                                    <div id="textoEsquerda">
                                        <p id="textoBotao">Para facilitar o processo de preparação das tarefas, disponibilizamos um modelo <i>template</i> para que possam ser preenchidos colaborativamente.</p>
                                    </div>
                                    <div id="setaDownload">
                                        <img src={setaDownload} alt="icone download" id="Download" />
                                    </div>
                                </div>
                                <Link to="./3"><div id="botao2">
                                    <p id="textoBotao2">Próxima etapa</p>

                                </div></Link>

                            </div>
                        </div>

                    </div>
                    <section className="navegar">
                        <Link to="./1">
                            <div className="botaoNavegar anterior">
                                <img src={setaAnterior} alt="setaAtras" id="setaAnterior" />
                                <label id="anterior">Etapa anterior</label>
                            </div>
                        </Link>

                        <Link to="./3">
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

export default Etapa2
