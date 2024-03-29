import MinhasEquipas from "./components/MinhasEquipas";


import iconDefinicoes from "../img/icons/icon_settings.svg";
import iconArquivar from "../img/icons/icon_arquivar.svg";
import iconEstadoNegativo from "../img/estadosnegativos/estadoNegativoDashboard.svg";




import iconOrdenar from "../img/icons/icon_ordenar.svg";

import iconCriar from "../img/icons/icon_maisAzul.svg"
import iconTituloEquipa from "../img/icons/icon_equipa.svg"
import { useState } from "react";


import { loadminhasEquipas } from "../actions/minhasEquipasAction";



import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Link } from 'react-router-dom'


import { preencherNome } from '../actions/criacaoEquipaAction'





function Banco() {
    const [ocultadas, setOcultadas] = useState(true)


    const toggleEquipas = (event) => {

        setOcultadas(!ocultadas)


    }



    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadminhasEquipas())


    }, [dispatch])

    const { dadosPreenchidos } = useSelector(state => state.criarEquipa)
    const { minhasEquipas, status } = useSelector(state => state.minhasEquipas)

    const nomeHandler = (e) => {
        dispatch(preencherNome(e.target.value))
    }


    return (
        <article className="minhasEquipas">




            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Minhas Equipas</h1>
                    </div>
                    <div className="icons">
                        <img src={iconDefinicoes} alt="" />
                    </div>

                </div>


                {/*DESKTOP*/}

                <div className="goBack_criarEquipa">
                    {/* <Link to='./dashboard' className="decorationLinks">
                        <img src={iconSetaTras} alt="" />
                    </Link> */}
                    <Link to='/criarEquipa' className="decorationLinks">
                        <div>
                            <img src={iconCriar} alt="" />
                            <label>Nova equipa</label>
                        </div>
                    </Link>
                </div>


                <div className="titulo">
                    <img src={iconTituloEquipa} alt="" id="iconTituloMinhasEquipas" />
                    <div className="titulo_and_img" id="titulo_and_img">
                        <label className="tituloMinhasEquipas mobile">As minhas equipas</label>
                        <label className="tituloMinhasEquipas desktop">Equipas ativas</label>

                        <img src={iconOrdenar} alt="" id="iconOrdenar" />
                    </div>


                    <div className="criarEquipa" id="criarEquipa">
                        <label>Criar uma nova equipa</label>
                    </div>


                </div>

                <div className="conteudoMid">

                    {status === "completed" && minhasEquipas.length === 0 ?
                        <div className="criarEquipa">
                            <img src={iconEstadoNegativo} className="iconEstadoNegativo" alt="" />
                            <p className="textoEstadoNegativo">Ainda não existe nenhuma equipa!</p>
                        </div>


                        :
                        <div className="listaMinhasEquipas">

                            {minhasEquipas.map(equipa => <MinhasEquipas key={equipa.id} equipa={equipa} status={status} />)}

                        </div>
                    }

                    <div className="coluna_direita_desktop">

                        <div className="areaCriarEquipa">
                            <div className="search">
                                <input type="text" placeholder="Inserir nome da equipa..." onChange={nomeHandler} value={dadosPreenchidos.nome} />
                                <img src={iconCriar} alt="icon criar equipa" />
                            </div>
                            {dadosPreenchidos.nome ?
                                <Link to='/criarEquipa/1'>
                                    <button className='botao_criar_equipa'>
                                        Criar
                                    </button>
                                </Link>
                                : <button disabled className='botao_criar_equipa'>
                                    Criar
                                </button>
                            }

                        </div>

                        <div className="areaEquipasArquivadas">
                            <div className="tituloEquipasArquivadas">

                                <img src={iconArquivar} alt="" className="iconEquipasArquivadas" />
                                <label>Equipas arquivadas</label>
                                <button className="botaoOcultar" onClick={(event) => toggleEquipas(event)}>{`${ocultadas ? 'Mostrar' : 'Ocultar'}`}</button>
                            </div>
                            <div className={`cardEquipasArquivadas ${ocultadas ? 'ocultarEquipas' : ''}`} >
                                {/* <MinhasEquipas />
                                <MinhasEquipas />
                                <MinhasEquipas />
                                <MinhasEquipas />
                                <MinhasEquipas />
                                <MinhasEquipas />
                                <MinhasEquipas /> */}

                            </div>


                        </div>

                    </div>











                </div>












            </section>






        </article >
    );
}

export default Banco;