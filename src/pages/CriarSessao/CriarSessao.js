import React from 'react'
import CriarSessao1 from "./CriarSessao1";
import CriarSessao2 from "./CriarSessao2";
import CriarSessao3 from "./CriarSessao3";
import CriarSessao4 from "./CriarSessao4";
import CriarSessao5 from "./CriarSessao5";
import CriarSessao6 from "./CriarSessao6";
import CriarSessao7 from "./CriarSessao7";
import CriarSessao8 from "./CriarSessao8";
import CriarSessao9 from "./CriarSessao9";



import { Route, Switch } from 'react-router-dom'

function CriarSessao() {
    return (
        <>
            <Switch>

                <Route path={['/criarsessao/1', '/criarsessao']} exact>{<CriarSessao1 />}</Route>
                <Route path='/criarsessao/2'>{<CriarSessao2 />}</Route>
                <Route path='/criarsessao/3'>{<CriarSessao3 />}</Route>
                <Route path='/criarsessao/4'>{<CriarSessao4 />}</Route>
                <Route path='/criarsessao/5'>{<CriarSessao5 />}</Route>
                <Route path='/criarsessao/6'>{<CriarSessao6 />}</Route>
                <Route path='/criarsessao/7'>{<CriarSessao7 />}</Route>
                <Route path='/criarsessao/8'>{<CriarSessao8 />}</Route>
                <Route path='/criarsessao/9'>{<CriarSessao9 />}</Route>



            </Switch>
        </>
    )
}

export default CriarSessao
