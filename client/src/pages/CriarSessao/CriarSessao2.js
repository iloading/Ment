import React from 'react'
import setaAtras from "../../img/setaAtras.png"
import criarEquipa from "../../img/criarSessoes/criarEquipa.svg"

import MinhaEquipaCriarSessao from '../components/MinhaEquipaCriarSessao'

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

    const { minhasEquipas, equipaEscolhida } = useSelector(state => state.criarSessao)



    const selectTeam = (e, id) => {
        /* dispatch(loadMinhasEquipas()) */
        if (equipaEscolhida.id !== id) {
            dispatch(escolherEquipa(id))
        }


    }
    return (
        <section className="associarEquipa">
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
            <div id="divBotao">
                <div id="botao">
                    <p id="textoBotao">Próximo passo</p>
                </div>
            </div>
        </section>
    )
}

export default CriarSessao2
