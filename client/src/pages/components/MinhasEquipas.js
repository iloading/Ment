import React from 'react'
import iconEquipa from "../../img/Equipas/icon_equipa.svg";
import icon3pontos from "../../img/icons/icon_3pontos.svg";
import iconParticipantes from "../../img/icons/icon_equipa_azul.svg";
import iconSetaEntrar from "../../img/setaDireita_cor.png"
import { Link } from "react-router-dom";



function MinhasEquipas({ equipa, status }) {

    return (

        <Link to={`/minhasEquipas/perfilEquipa/${equipa.id}`}>
            <div className="cardMinhasEquipas">
                <img src={iconEquipa} alt="" id="iconEquipa" />
                <div className="midInfo">
                    <label>{equipa.name}</label>
                    <p>{equipa.alias}</p>
                    <span>{equipa.escola}</span>
                </div>
                <div className="leftInfo">
                    <div className="botaoPontos" >
                        <img src={icon3pontos} alt="" id="botaoPontos" />
                    </div>

                    <div id="participantes">
                        <img src={iconParticipantes} alt="" id="iconParticipantes" />
                        <p className="numeroParticipantes">{equipa.numero_participantes}</p>
                    </div>
                </div>

                <div className="setaEntrar">

                    <img src={icon3pontos} alt="" id="botaoPontos" />

                    <img src={iconSetaEntrar} alt="" id="iconSetaEntrar" />
                </div>
            </div>
        </Link>
    )
}

export default MinhasEquipas
