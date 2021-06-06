import registo5Img from "../../img/registo/registo5Img.png";
import icon_dropdown from "../../img/icons/icon_dropdown.png";
import setaAtras from "../../img/setaAtras.png";
import { Field, ErrorMessage } from 'formik';

import { Formik, Form } from "formik";
import * as Yup from 'yup';

import { useEffect, useCallback } from 'react';
//BD
import { register } from '../../API'

function RegistoEtapa4({ setEtapa, dados, setDados, validadeFormulario4, setvalidadeFormulario4 }) {

    let initialValues;

    if (dados.role === '0' && dados.course) {
        setDados({ ...dados, course: null })
    };

    (dados.school || dados.course) ?
        initialValues = {
            school: dados.school,
            course: dados.course,

        } : initialValues = {
            school: "",
            course: "",
        }


    let camposValidadorTeacher = Yup.object().shape({
        school: Yup.string().required("Este campo é obrigatório"),
        course: Yup.string().required("Este campo é obrigatório"),

    })

    let camposValidadorStudent = Yup.object().shape({
        school: Yup.string().required("Este campo é obrigatório"),

    })





    const validar = useCallback(
        () => {

            if (dados.role === '0') {
                camposValidadorStudent.validate({
                    school: document.getElementById('inputEscola').value,


                }).then(function () {
                    setDados(
                        {
                            ...dados,
                            school: document.getElementById('inputEscola').value,

                        }
                    );
                    setvalidadeFormulario4(true)

                }).catch((e) => {
                    setvalidadeFormulario4(false);

                });
            } else {
                camposValidadorTeacher.validate({
                    school: document.getElementById('inputEscola').value,
                    course: document.getElementById('inputDisciplina').value,

                }).then(function () {
                    setDados(
                        {
                            ...dados,
                            school: document.getElementById('inputEscola').value,
                            course: document.getElementById('inputDisciplina').value

                        }
                    );
                    setvalidadeFormulario4(true)

                }).catch((e) => {
                    setvalidadeFormulario4(false);

                });
            }

        }, [camposValidadorStudent, camposValidadorTeacher, dados, setDados, setvalidadeFormulario4],
    )

    useEffect(() => {
        validar();
    }, [])
    //Fix this later if I have time 

    const onSubmit = () => {
        register(dados).then((res) => {
            console.log(res);
            console.log((res.data.success || res.data.error));

        })

    }

    const redirectBack = () => { setEtapa(3) }

    return (
        <Formik initialValues={initialValues} validationSchema={dados.role === '1' ? camposValidadorTeacher : camposValidadorStudent} onSubmit={onSubmit}>
            <Form className="formularioRegisto">
                <header className="registoImg">
                    <div className="setaTras" onClick={redirectBack}>
                        <img src={setaAtras} alt="seta atras" />
                    </div>
                    <img src={registo5Img} alt="registo quinta imagem" />
                </header>
                <div className="formulario" id={dados.role === "0" ? "etapa4_student" : "etapa4_teacher"}>
                    <section className="tituloPrincipal">
                        <label>Informações</label>
                    </section>
                    <section className="paragrafo">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur.</p>
                    </section>
                    <section className="inputFormulario">

                        <label>Escola</label>
                        {/* Falta meter estilos nestes erros */}

                        <div>

                            <Field placeholder="ex: Escola Abel Botelho" name="school" id="inputEscola" type="text" onInput={validar} />
                        </div>
                        <div className="error">
                            <ErrorMessage name="school" component="p" />
                        </div>

                    </section>
                    {dados.role === "1" &&
                        <section className="selectFormulario">
                            <label>Disciplina</label>
                            <div>
                                <img src={icon_dropdown} alt="icone dropdown" />

                                <Field as="select" name="course" required id='inputDisciplina' onInput={validar}>
                                    <option value="" disabled hidden selected>Selecionar Disciplina</option>
                                    <option value="mat">Matemática</option>
                                    <option value="fq">Física e Química</option>
                                    <option value="ing">Inglês</option>
                                    <option value="pt">Português</option>

                                </Field>
                            </div>
                            <div className="error">
                                <ErrorMessage name="course" component="p" />
                            </div>
                        </section>
                    }



                    <section className="botao">
                        {validadeFormulario4 ? <button type="submit" id='nextStep4'>Criar Conta</button> : <button type="submit" id='nextStep4' disabled>Criar Conta</button>}


                    </section>
                </div>
            </Form>
        </Formik>


    );

}

export default RegistoEtapa4;