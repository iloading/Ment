import React from 'react'

import registo2Img from "../img/boasVindas/boasVindas.svg";
import registoImgDesktop from "../img/boasVindas/boasVindas_desktop.svg";
import navLogo from "../img/logo.svg";

import { Link } from 'react-router-dom';


function boasVindas() {

    return (
        <>
            <div className="formularioRegisto_menu">
                <aside className="menu_principal_registo">
                    <div className="asideLogoRegisto">
                        <img src={navLogo} alt="" />
                    </div>
                </aside>
            </div>
            <div id="main" className="boasVindas">
                <section className="conteudoMain">
                    {/*DESKTOP*/}
                    <div id="bemvindo">

                        <div className="bemvindo_titulos">
                            <h3>Bom dia,</h3>
                            <h1>Bem vindo à ment!</h1>
                        </div>


                    </div>

                    <div className="titulo">
                        <div className="tituloPag criarEquipaTitulo" id="tituloPag">
                            <label className="tituloCriarEquipas desktop"></label>
                        </div>



                    </div>

                    <div className="conteudoMid">
                        <div className="conteudoEsquerda">

                            <div className="formularioRegisto">
                                <header className="registoImg">



                                    <img src={registo2Img} alt="registo segunda imagem" />

                                </header>
                                <div className="formulario" id='etapa1'>
                                    <section className="tituloPrincipal">
                                        <label>A sua conta foi criada com sucesso!</label>
                                    </section>

                                    <section className="paragrafo">
                                        <p className="marginTexto">No entanto, antes de avançar, gostávamos de o convidar a visitar um guia passo-a-passo sobre como utilizar a plataforma no contexto da mentoria entre pares!</p>
                                        <p className="marginTexto">O tutorial, dividido em breves etapas que pode visitar e revisitar quando quiser, tem por missão ajudá-lo neste percurso e criar uma melhor experiência!</p>
                                        <p>Boa sorte!</p>
                                    </section>
                                    <section className="inputFormulario">





                                    </section>



                                    <section className="botao">
                                        <Link to='/tutorial' className="decorationLinks">
                                            <div className="botaoAzul">
                                                <button id="divBotao">
                                                    <div id="botao" >
                                                        <p id="textoBotao">Ver o tutorial</p>
                                                    </div>
                                                </button>
                                            </div>
                                        </Link>
                                    </section>

                                    <section className="tituloFooter">
                                        <Link to='/dashboard'><span><u> Avançar para a dashboard sem ver o tutorial</u></span></Link>
                                    </section>

                                </div>

                            </div>

                        </div>
                        <div className="conteudoDireitaDesktop">
                            <img src={registoImgDesktop} className="imgEquipa" alt="criar equipa primeira imagem" />
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default boasVindas
