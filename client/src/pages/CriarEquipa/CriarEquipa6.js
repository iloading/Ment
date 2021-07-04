import React from 'react'

import setaAtras from "../../img/setaAtras.png"
import criarEquipa6 from "../../img/criarEquipas/criarEquipa6.svg"

import { Link } from "react-router-dom"

function CriarEquipa6() {
    return (
        <form className="formularioCriarSessao">
            <header className="criarSessaoImg">


                <div className="setaTras">
                    <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                </div>

                <img src={criarEquipa6} alt="criar equipa primeira imagem" />

            </header>

            <section id="corpo">
                <label id="titulo">Escolher foto</label>

                <div>
                    <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.   </p>
                </div>


                <div id="divBotao">
                    <div id="botao">
                        <p id="textoBotao">Upload</p>
                    </div>
                </div>
            </section>

        </form>
    )
}

export default CriarEquipa6
