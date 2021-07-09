import React from 'react'
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarSessao3 from "../../img/criarSessoes/criarSessao3.svg";

import criarSessao9_semBack from "../../img/criarSessoes/criarSessao9_semBack.svg"

import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"

//REDUX//
import { preencherResultados } from "../../actions/criacaoSessaoAction";

import { useDispatch, useSelector } from 'react-redux'
import { criarNovaSessao } from "../../actions/criacaoSessaoAction";

function CriarSessao9() {
    const dispatch = useDispatch()
    const { dadosPreenchidos } = useSelector(state => state.criarSessao)


    const resultadosHandler = (e) => {

        let resultados;
        if (e.target.value === '') {
            resultados = ''
        } else {
            resultados = e.target.value
        }

        dispatch(preencherResultados(resultados))
    }
    const submitHandler = (e) => {
        dispatch(criarNovaSessao(dadosPreenchidos))

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


                                <Link to='/criarsessao/8' className="setaTras">
                                    <img src={setaAtras} alt="seta atras" />
                                </Link>

                                <img src={criarSessao3} alt="criar sessao primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Detalhes adicionais</label>

                                <div>
                                    <p id="texto">Último passo! O que se espera desta sessão? Em termos de narrativa, o que conclui a sessão?</p>
                                </div>

                                <div className="formulario">
                                    <label className="tituloFormulario">O que se espera da sessão?</label>

                                    <textarea type="text" className="textareaTexto" placeholder="ex: É esperado que os mentorandos consigam salvar o planeta Terra..." value={dadosPreenchidos.resultados_esperados} onChange={resultadosHandler}></textarea>
                                </div>

                                <Link to={`/perfilEquipa/${dadosPreenchidos.equipaEscolhida}`} className="decorationLinks">
                                    <div className="botaoAzul widthBotao" onClick={submitHandler}>
                                        <button id="divBotao">
                                            <div id="botao" >
                                                <p id="textoBotao">Criar sessão</p>
                                            </div>
                                        </button>
                                    </div>
                                </Link>
                            </section>

                        </form>
                    </div>
                    <div className="conteudoDireita">
                        <Link to='/criarsessao/8' className="decorationLinks">
                            <div className="botaoEtapaAnterior cursorEtapaAnterior">
                                <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                                <p className="textoBotao">Etapa anterior</p>
                            </div>
                        </Link>
                        <img src={criarSessao9_semBack} className="imgEquipa" alt="criar equipa segunda imagem" />
                    </div>
                </div>
            </section>
        </article >
    )
}

export default CriarSessao9
