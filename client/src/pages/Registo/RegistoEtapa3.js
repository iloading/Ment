import registo3Img from "../../img/registo/registo3Img.png";
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import navLogo from "../../img/logo.svg";
import registoImgDesktop from "../../img/registo/registo3Img_desktop.svg";


import { useEffect } from "react"
import { useHistory } from "react-router-dom"

//BD
import { avatares } from '../../API';

function RegistoEtapa3({ dados, setDados, avataresBD, setAvataresBD }) {


    const history = useHistory();
    const redirectLogin = () => { history.push("/login") }

    useEffect(() => {
        window.scrollTo(0, 0);
        if (avataresBD === null) {

            avatares().then((res) => {
                if (res.data.success) {
                    setAvataresBD(res.data.success)
                } else { }


            })
        }


    }, [avataresBD, setAvataresBD])


    const onSubmit = () => {
        if (dados.avatar) {
            history.push('/registo/4');

        }

    }

    const avatarSelect = (avatar) => {
        setDados({ ...dados, avatar: avatar });
    }


    const redirectBack = () => { history.push('/registo/2') }




    return (
        <>
            <div className="formularioRegisto_menu">
                <aside className="menu_principal_registo">
                    <div className="asideLogoRegisto">
                        <img src={navLogo} alt="" />
                    </div>
                </aside>
            </div>
            <div id="main">
                <section id="main" className="conteudoMain">

                    {/*DESKTOP*/}
                    <div id="bemvindo">

                        <div className="bemvindo_titulos">
                            <h3>Bom dia,</h3>
                            <h1>Registar</h1>
                        </div>
                        <div className="icons">
                            <button type="button" className="botaoLogin" onClick={redirectLogin}>Entrar</button>
                        </div>

                    </div>

                    <div className="titulo">
                        <div className="tituloPag criarEquipaTitulo" id="tituloPag">
                            <label className="tituloCriarEquipas desktop">Criar uma nova sessão</label>
                        </div>



                    </div>

                    <div className="conteudoMid">
                        <div className="conteudoEsquerda">
                            <article className="formularioRegisto">
                                <header className="registoImg">
                                    <div className="setaTras" onClick={redirectBack}>
                                        <img src={setaAtras} alt="seta atras" />
                                    </div>
                                    <img src={registo3Img} alt="registo terceira imagem" />
                                </header>
                                <div className="formulario " id='etapa3'>
                                    <section className="tituloPrincipal">
                                        <label>Escolher avatar</label>
                                    </section>

                                    <section className="avatarSelect">


                                        {avataresBD && avataresBD.map((avatar) => <img src={require(`../../img/avatar/${avatar.url}`).default} alt={avatar.alt} className={dados.avatar === avatar.idavatar ? 'selectedAvatar' : ''} id={`avatar_${avatar.idavatar}`} onClick={(e) => avatarSelect(avatar.idavatar)} key={avatar.idavatar} />)}





                                    </section>



                                    <section className="botao">
                                        {dados.avatar ? <button type="submit" id='nextStep3' onClick={onSubmit}>Próxima Etapa</button> : <button type="submit" id='nextStep3' disabled>Próxima Etapa</button>}


                                    </section>

                                </div>

                            </article>
                        </div>
                        <div className="conteudoDireitaDesktop">
                            <div className="botaoEtapaAnterior">
                                <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                                <p className="textoBotao">Etapa anterior</p>
                            </div>
                            <img src={registoImgDesktop} className="imgEquipa" alt="criar equipa primeira imagem" />
                        </div>
                    </div>
                </section>
            </div>
        </>

    );

}

export default RegistoEtapa3;