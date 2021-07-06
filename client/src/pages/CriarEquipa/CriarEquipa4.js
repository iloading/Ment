import React from 'react'

import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarEquipa4_semBack from "../../img/criarEquipas/criarEquipa4_semBack.svg"
import criarEquipa4 from "../../img/criarEquipas/criarEquipa4.svg"
import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"

function CriarEquipa4() {
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
                        <label className="tituloCriarEquipas desktop">Adicionar alunos</label>
                    </div>



                </div>

                <div className="conteudoMid">
                    <div className="conteudoEsquerda">
                        <form className="formularioCriarSessao">
                            <header className="criarSessaoImg">


                                <div className="setaTras">
                                    <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                                </div>

                                <img src={criarEquipa4} alt="criar equipa primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Adicionar alunos</label>

                                <div>
                                    <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.   </p>
                                </div>


                                <div id="divBotao">
                                    <div id="botao">
                                        <p id="textoBotao">Adicionar alunos</p>
                                    </div>
                                </div>
                            </section>

                        </form>
                    </div>
                    <div className="conteudoDireita">
                        <div className="botaoEtapaAnterior">
                            <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                            <p className="textoBotao">Etapa anterior</p>
                        </div>
                        <img src={criarEquipa4_semBack} className="imgEquipa" alt="criar equipa primeira imagem" />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default CriarEquipa4
