import SessoesDestaque from "./components/sessoesDestaque";
import CarouselAjuda from "./components/CarouselAjuda";
import MinhaEquipa from "./components/MinhaEquipa";

import iconEquipa from "../img/icons/icon_equipa.svg";

import iconbanco from "../img/icons/icon_banco.svg";


import iconDefinicoes from "../img/icons/icon_settings.svg";

//REDUX//
import { loadDashboard } from "../actions/dashboardAction";
import { loadDestaque } from "../actions/destaqueAction";


import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'







function Dashboard() {
    const dispatch = useDispatch()
    useEffect(() => {


        dispatch(loadDashboard())
        dispatch(loadDestaque())

    }, [dispatch])

    const { minhasEquipas: equipas, status } = useSelector(state => state.dashboard)

    const { sessoesDestaque: destaques, status: statusDestaque } = useSelector(state => state.destaque)

    const user = useSelector(state => state.user.user)
    let hora = new Date().getHours();
    let boasVindas
    if (hora < 12) {
        boasVindas = 'Bom dia'
    } else if (hora < 20) {
        boasVindas = 'Boa tarde'
    } else {
        boasVindas = 'Boa noite'
    }
    return (
        <article className="dashboard">


            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>{boasVindas},</h3>
                        {status === 'completed' && <h1>{user.name}</h1>}

                    </div>
                    <div className="icons">
                        <img src={iconDefinicoes} alt="" />

                    </div>

                </div>
                {/*DESKTOP*/}

                <div className="titulo_minhasSessoes">

                    <img src={iconEquipa} alt="" className="iconTitulo" />

                    <label className="tituloMain" id="labelMinhasequipas">As Minhas Equipas</label>

                    <label className="verMais" id="labelVermais">Ver Mais</label>

                    <label className="tituloMain" id="labelAjuda">Precisa de ajuda?</label>

                </div>
                {status === 'completed' &&
                    <div className={`minhasEquipas layout${equipas.length}`}>

                        {(equipas.length >= 2 ?
                            equipas.map(equipa => <MinhaEquipa numero={equipas.indexOf(equipa)} alias={equipa.alias} name={equipa.name} schoolName={equipa.school_name} key={equipa.id} />)
                            :
                            equipas.length === 1 ?
                                <>
                                    <MinhaEquipa alias={equipas[0].alias} name={equipas[0].name} schoolName={equipas[0].school_name} />
                                    <div className="criarEquipa"></div>
                                </>
                                :
                                <>
                                    <div className="criarEquipa"></div>
                                    <div className="criarEquipa"></div>
                                </>
                        )
                        }



                        <div id="ajuda">
                            <div className="subTitulos">
                                <h2>Tutoriais</h2>
                                <label>Ver todos</label>
                            </div>
                            <CarouselAjuda />
                        </div>

                    </div>
                }
                <div className="titulo_sessoesDestaque">
                    <img src={iconbanco} alt="" className="imgBanco iconTitulo" />

                    <label className="tituloMain">Sessões em destaque</label>
                </div>

                {<SessoesDestaque destaques={destaques} status={statusDestaque} />}



            </section>







        </article>
    );

}

export default Dashboard;