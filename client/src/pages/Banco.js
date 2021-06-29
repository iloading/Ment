import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import SessoesDestaque from "./components/sessoesDestaque";
import Narrativa from "./components/Narrativa";

import iconBanco from "../img/icons/icon_banco.svg";

import setaDireita from "../img/setaDireita_cor.png";
import iconSessoes from "../img/icons/icon_sessoes.png";
import iconOrdenar from "../img/icons/icon_ordenar.svg";
import iconFiltro from "../img/icons/icon_filtro.svg";
import iconPesquisa from "../img/icons/icon_pesquisa.svg";
import linhaVertical from "../img/linhaVertical.svg";
import medalha from "../img/medalha.png";


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


                <h1>DESTAQUE</h1>

                <span className="destaquesBanco">
                    <SessoesDestaque />
                </span>



                <h1>NARRATIVAS</h1>

                <Narrativa />
                <Narrativa />
                <Narrativa />
                <Narrativa />
                <Narrativa />
                <Narrativa />
                <Narrativa />
                <Narrativa />
                <Narrativa />



            </section>

            <Footer />




        </article>
    );
}

export default Banco;