
import CarouselDashboard from "./components/CarouselDashboard";

import navLogo from "../img/logo.png";
import iconPerfil from "../img/icon_perfil.png";
import iconHome from "../img/icon_home.png";
import iconCriar from "../img/icon_criar.png";
import iconBanco from "../img/icon_banco.png";
import iconEquipa from "../img/icon_equipa.png";




function Dashboard() {

    return (
        <article className="dashboard">
            <nav>
                <img src={navLogo} alt="" id="logo" />
                <img src={iconPerfil} alt="" id="perfil" className="iconPerfil" />
            </nav>

            <section id="carouselDashboard">
                <CarouselDashboard />
            </section>

            <footer>
                <img src={iconBanco} alt="" id="banco" className="iconFooter" />
                <img src={iconHome} alt="" id="home" className="iconFooter" />
                <img src={iconCriar} alt="" id="criar" className="iconFooter" />
                <img src={iconEquipa} alt="" id="equipa" className="iconFooterEquipa" />
            </footer>


        </article>
    );

}

export default Dashboard;