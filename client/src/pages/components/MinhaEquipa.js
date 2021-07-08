import React from 'react'
import minhasSessoes_desktop from "../../img/Equipas/1.png";
import { Link } from "react-router-dom";

function MinhaEquipa({ alias, name, schoolName, numero, equipa }) {

    console.log(equipa);
    return (
        <>
            {equipa &&
                <Link to={`/perfilEquipa/${equipa.id}`} className={`decorationLinks numero${numero}`}>
                    <div className="minhasEquipasCard">
                        <img src={minhasSessoes_desktop} alt="" className="iconTitulo" />
                        <div className="cardInfo">
                            <label id="labelAno">{alias}</label>
                            <p id="disciplina">{name}</p>
                            <span id="escola">{schoolName}</span>
                        </div>
                    </div>

                </Link>
            }
        </>
    )
}

export default MinhaEquipa
