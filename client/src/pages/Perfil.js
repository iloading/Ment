

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import iconEquipa from "../img/icons/icon_equipa.svg";

import avatar from "../img/avatar/avatar_1.png";
import favorito from "../img/icons/icon_favorito.svg";









function Perfil() {

    return (
        <article className="perfil">

            <Navbar />

            <section id="main" className="conteudoMain">

                <div className="titulo">
                    <img src={iconEquipa} alt="" className="iconTitulo" />
                    <label className="tituloMain">As minhas equipas</label>
                </div>

                <div className="infoPerfil">
                    <img src={avatar} alt="" />
                    <label>Joana Silva</label>
                    <span>joanasilva.12@gmail.com</span>
                </div>

                <div className="conteudo">


                    <div className="botao">
                        <div id="img_esquerda">
                            <img src={favorito} alt="" />
                        </div>
                        <div id="texto_Direita">
                            <label>Os meus favoritos</label>
                        </div>
                    </div>
                </div>

            </section>


            <Footer />




        </article>
    );

}

export default Perfil;