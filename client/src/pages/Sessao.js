
import Footer from "./components/Footer"
import Carousel from "./components/CarouselSessao"
import setaAtras from "../img/setaAtras.png";
import iconShare from "../img/icons/icon_share.svg";
import iconFavorito from "../img/icons/icon_favorito_cinzento.svg";
import iconLike from "../img/icons/icon_like.svg";




function Sessao() {
    return (
        <article className="sessao">



            <section id="main" className="conteudoMain">

                <div className="barraSocial">
                    <img src={setaAtras} alt="" />
                    <img src={iconShare} alt="" id="share" />
                    <img src={iconFavorito} alt="" id="favorito" />
                    <img src={iconLike} alt="" id="like" />
                </div>

                <div className="navegacao">
                    <label className="titulo">London Culture</label>

                    <div>
                        <Carousel />
                    </div>

                </div>

                <div className="conteudoMid">
                    <h1>conteudo</h1>
                </div>

            </section>

            <Footer />


        </article>
    );
}

export default Sessao;