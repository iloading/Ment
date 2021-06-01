import registoImg from "../../img/registo/registoImg.png";
import setaAtras from "../../img/setaAtras.png";
/* import icon_nome from "../../img/icon_nome.png"; */
import icon_dropdown from "../../img/icons/icon_dropdown.png";
import { Field, ErrorMessage } from 'formik';


import { Formik, Form } from "formik";
import * as Yup from 'yup';

import { useEffect } from "react"



function RegistoEtapa2({ setEtapa, dados, setDados }) {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    let initialValues

    /* Desta forma se o utilizador voltar a tras durante o registo, os dados ficam guardados nos campos corretos */

    (dados.name || dados.cargo) ?
        initialValues = {
            name: dados.name,
            cargo: dados.cargo,

        } : initialValues = {
            name: "",
            cargo: "Aluno Mentor",
        }


    const camposValidador = Yup.object().shape({
        name: Yup.string().required("Este campo é obrigatório"),
        cargo: Yup.string().required("Este campo é obrigatório"),

    })

    const onSubmit = (data) => {

        setDados({ ...dados, name: data.name, cargo: data.cargo })
        setEtapa(3)
    }

    const redirectBack = () => { setEtapa(1) }



    return (
        <Formik initialValues={initialValues} validationSchema={camposValidador} onSubmit={onSubmit}>
            <Form className="formularioRegisto" >
                <header className="registoImg">
                    <div className="setaTras" onClick={redirectBack}>
                        <img src={setaAtras} alt="seta atras" />
                    </div>
                    <img src={registoImg} alt=" registo imagem" />
                </header>

                <div className="formulario" id='etapa2'>
                    <section className="tituloPrincipal">
                        <label>Os seus dados</label>
                    </section>
                    <section className="paragrafo">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur.</p>
                    </section>
                    <section className="inputFormulario">

                        <label>Nome</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>
                            {/* <img src={icon_nome} alt="" /> */}
                            <Field placeholder="ex: Joana Silva" name="name" id="inputName" type="text" ></Field>
                        </div>
                        <div className="error">
                            <ErrorMessage name="name" component="p" />
                        </div>

                    </section>
                    <section className="selectFormulario">
                        <label>Cargo</label>
                        <div>
                            <img src={icon_dropdown} alt="icone dropdown" />
                            <Field as="select" name="cargo">
                                <option value="Professor">Professor</option>
                                <option value="Aluno Mentor">Aluno Mentor</option>
                            </Field>
                        </div>
                        <div className="error">
                            {/* <ErrorMessage name="name" component="p" /> */}
                        </div>
                    </section>
                    <section className="botao">
                        <button type="submit">Próxima Etapa</button>
                    </section>

                </div>

            </Form>
        </Formik>


    );

}

export default RegistoEtapa2;