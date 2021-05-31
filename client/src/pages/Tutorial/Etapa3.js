import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaDownload from "../../img/setaDownload.png"

function Etapa3() {
    return (
        <article className="etapa">
            <section className="fundoAzulEtapa3">
                <nav>
                    <img src={setaAtrasBranca} alt="setaAtras" id="seta" />
                    <h2 id="tutorial">Etapa 3</h2>
                </nav>
                <div className="principal">
                    <h2 id="titulo">1. Execução</h2>
                    <p id="texto1fundoAzul">Execução das tarefas planeadas:</p>
                    <ul id="texto2fundoAzul">
                        <li>esta fase implica <strong>trabalho colaborativo</strong> entre os mentores, a desenvolver tanto em <strong>sala de aula</strong>, como <strong>autonomamente</strong>, sob supervisão docente;</li>
                        <li>é fundamental que todos os intervenientes tenham acesso à evolução das várias tarefas em curso, sendo que, para tal, a partilha de todos os ficheiros e o preenchimento dos mesmos, de forma colaborativa, é fundamental;</li>
                        <li>é também importante o professor (gestor do projeto) proporcionar momentos de partilha e discussão de ideias entre os mentores, relativamente a tomadas de decisão, que surjam, no decurso do trabalho, sobre o modo de funcionamento da sessão de mentoria. O assumir de responsabilidades por parte dos mentores, nesta fase, terá impacto na forma como estes se sentirão envolvidos e comprometidos com o desempenho da sua função.</li>
                    </ul>
                    <div id="botao">
                        <div id="textoEsquerda">
                            <p id="textoBotao">Aqui pode encontrar recursos-modelo de preparação de tarefas.</p>
                        </div>
                        <div id="setaDownload">
                            <img src={setaDownload} alt="setaDownload" id="Download" />
                        </div>
                    </div>
                    <div id="botao2fundoAzul">
                        <p id="textoBotao2fundoAzul">Próxima etapa</p>

                    </div>
                </div>
            </section>
        </article>
    )
}

export default Etapa3
