import React from 'react'
import iconEquipa from "../../img/Equipas/icon_equipa.svg";
import icon3pontos from "../../img/icons/icon_3pontos.svg";
import iconParticipantes from "../../img/icons/icon_equipa_azul.svg";
import iconSetaEntrar from "../../img/setaDireita_cor.png"

function MinhasEquipas() {
    return (
        <div className="cardMinhasEquipas">
            <img src={iconEquipa} alt="" id="iconEquipa" />
            <div className="midInfo">
                <label>8ºD</label>
                <p>Inglês</p>
                <span>Escola Secundária Carlos Amarante</span>
            </div>
            <div className="leftInfo">
                <div className="botaoPontos" >
                    <img src={icon3pontos} alt="" id="botaoPontos" />
                </div>

                <div id="participantes">
                    <img src={iconParticipantes} alt="" id="iconParticipantes" />
                    <p className="numeroParticipantes">20</p>
                </div>
            </div>

            <div className="setaEntrar">

                <img src={icon3pontos} alt="" id="botaoPontos" />

                <img src={iconSetaEntrar} alt="" id="iconSetaEntrar" />
            </div>
        </div>
    )
}

export default MinhasEquipas
