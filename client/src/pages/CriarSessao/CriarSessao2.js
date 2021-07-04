import React from 'react'
import setaAtras from "../../img/setaAtras.png"
import criarEquipa from "../../img/criarSessoes/criarEquipa.svg"
import avatarEquipa from "../../img/criarSessoes/avatarEquipa.svg"


import { Link } from "react-router-dom"
//REDUX//
import { loadMinhasEquipas } from "../../actions/criacaoSessaoAction";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CriarSessao2() {
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(loadMinhasEquipas())

    }, [dispatch])

    const { minhasEquipas } = useSelector(state => state.criarSessao)

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
            <div id="equipas">
                {minhasEquipas.status === 'completed' &&
                    minhasEquipas.equipas.map(equipa =>
                        /* no css a classa equipa está definida como id #equipa1 , 2, 3 ... FIX THIS */
                        <div key={equipa.id} className={`equipa` /* FIX MUDEM O NOME DA CLASSE PARA N SER TAO VAGO*/}>
                            <img src={avatarEquipa} alt="avatar de equipa" className="avatarEquipa" />
                            <div className="texto">
                                <p className="tituloTexto">{equipa.name}</p>
                                <p className="escolaTexto">{equipa.school_name}</p>
                                <p className="anoTexto">{equipa.alias}</p>
                            </div>
                            <div className="checkbox"></div>
                        </div>
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
