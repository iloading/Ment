
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg";
import iconShare from "../../img/icons/icon_share.svg";
import iconFavorito from "../../img/icons/icon_favorito.svg";
import iconLike from "../../img/icons/icon_like.svg";
import iconEditar from "../../img/icons/icon_editar.svg";
import iconTornarPublico from "../../img/icons/icon_upload.svg";
import Carousel from "../components/CarouselSessao"
import modalImg from "../../img/modalHome/etapa_0.gif";

import { Link, useHistory, useRouteMatch } from 'react-router-dom'

import { motion, AnimatePresence } from "framer-motion";
import sair from "../../img/icons/eliminar_aluno_x.svg"

import { useState } from "react"



function Navbar({ sessao, status, id, toggle }) {

    let history = useHistory();
    const redirectBack = () => { history.goBack() }
    let { url } = useRouteMatch();


    return (
        <>
            {status === "completed" &&
                <section className='navbar'>
                    <div className="barraSocial" id="barraSocial">
                        <div onClick={redirectBack}>
                            <img src={setaAtras} alt="" />
                        </div>
                        <img src={iconShare} alt="" id="share" />

                        <img src={iconFavorito} alt="" id="favorito" />
                        <img src={iconLike} alt="" id="like" />

                        {sessao.is_public === 0 && <img src={iconTornarPublico} alt="" id="tornarPublico" onClick={toggle} />}












                        <Link to={`/sessao/${id}/editarsessao`}>
                            <img src={iconEditar} alt="" id="editar" />
                        </Link>
                    </div>

                    {/* <div className="areaDownload">
                        <div className="barraProgresso">
                            <label>Complete os detalhes da sessão</label>
                            <div className="progressBar">
                                <div><p>50%</p></div>
                            </div>
                        </div>
                    </div> */}

                    <div className="navegacao">
                        <label className="titulo" id="titulo">{sessao.nome}</label>

                        <div className="botoesNavegacao">

                            <Link to={`${url}/resumo`}>
                                <div className="cards">
                                    <label >Resumo</label>
                                </div>
                            </Link>
                            <Link to={`${url}/recursos`}>
                                <div className="cards">
                                    <label >Recursos</label>
                                </div>
                            </Link>
                            <Link to={`${url}/detalhes`}>
                                <div className="cards">
                                    <label >Detalhes</label>
                                </div>
                            </Link>


                        </div>





                    </div>
                </section>
            }
        </>

    );

}

export default Navbar;