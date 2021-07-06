import React from 'react'

import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarEquipa3 from "../../img/criarEquipas/criarEquipa3.svg"
import criarEquipa3_semBack from "../../img/criarEquipas/criarEquipa3_semBack.svg"
import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"

function CriarEquipa3() {
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
                        <label className="tituloCriarEquipas desktop">Definir um alias</label>
                    </div>



                </div>


                <div className="conteudoMid">
                    <div className="conteudoEsquerda">
                        <form className="formularioCriarSessao">
                            <header className="criarSessaoImg">


                                <div className="setaTras">
                                    <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                                </div>

                                <img src={criarEquipa3} alt="criar equipa primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Detalhes</label>

                                <div>
                                    <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>

                                <div className="formulario">
                                    <label className="tituloFormulario">Escola</label>

                                    <input type="text" className="inputTexto" placeholder="ex: A melhor equipa..."></input>
                                </div>

                                <div className="formulario">

                                    <label className="tituloFormulario">Descrição</label>

                                    <textarea type="text" className="textareaTexto" placeholder="Descrição da equipa"></textarea>
                                </div>


                                <div id="divBotao">
                                    <div id="botao">
                                        <p id="textoBotao">Próximo passo</p>
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
                        <img src={criarEquipa3_semBack} className="imgEquipa" alt="criar equipa segunda imagem" />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default CriarEquipa3
