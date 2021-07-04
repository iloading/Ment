import React from 'react'

import setaAtras from "../../img/setaAtras.png"
import criarEquipa4 from "../../img/criarEquipas/criarEquipa4.svg"

import { Link } from "react-router-dom"

function CriarEquipa4() {
    return (
        <form className="formularioCriarSessao">
            <header className="criarSessaoImg">


                <div className="setaTras">
                    <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                </div>

                <img src={criarEquipa4} alt="criar equipa primeira imagem" />

            </header>

            <section id="corpo">
                <label id="titulo">Adicionar alunos</label>

                <div>
                    <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.   </p>
                </div>


                <div id="divBotao">
                    <div id="botao">
                        <p id="textoBotao">Adicionar alunos</p>
                    </div>
                </div>
            </section>

        </form>
    )
}

export default CriarEquipa4
