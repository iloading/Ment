
import CarouselDashboard from "./components/CarouselDashboard";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import CardSessoes from "./components/CardSessoes"
import iconEquipa from "../img/icons/icon_equipa.png";

import iconbanco from "../img/icons/icon_banco.png";





function Dashboard() {

    return (
        <article className="dashboard">

            <Navbar />

            <section id="main" className="conteudoMain">

                <div className="titulo">
                    <img src={iconEquipa} alt="" className="iconTitulo" />

                    <label className="tituloMain">As minhas equipas</label>

                </div>

                <div className="carouselContent">
                    <CarouselDashboard />
                </div>
                <div className="titulo">
                    <img src={iconbanco} alt="" className="imgBanco iconTitulo" />

                    <label className="tituloMain">Sessões em destaque</label>
                </div>

                <div className="cardSessoes">

                    <CardSessoes />
                    <CardSessoes />
                    <CardSessoes />
                    <CardSessoes />

                </div>


            </section>


            <Footer />




        </article>
    );

}

export default Dashboard;