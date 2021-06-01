import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaDownload from "../../img/setaDownload.png"

import { Link } from "react-router-dom"

function Etapa0() {
    return (
        <article className="etapa">
            <section className="fundoAzul">
                <div className="navTutorial">
                    <Link to="../tutorial" id="seta"><img src={setaAtrasBranca} alt="setaAtras" /></Link>
                    <h2 id="tutorial">Etapa 0</h2>
                </div>
                <div className="principal">
                    <h2 id="titulo">1. Workshop</h2>
                    <p id="texto1fundoAzul">Realização de um pequano workshop, dinamizado pelo professor (gestor do projeto), com o intuito de:</p>
                    <ul id="texto2fundoAzul">
                        <li>partilhar princípios orientadores sobre características deste modelo de mentoria entre pares e as funções esperadas de um mentor, neste âmbito;</li>
                        <li>sensibilizar os futuros mentores para questões de âmbito pedagógico, por exemplo, como avaliar o trabalho dos colegas mais novos, definir critérios de sucesso e como dar feedback.</li>
                    </ul>
                    <div id="botao">
                        <div id="textoEsquerda">
                            <p id="textoBotao">Necessita de um suporte digital para mostrar na aula? Nós ajudamos!</p>
                        </div>
                        <div id="setaDownload">
                            <img src={setaDownload} alt="setaDownload" id="Download" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="principal">
                    <h2 id="titulo2">2. Equipa</h2>
                    <p id="texto1fundoClaro">Criar uma equipa de mentores na plataforma:</p>
                    <ul id="texto2fundoClaro">
                        <li>depois de criar uma equipa de mentores, poderá associar à mesma um novo projeto. Assim, no espaço dedicado a cada nova equipa aparecerão listados todos os projetos em que a mesma já terá estado envolvida;</li>
                        <li>da mesma forma, todos os projetos criados pelo professor aparecerão no seu perfil, com as respetivas equipas de mentores associadas;</li>
                        <li>sempre que uma nova equipa for criada, o professor deverá levar os seus alunos a registarem-se na plataforma. Desta forma, também os mentores terão acesso a outros projetos, podendo consultar comentários de outros mentores, expressar preferência por alguns desses projetos e deixar também o seu testemunho sobre a experiência de participação nos projetos em que estiverem envolvidos.</li>
                    </ul>
                    <div id="botao">
                        <div id="textoEsquerda">
                            <p id="textoBotao">Lista de crit?</p>
                        </div>
                        <div id="setaDownload">
                            <img src={setaDownload} alt="" id="Download" />
                        </div>
                    </div>
                    <Link to="./1"><div id="botao2">
                        <p id="textoBotao2">Próxima etapa</p>

                    </div></Link>

                </div>
            </section>
        </article>
    )
}

export default Etapa0
