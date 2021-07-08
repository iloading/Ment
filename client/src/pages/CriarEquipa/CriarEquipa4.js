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
                                    <p id="texto">Nesta etapa vamos simplesmente adicionar os alunos mentores que deseja à sua equipa. A qualquer altura esta listagem pode ser alterada, de forma a eliminar e adicionar novos alunos, se necessário.</p>
                                    <p id="texto">De forma a proteger a identidade do corpo educativo, apenas é possível localizar, através do email exato, os alunos pertencentes a cada agrupamento se estes se encontrarem previamente registados na ment.</p>
                                </div>



                                <Link className="botaoAzul" to="/criarequipa/5" >
                                    <button id="divBotao">
                                        <div id="botao" >
                                            <p id="textoBotao">Adicionar alunos</p>
                                        </div>
                                    </button>
                                </Link>

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
