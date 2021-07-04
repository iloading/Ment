import React from 'react'

import setaAtras from "../../img/setaAtras.png"
import avatarUser from "../../img/criarSessoes/avatarEquipa.svg"

import { Link } from "react-router-dom"

function CriarEquipa5() {
    return (
        <section className="associarEquipa">
            <header className="headerAssociarEquipa">
                <Link to="../" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                <h2 id="titulo">Adicionar alunos</h2>

            </header>
            <div id="inputPesquisar">
                <input type="text" id="inputPesquisa" placeholder="Pesquisar por email, username..."></input>
            </div>
            <div id="id_titulo2">
                <label id="titulo2">Sugeridos</label>
            </div>
            <div id="equipas">
                <div id="equipa1">
                    <img src={avatarUser} alt="avatar do utilizador" className="avatarEquipa" />
                    <div className="texto">
                        <p className="tituloTexto">Felisberto Matias</p>
                        <p className="escolaTexto">Secundária da Amadora</p>
                        <p className="anoTexto">8ºB</p>
                    </div>
                    <div className="checkbox"></div>
                </div>
                <div id="equipa2">
                    <img src={avatarUser} alt="avatar do utilizador" className="avatarEquipa" />
                    <div className="texto">
                        <p className="tituloTexto">Felisberto Matias</p>
                        <p className="escolaTexto">Secundária do Restelo</p>
                        <p className="anoTexto">5ºC</p>
                    </div>
                    <div className="checkbox"></div>
                </div>
                <div id="equipa3">
                    <img src={avatarUser} alt="avatar do utilizador" className="avatarEquipa" />
                    <div className="texto">
                        <p className="tituloTexto">Felisberto Matias</p>
                        <p className="escolaTexto">EB23 de Luanda</p>
                        <p className="anoTexto">7ºX</p>
                    </div>
                    <div className="checkbox"></div>
                </div>
                <div id="equipa4">
                    <img src={avatarUser} alt="avatar do utilizador" className="avatarEquipa" />
                    <div className="texto">
                        <p className="tituloTexto">Felisberto Matias</p>
                        <p className="escolaTexto">Secundária da Amadora</p>
                        <p className="anoTexto">8ºB</p>
                    </div>
                    <div className="checkbox"></div>
                </div>
            </div>
            <div id="divBotao">
                <div id="botao">
                    <p id="textoBotao">Adicionar selecionados</p>
                </div>
            </div>
        </section>
    )
}

export default CriarEquipa5
