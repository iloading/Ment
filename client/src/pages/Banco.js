import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SessoesDestaque from "./components/sessoesDestaque";
import Narrativa from "./components/Narrativa";
import SearchBar from "./components/SearchBar";

import iconBanco from "../img/icons/icon_banco.svg";


import iconOrdenar from "../img/icons/icon_ordenar.svg";

import iconDefinicoes from "../img/icons/icon_settings.svg";

//REDUX//
import { loadBanco } from "../actions/bancoAction";


import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'


function Banco() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadBanco())

    }, [dispatch])

    const { todasSessoes: sessoes, status } = useSelector(state => state.banco)



    return (
        <article className="banco layout">

            <Navbar />


            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Banco</h1>
                    </div>
                    <div className="icons">
                        <img src={iconDefinicoes} alt="" />
                    </div>

                </div>


                {/*DESKTOP*/}

                <div className="searchBarMobile">
                    <SearchBar />
                </div>





                <div className="titulo">
                    <img src={iconBanco} alt="" id="iconTituloBanco" />
                    <div className="titulo_and_img" id="titulo_and_img">
                        <label className="tituloBanco">Banco</label>
                        <label className="tituloTodasSessoes">Todas as sessões</label>

                        <img src={iconOrdenar} alt="" id="iconOrdenar" />
                    </div>




                    <div className="encontrarSessao" id="encontrarSessao">
                        <label>Encontrar uma sessão</label>
                    </div>


                </div>


                <div className="conteudoBanco">
                    <div className="listaNarrativas">
                        {status === "completed" && sessoes.map(sessao => <Narrativa key={sessao.id} sessao={sessao} status={status} />)}
                    </div>



                    <div className='coluna_Direita_Banco'>

                        <div className="AreaEncontrarSessao">

                            <SearchBar />



                        </div>
                        <div className="AreaSessoesDestaque">

                            <div className="tituloDestaque">
                                <label>Sessões em destaque</label>
                            </div>
                            <span className="destaquesBanco">
                                <SessoesDestaque />
                            </span>
                        </div>

                    </div>
                </div>




            </section>

            <Footer />




        </article>
    );
}

export default Banco;