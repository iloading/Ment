import SessionNav from "./components/SessionNav"
import ResumoSessao from "./components/ResumoSessao"
import RecursosSessao from "./components/RecursosSessao"
import DetalhesSessao from "./components/DetalhesSessao"
import iconDefinicoes from "../img/icons/icon_settings.svg";
import iconShare from "../img/icons/icon_share.svg";
import iconFavorito from "../img/icons/icon_favorito.svg";
import iconLike from "../img/icons/icon_like.svg";
import iconEditar from "../img/icons/icon_editar.svg";
import iconSessoes from "../img/icons/icon_sessoes.png";

//REACT ROUTER
import { Route, Switch, useRouteMatch, Link, useHistory } from "react-router-dom";
import { useEffect } from 'react'


import { useDispatch, useSelector } from 'react-redux'
//REDUX//

import { loadSessao } from '../actions/sessaoAction'

import modalImg from "../img/modalHome/etapa_0.gif";
import { motion, AnimatePresence } from "framer-motion";


import { useState } from "react"






function Sessao() {

    let { path, url } = useRouteMatch();
    let id = url.split("/")[2]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadSessao(id))

    }, [dispatch, id])

    const { sessaoInfo: sessao, status } = useSelector(state => state.sessao)
    const { nome } = sessao

    const editarHandler = () => {
        dispatch({
            type: "HIDE_FEEDBACK",
        })
    }

    const [isVisible, setVisible] = useState(false);

    function toggle() {
        setVisible(!isVisible);
    }


    return (
        <>
            {status === 'completed' &&
                <article id="main" className="sessao">
                    <SessionNav sessao={sessao} status={status} id={id} toggle={toggle} />
                    <section className="conteudoMain">
                        <div id="bemvindo">

                            <div className="bemvindo_titulos">


                                <img className="imgSessao" src={require(`../img/disciplinas/${sessao.disciplina_url}`).default} alt={sessao.disciplina} />


                                <div>
                                    <h3>Bom dia,</h3>
                                    <h1>{nome}</h1>
                                </div>


                            </div>

                            <div className="icons">
                                <img src={iconDefinicoes} alt="" />
                            </div>


                        </div>


                        <div className="navegacao_desktop">
                            <Link to={`${url}/resumo`}>
                                <div className="cards">
                                    <label >Resumo</label>
                                </div>
                            </Link>
                            <Link to={`${url}/recursos`}>
                                <div className="cards">
                                    <label >Recursos</label>
                                </div>
                            </Link>
                            <Link to={`${url}/detalhes`}>
                                <div className="cards">
                                    <label >Detalhes</label>
                                </div>
                            </Link>
                            <div className="botoesDesktopSessao">
                                <img src={iconShare} alt="" id="share" />
                                <img src={iconFavorito} alt="" id="favorito" />
                                <img src={iconLike} alt="" id="like" />
                                <Link to={`/sessao/${id}/editarsessao`} onClick={editarHandler}>
                                    <img src={iconEditar} alt="" id="editar" />
                                </Link>

                            </div>

                        </div>


                        <Switch>
                            <Route exact path={[path, `${path}/resumo`]}>
                                <ResumoSessao sessao={sessao} status={status} toggle={toggle} />
                            </Route>
                            <Route path={`${path}/recursos`}>
                                <RecursosSessao sessao={sessao} status={status} toggle={toggle} />
                            </Route>
                            <Route path={`${path}/detalhes`}>
                                <DetalhesSessao sessao={sessao} status={status} toggle={toggle} />
                            </Route>
                        </Switch>


                        <motion.div className='botaoAtencao' style={{


                        }}
                        >
                            <AnimatePresence>
                                {isVisible && (
                                    <motion.div
                                        style={{
                                            width: `100%`,
                                            height: `100%`,
                                            display: "grid",
                                            position: "fixed",
                                            gridTemplateAreas: `"div1""carousel""div2"`,
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            zIndex: '10',
                                            backdropFilter: `blur(10px) grayscale(1) brightness(70%)`,
                                            overflow: "hidden",
                                            justifyContent: "center",
                                            gridTemplateRows: "1fr auto 1fr"





                                        }}
                                        initial={{ scale: 0, opacity: 1 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}

                                    >
                                        <div id="exit1" onClick={toggle}></div>

                                        <div className="CardPosition" style={{
                                            zIndex: '11',

                                        }} onClick={function name(params) {

                                        }}>
                                            <div className="cardAtencao">
                                                <img src={modalImg} alt="" />

                                                <p>Sensibilize os seus alunos / um grupo de alunos voluntários para o processo de mentoria entre pares, em particular entre alunos de níveis diferentes, e crie uma equipa de mentores.
                                                </p>
                                            </div>
                                        </div>
                                        <div id="exit2" onClick={toggle}></div>



                                    </motion.div>
                                )}

                            </AnimatePresence>


                        </motion.div>
                    </section>

                </article>
            }
        </>
    );
}

export default Sessao;