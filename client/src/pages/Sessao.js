import SessionNav from "./components/SessionNav"
import ResumoSessao from "./components/ResumoSessao"
import RecursosSessao from "./components/RecursosSessao"
import DetalhesSessao from "./components/DetalhesSessao"
import iconDefinicoes from "../img/icons/icon_settings.svg";
import iconShare from "../img/icons/icon_share.svg";
import iconFavorito from "../img/icons/icon_favorito.svg";
import iconLike from "../img/icons/icon_like.svg";
import iconEditar from "../img/icons/icon_editar.svg";
import modalAtencao from "../img/modalAtencao.gif";
/* import iconSessoes from "../img/icons/icon_sessoes.png"; */

//REACT ROUTER
import { Route, Switch, useRouteMatch, Link, useHistory, Redirect } from "react-router-dom";
import { useEffect } from 'react'


import { useDispatch, useSelector } from 'react-redux'
//REDUX//

import { loadSessao, publicarSessaoBanco, checkIsOwner } from '../actions/sessaoAction'

import { motion, AnimatePresence } from "framer-motion";


import { useState } from "react"






function Sessao() {

    let { path, url } = useRouteMatch();
    let id = url.split("/")[2]
    const dispatch = useDispatch()
    useEffect(() => {


        dispatch(loadSessao(id))
        /*  dispatch(checkIsOwner(id)) */
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

    function publicarSessao() {
        dispatch(publicarSessaoBanco({ id: id }))
    }
    const { status: feedbackStatus, type } = useSelector(state => state.feedback)


    useEffect(() => {
        if (feedbackStatus && type === 'valid') {
            if (isVisible === true) {
                dispatch(loadSessao(id))
                /* dispatch(checkIsOwner(id)) */
                toggle()
            }
        }
    }, [feedbackStatus, type, isVisible])
    return (
        <>  {(sessao.isOwner === -1 && sessao.is_public === 0) ? < Redirect to="/dashboard" /> :
            status === 'completed' &&
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
                            {sessao.isOwner === 1 && <Link to={`/sessao/${id}/editarsessao`} onClick={editarHandler}>
                                <img src={iconEditar} alt="" id="editar" />
                            </Link>}
                            {/* <Link to={`/sessao/${id}/editarsessao`} onClick={editarHandler}>
                                    <img src={iconEditar} alt="" id="editar" />
                                </Link> */}

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

                                    }}>

                                        <div id="exit3" onClick={toggle}></div>

                                        <div className="cardAtencao">
                                            <img src={modalAtencao} alt="" />

                                            <p>Atenção! Está prestes a submeter uma sessão no banco público. Qualquer pessoa pode, a partir deste ponto visualizar e descarregar todos os detalhes desta sessão.</p>
                                            <p> Para tal pedimos-lhe que verifique se todas as informações se encontram de acordo com o RGPD e não violam a segurança e/ou privacidade de todos os envolvidos.</p>

                                            <span className="botaoAzul"  >
                                                <button id="divBotao">
                                                    <div id="botao" onClick={publicarSessao}>
                                                        <p id="textoBotao">Publicar</p>
                                                    </div>
                                                </button>
                                            </span>
                                            <span className="botaoAzul"  >
                                                <button id="divBotao">
                                                    <div id="botaoVermelho" onClick={toggle}>
                                                        <p id="textoBotao">Cancelar</p>
                                                    </div>
                                                </button>
                                            </span>
                                        </div>
                                        <div id="exit4" onClick={toggle}></div>

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