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

                <Route path={['/criarequipa/1', '/criarequipa']} exact>{<CriarEquipa1 />}</Route>
                <Route path='/criarequipa/2'>{<CriarEquipa2 />}</Route>
                <Route path='/criarequipa/3'>{<CriarEquipa3 />}</Route>
                <Route path='/criarequipa/4'>{<CriarEquipa4 />}</Route>
                <Route path='/criarequipa/5'>{<CriarEquipa5 />}</Route>
                <Route path='/criarequipa/6'>{<CriarEquipa6 />}</Route>


            </Switch>
        </>
    )
}

export default CriarEquipa
