import registo3Img from "../../img/registo/registo3Img.png";
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
import navLogo from "../../img/logo.svg";
import registoImgDesktop from "../../img/registo/registo3Img_desktop.svg";


import { useEffect } from "react"
import { useHistory } from "react-router-dom"

import { Link } from "react-router-dom"

//BD
import { avatares } from '../../API';

function RegistoEtapa3({ dados, setDados, avataresBD, setAvataresBD }) {


    const history = useHistory();


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
            <div id="main" className="registo">
                <section id="main" className="conteudoMain">

                    {/*DESKTOP*/}
                    <div id="bemvindo">

                        <div className="bemvindo_titulos">
                            <h3>Bom dia,</h3>
                            <h1>Registar</h1>
                        </div>


                    </div>

                    <div className="titulo">
                        <div className="tituloPag criarEquipaTitulo" id="tituloPag">
                            <label className="tituloCriarEquipas desktop"></label>
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


                                        {avataresBD && avataresBD.map((avatar) => <img src={require(`../../img/avatar/${avatar.url}`).default} alt={avatar.alt} className={dados.avatar === avatar.id ? 'selectedAvatar' : ''} id={`avatar_${avatar.id}`} onClick={(e) => avatarSelect(avatar.id)} key={avatar.id} />)}





                                    </section>



                                    <section className="botao">
                                        {dados.avatar ? <button type="submit" id='nextStep3' onClick={onSubmit}>Próxima Etapa</button> : <button type="submit" id='nextStep3' disabled>Próxima Etapa</button>}


                                    </section>

                                </div>

                            </article>
                        </div>
                        <div className="conteudoDireitaDesktop">
                            <Link to='/registo/2' className="decorationLinks">
                                <div className="botaoEtapaAnterior">
                                    <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                                    <p className="textoBotao">Etapa anterior</p>
                                </div>
                            </Link>

                        </div>
                    </div>
                </section>
            </div>
        </>

    );

}

export default RegistoEtapa3;