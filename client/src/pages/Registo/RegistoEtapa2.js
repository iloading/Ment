import registoImg from "../../img/registo/registoImg.png";
/* import icon_nome from "../../img/icon_nome.png"; */
import icon_dropdown from "../../img/icons/icon_dropdown.png";
import { Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import { Formik, Form } from "formik";
import * as Yup from 'yup';



function RegistoEtapa2({ setEtapa, dados, setDados }) {
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



    return (
        <Formik initialValues={initialValues} validationSchema={camposValidador} onSubmit={onSubmit}>
            <Form className="formularioRegisto">
                <header className="registoImg">
                    <img src={registoImg} alt="" />
                </header>

                <div className="formulario">
                    <section className="tituloPrincipal">
                        <label>Os seus dados</label>
                    </section>
                    <section className="paragrafo">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur, qui recusandae ut delectus harum nobis aliquid, odit ex deserunt laudantium, assumenda voluptatibus?</p>
                    </section>
                    <section className="inputFormulario">

                        <label>Nome</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>
                            {/* <img src={icon_nome} alt="" /> */}
                            <Field placeholder="ex: Joana Silva" name="name" id="inputName" type="text" ></Field>
                        </div>
                        <ErrorMessage name="name" component="p" />
                    </section>
                    <section className="selectFormulario">
                        <label>Cargo</label>
                        <div>
                            <img src={icon_dropdown} alt="" />
                            <Field as="select" name="cargo">
                                <option value="Professor">Professor</option>
                                <option value="Aluno Mentor">Aluno Mentor</option>
                            </Field>
                        </div>
                    </section>
                    <section className="botao">
                        <button type="submit">Próxima Etapa</button>
                    </section>
                    <section className="tituloFooter">
                        <Link to="/">Já tem conta? Faça o login aqui</Link>
                    </section>
                </div>

            </Form>
        </Formik>


    );

}

export default RegistoEtapa2;