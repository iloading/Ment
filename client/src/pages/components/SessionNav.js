
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg";
import iconShare from "../../img/icons/icon_share.svg";
import iconFavorito from "../../img/icons/icon_favorito.svg";
import iconLike from "../../img/icons/icon_like.svg";
import Carousel from "../components/CarouselSessao"

import { Link, useHistory } from 'react-router-dom'


function Navbar({ sessao, status }) {

    let history = useHistory();
    const redirectBack = () => { history.goBack() }

    return (
        <>
            {status === "completed" &&
                <section className='navbar'>
                    <div className="barraSocial" id="barraSocial">
                        <div onClick={redirectBack}>
                            <img src={setaAtras} alt="" />
                        </div>
                        <img src={iconShare} alt="" id="share" />
                        <img src={iconFavorito} alt="" id="favorito" />
                        <img src={iconLike} alt="" id="like" />
                    </div>

                    <div className="areaDownload">
                        <div className="barraProgresso">
                            <label>Complete os detalhes da sessão</label>
                            <div className="progressBar">
                                <div><p>50%</p></div>
                            </div>
                        </div>
                    </div>

                    <div className="navegacao">
                        <label className="titulo" id="titulo">{sessao.nome}</label>


                        <Carousel />


                    </div>
                </section>
            }
        </>

    );

}

export default Navbar;