import registo3Img from "../../img/registo/registo3Img.png";
import setaAtras from "../../img/setaAtras.png";
import avatar_1 from "../../img/avatar/avatar_1.png";




import { useEffect } from "react"


function RegistoEtapa3({ setEtapa, dados, setDados }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    const onSubmit = () => {
        if (dados.avatar) {
            setEtapa(4)
        }

    }

    const avatarSelect = (e) => {
        setDados({ ...dados, avatar: e.target.id });
    }
    /* Simula a info que vem da BD RETIRAR MAIS TARDE !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/
    const idsDeAvataresNaBD = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

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

                    {idsDeAvataresNaBD.map((avatar) => <img src={avatar_1} alt={`avatar_${avatar}`} className={dados.avatar === 'avatar_' + avatar ? 'selectedAvatar' : ''} id={`avatar_${avatar}`} onClick={(e) => avatarSelect(e)} key={avatar} />)}



                    {/* <img src={avatar_1} alt="avatar_2" id="avatar_2" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_3" id="avatar_3" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_4" id="avatar_4" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_5" id="avatar_5" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_6" id="avatar_6" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_7" id="avatar_7" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_8" id="avatar_8" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_9" id="avatar_9" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_10" id="avatar_10" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_11" id="avatar_11" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_12" id="avatar_12" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_13" id="avatar_13" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_14" id="avatar_14" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_15" id="avatar_15" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_16" id="avatar_16" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_17" id="avatar_17" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_18" id="avatar_18" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_19" id="avatar_19" onClick={(e) => avatarSelect(e)} />

                        <img src={avatar_1} alt="avatar_20" id="avatar_20" onClick={(e) => avatarSelect(e)} /> */}

                </section>


                <section className="botao">

                    <button type="submit" onClick={onSubmit}>Escolher Avatar</button>

                </section>


            </div>

        </article>



    );

}

export default RegistoEtapa3;