import iconFavorito from "../img/icons/icon_favorito.svg";

import iconFavoritoPreenchido from "../img/icons/icon_favorito_preenchido.svg";
import iconSessoes from "../img/icons/icon_sessoes.png";
import iconOrdenar from "../img/icons/icon_ordenar.svg";





function Favoritos() {
    return (

        <article className="favoritos">




            <section id="main" className="conteudoMain">


                <div className="titulo">
                    <img src={iconFavorito} alt="iconfavorito" id="iconTituloBanco" />
                    <label id="tituloMain">Favoritos</label>
                    <div>
                        <img src={iconOrdenar} alt="ordenar" id="iconOrdenar" />
                    </div>

                </div>

                <div className="cardSection">

                    <div className="cardSessoes">

                        <div>
                            <img src={iconSessoes} alt="" />
                            <div className="textoCards">
                                <label>Os 3 porquinhos </label>
                                <p>Equipa Avila Crew</p>
                                <span>8º ano | Past Tense</span>
                            </div>

                            <img src={iconFavoritoPreenchido} alt="favoritos" />
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

                            <img src={iconFavoritoPreenchido} alt="favoritos" />
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

                            <img src={iconFavoritoPreenchido} alt="favoritos" />
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

                            <img src={iconFavoritoPreenchido} alt="favoritos" />
                        </div>

                    </div>

                </div>

            </section>






        </article>



    );

}

export default Favoritos;