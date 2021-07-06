import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaAtras from "../../img/setaAtras.png"
import iconDefinicoes from "../../img/icons/icon_settings.svg";
import setaEsquerda from "../../img/setaEsquerda_cor.svg";
import setaVoltar from "../../img/setaDireita_cor_etapas.svg";
import setaAnterior from "../../img/setaEsquerda_cor_etapas.svg";

import { Link } from "react-router-dom"

function Etapa6() {
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
                        <label className="tituloEtapas_desktop" id="tituloEtapas_desktop">Etapa 6</label>
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
                                <h2 id="tutorial">Etapa 6</h2>
                            </div>
                            <div className="principal">
                                <h2 id="titulo">1. Final do projeto</h2>
                                <p id="texto1fundoAzul">No final do projeto, pedimos que regresse à plataforma “ment” e partilhe connosco o resultado final do trabalho produzido. Para tal, sugerimos que siga os seguintes passos:</p>
                                <ul id="texto2fundoAzul">
                                    <li>depois de aceder à sua página pessoal, selecione o projeto e dê-o como finalizado;</li>
                                    <li>preencha a informação que lhe for solicitada;</li>
                                    <li>faça o upload dos recursos criados, nomeadamente, o guião da sessão e a narrativa criada, fotos e/ou outros que considere pertinente;</li>
                                    <li>deixe o seu testemunho sobre a experiência de gestão e implementação do projeto e estimule os mentores da equipa a deixarem aqui também os seus testemunhos. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section className="navegar">
                        <Link to="./5">
                            <div className="botaoNavegar anterior">
                                <img src={setaAnterior} alt="setaAtras" id="setaAnterior" />
                                <label id="anterior">Etapa anterior</label>
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
                    <h2 id="tutorial">Etapa 6</h2>
                </div>
                <div className="principal">
                    <h2 id="titulo">1. Final do projeto</h2>
                    <p id="texto1fundoAzul">No final do projeto, pedimos que regresse à plataforma “ment” e partilhe connosco o resultado final do trabalho produzido. Para tal, sugerimos que siga os seguintes passos:</p>
                    <ul id="texto2fundoAzul">
                        <li>depois de aceder à sua página pessoal, selecione o projeto e dê-o como finalizado;</li>
                        <li>preencha a informação que lhe for solicitada;</li>
                        <li>faça o upload dos recursos criados, nomeadamente, o guião da sessão e a narrativa criada, fotos e/ou outros que considere pertinente;</li>
                        <li>deixe o seu testemunho sobre a experiência de gestão e implementação do projeto e estimule os mentores da equipa a deixarem aqui também os seus testemunhos. </li>
                    </ul>
                </div>
            </div> */}
        </article>
    )
}

export default Etapa6
