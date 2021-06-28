import React from 'react'
import setaAtras from "../../img/setaAtras.png"
import criarEquipa from "../../img/criarSessoes/criarEquipa.svg"
import avatarEquipa from "../../img/criarSessoes/avatarEquipa.svg"


import { Link } from "react-router-dom"

function CriarSessao3() {
    return (
        <section className="associarEquipa">
            <header className="headerAssociarEquipa">
                <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                <h2 id="titulo">Associar equipa</h2>
                <Link to="../" id="criarEquipa"><img src={criarEquipa} alt="criar nova equipa" /></Link>

            </header>
            <div id="inputPesquisar">
                <input type="text" id="inputPesquisa" placeholder="Pesquisar por nome, turma, ano..."></input>
            </div>
            <div id="id_titulo2">
                <label id="titulo2">As suas equipas</label>
            </div>
            <div id="equipas">
                <div id="equipa1">
                    <img src={avatarEquipa} alt="avatar de equipa" className="avatarEquipa" />
                    <div className="texto">
                        <p className="tituloTexto">Os Aventureiros</p>
                        <p className="escolaTexto">Secundária da Amadora</p>
                        <p className="anoTexto">8ºB</p>
                    </div>
                    <div className="checkbox"></div>
                </div>
                <div id="equipa2">
                    <img src={avatarEquipa} alt="avatar de equipa" className="avatarEquipa" />
                    <div className="texto">
                        <p className="tituloTexto">Avila Crew</p>
                        <p className="escolaTexto">Secundária do Restelo</p>
                        <p className="anoTexto">5ºC</p>
                    </div>
                    <div className="checkbox"></div>
                </div>
                <div id="equipa3">
                    <img src={avatarEquipa} alt="avatar de equipa" className="avatarEquipa" />
                    <div className="texto">
                        <p className="tituloTexto">Exploradores</p>
                        <p className="escolaTexto">EB23 de Luanda</p>
                        <p className="anoTexto">7ºX</p>
                    </div>
                    <div className="checkbox"></div>
                </div>
                <div id="equipa4">
                    <img src={avatarEquipa} alt="avatar de equipa" className="avatarEquipa" />
                    <div className="texto">
                        <p className="tituloTexto">Pingados</p>
                        <p className="escolaTexto">Secundária da Amadora</p>
                        <p className="anoTexto">8ºB</p>
                    </div>
                    <div className="checkbox"></div>
                </div>
            </div>
            <div id="divBotao">
                <div id="botao">
                    <p id="textoBotao">Próximo passo</p>
                </div>
            </div>
        </section>
    )
}

export default CriarSessao3
