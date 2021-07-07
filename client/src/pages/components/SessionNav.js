
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg";
import iconShare from "../../img/icons/icon_share.svg";
import iconFavorito from "../../img/icons/icon_favorito_cinzento.svg";
import iconLike from "../../img/icons/icon_like.svg";
import Carousel from "../components/CarouselSessao"

import { Link } from 'react-router-dom'


function Navbar() {

    return (
        <section id="nav">
            <div className="barraSocial" id="barraSocial">
                <Link to='../dashboard' className="decorationLinks">
                    <img src={setaAtras} alt="" />
                </Link>
                <img src={iconShare} alt="" id="share" />
                <img src={iconFavorito} alt="" id="favorito" />
                <img src={iconLike} alt="" id="like" />
            </div>

            <div className="navegacao">
                <label className="titulo" id="titulo">London Culture</label>


                <Carousel />


            </div>
        </section>

    );

}

export default Navbar;