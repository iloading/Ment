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
                    <label className="tituloFormulario">Descrição</label>

                    <textarea type="text" className="textareaTexto" placeholder="Descrição da equipa"></textarea>
                </div>

                <div id="divBotao">
                    <div id="botao">
                        <p id="textoBotao">Criar sessão!</p>
                    </div>
                </div>
            </section>

        </form>
    )
}

export default CriarSessao4
