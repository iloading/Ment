import React from 'react'
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarEquipa1_semBack from "../../img/criarEquipas/criarEquipa1_semBack.svg"
import criarEquipa1 from "../../img/criarEquipas/criarEquipa1.svg"
import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"
import { preencherNome } from '../../actions/criacaoEquipaAction'
//REDUX//

import { useDispatch, useSelector } from 'react-redux'
function CriarEquipa1() {

    const { dadosPreenchidos } = useSelector(state => state.criarEquipa)
    const dispatch = useDispatch()
    const nomeHandler = (e) => {
        dispatch(preencherNome(e.target.value))
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
                        <label className="tituloCriarEquipas desktop">Criar uma nova equipa</label>
                    </div>



                </div>
                <div className="conteudoMid">
                    <div className="conteudoEsquerda">
                        <form className="formularioCriarSessao">
                            <header className="criarSessaoImg">


                                <div className="setaTras">
                                    <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                                </div>

                                <img src={criarEquipa1} alt="criar equipa primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Criar uma nova equipa</label>

                                <div>
                                    <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    </p>
                                </div>

                                <div className="formulario">
                                    <label className="tituloFormulario">Nome da equipa</label>

                                    <input type="text" className="inputTexto" placeholder="ex: Os Aventureiros" onChange={nomeHandler} value={dadosPreenchidos.nome}></input>
                                </div>

                                {dadosPreenchidos.nome !== '' ?
                                    <Link to="/criarequipa/2" >
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
                        <div className="botaoEtapaAnterior primeiraEtapa">
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
