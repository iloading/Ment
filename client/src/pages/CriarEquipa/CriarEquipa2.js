import React from 'react'

import setaAtras from "../../img/setaAtras.png"
import criarEquipa2 from "../../img/criarEquipas/criarEquipa2.svg"

import { Link } from "react-router-dom"

function CriarEquipa2() {
    return (
        <form className="formularioCriarSessao">
            <header className="criarSessaoImg">


                <div className="setaTras">
                    <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                </div>

                <img src={criarEquipa2} alt="criar equipa primeira imagem" />

            </header>

            <section id="corpo">
                <label id="titulo">Definir um alias</label>

                <div>
                    <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>

                <div className="formulario">
                    <label className="tituloFormulario">Nome do atalho</label>

                    <input type="text" className="inputTexto" placeholder="ex: Aquela turma do 7ºB"></input>
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

export default CriarEquipa2
