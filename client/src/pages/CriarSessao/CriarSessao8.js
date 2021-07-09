import React from 'react'
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarSessao3 from "../../img/criarSessoes/criarSessao3.svg";

import criarSessao3_semBack from "../../img/criarSessoes/criarSessao3_semBack.svg"

import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"
//REDUX//
import { preencherMentores, preencherMentorandos } from "../../actions/criacaoSessaoAction";

import { useDispatch, useSelector } from 'react-redux'

function CriarSessao8() {
    const dispatch = useDispatch()
    const { funcao_mentores, funcao_mentorandos } = useSelector(state => state.criarSessao.dadosPreenchidos)

    const mentoresHandler = (e) => {

        let mentores;
        if (e.target.value === '') {
            mentores = ''
        } else {
            mentores = e.target.value
        }

        dispatch(preencherMentores(mentores))
    }
    const mentorandosHandler = (e) => {

        let mentorandos;
        if (e.target.value === '') {
            mentorandos = ''
        } else {
            mentorandos = e.target.value
        }

        dispatch(preencherMentorandos(mentorandos))
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


                                <Link to='/criarsessao/7' className="setaTras">
                                    <img src={setaAtras} alt="seta atras" />
                                </Link>

                                <img src={criarSessao3} alt="criar sessao primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Detalhes adicionais</label>

                                <div>
                                    <p id="texto">Para uma sessão funcionar corretamente é necessário explicitar os papéis dos mentores e dos mentorandos. </p>
                                </div>

                                <div className="formulario">
                                    <label className="tituloFormulario">Papel dos mentores</label>

                                    <input type="text" className="inputTexto" placeholder="ex: No papel de super-heróis, guiar os mentorandos para salvarem o planeta Terra..." value={funcao_mentores} onChange={mentoresHandler}></input>

                                    <label className="tituloFormulario">Papel dos mentorandos</label>

                                    <input type="text" className="inputTexto" placeholder="ex: No papel de astronautas, encontrarem uma forma de salvar a Terra..." value={funcao_mentorandos} onChange={mentorandosHandler}></input>
                                </div>
                                {(funcao_mentores !== '' || funcao_mentorandos !== '') ?
                                    <Link to='/criarsessao/9' className="decorationLinks">
                                        <div className="botaoAzul widthBotao">
                                            <button id="divBotao">
                                                <div id="botao" >
                                                    <p id="textoBotao">Próximo passo</p>
                                                </div>
                                            </button>
                                        </div>
                                    </Link>
                                    :
                                    <Link to='/criarsessao/9' className="decorationLinks">
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
                        <Link to='/criarsessao/7' className="decorationLinks">
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

export default CriarSessao8
