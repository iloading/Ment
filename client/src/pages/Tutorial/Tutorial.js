import React from 'react'
import setaAtras from "../../img/setaAtras.png"
import setaDireita from "../../img/setaDireita.png";

import { Link } from "react-router-dom"

function Tutorial() {
    return (

        <article className="tutorial">
            <div className="navTutorial">
                <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                <h2 id="tutorial">Tutorial</h2>
            </div>
            <section>
                <Link to="tutorial/0" id="linkCaixa">
                    <div id="textoEsquerda">
                        <h4>Etapa 0</h4>
                        <p>Preparação e criação de uma equipa de mentores</p>
                    </div>
                    <div id="setaDireita">
                        <img src={setaDireita} alt="" id="seta" />
                    </div>
                </Link>
            </section>
            <section>
                <Link to="tutorial/1" id="linkCaixa">
                    <div id="textoEsquerda">
                        <h4>Etapa 1</h4>
                        <p>Definição dos conteúdos programáticos e criação da narrativa</p>
                    </div>
                    <div id="setaDireita">
                        <img src={setaDireita} alt="" id="seta" />
                    </div>
                </Link>
            </section>
            <section>
                <Link to="tutorial/2" id="linkCaixa">
                    <div id="textoEsquerda">
                        <h4>Etapa 2</h4>
                        <p>Construção do guião da sessão de mentoria (Atividades e Tarefas)</p>
                    </div>
                    <div id="setaDireita">
                        <img src={setaDireita} alt="" id="seta" />
                    </div>
                </Link>
            </section>
            <section>
                <Link to="tutorial/3" id="linkCaixa">
                    <div id="textoEsquerda">
                        <h4>Etapa 3</h4>
                        <p>Preparação de tarefas e divulgação da sessão de mentoria</p>
                    </div>
                    <div id="setaDireita">
                        <img src={setaDireita} alt="" id="seta" />
                    </div>
                </Link>
            </section>
            <section>
                <Link to="tutorial/4" id="linkCaixa">
                    <div id="textoEsquerda">
                        <h4>Etapa 4</h4>
                        <p>Implementação da sessão de mentoria com base no guião criado</p>
                    </div>
                    <div id="setaDireita">
                        <img src={setaDireita} alt="" id="seta" />
                    </div>
                </Link>
            </section>
            <section>
                <Link to="tutorial/5" id="linkCaixa">
                    <div id="textoEsquerda">
                        <h4>Etapa 5</h4>
                        <p>Reflexão final através do preenchimento de questionários</p>
                    </div>
                    <div id="setaDireita">
                        <img src={setaDireita} alt="" id="seta" />
                    </div>
                </Link>
            </section>
            <section>
                <Link to="tutorial/6" id="linkCaixa">
                    <div id="textoEsquerda">
                        <h4>Etapa 6</h4>
                        <p>Ajudar outros professores através da partilha do trabalho na plataforma</p>
                    </div>
                    <div id="setaDireita">
                        <img src={setaDireita} alt="" id="seta" />
                    </div>
                </Link>
            </section>
        </article>
    )
}


export default Tutorial

