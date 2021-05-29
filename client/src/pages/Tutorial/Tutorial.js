import React from 'react'
import setaAtras from "../../img/setaAtras.png"
import setaDireita from "../../img/setaDireita.png";

function Tutorial() {
    return (

        <article className="tutorial">
            <nav>
                <img src={setaAtras} alt="" id="seta" />
                <h2 id="tutorial">Tutorial</h2>
            </nav>
            <section>
                <div id="textoEsquerda">
                    <h4>Etapa 0</h4>
                    <p>Preparação e criação de uma equipa de mentores</p>
                </div>
                <div id="setaDireita">
                    <img src={setaDireita} alt="" id="seta" />
                </div>
            </section>
            <section>
                <div id="textoEsquerda">
                    <h4>Etapa 1</h4>
                    <p>Criação da narrativa</p>
                </div>
                <div id="setaDireita">
                    <img src={setaDireita} alt="" id="seta" />
                </div>
            </section>
            <section>
                <div id="textoEsquerda">
                    <h4>Etapa 2</h4>
                    <p>Construção do guião da sessão de mentoria</p>
                </div>
                <div id="setaDireita">
                    <img src={setaDireita} alt="" id="seta" />
                </div>
            </section>
            <section>
                <div id="textoEsquerda">
                    <h4>Etapa 3</h4>
                    <p>Preparação de tarefas e divulgação da sessão de mentoria</p>
                </div>
                <div id="setaDireita">
                    <img src={setaDireita} alt="" id="seta" />
                </div>
            </section>
            <section>
                <div id="textoEsquerda">
                    <h4>Etapa 4</h4>
                    <p>Sessão de mentoria</p>
                </div>
                <div id="setaDireita">
                    <img src={setaDireita} alt="" id="seta" />
                </div>
            </section>
            <section>
                <div id="textoEsquerda">
                    <h4>Etapa 5</h4>
                    <p>Reflexão final</p>
                </div>
                <div id="setaDireita">
                    <img src={setaDireita} alt="" id="seta" />
                </div>
            </section>
            <section>
                <div id="textoEsquerda">
                    <h4>Etapa 6</h4>
                    <p>Ajudar outros professores</p>
                </div>
                <div id="setaDireita">
                    <img src={setaDireita} alt="" id="seta" />
                </div>
            </section>
        </article>
    )
}


export default Tutorial

