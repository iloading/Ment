import favorito from "../img/icons/icon_favorito_background.svg";
import iconSettings from "../img/icons/icon_settings.svg";
import iconTerminar from "../img/icons/icon_terminarSessao.svg";
import iconDefinicoes from "../img/icons/icon_settings.svg";

import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
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
    const { user, status } = useSelector(state => state.user)

    return (
        <article className="perfil">

            {status === 'completed' &&

                <section id="main" className="conteudoMain">

                    {/*DESKTOP*/}
                    <div id="bemvindo">

                        <div className="bemvindo_titulos">
                            <h3>Bom dia,</h3>
                            <h1>{user.name}</h1>
                        </div>
                        <div className="icons">
                            <img src={iconDefinicoes} alt="" />
                        </div>

                    </div>

                    <div className="titulo">
                        {/*  <img src={user.avatar} alt="" className="iconTitulo" /> */}
                        <label className="tituloMain">O meu perfil</label>
                    </div>

                    <div className="infoPerfil">
                        <img src={require(`../img/avatar/${user.url}`).default} alt="" />
                        <label>{user.name}</label>
                        <span>{user.email}</span>
                    </div>

                    <div className="conteudoMid">
                        <div className="conteudoBotoes">

                            <div className="tituloMid">
                                <label className="tituloConteudo">Conteúdo</label>
                            </div>


                            <div className="botao">
                                <div id="img_esquerda">
                                    <img src={favorito} alt="" />
                                </div>
                                <div id="texto_Direita">
                                    <label>Os meus favoritos</label>
                                </div>
                            </div>


                            <div className="tituloMid">
                                <label className="tituloConteudo">Gestão</label>
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
                        <div className="conteudoDireitaDesktopPerfilEquipa">
                            <div className="infoPerfilDesktop">
                                <div className="conteudoDireitaFirst">
                                    <label>Avatar</label>
                                    <img src={require(`../img/avatar/${user.url}`).default} alt="" />


                                </div>
                                <div className="conteudoDireitaSecond">
                                    <label>Informações básicas</label>
                                    <div className="descricaoEquipa">
                                        <label className="tituloCaixaConteudo">{user.name}</label>
                                        <span>{user.email}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            }







        </article>
    );

}

export default Perfil;