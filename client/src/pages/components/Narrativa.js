import React from 'react'

import medalha from "../../img/medalha.png";
import iconSessoes from "../../img/icons/icon_sessoes.png";
import seta from "../../img/setaDireita_cor.png";


function Narrativa({ destaque, sessao, status }) {

    return (
        <>
            {status === "completed" &&
                <div className="narrativa">
                    <img src={iconSessoes} alt="" className="iconSessoes" />
                    <div className="textoCards">
                        <label>{sessao.name}</label>
                        <p>{sessao.team_name}</p>
                        <span>{sessao.year} | {sessao.subject}</span>
                    </div>

                    {/*DESKTOP*/}
                    <div className="likes_coments">
                        <p>{sessao.likes}</p>
                    </div>
                    {/*DESKTOP*/}

                    <img src={destaque ? medalha : seta} className="iconMedalha" alt={destaque ? 'medalha' : 'seta'} />
                </div>
            }
        </>


    );
}



export default Narrativa;
