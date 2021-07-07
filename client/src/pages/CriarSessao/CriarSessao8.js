import React from 'react'
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarSessao3 from "../../img/criarSessoes/criarSessao3.svg";

import criarSessao3_semBack from "../../img/criarSessoes/criarSessao3_semBack.svg"

import iconDefinicoes from "../../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"

function CriarSessao8() {
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
                            <label className="tituloCriarEquipas desktop">Papéis</label>
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
                                <label id="titulo">Papéis</label>

                                <div>
                                    <p id="texto">Para uma sessão funcionar corretamente é necessário explicitar os papéis dos mentores e dos mentorandos. Lembre-se de depositar nos mentores tarefas que os valorizem e se sintam motivados!</p>
                                </div>

                                <div className="formulario">
                                    <label className="tituloFormulario">Papel dos mentores</label>

                                    <input type="text" className="inputTexto" placeholder="ex: Past tense, teorema de pitágoras"></input>

                                    <label className="tituloFormulario">Papel dos mentorandos</label>

                                    <input type="text" className="inputTexto" placeholder="ex: Past tense, teorema de pitágoras"></input>
                                </div>
                                <div className="botaoAzul">
                                    <div id="divBotao">
                                        <div id="botao">
                                            <p id="textoBotao">Próximo passo</p>
                                        </div>
                                    </div>
                                </div>
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

export default CriarSessao8
