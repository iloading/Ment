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
            cargo: "",
        }


    const camposValidador = Yup.object().shape({
        name: Yup.string().required("Este campo é obrigatório"),
        cargo: Yup.number().required("Este campo é obrigatório").positive('Selecione um cargo').integer('Selecione um cargo').min(0, 'Selecione um cargo').max(1, 'Selecione um cargo'),

    })

    const onSubmit = (data) => {
        console.log(data);
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
                    <section className="inputFormulario selectFormulario">
                        <label>Cargo</label>
                        <div>
                            <img src={icon_dropdown} alt="icone dropdown" />
                            <Field as="select" name="cargo" required>
                                <option value="" disabled hidden selected>Selecionar Cargo</option>
                                <option value="0">Aluno Mentor</option>
                                <option value="1">Professor</option>

                            </Field>
                        </div>
                        <div className="error">
                            <ErrorMessage name="cargo" component="p" />
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