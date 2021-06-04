import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import iconBanco from "../img/icons/icon_banco.png";

import setaDireita from "../img/setaDireita_cor.png";
import iconSessoes from "../img/icons/icon_sessoes.png";
import iconOrdenar from "../img/icons/icon_ordenar.png";
import iconFiltro from "../img/icons/icon_filtro.png";
import iconPesquisa from "../img/icons/icon_pesquisa.png";
import linhaVertical from "../img/linhaVertical.png";


function Banco() {
    return (
        <article className="banco">

            <Navbar />


            <section id="main" className="conteudoMain">

                <div className="searchBar">
                    <input placeholder="Pesquisar..." name="search" id="inputEmail" type="text" />

                    <div>
                        <img src={iconPesquisa} alt="" className="img1" />
                        <img src={linhaVertical} alt="" className="img1" />
                        <img src={iconFiltro} alt="" className="img2" />
                    </div>
                </div>

                <div className="titulo">
                    <img src={iconBanco} alt="" id="iconTituloBanco" />
                    <label id="tituloMain">Banco</label>
                    <div>
                        <img src={iconOrdenar} alt="" id="iconOrdenar" />
                    </div>

                </div>

                <div className="cardSessoes">

                    <div>
                        <img src={iconSessoes} alt="" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={setaDireita} alt="" />
                    </div>

                </div>
                <div className="cardSessoes">

                    <div>
                        <img src={iconSessoes} alt="" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={setaDireita} alt="" />
                    </div>

                </div>
                <div className="cardSessoes">

                    <div>
                        <img src={iconSessoes} alt="" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={setaDireita} alt="" />
                    </div>

                </div>
                <div className="cardSessoes">

                    <div>
                        <img src={iconSessoes} alt="" />
                        <div className="textoCards">
                            <label>Os 3 porquinhos </label>
                            <p>Equipa Avila Crew</p>
                            <span>8º ano | Past Tense</span>
                        </div>

                        <img src={setaDireita} alt="" />
                    </div>

                </div>

            </section>

            <Footer />




        </article>
    );
}

export default Banco;