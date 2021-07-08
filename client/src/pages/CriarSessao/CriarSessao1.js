import React from 'react'
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarSessao2 from "../../img/criarSessoes/criarSessao2.svg";

import criarSessao1_semBack from "../../img/criarSessoes/criarSessao1_semBack.svg"

import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from 'react-router-dom'
import { loadminhasEquipas } from "../../actions/minhasEquipasAction";



import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
function CriarSessao1() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadminhasEquipas())


    }, [dispatch])

    const { minhasEquipas, status } = useSelector(state => state.minhasEquipas)
    return (
        <article className="criarSessao">
            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Criar Sessao</h1>
                    </div>
                    <div className="icons">
                        <img src={iconDefinicoes} alt="" />
                    </div>

                </div>

                <div className="titulo">
                    <div className="tituloPag criarEquipaTitulo" id="tituloPag">
                        <label className="tituloCriarEquipas desktop">Criar uma nova sessão</label>
                    </div>



                </div>
                <div className="conteudoMid">
                    <div className="conteudoEsquerda">
                        <form className="formularioCriarSessao">
                            <header className="criarSessaoImg">


                                <Link to='/dashboard' className="setaTras">
                                    <img src={setaAtras} alt="seta atras" />
                                </Link>

                                <img src={criarSessao2} alt="criar sessao primeira imagem" />

                            </header>
                            {status === 'completed' &&
                                <section id="corpo">
                                    <label id="titulo">Criar uma nova sessão</label>

                                    <p id="texto">Para criar uma nova sessão é necessário ter pelo menos uma equipa criada. A partir deste ecrã associar a uma nova sessão uma equipa existente ou criar uma nova equipa!</p>
                                    <div className="botaoAzul">
                                        <div id="divBotao">
                                            <Link id="botao" to='/criarEquipa'>
                                                <p id="textoBotao">Criar uma nova equipa</p>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="botaoAzul">
                                        {minhasEquipas.length === 0 ?
                                            <button id="divBotao" disabled>
                                                <span id="botao" to='/criarsessao/2'>
                                                    <p id="textoBotao">Associar uma equipa já existente</p>
                                                </span>
                                            </button>
                                            :
                                            <button id="divBotao" >
                                                <Link id="botao" to='/criarsessao/2'>
                                                    <p id="textoBotao">Associar uma equipa já existente</p>
                                                </Link>
                                            </button>}


                                    </div>



                                </section>
                            }
                        </form>
                    </div>
                    <div className="conteudoDireita">
                        <div className="botaoEtapaAnterior primeiraEtapa cursorEtapaAnterior">
                            <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                            <p className="textoBotao">Etapa anterior</p>
                        </div>
                        <img src={criarSessao1_semBack} className="imgEquipa" alt="criar equipa primeira imagem" />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default CriarSessao1
