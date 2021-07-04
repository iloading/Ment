import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import avatar from "../img/avatar/avatar_1.png";
import favorito from "../img/icons/icon_favorito_background.svg";
import iconPerfil from "../img/icons/icon_perfil.svg";
import iconSettings from "../img/icons/icon_settings.svg";
import iconTerminar from "../img/icons/icon_terminarSessao.svg";

import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import AuthContext from "../context/AuthContext";

import { logout } from '../API'




function Perfil() {
    const { getLoggedIn } = useContext(AuthContext)
    const history = useHistory();

    const logOutButton = async () => {
        await logout();
        await getLoggedIn();
        history.push('/login')
    }

    return (
        <article className="perfil layout">

            <Navbar />

            <section id="main" className="conteudoMain">

                <div className="titulo">
                    <img src={iconPerfil} alt="" className="iconTitulo" />
                    <label className="tituloMain">O meu perfil</label>
                </div>

                <div className="infoPerfil">
                    <img src={avatar} alt="" />
                    <label>Joana Silva</label>
                    <span>joanasilva.12@gmail.com</span>
                </div>

                <div className="conteudoBotoes">

                    <div className="titulo">
                        <label>Conteúdo</label>
                    </div>


                    <div className="botao">
                        <div id="img_esquerda">
                            <img src={favorito} alt="" />
                        </div>
                        <div id="texto_Direita">
                            <label>Os meus favoritos</label>
                        </div>
                    </div>


                    <div className="titulo">
                        <label>Gestão</label>
                    </div>

                    <div className="botao">
                        <div id="img_esquerda">
                            <img src={iconSettings} alt="" />
                        </div>
                        <div id="texto_Direita">
                            <label>Definições</label>
                        </div>
                    </div>



                    <div className="botao" onClick={logOutButton}>
                        <div id="img_esquerda">
                            <img src={iconTerminar} alt="" />
                        </div>
                        <div id="texto_Direita">
                            <label>Terminar sessão</label>
                        </div>
                    </div>


                </div>

            </section>


            <Footer />




        </article>
    );

}

export default Perfil;