import React from 'react'
import CriarEquipa1 from "./CriarEquipa1";
import CriarEquipa2 from "./CriarEquipa2";
import CriarEquipa3 from "./CriarEquipa3";
import CriarEquipa4 from "./CriarEquipa4";
import CriarEquipa5 from "./CriarEquipa5";
import CriarEquipa6 from "./CriarEquipa6";

import { Route, Switch } from 'react-router-dom'

function CriarEquipa() {
    return (
        <>
            <Switch>

                <Route path={['/criarEquipa/1', '/criarEquipa']} exact>{<CriarEquipa1 />}</Route>
                <Route path='/criarEquipa/2'>{<CriarEquipa2 />}</Route>
                <Route path='/criarEquipa/3'>{<CriarEquipa3 />}</Route>
                <Route path='/criarEquipa/4'>{<CriarEquipa4 />}</Route>
                <Route path='/criarEquipa/5'>{<CriarEquipa5 />}</Route>
                <Route path='/criarEquipa/6'>{<CriarEquipa6 />}</Route>


            </Switch>
        </>
    )
}

export default CriarEquipa
