import React from 'react'

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import avatar from "../img/avatar/avatar_Equipas.svg";
/* import iconPerfil from "../img/icons/icon_perfil.svg"; */

import iconEquipa from "../img/icons/icon_equipa.svg";
import iconOrdenar from "../img/icons/icon_ordenar.svg";
import iconTresPontos from "../img/icons/icon_trespontos_azul.svg";

import Narrativa from "./components/Narrativa";

//REDUX//
import { loadPerfilEquipa } from "../actions/perfilequipaAction";


import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



function PerfilEquipa() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadPerfilEquipa())

    }, [dispatch])

    const { sessoesEquipa: sessoes, status } = useSelector(state => state.perfilequipa)

    return (
        <article className="perfilEquipas layout">

            <Navbar />

            <section id="main" className="conteudoMain">

                <div className="titulo">
                    <img src={iconEquipa} alt="" className="iconTitulo" />
                    <label className="tituloMain">Os Navegadores</label>
                    <div className="botaoManage">
                        <img src={iconTresPontos} alt="" />
                    </div>
                </div>

                <div className="infoPerfil">
                    <img src={avatar} alt="" />
                    <label>Descrição</label>
                    <span>A melhor equipa de geografia e de história de portugal</span>
                </div>

                <div className="conteudoBotoes">

                    <div className="titulo">
                        <label className="tituloConteudo">Sessões da equipa</label>
                        <div className="iconOrdenar" >
                            <img src={iconOrdenar} alt="" />
                        </div>
                    </div>


                    <div className="listaNarrativas">
                        {status === "completed" && sessoes.map(sessao => <Narrativa key={sessao.id} sessao={sessao} status={status} />)}
                    </div>





                </div>

            </section>


            <Footer />




        </article>
    )
}

export default PerfilEquipa