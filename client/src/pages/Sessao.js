import SessionNav from "./components/SessionNav"
import ResumoSessao from "./components/ResumoSessao"
import RecursosSessao from "./components/RecursosSessao"
import DetalhesSessao from "./components/DetalhesSessao"
import iconDefinicoes from "../img/icons/icon_settings.svg";

//REACT ROUTER
import { Route, Switch, useRouteMatch, Link } from "react-router-dom";








function Sessao() {

    let { path, url } = useRouteMatch();

    return (
        <article className="sessao">
            <SessionNav />
            <section id="main" className="conteudoMain">
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Sessao</h1>
                    </div>
                    <div className="icons">
                        <img src={iconDefinicoes} alt="" />
                    </div>

                </div>

                <div className="navegacao">
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
                        <ResumoSessao />
                    </Route>
                    <Route path={`${path}/recursos`}>
                        <RecursosSessao />
                    </Route>
                    <Route path={`${path}/detalhes`}>
                        <DetalhesSessao />
                    </Route>
                </Switch>



            </section>

        </article>
    );
}

export default Sessao;