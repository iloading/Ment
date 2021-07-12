import React from 'react'
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarEquipa1_semBack from "../../img/criarEquipas/criarEquipa1_semBack.svg"
import criarEquipa1 from "../../img/criarEquipas/criarEquipa1.svg"
import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link, useHistory } from "react-router-dom"
import { preencherNome } from '../../actions/criacaoEquipaAction'
//REDUX//

import { useDispatch, useSelector } from 'react-redux'
function CriarEquipa1() {

    const { dadosPreenchidos } = useSelector(state => state.criarEquipa)
    const dispatch = useDispatch()
    const nomeHandler = (e) => {
        dispatch(preencherNome(e.target.value))
    }

    let history = useHistory();
    const redirectBack = () => { history.goBack() }

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
                        <label className="tituloCriarEquipas desktop">Criar uma nova equipa</label>
                    </div>



                </div>
                <div className="conteudoMid">
                    <div className="conteudoEsquerda">
                        <form className="formularioCriarSessao">
                            <header className="criarSessaoImg">


                                <div className="setaTras" onClick={redirectBack}>
                                    <img src={setaAtras} alt="setaAtras" />
                                </div>

                                <img src={criarEquipa1} alt="criar equipa primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Criar uma nova equipa</label>

                                <div>
                                    <p id="texto">Vamos agora criar uma equipa de mentores para terem sessões atribuídas. As equipas servem para gerir facilmente as várias sessões e os alunos que podem ser associados às suas equipas.
                                    </p>
                                </div>

                                <div className="formulario">
                                    <label className="tituloFormulario">Nome da equipa</label>

                                    <input type="text" className="inputTexto" placeholder="ex: Os Aventureiros" onChange={nomeHandler} value={dadosPreenchidos.nome}></input>
                                </div>

                                {dadosPreenchidos.nome !== '' ?
                                    <Link className="botaoAzul" to="/criarEquipa/2" >
                                        <button id="divBotao">
                                            <div id="botao" >
                                                <p id="textoBotao">Próximo passo</p>
                                            </div>
                                        </button>
                                    </Link>
                                    :
                                    <button id="botaoAzul" disabled>
                                        <div id="botao" >
                                            <p id="textoBotao">Próximo passo</p>
                                        </div>
                                    </button>
                                }

                            </section>

                        </form>
                    </div>
                    <div className="conteudoDireita">

                        <div className="botaoEtapaAnterior primeiraEtapa cursorEtapaAnterior">
                            <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                            <p className="textoBotao">Etapa anterior</p>
                        </div>

                        <img src={criarEquipa1_semBack} className="imgEquipa" alt="criar equipa primeira imagem" />
                    </div>
                </div>



            </section>
        </article>
    )
}

export default CriarEquipa1
