import React from 'react'
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import criarEquipa from "../../img/criarSessoes/criarEquipa.svg"

import MinhaEquipaCriarSessao from '../components/MinhaEquipaCriarSessao'

import criarSessao1_semBack from "../../img/criarSessoes/criarSessao1_semBack.svg"

import iconDefinicoes from "../../img/icons/icon_settings.svg";


import { Link } from "react-router-dom"
//REDUX//
import { loadMinhasEquipas, escolherEquipa } from "../../actions/criacaoSessaoAction";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CriarSessao2() {
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(loadMinhasEquipas())

    }, [dispatch])

    const { minhasEquipas, dadosPreenchidos } = useSelector(state => state.criarSessao)



    const selectTeam = (e, id) => {
        /* dispatch(loadMinhasEquipas()) */
        if (dadosPreenchidos.equipaEscolhida !== id) {
            dispatch(escolherEquipa(id))
        }


    }
    return (
        <article className="criarSessao">
            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Criar Sessão</h1>
                    </div>
                    <div className="icons">
                        <img src={iconDefinicoes} alt="" />
                    </div>

                </div>

                <div className="titulo">
                    <div className="tituloPag criarEquipaTitulo" id="tituloPag">
                        <div className="gridAdicionar">
                            <label className="tituloCriarEquipas desktop">Associar equipa</label>

                        </div>

                    </div>



                </div>

                <div className="conteudoMid">
                    <div className="conteudoEsquerda">
                        <section className="associarEquipa criarSessao scrollConteudo">
                            <header className="headerAssociarEquipa">
                                <Link to="/criarsessao/1" id="seta"><img src={setaAtras} alt="setaAtras" /></Link>
                                <h2 id="titulo">Associar equipa</h2>
                                <Link to="../" id="criarEquipa"><img src={criarEquipa} alt="criar nova equipa" /></Link>

                            </header>
                            {/*  <div id="inputPesquisar">
                <input type="text" id="inputPesquisa" placeholder="Pesquisar por nome, turma, ano..."></input>
            </div> */}
                            <div id="id_titulo2">
                                <label id="titulo2">As suas equipas</label>
                            </div>
                            <div className="listaEquipas">
                                {minhasEquipas.status === 'completed' &&
                                    minhasEquipas.equipas.map(equipa =>
                                        <MinhaEquipaCriarSessao equipa={equipa} selectTeam={selectTeam} key={equipa.id} />

                                    )

                                }


                            </div>
                            {dadosPreenchidos.equipaEscolhida ?
                                <Link to="/criarsessao/3" className="botaoAzul">
                                    <button id="divBotao">
                                        <div id="botao" >
                                            <p id="textoBotao">Próximo passo</p>
                                        </div>
                                    </button>
                                </Link>
                                :
                                <button id="divBotao" disabled>
                                    <div id="botao" >
                                        <p id="textoBotao">Próximo passo</p>
                                    </div>
                                </button>
                            }

                        </section>
                    </div>
                    <div className="conteudoDireita">
                        <div className="botaoEtapaAnterior">
                            <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                            <p className="textoBotao">Etapa anterior</p>
                        </div>
                        <img src={criarSessao1_semBack} className="imgEquipa" alt="criar equipa segunda imagem" />
                    </div>
                </div>
            </section>
        </article>
    )
}

export default CriarSessao2
