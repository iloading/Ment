import React from 'react'
import setaAtras from "../../img/setaAtras.png";
import criarSessao2 from "../../img/criarSessoes/criarSessao2.svg";



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
                    <div id="botao">
                        <p id="textoBotao">Associar Equipa</p>
                    </div>
                </div>

            </section>

        </form>
    )
}

export default CriarSessao1
