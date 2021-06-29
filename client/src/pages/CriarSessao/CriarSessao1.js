import React from 'react'
import setaAtras from "../../img/setaAtras.png";
import criarSessao2 from "../../img/criarSessoes/criarSessao2.svg";

import { Link } from 'react-router-dom';



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

                <p id="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>

                <div className="formulario">
                    <label className="tituloFormulario">Nome da sessão</label>

                    <input type="text" className="inputTexto" placeholder="ex: Escape Room"></input>
                </div>

                <div id="divBotao">
                    <div id="botao">
                        <p id="textoBotao">Próximo passo</p>
                    </div>
                </div>
                <div id="linkFooter">
                    <Link to=''><span><u> Atribuia-me um nome aleatório.<br></br>Pode alterar o nome em qualquer altura</u></span></Link>
                </div>
            </section>

        </form>
    )
}

export default CriarSessao1
