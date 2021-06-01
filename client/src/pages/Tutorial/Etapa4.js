import React from 'react'
import setaAtrasBranca from "../../img/setaAtrasBranca.png"
import setaDownload from "../../img/setaDownload.png"

function Etapa4() {
    return (
        <article className="etapa">
            <section className="fundoAzulEtapa3">
                <nav>
                    <img src={setaAtrasBranca} alt="setaAtras" id="seta" />
                    <h2 id="tutorial">Etapa 4</h2>
                </nav>
                <div className="principal">
                    <h2 id="titulo">1. Implementação</h2>
                    <p id="texto1fundoAzul">Implementação da sessão de mentoria:</p>
                    <ul id="texto2fundoAzul">
                        <li>com base no guião criado, <strong>os mentores deverão liderar a sessão de mentoria</strong>, trabalhando, em pequenas equipas, com os seus colegas mais novos e levando-os a realizar as atividades previstas;</li>
                        <li>atendendo aos princípios deste modelo, o ambiente da sessão será marcado pela lógica de desafio, vincadamente presente em elementos como a narrativa em torno da qual se desenvolve a sessão, as personagens desempenhadas por mentores e alunos mentorandos e eventuais recursos (tangíveis e digitais), usados para conferir maior dramaticidade e criatividade às atividades;</li>
                        <li>os professores presentes deverão observar o desempenho das várias equipas e intervir, apenas se necessário.</li>
                    </ul>
                    <div id="botao">
                        <div id="textoEsquerda">
                            <p id="textoBotao">Disponibilizamos o <i>template</i> para o <strong>guião de sessão</strong>.</p>
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

export default Etapa4
