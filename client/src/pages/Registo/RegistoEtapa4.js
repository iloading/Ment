



import avatar_1 from "../../img/avatar/avatar_1.png";
import setaAtras from "../../img/setaAtras.png";

import { Formik, Form } from "formik";
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { useEffect } from "react"


function RegistoEtapa4({ setEtapa, dados, setDados }) {

    const initialValues = {

    }
    const camposValidador = Yup.object().shape({

    })

    const onSubmit = (data) => {

        setEtapa(5)



    }
    /* const history = useHistory();

    const redireciona = () => {
        let path = "/registo/5";
        history.push(path);
    }
 */
    const avatarSelect = (e) => {
        console.log(e.target.id);

    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])


    return (
        <Formik initialValues={initialValues} validationSchema={camposValidador} onSubmit={onSubmit}>
            <Form className="formularioRegisto">
                <article className="avatar">

                    <div className="titulo">
                        <img src={setaAtras} alt="seta atras" />
                        <label>Escolher avatar</label>
                    </div>



                    <section className="avatarSelect">
                        <div>
                            <img src={avatar_1} alt="avatar_1" id="avatar_1" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_2" id="avatar_2" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_3" id="avatar_3" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_4" id="avatar_4" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_5" id="avatar_5" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_6" id="avatar_6" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_7" id="avatar_7" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_8" id="avatar_8" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_9" id="avatar_9" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_10" id="avatar_10" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_11" id="avatar_11" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_12" id="avatar_12" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_13" id="avatar_13" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_14" id="avatar_14" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_15" id="avatar_15" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_16" id="avatar_16" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_17" id="avatar_17" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_18" id="avatar_18" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_19" id="avatar_19" onClick={(e) => avatarSelect(e)} />
                        </div>
                        <div>
                            <img src={avatar_1} alt="avatar_20" id="avatar_20" onClick={(e) => avatarSelect(e)} />
                        </div>
                    </section>

                    <section className="botao">

                        <button type="submit" >Selecionar</button>

                    </section>


                </article>


            </Form>
        </Formik>


    );

}

export default RegistoEtapa4;