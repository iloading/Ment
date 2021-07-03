import React from 'react'

import iconSessoes from "../../img/icons/icon_sessoes.png";
import seta from "../../img/setaDireita_cor.png";

import medalhaOuro from "../../img/medalhaOuro.svg";
import medalhaPrata from "../../img/medalhaPrata.svg";
import medalhaBronze from "../../img/medalhaBronze.svg";


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
                    {destaque ? <img src={destaque === 'ouro' ? medalhaOuro : destaque === 'prata' ? medalhaPrata : destaque === 'bronze' ? medalhaBronze : ""} className="iconMedalha" alt={'medalha'} /> : <img src={seta} className="iconMedalha" alt={'seta'} />}

                </div>
            }
        </>


    );
}



export default Narrativa;
