import React from 'react'
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarSessao3 from "../../img/criarSessoes/criarSessao3.svg";

import criarSessao3_semBack from "../../img/criarSessoes/criarSessao3_semBack.svg"

import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"


function CriarSessao7() {
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
                            <label className="tituloCriarEquipas desktop">Dados técnicos</label>
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


                                <Link to='/criarsessao/6' className="setaTras">
                                    <img src={setaAtras} alt="seta atras" />
                                </Link>

                                <img src={criarSessao3} alt="criar sessao primeira imagem" />

                            </header>

                            <section id="corpo">
                                <label id="titulo">Processo de construção</label>

                                <div>
                                    <p id="texto">Quais são os factos reais sobre esta sessão, e quais são apenas ficcionais?</p>
                                </div>

                                <div className="formulario">
                                    <label className="tituloFormulario">Factos reais</label>

                                    <textarea type="text" className="textareaTexto" placeholder="ex: Os planetas da galáxia..."></textarea>

                                    <label className="tituloFormulario">Factos ficcionais</label>

                                    <textarea type="text" className="textareaTexto" placeholder="ex: A colisão de um planeta com a Terra..."></textarea>
                                </div>
                                <Link to='/criarsessao/8' className="decorationLinks">
                                    <div className="botaoAzul widthBotao">
                                        <button id="divBotao">
                                            <div id="botao" >
                                                <p id="textoBotao">Próximo passo</p>
                                            </div>
                                        </button>
                                    </div>
                                </Link>
                            </section>

                        </form>
                    </div>
                    <div className="conteudoDireita">
                        <div className="botaoEtapaAnterior cursorEtapaAnterior">
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

export default CriarSessao7
