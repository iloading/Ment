import React from 'react'
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarSessao3 from "../../img/criarSessoes/criarSessao3.svg";

import criarSessao3_semBack from "../../img/criarSessoes/criarSessao3_semBack.svg"

import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"

import { useDispatch, useSelector } from 'react-redux'
import { criarNovaSessao } from "../../actions/criacaoSessaoAction";

function CriarSessao4() {
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        dispatch(criarNovaSessao(dadosPreenchidos))

    }

    const { dadosPreenchidos } = useSelector(state => state.criarSessao)
    return (
        <article className="criarSessao">
            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Criar Sessão</h1>
                    </div>
                    <div className="icons">
                        <img src={iconDefinicoes} alt="" />
                    </div>

                </div>

                <div className="titulo">
                    <div className="tituloPag criarEquipaTitulo" id="tituloPag">
                        <div className="gridAdicionar">
                            <label className="tituloCriarEquipas desktop">Criar uma nova sesssão</label>
                            {/* <div className="imgCriarEquipas">
            <img src={iconAdicionar} alt="" />
        </div> */}
                        </div>

                    </div>



                </div>

                <div className="conteudoMid">
                    <div className="conteudoEsquerda">
                        <form className="formularioCriarSessao">

                            <header className="criarSessaoImg">


                                <Link to='/criarsessao/3' className="setaTras">
                                    <img src={setaAtras} alt="seta atras" />
                                </Link>

                                <img src={criarSessao3} alt="criar sessao primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Podemos avançar?</label>

                                <div>
                                    <p id="texto">Chegamos agora a uma fase onde vamos preencher alguns detalhes técnicos sobre a sessão. Pode escolher avançar esta fase e preencher mais tarde, ou preencher apenas os campos que quiser, com possibilidade de alteração a qualquer momento!</p>
                                </div>

                                <Link to='/criarsessao/5' className="decorationLinks">
                                    <button className="botaoAzul widthBotao">
                                        <button id="divBotao">
                                            <div id="botao" >
                                                <p id="textoBotao">Preencher agora</p>
                                            </div>
                                        </button>
                                    </button>
                                </Link>
                                <Link to={`/perfilEquipa/${dadosPreenchidos.equipaEscolhida}`} className="decorationLinks">
                                    <button className="botaoAzul widthBotao" onClick={submitHandler}>
                                        <button id="divBotao">
                                            <div id="botao" >
                                                <p id="textoBotao">Mais tarde</p>
                                            </div>
                                        </button>
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
                        <img src={criarSessao3_semBack} className="imgEquipa" alt="criar equipa segunda imagem" />
                    </div>
                </div>
            </section>
        </article>

    )
}

export default CriarSessao4
