import React from 'react'

import avatar from "../img/avatar/avatar_Equipas.svg";
/* import iconPerfil from "../img/icons/icon_perfil.svg"; */

import iconEquipa from "../img/icons/icon_equipa.svg";
import iconOrdenar from "../img/icons/icon_ordenar.svg";
import iconTresPontos from "../img/icons/icon_trespontos_azul.svg";

import Narrativa from "./components/Narrativa";

//REDUX//
import { loadPerfilEquipa } from "../actions/perfilequipaAction";





import { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'




function PerfilEquipa() {
    let { url } = useRouteMatch()
    let id = url.split("/")[2]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadPerfilEquipa(id))



    }, [dispatch, id])

    const { sessoesEquipa: sessoes, status_sessoes, status_equipa, equipa } = useSelector(state => state.perfilequipa)






    return (

        <article className="perfilEquipas">

            {status_equipa === 'completed' &&

                <section id="main" className="conteudoMain">

                    <div className="titulo">
                        <img src={iconEquipa} alt="" className="iconTitulo" />
                        <label className="tituloMain">{equipa.escola}</label>
                        <div className="botaoManage">
                            <img src={iconTresPontos} alt="" />
                        </div>
                    </div>

                    <div className="infoPerfil">
                        <img src={avatar} alt="" />
                        <label>{equipa.name}</label>
                        <span>{equipa.descripton}</span>

                    </div>

                    <div className="conteudoBotoes">

                        <div className="titulo">
                            <label className="tituloConteudo">Sessões da equipa</label>
                            <div className="iconOrdenar" >
                                <img src={iconOrdenar} alt="" />
                            </div>
                        </div>

                        {status_sessoes === "completed" && sessoes.length === 0 ? <div>ola teste</div> : <div className="listaNarrativas">
                            {sessoes.map(sessao => <Narrativa key={sessao.id} sessao={sessao} status={status_sessoes} />)}
                        </div>


                        }



                    </div>

                </section>





            }

        </article>
    )
}

export default PerfilEquipa
