import React from 'react'
import setaAtras from "../../img/setaAtras.png";
import criarSessao2 from "../../img/criarSessoes/criarSessao2.svg";

import { Link } from 'react-router-dom'

function CriarSessao1() {
    return (
        <form className="formularioCriarSessao">
            <header className="criarSessaoImg">


                <div className="setaTras">
                    <img src={setaAtras} alt="seta atras" />
                </div>

                <img src={criarSessao2} alt="criar sessao primeira imagem" />

            </header>

            <section id="corpo">
                <label id="titulo">Criar uma nova sessão</label>

                <p id="texto">Para criar uma nova sessão, é necessário ter pelo menos uma equipa criada anteriormente, daí ser impossível avançar deste passo.</p>
                <div id="divBotao">
                    <Link id="botao" to='/criarEquipa'>
                        <p id="textoBotao">Criar uma nova equipa</p>
                    </Link>
                </div>
                <div id="divBotao">
                    <Link id="botao" to='/criarsessao/2'>
                        <p id="textoBotao">Associar uma equipa já existente</p>
                    </Link>
                </div>


            </section>

        </form>
    )
}

export default CriarSessao1
