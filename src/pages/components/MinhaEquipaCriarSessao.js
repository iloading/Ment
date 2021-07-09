import React from 'react'
import { useSelector } from 'react-redux'

function MinhaEquipaCriarSessao({ equipa, selectTeam }) {

    const { equipaEscolhida } = useSelector(state => state.criarSessao.dadosPreenchidos)
    const escolhida = equipaEscolhida === equipa.id

    return (
        <div key={equipa.id} onClick={(e) => selectTeam(e, equipa.id)} className={`equipas`}>
            <img src={require(`../../img/Equipas/${equipa.url}`).default} alt="avatar de equipa" className="avatarEquipa" />
            <div className="texto">
                <p className="tituloTexto">{equipa.name}</p>
                <p className="escolaTexto">{equipa.school_name}</p>
                <p className="anoTexto">{equipa.alias}</p>
            </div>
            <div className={`checkbox ${escolhida ? 'selected' : ''}`} ></div>
        </div>
    )
}

export default MinhaEquipaCriarSessao
