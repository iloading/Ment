
import CarouselDashboard from "./components/CarouselDashboard";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import iconEquipa from "../img/icons/icon_equipa.png";
import iconSessoes from "../img/icons/icon_sessoes.png";
import iconbanco from "../img/icons/icon_banco.png";
import medalha from "../img/medalha.png";




function Dashboard() {

    return (
        <article className="dashboard">

            <Navbar/>
           
            <section id="main"className="conteudoMain">

              

                <div className="titulo">
                    <img src={iconEquipa} alt="" id="iconTituloEquipa" />

                    <label id="tituloMain">As minhas equipas</label>
                </div>

                <div className="carouselContent">
                    <CarouselDashboard />
                </div>
                <div className="titulo">
                    <img src={iconbanco} alt="" id="iconTituloEquipa" />

                    <label id="tituloMain">Sessões em destaque</label>
                </div>

                <div className="cardSessoes">
                    <div>
                        <img src={iconSessoes} alt="" id="iconTituloEquipa" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={medalha} alt="" id="iconTituloEquipa" />
                    </div>
                    <div>
                        <img src={iconSessoes} alt="" id="iconTituloEquipa" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={medalha} alt="" id="iconTituloEquipa" />
                    </div>
                    <div>
                        <img src={iconSessoes} alt="" id="iconTituloEquipa" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={medalha} alt="" id="iconTituloEquipa" />
                    </div>
                    <div>
                        <img src={iconSessoes} alt="" id="iconTituloEquipa" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={medalha} alt="" id="iconTituloEquipa" />
                    </div>
                </div>
             

            </section>
            
            
            <Footer />
          
          


        </article>
    );

}

export default Dashboard;