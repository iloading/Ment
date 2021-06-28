
import CarouselDashboard from "./components/CarouselDashboard";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import iconEquipa from "../img/icons/icon_equipa.svg";

import iconbanco from "../img/icons/icon_banco.svg";

import medalha from "../img/medalha.png";
import iconSessoes from "../img/icons/icon_sessoes.png";
import navLogo from "../img/logo.svg";






function Dashboard() {

    return (
        <article className="dashboard">

            <Navbar />



            <section id="main" className="conteudoMain">

                {/*DESKTOP*/}
                <div id="bemvindo" className="bemvindo">

                    <div>
                        <h3>Bom dia,</h3>
                        <h1>Professora Joana</h1>
                    </div>
                    <div className="icons">
                        <h1>icon</h1>
                        <h1>icon</h1>
                    </div>

                </div>
                {/*DESKTOP*/}

                <div className="titulo">

                    <img src={iconEquipa} alt="" className="iconTitulo" />

                    <label className="tituloMain">As minhas equipas</label>

                </div>

                <div className="carouselContent">
                    <CarouselDashboard />

                    {/*DESKTOP*/}
                    <div id="ajuda" className="desktop">
                        <h1>ola</h1>
                    </div>
                    {/*DESKTOP*/}
                </div>
                <div className="titulo">
                    <img src={iconbanco} alt="" className="imgBanco iconTitulo" />

                    <label className="tituloMain">Sessões em destaque</label>
                </div>

                <div className="cardSessoes">

                    <div>
                        <img src={iconSessoes} alt="" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={medalha} alt="" />
                    </div>
                    <div>
                        <img src={iconSessoes} alt="" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={medalha} alt="" />
                    </div>

                    <div>
                        <img src={iconSessoes} alt="" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={medalha} alt="" />
                    </div>

                </div>


            </section>



            <aside className="menu_principal" id="menu_principal__Desktop">
                <div className="asideLogo" id="logo">
                    <img src={navLogo} alt="" />
                </div>
                <div id="divBotoesMenu">
                    <div id="botoesMenu">
                        <Footer />
                    </div>
                </div>



                <div className="asidePerfil" id="asidePerfil">
                    <h1>PERFIL</h1>
                </div>
            </aside>
            <footer className="menu_principal" id="menu_principal"> <Footer /></footer>


        </article>
    );

}

export default Dashboard;