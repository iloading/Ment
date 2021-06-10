import registo5Img from "../../img/registo/registo5Img.png";
import icon_dropdown from "../../img/icons/icon_dropdown.png";
import setaAtras from "../../img/setaAtras.png";
import { Field, ErrorMessage } from 'formik';
import axios from 'axios';
import { colourStyles } from './selectStyle';

import AsyncCreatableSelect from 'react-select/async-creatable';
import Select from 'react-select';
import _ from 'lodash';

import { Formik, Form } from "formik";
import * as Yup from 'yup';

import { useEffect, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
//BD
import { register, listaEscolas } from '../../API'

function RegistoEtapa4({ setEtapa, dados, setDados, validadeFormulario4, setvalidadeFormulario4 }) {
    const history = useHistory();
    const [querySchool, setQuerySchool] = useState('')

    const [schoolResults, setSchoolResults] = useState([])

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
        course: Yup.string('Este campo é obrigatório').required("Este campo é obrigatório"),

    })

    let camposValidadorStudent = Yup.object().shape({
        school: Yup.string().required("Este campo é obrigatório"),

    })


    let timerId = null
    const loadOptions = (e) => {

        clearTimeout(timerId);
        var promise = new Promise(function (resolve, reject) {
            timerId = setTimeout(async () => {
                resolve(listaEscolas({ school: e }));
            }, 1000);
        });

        return promise;
    }


    const handleChange = (e) => {
        e === null ? setDados({ ...dados, school: null }) : setDados({ ...dados, school: e.idschool })
    }


    const onSubmit = () => {
        register(dados).then((res) => {

            console.log((res.data.success || res.data.error));

        })

    }

    const redirectBack = () => { history.push('/registo/3'); setEtapa(3) }

    return (
        <Formik initialValues={initialValues} validationSchema={dados.role === 1 ? camposValidadorTeacher : camposValidadorStudent} onSubmit={onSubmit} >
            <Form className="formularioRegisto">
                <header className="registoImg">
                    <div className="setaTras" onClick={redirectBack}>
                        <img src={setaAtras} alt="seta atras" />
                    </div>
                    <img src={registo5Img} alt="registo quinta imagem" />
                </header>
                <div className="formulario" id={dados.role === 0 ? "etapa4_student" : "etapa4_teacher"}>
                    <section className="tituloPrincipal">
                        <label>Informações</label>
                    </section>
                    <section className="paragrafo">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab quos at nostrum nemo earum obcaecati voluptas consectetur.</p>
                    </section>
                    {/* <section className="inputFormulario selectFormulario">

                        <label>Escola</label>
                       

                        <div>
                            <img src={icon_dropdown} alt="icone dropdown" />
                            <Field as='select' placeholder="Pesquise por Concelho | Agrupamento | Escola" name="school" id="inputEscola" type="text">

                            </Field>
                        </div>
                        <div className="error">
                            <ErrorMessage name="school" component="p" />
                        </div>

                    </section> */}
                    <section className="">
                        <label>Escola</label>


                        {/* Só passei 12h nisto ... I'm fine */}
                        <AsyncCreatableSelect onChange={(e) => handleChange(e)} cacheOptions={true} defaultOptions loadOptions={(e) => (e !== '' && e.length > 2) ? loadOptions(e).then((res) => res.data.success) : null} isClearable={true} noOptionsMessage={() => 'Não existem resultados'} loadingMessage={() => 'Escreva para procurar...'} getOptionLabel={e => e.agrupamento} getOptionValue={e => e.idschool} id='inputRole' className='react-select-form' styles={colourStyles} placeholder={'Pesquisar por Concelho | Agrupamento | Escola'} />


                        <div className="error">
                            <ErrorMessage name="role" component="p" />
                        </div>
                    </section>
                    {dados.role === 1 &&
                        <section className="selectFormulario">
                            <label>Disciplina</label>
                            <div>
                                <img src={icon_dropdown} alt="icone dropdown" />

                                <Field as="select" name="course" required id='inputDisciplina' >
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