import SessionNav from "./components/SessionNav"
import ResumoSessao from "./components/ResumoSessao"
import RecursosSessao from "./components/RecursosSessao"
import DetalhesSessao from "./components/DetalhesSessao"
import iconDefinicoes from "../img/icons/icon_settings.svg";

//REACT ROUTER
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
//REDUX//

import { loadSessao } from '../actions/sessaoAction'








function Sessao() {

    let { path, url } = useRouteMatch();
    let id = url.split("/")[2]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadSessao(id))

    }, [dispatch, id])

    const { sessaoInfo: sessao, status } = useSelector(state => state.sessao)
    const { nome, descricao, subject, factos_ficcionais, factos_reais, situacao_problema, resultados_esperados, funcao_alunos_mentores, funcao_alunos_mentorandos, disciplina, ano } = sessao

    return (
        <>
            {status === 'completed' &&
                <article className="sessao">
                    <SessionNav sessao={sessao} status={status} />
                    <section id="main" className="conteudoMain">
                        <div id="bemvindo">

                            <div className="bemvindo_titulos">
                                <h3>Bom dia,</h3>
                                <h1>{nome}</h1>
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

                        </div>


                        <Switch>
                            <Route exact path={[path, `${path}/resumo`]}>
                                <ResumoSessao sessao={sessao} status={status} />
                            </Route>
                            <Route path={`${path}/recursos`}>
                                <RecursosSessao sessao={sessao} status={status} />
                            </Route>
                            <Route path={`${path}/detalhes`}>
                                <DetalhesSessao sessao={sessao} status={status} />
                            </Route>
                        </Switch>



                    </section>

                </article>
            }
        </>
    );
}

export default Sessao;