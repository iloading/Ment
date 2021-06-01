import registo5Img from "../../img/registo/registo5Img.png";
import icon_nome from "../../img/icons/icon_nome.png";
import icon_dropdown from "../../img/icons/icon_dropdown.png";
import setaAtras from "../../img/setaAtras.png";
import { Field, ErrorMessage } from 'formik';

import { Formik, Form } from "formik";
import * as Yup from 'yup';

function RegistoEtapa5({ setEtapa, dados, setDados }) {

    const initialValues = {
        school: "",
        disciplina: "mat",
    }
    const camposValidador = Yup.object().shape({
        school: Yup.string().required("Este campo é obrigatório"),
        disciplina: Yup.string().required("Este campo é obrigatório"),
    })
    const onSubmit = (data) => {

        /* FINAL  */



    }

    const redirectBack = () => { setEtapa(4) }

    return (
        <Formik initialValues={initialValues} validationSchema={camposValidador} onSubmit={onSubmit}>
            <Form className="formularioRegisto">
                <header className="registoImg">
                    <div className="setaTras" onClick={redirectBack}>
                        <img src={setaAtras} alt="seta atras" />
                    </div>
                    <img src={registo5Img} alt="registo quinta imagem" />
                </header>
                <div className="formulario">
                    <section className="tituloPrincipal">
                        <label>Informações</label>
                    </section>
                    <section className="paragrafo">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur, qui recusandae ut delectus harum nobis aliquid, odit ex deserunt laudantium, assumenda voluptatibus?</p>
                    </section>
                    <section className="inputFormulario">

                        <label>Escola</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>
                            <img src={icon_nome} alt="icone nome" />
                            <Field placeholder="ex: Escola Random Random" name="escola" id="inputEscola" type="text" />
                        </div>
                        <ErrorMessage name="email" component="p" />
                    </section>
                    <section className="selectFormulario">
                        <label>Disciplina --- temos que ver isto pq os alunos ao fazer o registo não vão ter de selecionar disciplina</label>
                        <div>
                            <img src={icon_dropdown} alt="icone dropdown" />
                            <Field as="select" name="disciplina">
                                <option value="mat">Mat</option>
                                <option value="ing">ING</option>
                            </Field>
                        </div>
                    </section>


                    <section className="botao">

                        <button>Criar</button>

                    </section>
                </div>
            </Form>
        </Formik>


    );

}

export default RegistoEtapa5;