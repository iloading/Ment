import React from 'react'
import CriarSessao1 from "./CriarSessao1";
import CriarSessao2 from "./CriarSessao2";
import CriarSessao3 from "./CriarSessao3";
import CriarSessao4 from "./CriarSessao4";

import { Route, Switch } from 'react-router-dom'

function CriarSessao() {
    return (
        <>
            <Switch>

                <Route path={['/criarsessao/1', '/criarsessao']} exact>{<CriarSessao1 />}</Route>
                <Route path='/criarsessao/2'>{<CriarSessao2 />}</Route>
                <Route path='/criarsessao/3'>{<CriarSessao3 />}</Route>
                <Route path='/criarsessao/4'>{<CriarSessao4 />}</Route>

            </Switch>
        </>
    )
}

export default CriarSessao
