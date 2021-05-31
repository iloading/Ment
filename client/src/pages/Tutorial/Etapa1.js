import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaDownload from "../../img/setaDownload.png"

function Etapa1() {
    return (
        <article className="etapa">
            <section className="fundoAzul">
                <nav>
                    <img src={setaAtrasBranca} alt="setaAtras" id="seta" />
                    <h2 id="tutorial">Etapa 1</h2>
                </nav>
                <div className="principal">
                    <h2 id="titulo">1. Conteúdos</h2>
                    <p id="texto1fundoAzul">Definição dos conteúdos programáticos</p>
                    <ul id="texto2fundoAzul">
                        <li>Quais serão os conteúdos presentes na sessão de mentoria e partilhar os mesmos com a equipa de mentores;</li>
                        <li>A seleção dos conteúdos deverá atender, sobretudo, ao nível frequentado pelos alunos mentorandos.</li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="principal">
                    <h2 id="titulo2">2. Construção</h2>
                    <p id="texto1fundoClaro">Inicío do processo de construção da mnarrativa que dará o mote às atividades da sessão de mentoria, atendendo aos conteúdos programáticos selecionados:</p>
                    <ul id="texto2fundoClaro">
                        <li>esta narratvia deve ser criada pelos mentores, com o apoio do professor, <strong>com base em factos reais e ficcionais, e encerrar um desafio</strong> a lançar e resolver na sessão de mentoria;</li>
                        <li>durante o processo de criação, é fundamental que os mentores sejam estimulados a usar a sua criatividade e espírito crítico e que integrem conhecimentos adquiridos com outros que possam adquirir no processo de pesquisa / partilha de ideias;</li>
                        <li>sempre que uma nova equipa for criada, o professor deverá levar os seus alunos a registarem-se na plataforma. Desta forma, também os mentores terão acesso a outros projetos, podendo consultar comentários de outros mentores, expressar preferência por alguns desses projetos e deixar também o seu testemunho sobre a experiência de participação nos projetos em que estiverem envolvidos</li>
                    </ul>
                    <div id="botao">
                        <div id="textoEsquerda">
                            <p id="textoBotao">Lista de crit?</p>
                        </div>
                        <div id="setaDownload">
                            <img src={setaDownload} alt="" id="Download" />
                        </div>
                    </div>
                    <div id="botao2">
                        <p id="textoBotao2">Próxima etapa</p>

                    </div>

                </div>
            </section>
        </article>
    )
}

export default Etapa1
