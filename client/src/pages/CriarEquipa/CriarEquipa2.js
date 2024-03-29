import React from 'react'

import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarEquipa2 from "../../img/criarEquipas/criarEquipa2.svg"
import criarEquipa2_semBack from "../../img/criarEquipas/criarEquipa2_semBack.svg"
import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"
import { preencherAlias } from '../../actions/criacaoEquipaAction'
//REDUX//

import { useDispatch, useSelector } from 'react-redux'
function CriarEquipa2() {
    const { dadosPreenchidos } = useSelector(state => state.criarEquipa)
    const dispatch = useDispatch()
    const aliasHandler = (e) => {
        dispatch(preencherAlias(e.target.value))
    }
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

                                <img src={criarEquipa2} alt="criar equipa primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Definir um alias</label>

                                <div>
                                    <p id="texto">Nesta etapa sugerimos que forneça à sua equipa um "cognome".</p>
                                    <p id="texto">Quando tiver diversas equipas a funcionar,  pode ser difícil encontrar aquela que pretende rapidamente apenas pela turma ou pela escola. Para facilitar tal processo sugerimos um "nome de atalho", que apenas será visível para si.</p>
                                    <p id="texto">Pode deixar em branco, se assim preferir.</p>
                                </div>

                                <div className="formulario">
                                    <label className="tituloFormulario">Nome do atalho</label>

                                    <input type="text" className="inputTexto" placeholder="ex: Aquela turma do 7ºB..." onChange={aliasHandler} value={dadosPreenchidos.alias}></input>
                                </div>


                                {dadosPreenchidos.alias !== '' ?
                                    <Link className="botaoAzul" to="/criarEquipa/3" >
                                        <button id="divBotao">
                                            <div id="botao" >
                                                <p id="textoBotao">Próximo passo</p>
                                            </div>
                                        </button>
                                    </Link>
                                    :
                                    <button id="divBotao" disabled>
                                        <div id="botao" >
                                            <p id="textoBotao">Próximo passo</p>
                                        </div>
                                    </button>
                                }
                            </section>

                        </form>
                    </div>
                    <div className="conteudoDireita">
                        <Link to='/criarEquipa' className="decorationLinks">
                            <div className="botaoEtapaAnterior cursorEtapaAnterior">
                                <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                                <p className="textoBotao">Etapa anterior</p>
                            </div>
                        </Link>
                        <img src={criarEquipa2_semBack} className="imgEquipa" alt="criar equipa segunda imagem" />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default CriarEquipa2
