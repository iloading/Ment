
import CarouselDashboard from "./components/CarouselDashboard";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SessoesDestaque from "./components/sessoesDestaque";
import CarouselAjuda from "./components/CarouselAjuda";
import MinhaEquipa from "./components/MinhaEquipa";

import iconEquipa from "../img/icons/icon_equipa.svg";

import iconbanco from "../img/icons/icon_banco.svg";


import iconDefinicoes from "../img/icons/icon_settings.svg";
import minhasSessoes_desktop from "../img/Equipas/1.png";


import { useState, useEffect } from 'react'

import { dashboardInfo } from '../API'





function Dashboard() {
    const [info, setInfo] = useState(null)
    const information = async () => {
        setInfo(await (await dashboardInfo()).data.success);
    }
    useEffect(() => {
        information()

    }, [])
    if (info && info.length === 1) {

    }

    return (
        <article className="dashboard layout">

            <Navbar />



            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Joana Castro</h1>
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
                {info &&
                    <div className={'minhasEquipas ' + info.length === 4 ? `layout4` : info.length === 3 ? `layout3` : info.length === 2 ? `layout2` : info.length === 1 ? `layout1` : ''}>

                        {(info.length === 2 ?
                            info.map(equipa => <MinhaEquipa alias={equipa.alias} name={equipa.name} schoolName={equipa.school_name} />)
                            :
                            info.length === 1 ?
                                <>
                                    <MinhaEquipa alias={info[0].alias} name={info[0].name} schoolName={info[0].school_name} />
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

                <SessoesDestaque />


            </section>




            <Footer />


        </article>
    );

}

export default Dashboard;