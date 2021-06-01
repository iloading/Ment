import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"

import { Link } from "react-router-dom"

function Etapa6() {
    return (
        <article className="etapa f1">
            <section className="fundoAzul">
                <div className="navTutorial">
                    <Link to="." id="seta"><img src={setaAtrasBranca} alt="setaAtras" /></Link>
                    <h2 id="tutorial">Etapa 6</h2>
                </div>
                <div className="principal">
                    <h2 id="titulo">1. Final do projeto</h2>
                    <p id="texto1fundoAzul">No final do projeto, pedimos que regresse à plataforma “ment” e partilhe connosco o resultado final do trabalho produzido. Para tal, sugerimos que siga os seguintes passos:</p>
                    <ul id="texto2fundoAzul">
                        <li>depois de aceder à sua página pessoal, selecione o projeto e dê-o como finalizado;</li>
                        <li>preencha a informação que lhe for solicitada;</li>
                        <li>faça o upload dos recursos criados, nomeadamente, o guião da sessão e a narrativa criada, fotos e/ou outros que considere pertinente;</li>
                        <li>deixe o seu testemunho sobre a experiência de gestão e implementação do projeto e estimule os mentores da equipa a deixarem aqui também os seus testemunhos. </li>
                    </ul>
                </div>
            </section>
        </article>
    )
}

export default Etapa6
