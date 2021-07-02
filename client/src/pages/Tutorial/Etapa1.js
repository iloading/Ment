import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaDownload from "../../img/setaDownload.png"

import { Link } from "react-router-dom"

function Etapa1() {
    return (
        <article className="etapa">
            <section className="fundoAzul">
                <div className="navTutorial">
                    <Link to="../tutorial" id="seta"><img src={setaAtrasBranca} alt="setaAtras" /></Link>
                    <h2 id="tutorial">Etapa 1</h2>
                </div>
                <div className="principal">
                    <h2 id="titulo">1. Conteúdos</h2>
                    <p id="texto1fundoAzul">Definição dos conteúdos programáticos</p>
                    <ul id="texto2fundoAzul">
                        <li>quais serão os conteúdos presentes na sessão de mentoria e partilhar os mesmos com a equipa de mentores;</li>
                        <li>a seleção dos conteúdos deverá atender, sobretudo, ao nível frequentado pelos alunos mentorandos.</li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="principal">
                    <h2 id="titulo2">2. Construção</h2>
                    <p id="texto1fundoClaro">Inicío do processo de construção da mnarrativa que dará o mote às atividades da sessão de mentoria, atendendo aos conteúdos programáticos selecionados:</p>
                    <ul id="texto2fundoClaro">
                        <li>esta narrativa deve ser criada pelos mentores, com o apoio do professor, <strong>com base em factos reais e ficcionais, e encerrar um desafio</strong> a lançar e resolver na sessão de mentoria;</li>
                        <li>durante o processo de criação, é fundamental que os mentores sejam estimulados a usar a sua criatividade e espírito crítico e que integrem conhecimentos adquiridos com outros que possam adquirir no processo de pesquisa / partilha de ideias;</li>
                        <li>no final do processo, deverão estar também <strong>estabelecidas as personagens a atribuir a alunos mentores e mentorandos</strong>, no âmbito da narrativa.</li>
                    </ul>
                    <div id="botao">
                        <div id="textoEsquerda">
                            <p id="textoBotao">Para facilitar o processo de contrução da narrativa, disponibilizamos um modelo <i>template</i>.</p>
                        </div>
                        <div id="setaDownload">
                            <img src={setaDownload} alt="icone download" id="Download" />
                        </div>
                    </div>
                    <Link to="./2"><div id="botao2">
                        <p id="textoBotao2">Próxima etapa</p>

                    </div></Link>

                </div>
            </section>
        </article>
    )
}

export default Etapa1
