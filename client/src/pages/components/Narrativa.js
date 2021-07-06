import React from 'react'

import iconSessoes from "../../img/icons/icon_sessoes.png";
import seta from "../../img/setaDireita_cor.png";
import iconSeparar from "../../img/icons/icon_separacao_linha.svg";

import medalhaOuro from "../../img/medalhaOuro.svg";
import medalhaPrata from "../../img/medalhaPrata.svg";
import medalhaBronze from "../../img/medalhaBronze.svg";
import { Link } from "react-router-dom";


function Narrativa({ destaque, sessao, sessaoEquipa, status }) {
    console.log(destaque, sessao, sessaoEquipa, status);


    return (

        <>
            {status === "completed" && sessao &&

                <Link to={`/sessao/${sessao.id}`} className="narrativa">
                    <img src={iconSessoes} alt="" className="iconSessoes" />
                    <div className="textoCards">
                        <label>{sessao.name}</label>
                        <p>{sessao.team_name}</p>
                        <span>{sessao.year} | {sessao.subject}</span>
                    </div>

                    {/*DESKTOP*/}
                    <div className="likes_coments">
                        <div id="gostos">
                            <p>{sessao.likes}</p>
                            <label>Gostos</label>
                        </div>
                        <div id="linha">
                            <img src={iconSeparar} alt="linha de separacao" id="" />
                        </div>
                        <div id="comentarios">
                            <p>{sessao.comments}</p>
                            <label>Comentários</label>
                        </div>
                    </div>
                    {/*DESKTOP*/}
                    {destaque ? <img src={destaque === 'ouro' ? medalhaOuro : destaque === 'prata' ? medalhaPrata : destaque === 'bronze' ? medalhaBronze : ""} className="iconMedalha" alt={'medalha'} /> : <img src={seta} className="iconMedalha" alt={'seta'} />}

                </Link>


            }
        </>


    );
}



export default Narrativa;
