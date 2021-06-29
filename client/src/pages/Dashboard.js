
import CarouselDashboard from "./components/CarouselDashboard";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SessoesDestaque from "./components/sessoesDestaque";

import iconEquipa from "../img/icons/icon_equipa.svg";

import iconbanco from "../img/icons/icon_banco.svg";


import iconDefinicoes from "../img/icons/icon_settings.svg";
import minhasSessoes_desktop from "../img/minhasSessoes/minhasSessoes_desktop.png";








function Dashboard() {

    return (
        <article className="dashboard layout">

            <Navbar />



            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo">

                    <div className="bemvindo_titulos">
                        <h3>Bom dia,</h3>
                        <h1>Professora Joana</h1>
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

                <div className="carouselContent">
                    <span className="carouselDash__mobile">
                        <CarouselDashboard ecra='mobile' />
                    </span>
                    {/*DESKTOP*/}

                    <div className="minhasEquipasCard">
                        <img src={minhasSessoes_desktop} alt="" className="iconTitulo" />
                        <div className="cardInfo">
                            <label id="labelAno">7ºA</label>
                            <p id="disciplina">Biologia</p>
                            <span id="escola">Escola Secundária Carlos Amarante</span>
                        </div>
                    </div>
                    <div className="minhasEquipasCard">
                        <img src={minhasSessoes_desktop} alt="" className="iconTitulo" />
                        <div className="cardInfo">
                            <label id="labelAno">7ºA</label>
                            <p id="disciplina">Biologia</p>
                            <span id="escola">Escola Secundária Carlos Amarante</span>
                        </div>

                    </div>

                    {/*DESKTOP*/}


                    {/*DESKTOP*/}
                    <div id="ajuda">
                        <h1>ola</h1>
                    </div>
                    {/*DESKTOP*/}
                </div>
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