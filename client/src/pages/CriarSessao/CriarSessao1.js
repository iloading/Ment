import React from 'react'
import setaAtras from "../../img/setaAtras.png";
import criarSessao1 from "../../img/criarSessoes/criarSessao1.svg";



function CriarSessao1() {
    return (
        <form className="formularioCriarSessao">
            <header className="criarSessaoImg">


                <div className="setaTras">
                    <img src={setaAtras} alt="seta atras" />
                </div>

                <img src={criarSessao1} alt="registo segunda imagem" />

            </header>

            <section id="corpo">
                <label id="titulo">Associar Equipa</label>

                <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <div id="divBotao">
                    <div id="botao">
                        <p id="textoBotao">Associar equipa</p>
                    </div>
                </div>
            </section>

        </form>
    )
}

export default CriarSessao1
