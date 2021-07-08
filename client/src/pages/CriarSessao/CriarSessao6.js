import React from 'react'
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarSessao3 from "../../img/criarSessoes/criarSessao3.svg";

import criarSessao3_semBack from "../../img/criarSessoes/criarSessao3_semBack.svg"

import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"
//REDUX//
import { preencherSituacaoProblema } from "../../actions/criacaoSessaoAction";

import { useDispatch, useSelector } from 'react-redux'

function CriarSessao6() {
    const dispatch = useDispatch()
    const { situacao_problema } = useSelector(state => state.criarSessao.dadosPreenchidos)

    const situacao_problemaHandler = (e) => {

        let situacao;
        if (e.target.value === '') {
            situacao = ''
        } else {
            situacao = e.target.value
        }

        dispatch(preencherSituacaoProblema(situacao))
    }
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
                            <label className="tituloCriarEquipas desktop">Situação problema</label>
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


                                <Link to='/criarsessao/5' className="setaTras">
                                    <img src={setaAtras} alt="seta atras" />
                                </Link>

                                <img src={criarSessao3} alt="criar sessao primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Situação problema</label>

                                <div>
                                    <p id="texto">Sobre que problema central a sessão gira à volta? (por exemplo: O aquecimento global)</p>
                                </div>

                                <div className="formulario">
                                    <label className="tituloFormulario">Situação problema</label>

                                    <textarea type="text" className="textareaTexto" placeholder="Descrição da equipa" value={situacao_problema} onChange={situacao_problemaHandler}></textarea>
                                </div>
                                {situacao_problema !== '' ?
                                    <Link to='/criarsessao/7' className="decorationLinks">
                                        <div className="botaoAzul widthBotao">
                                            <button id="divBotao">
                                                <div id="botao" >
                                                    <p id="textoBotao">Próximo passo</p>
                                                </div>
                                            </button>
                                        </div>
                                    </Link>
                                    :
                                    <Link to='/criarsessao/7' className="decorationLinks">
                                        <div className="botaoAzul widthBotao">
                                            <button id="divBotao" >
                                                <div id="botao" >
                                                    <p id="textoBotao">Preencher mais tarde</p>
                                                </div>
                                            </button>
                                        </div>
                                    </Link>


                                }

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

export default CriarSessao6
