import React from 'react'
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarSessao3 from "../../img/criarSessoes/criarSessao3.svg";

import criarSessao3_semBack from "../../img/criarSessoes/criarSessao3_semBack.svg"

import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"
//REDUX//
import { preencherDescricao } from "../../actions/criacaoSessaoAction";

import { useDispatch, useSelector } from 'react-redux'

function CriarSessao5() {
    const dispatch = useDispatch()
    const { descricao } = useSelector(state => state.criarSessao.dadosPreenchidos)

    const descricaoHandler = (e) => {

        let Descricao;
        if (e.target.value === '') {
            Descricao = ''
        } else {
            Descricao = e.target.value
        }

        dispatch(preencherDescricao(Descricao))
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
                            <label className="tituloCriarEquipas desktop">Detalhes adicionais</label>
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


                                <Link to='/criarsessao/4' className="setaTras">
                                    <img src={setaAtras} alt="seta atras" />
                                </Link>

                                <img src={criarSessao3} alt="criar sessao primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Detalhes adicionais</label>

                                <div>
                                    <p id="texto">Descreva de uma forma bastante breve sobre o que se trata a sua sessão.</p>
                                </div>

                                <div className="formulario">
                                    <label className="tituloFormulario">Descrição</label>

                                    <textarea type="text" className="textareaTexto" placeholder="ex: Uma narrativa sobre uma viagem à nossa galáxia onde os alunos se deparam com um desafio que têm de solucionar para salvar o planeta..." value={descricao} onChange={descricaoHandler}></textarea>
                                </div>
                                {descricao !== '' ?
                                    <Link to='/criarsessao/6' className="decorationLinks">
                                        <div className="botaoAzul widthBotao" >
                                            <button id="divBotao">
                                                <div id="botao" >
                                                    <p id="textoBotao">Próximo passo</p>
                                                </div>
                                            </button>
                                        </div>
                                    </Link>
                                    :

                                    <Link to='/criarsessao/6' className="decorationLinks">
                                        <div className="botaoAzul widthBotao" >
                                            <button id="divBotao">
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
                        <Link to='/criarsessao/4' className="decorationLinks">
                            <div className="botaoEtapaAnterior cursorEtapaAnterior">
                                <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                                <p className="textoBotao">Etapa anterior</p>
                            </div>
                        </Link>
                        <img src={criarSessao3_semBack} className="imgEquipa" alt="criar equipa segunda imagem" />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default CriarSessao5
