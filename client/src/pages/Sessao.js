import SessionNav from "./components/SessionNav"
import ResumoSessao from "./components/ResumoSessao"
import RecursosSessao from "./components/RecursosSessao"
import DetalhesSessao from "./components/DetalhesSessao"

//REACT ROUTER
import { Route, Switch, useRouteMatch } from "react-router-dom";








function Sessao() {

    let { path, url } = useRouteMatch();

    return (
        <article className="sessao">
            <SessionNav />
            <section id="main" className="conteudoMain">

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