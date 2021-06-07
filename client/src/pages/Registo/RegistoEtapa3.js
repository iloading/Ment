import registo3Img from "../../img/registo/registo3Img.png";
import setaAtras from "../../img/setaAtras.png";


import { useEffect } from "react"

//BD
import { avatares } from '../../API';

function RegistoEtapa3({ setEtapa, dados, setDados, avataresBD, setAvataresBD }) {



    useEffect(() => {
        window.scrollTo(0, 0);
        if (avataresBD === null) {
            console.log(123);
            avatares().then((res) => {
                if (res.data.success) {
                    setAvataresBD(res.data.success)
                } else { }


            })
        }


    }, [avataresBD, setAvataresBD])


    const onSubmit = () => {
        if (dados.avatar) {
            setEtapa(4)
        }

    }

    const avatarSelect = (avatar) => {
        setDados({ ...dados, avatar: avatar });
    }


    const redirectBack = () => { setEtapa(2) }




    return (
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



    );

}

export default RegistoEtapa3;