import React from 'react'

import setaAtras from "../../img/setaAtras.png"
import criarEquipa3 from "../../img/criarEquipas/criarEquipa3.svg"

import { Link } from "react-router-dom"

function CriarEquipa3() {
    return (
        <form className="formularioCriarSessao">
            <header className="criarSessaoImg">


                <div className="setaTras">
                    <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                </div>

                <img src={criarEquipa3} alt="criar equipa primeira imagem" />

            </header>

            <section id="corpo">
                <label id="titulo">Detalhes</label>

                <div>
                    <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>

                <div className="formulario">
                    <label className="tituloFormulario">Descrição</label>

                    <input type="text" className="inputTexto" placeholder="ex: A melhor equipa..."></input>
                </div>

                <div className="formulario">
                    <label className="tituloFormulario">Escola</label>

                    <input type="text" className="inputTexto" placeholder="ex: A melhor equipa..."></input>
                </div>


                <div id="divBotao">
                    <div id="botao">
                        <p id="textoBotao">Próximo passo</p>
                    </div>
                </div>
            </section>

        </form>
    )
}

export default CriarEquipa3
