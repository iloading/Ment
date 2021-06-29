import React from 'react'
import setaAtras from "../../img/setaAtras.png";
import criarSessao3 from "../../img/criarSessoes/criarSessao3.svg";


function CriarSessao4() {
    return (
        <form className="formularioCriarSessao">
            <header className="criarSessaoImg">


                <div className="setaTras">
                    <img src={setaAtras} alt="seta atras" />
                </div>

                <img src={criarSessao3} alt="criar sessao primeira imagem" />

            </header>

            <section id="corpo">
                <label id="titulo">Detalhes</label>

                <div className="formulario">
                    <label className="tituloFormulario">Disciplina</label>

                    <input type="text" className="inputTexto" placeholder="ex: Inglês, Matemática, etc..."></input>
                </div>

                <div className="formulario">
                    <label className="tituloFormulario">Counteúdos programáticos</label>

                    <input type="text" className="inputTexto" placeholder="ex: Past tense, teorema de pitágoras"></input>
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

export default CriarSessao4
