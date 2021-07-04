import React from 'react'
import setaAtras from "../../img/setaAtras.png"
import criarEquipa1 from "../../img/criarEquipas/criarEquipa1.svg"

import { Link } from "react-router-dom"

function CriarEquipa1() {
    return (
        <form className="formularioCriarSessao">
            <header className="criarSessaoImg">


                <div className="setaTras">
                    <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                </div>

                <img src={criarEquipa1} alt="criar equipa primeira imagem" />

            </header>

            <section id="corpo">
                <label id="titulo">Criar uma nova equipa</label>

                <div>
                    <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                </div>

                <div className="formulario">
                    <label className="tituloFormulario">Nome da equipa</label>

                    <input type="text" className="inputTexto" placeholder="ex: Os Aventureiros"></input>
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

export default CriarEquipa1
