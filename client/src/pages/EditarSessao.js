import React from 'react'
import setaAtras from "../img/icons/icon_setaAtrasEditarSessao.svg"
import iconFechar from "../img/icons/icon_fechar.svg"
import iconDefinicoes from "../img/icons/icon_settings.svg";

import { Link } from "react-router-dom"

function EditarSessao() {
    return (
        <article className="editarSessao">
            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Criar Sessão</h1>
                    </div>
                    <div className="icons">
                        <Link to='/criarsessao/6' className="iconFechar">
                            <img src={iconFechar} alt="seta atras" />
                        </Link>
                    </div>

                </div>

                <div className="titulo">
                    <div className="tituloPag criarEquipaTitulo" id="tituloPag">
                        <div className="gridAdicionar">
                            <label className="tituloCriarEquipas desktop">Detalhes</label>

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

                                <Link to='/criarsessao/6' className="iconFechar">
                                    <img src={iconFechar} alt="seta atras" />
                                </Link>


                            </header>

                            <section id="corpo">
                                <div className="formulario">
                                    <label className="tituloFormulario">Nome da sessão</label>
                                    <input type="text" className="inputTexto" placeholder="boas" />

                                    <label className="tituloFormulario">Ano de escolaridade dos mentorandos</label>
                                    <input type="text" className="inputTexto" placeholder="boas" />

                                    <label className="tituloFormulario">Disciplina</label>
                                    <input type="text" className="inputTexto" placeholder="boas" />

                                    <label className="tituloFormulario">Conteúdos programáticos</label>
                                    <textarea type="text" className="textareaTexto" placeholder="boas" />

                                    <label className="tituloFormulario">Descrição</label>
                                    <textarea type="text" className="textareaTexto" placeholder="boas" />

                                    <label className="tituloFormulario">Situação problema</label>
                                    <textarea type="text" className="textareaTexto" placeholder="boas" />

                                    <label className="tituloFormulario">Factos reais</label>
                                    <textarea type="text" className="textareaTexto" placeholder="boas" />

                                    <label className="tituloFormulario">Factos ficcionais</label>
                                    <textarea type="text" className="textareaTexto" placeholder="boas" />

                                    <label className="tituloFormulario">Papel dos mentores</label>
                                    <textarea type="text" className="textareaTexto" placeholder="boas" />

                                    <label className="tituloFormulario">Papel dos mentorandos</label>
                                    <textarea type="text" className="textareaTexto" placeholder="boas" />

                                    <label className="tituloFormulario">O que se espera da sessão</label>
                                    <textarea type="text" className="textareaTexto" placeholder="boas" />
                                </div>
                                <Link className="botaoAzul" to="/criarequipa/2" >
                                    <button id="divBotao">
                                        <div id="botao" >
                                            <p id="textoBotao">Guardar</p>
                                        </div>
                                    </button>
                                </Link>
                            </section>
                        </form>
                    </div>
                    <div className="conteudoDireita">

                        <Link className="botaoAzul" to="/criarequipa/2" >
                            <button id="divBotao">
                                <div id="botao" >
                                    <p id="textoBotao">Guardar</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>

            </section>
        </article>
    )
}

export default EditarSessao
