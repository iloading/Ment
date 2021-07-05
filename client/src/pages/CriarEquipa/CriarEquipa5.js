import React from 'react'

import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import avatarUser from "../../img/criarSessoes/avatarEquipa.svg"
import criarEquipa5_semBack from "../../img/criarEquipas/criarEquipa5_semBack.svg"
import iconDefinicoes from "../../img/icons/icon_settings.svg";
import iconAdicionar from "../../img/icons/icon_adicionar.svg";

import { Link } from "react-router-dom"

function CriarEquipa5() {
    return (
        <article className="criarEquipa">
            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Criar Equipa</h1>
                    </div>
                    <div className="icons">
                        <img src={iconDefinicoes} alt="" />
                    </div>

                </div>

                <div className="titulo">
                    <div className="tituloPag criarEquipaTitulo" id="tituloPag">
                        <div className="gridAdicionar">
                            <label className="tituloCriarEquipas desktop">Adicionar alunos</label>
                            <div className="imgCriarEquipas">
                                <img src={iconAdicionar} alt="" />
                            </div>
                        </div>

                    </div>



                </div>

                <div className="conteudoMid">
                    <div className="conteudoEsquerda">
                        <section className="associarEquipa">
                            <header className="headerAssociarEquipa">
                                <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                                <h2 id="titulo">Adicionar alunos</h2>

                            </header>
                            <div id="inputPesquisar">
                                <input type="text" id="inputPesquisa" placeholder="Pesquisar por email, username..."></input>
                            </div>
                            <div id="id_titulo2">
                                <label id="titulo2">As suas equipas</label>
                            </div>
                            <div id="equipas">
                                <div id="equipa1">
                                    <img src={avatarUser} alt="avatar do utilizador" className="avatarEquipa" />
                                    <div className="texto">
                                        <p className="tituloTexto">Felisberto Matias</p>
                                        <p className="escolaTexto">Secundária da Amadora</p>
                                        <p className="anoTexto">8ºB</p>
                                    </div>
                                    <div className="checkbox"></div>
                                </div>
                                <div id="equipa2">
                                    <img src={avatarUser} alt="avatar do utilizador" className="avatarEquipa" />
                                    <div className="texto">
                                        <p className="tituloTexto">Felisberto Matias</p>
                                        <p className="escolaTexto">Secundária da Amadora</p>
                                        <p className="anoTexto">8ºB</p>
                                    </div>
                                    <div className="checkbox"></div>
                                </div>
                                <div id="equipa3">
                                    <img src={avatarUser} alt="avatar do utilizador" className="avatarEquipa" />
                                    <div className="texto">
                                        <p className="tituloTexto">Felisberto Matias</p>
                                        <p className="escolaTexto">Secundária da Amadora</p>
                                        <p className="anoTexto">8ºB</p>
                                    </div>
                                    <div className="checkbox"></div>
                                </div>
                                <div id="equipa4">
                                    <img src={avatarUser} alt="avatar do utilizador" className="avatarEquipa" />
                                    <div className="texto">
                                        <p className="tituloTexto">Felisberto Matias</p>
                                        <p className="escolaTexto">Secundária da Amadora</p>
                                        <p className="anoTexto">8ºB</p>
                                    </div>
                                    <div className="checkbox"></div>
                                </div>
                            </div>
                            <div id="divBotao">
                                <div id="botao">
                                    <p id="textoBotao">Adicionar selecionados</p>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="conteudoDireita">
                        <div className="botaoEtapaAnterior">
                            <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                            <p className="textoBotao">Etapa anterior</p>
                        </div>
                        <img src={criarEquipa5_semBack} className="imgEquipa" alt="criar equipa segunda imagem" />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default CriarEquipa5
