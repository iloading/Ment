import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SessoesDestaque from "./components/sessoesDestaque";

import iconBanco from "../img/icons/icon_banco.svg";

import setaDireita from "../img/setaDireita_cor.png";
import iconSessoes from "../img/icons/icon_sessoes.png";
import iconOrdenar from "../img/icons/icon_ordenar.svg";
import iconFiltro from "../img/icons/icon_filtro.svg";
import iconPesquisa from "../img/icons/icon_pesquisa.svg";
import linhaVertical from "../img/linhaVertical.svg";


function Banco() {
    return (
        <article className="banco layout">

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

                <div>
                    <h1>TODAS AS SESSOES</h1>
                </div>


                <SessoesDestaque />



            </section>

            <Footer />




        </article>
    );
}

export default Banco;