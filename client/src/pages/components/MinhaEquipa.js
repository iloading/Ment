import React from 'react'
import minhasSessoes_desktop from "../../img/Equipas/1.png";

function MinhaEquipa({ alias, name, schoolName }) {
    return (
        <div className="minhasEquipasCard">
            <img src={minhasSessoes_desktop} alt="" className="iconTitulo" />
            <div className="cardInfo">
                <label id="labelAno">{alias}</label>
                <p id="disciplina">{name}</p>
                <span id="escola">{schoolName}</span>
            </div>
        </div>
    )
}

export default MinhaEquipa
