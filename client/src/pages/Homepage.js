import React from 'react'
import CarouselHomePage from "./components/CarouselHomePage";
import navLogo from "../img/logo.svg";
import home1 from "../img/home1.svg";
import home2 from "../img/home2.svg";
import home3 from "../img/home3.svg";
import home4 from "../img/home4.svg";
import home5 from "../img/home5.svg";
import footer from "../img/homepageFooter.png";
import imgBanco from "../img/imgBanco.png";
import comoFunciona1 from "../img/comoFunciona1.svg";
import comoFunciona2 from "../img/comoFunciona2.svg";
import comoFunciona3 from "../img/comoFunciona3.svg";
import comoFunciona4 from "../img/comoFunciona4.svg";

import sair from "../img/icons/eliminar_aluno_x.svg"

import { Link } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";
import { useHistory } from "react-router-dom"




function Homepage() {
    let history = useHistory();
    const redirectLogin = () => { history.push("/login") }
    const redirectRegisto = () => { history.push("/registo") }

    const [isVisible, setVisible] = React.useState(true);

    function toggle() {
        setVisible(!isVisible);
    }

    return (


        <>


            <article className="divisao">
                <div className="homepage">


                    <nav>
                        <img src={navLogo} alt="logo navbar" id="logo" />

                        <div id="login">


                            <button type="button" className="botao btnRegisto" onClick={redirectRegisto}>Registar</button>
                            <button type="button" className="botao btnLogin" onClick={redirectLogin}>Entrar</button>
                        </div>



                    </nav>
                    <div className="topInfo">
                        <div className="img_textos">
                            <div className="tituloMentoria">
                                <label>Mentoria entre pares</label>

                            </div>


                            <div id="texto1">

                                <ul>
                                    <li> <p>E se aprender pudesse ser divertido?</p></li>
                                    <li>    <p>Já pensou em dar mais responsabilidade aos seus alunos?</p></li>
                                    <li> <p>Motivar as suas turmas através de mentoria entre pares acabou de se tornar mais fácil, graças à ment.</p></li>
                                </ul>




                            </div>
                            <img src={home1} className="imagem1Homepage_mobile" alt="imagem homepage" />

                            <motion.card style={{
                                width: `65%`,
                                cursor: "pointer",
                            }}
                            >
                                <AnimatePresence>
                                    {isVisible && (
                                        <motion.cardOverlay
                                            style={{
                                                width: `100%`,
                                                height: `100%`,
                                                display: "flex",
                                                position: "absolute",
                                                flexDirection: "column",
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                zIndex: '10',
                                                backdropFilter: `blur(10px) grayscale(1) brightness(70%)`,

                                                justifyContent: "center",





                                            }}
                                            initial={{ scale: 0, opacity: 1 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                        >

                                            <img onClick={toggle} src={sair} alt="" className="sairModal" />
                                            <div className="carouselHome">
                                                <CarouselHomePage />
                                            </div>




                                        </motion.cardOverlay>
                                    )}

                                </AnimatePresence>
                                <button type="button" className="botaoRegisto gapBotao" onClick={toggle}>Como funciona?</button>
                            </motion.card>



                        </div>


                        <img src={home1} className="imagem1Homepage_desktop" alt="imagem homepage" />



                    </div>

                    <div className="construcaoPasso">
                        <img src={home2} className="imagem2Homepage_desktop" alt="imagem homepage" />

                        <div className="img_textos">
                            <div className="tituloMentoria">
                                <label>Construção passo-a-passo</label>

                            </div>
                            <img src={home2} className="imagem2Homepage_mobile" alt="imagem homepage" />

                            <div id="texto1">

                                <ol>
                                    <li>Navegar no banco de sessões existente</li>
                                    <li>Criar uma sessão nova</li>
                                    <li>Implementar a sessão com a sua turma</li>
                                    <li>Partilhar a sessão com outros professores</li>
                                </ol>




                            </div>




                        </div>




                    </div>
                    <div className="comoFunciona">
                        <label>Como funciona?</label>

                        <div className="comoFuncionaCards">
                            <div className="card">
                                <label>Banco</label>
                                <p>Explores projetos realizados em todo o país</p>
                                <img src={home3} alt="" />
                            </div>
                            <div className="card">
                                <label>Agilização</label>
                                <p>Estruturação faseada para melhor compreensão</p>
                                <img src={home4} alt="" />
                            </div>
                            <div className="card">
                                <label>Partilha</label>
                                <p>Partilhe as sessões que criou com a comunidade</p>
                                <img src={home5} alt="" />
                            </div>

                        </div>
                        <button type="button" className="botaoRegisto2 gapBotao" onClick={redirectRegisto}>Registar agora</button>


                    </div>


                </div>



            </article>
            {/* <article className="homepageFooter">
                <img src={footer} alt="" />
            </article> */}


        </>
    )
}

export default Homepage
