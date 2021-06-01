import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaDownload from "../../img/setaDownload.png"

function Etapa5() {
    return (
        <article className="etapa f1">
            <section className="fundoAzul">
                <nav>
                    <img src={setaAtrasBranca} alt="setaAtras" id="seta" />
                    <h2 id="tutorial">Etapa 5</h2>
                </nav>
                <div className="principal">
                    <h2 id="titulo">1. Questionário</h2>
                    <p id="texto1fundoAzul">Preenchimento de questionário pós-sessão de mentoria:</p>
                    <ul id="texto2fundoAzul">
                        <li>como forma de estimular a reflexão dos alunos envolvidos, sugere-se que ambos preencham um breve questionário, online, posteriormente à sessão;</li>
                        <li>apesar de idênticos, sugere-se que o questionário atribuído aos mentores incida numa reflexão acerca da experiência de participação nas várias etapas do projeto e que aquele atribuído aos alunos mentorandos se centre na sessão de mentoria.</li>
                    </ul>
                    <div id="botao">
                        <div id="textoEsquerda">
                            <p id="textoBotao">Disponibilizamos o <i>template</i> para os questionários de reflexão para os alunos (mentores e mentorandos).</p>
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

export default Etapa5
