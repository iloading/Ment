import React from 'react'

import medalha from "../../img/medalha.png";
import iconSessoes from "../../img/icons/icon_sessoes.png";
import seta from "../../img/setaDireita_cor.png";


function Narrativa({ destaque }) {
    return (
        <>
            <div className="narrativa">
                <img src={iconSessoes} alt="" />
                <div className="textoCards">
                    <label>Os 3 porquinhos </label>
                    <p>Equipa Avila Crew</p>
                    <span>8º ano | Past Tense</span>
                </div>

                {/*DESKTOP*/}
                <div className="likes_coments">
                    <p>LIKES</p>
                </div>
                {/*DESKTOP*/}

                <img src={destaque ? medalha : seta} alt={destaque ? 'medalha' : 'seta'} />
            </div>

        </>


    );
}



export default Narrativa;
