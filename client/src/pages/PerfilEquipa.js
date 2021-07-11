import React from 'react'

import avatar from "../img/avatar/avatar_Equipas.svg";
/* import iconPerfil from "../img/icons/icon_perfil.svg"; */

import iconEquipa from "../img/icons/icon_equipa.svg";
import iconOrdenar from "../img/icons/icon_ordenar.svg";
import iconMaisAzul from "../img/icons/icon_maisAzul.svg";
import iconTresPontos from "../img/icons/icon_trespontos_azul.svg";
import iconDefinicoes from "../img/icons/icon_settings.svg";
import Narrativa from "./components/Narrativa";

import { Link } from 'react-router-dom'

//REDUX//
import { loadPerfilEquipa } from "../actions/perfilequipaAction";





import { useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'




function PerfilEquipa() {
    let { url } = useRouteMatch()
    let id = url.split("/")[3]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadPerfilEquipa(id))



    }, [dispatch, id])

    const { sessoesEquipa: sessoes, status_sessoes, status_equipa, equipa } = useSelector(state => state.perfilequipa)






    return (

        <article className="perfilEquipas">

            {status_equipa === 'completed' &&

                <section id="main" className="conteudoMain">

                    {/*DESKTOP*/}
                    <div id="bemvindo">

                        <div className="bemvindo_titulos">
                            <h3>Bom dia,</h3>
                            <h1>{equipa.name}</h1>
                        </div>
                        <div className="icons">
                            <img src={iconDefinicoes} alt="" />
                        </div>

                    </div>



                    <div className="titulo">
                        <img src={iconEquipa} alt="" className="iconTitulo" />
                        <label className="tituloMain">{equipa.escola}</label>
                        <div className="botaoManage">
                            <img src={iconTresPontos} alt="" />
                        </div>
                    </div>

                    <div className="infoPerfil">
                        <img src={avatar} alt="imagem da equipa" />
                        <label>{equipa.name}</label>
                        <span>{equipa.descripton}</span>

                    </div>

                    <div className="conteudoMid">
                        <div className="conteudoBotoes">

                            <div className="tituloMid">
                                <label className="tituloConteudo">Todas as sessões</label>
                                <div className="iconOrdenar" >
                                    <img src={iconOrdenar} alt="" />
                                </div>
                            </div>

                            {status_sessoes === "completed" && sessoes.length === 0 ?
                                <Link to='/criarsessao' className="decorationLinks">
                                    <div className="equipaSessaoVazia">
                                        <div className="equipaSessaoVazia_texto">
                                            <p className="equipaSessaoVazia_texto1">Ainda não tem nenhuma sessão associada a esta equipa</p>
                                            <p className="equipaSessaoVazia_texto2">Clique aqui para criar uma nova sessão</p>
                                        </div>
                                        <div className="equipaSessaoVazia_img">
                                            <img src={iconMaisAzul} alt="" />
                                        </div>
                                    </div>
                                </Link> :
                                <div className="listaNarrativas">
                                    {sessoes.map(sessao => <Narrativa key={sessao.id} sessao={sessao} status={status_sessoes} />)}
                                </div>


                            }



                        </div>
                        <div className="conteudoDireitaDesktopPerfilEquipa">
                            <div className="infoPerfilDesktop">
                                <div className="conteudoDireitaFirst">
                                    <label></label>
                                    <img src={avatar} alt="" />


                                </div>
                                <div className="conteudoDireitaSecond">
                                    <label>Quem somos?</label>
                                    <div className="descricaoEquipa">
                                        <label className="tituloCaixaConteudo">Membros</label>
                                        <span>{equipa.numero_participantes}{equipa.numero_participantes > 1 ? ' membros' : ' membro'}</span>

                                        <label className="tituloCaixaConteudo">Descrição</label>
                                        <span>{equipa.descripton}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </section>





            }

        </article>
    )
}

export default PerfilEquipa
