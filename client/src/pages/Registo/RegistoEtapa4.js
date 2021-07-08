import registo5Img from "../../img/registo/registo5Img.png";
/* import icon_dropdown from "../../img/icons/icon_dropdown.png"; */
import setaAtras from "../../img/icons/icon_setaAtrasAzul.svg"
/* import { Field, ErrorMessage } from 'formik'; */
import navLogo from "../../img/logo.svg";
import registoImgDesktop from "../../img/registo/registoImg_desktop.svg";

import { colourStyles } from './selectStyle';

import AsyncCreatableSelect from 'react-select/async-creatable';
import Select from 'react-select';

/* import * as Yup from 'yup'; */

import { useHistory } from 'react-router-dom';
import { useState, useEffect, useCallback, useContext } from 'react';
//BD
import { register, listaEscolas, listaGruposDisciplinares } from '../../API'
import AuthContext from "../../context/AuthContext";

function RegistoEtapa4({ dados, setDados, validadeFormulario4, setvalidadeFormulario4 }) {

    const { getLoggedIn } = useContext(AuthContext)
    const history = useHistory();

    const [courses, setCourses] = useState([])

    //Grupos Disciplinares
    const getCourses = useCallback(
        async () => {
            /* pedido à BD para todas as disciplinas */
            const coursesResult = await listaGruposDisciplinares();
            /* Do resultado da BD, extrair e criar um novo array apenas com os niveis de ensino (1o ciclo, 2ciclo , etc) */
            const levelsArray = coursesResult.data.success.map((course) => ({ label: course.level }))
            function uniqBy(a) {
                let niveisDeEnsino = new Set();
                return a.filter(item => {
                    return niveisDeEnsino.has(item.label) ? false : niveisDeEnsino.add(item.label);
                });
            }
            const levelsArrayFiltrados = uniqBy(levelsArray)
            /* Para cada nivel de ensino já no array, escolher as disciplinas que fazem parte desse mesmo nivel de ensino */
            const courses = levelsArrayFiltrados.map((level) => ({ label: level.label, options: (coursesResult.data.success.filter((course) => course.level === level.label).map(({ name, id, code }) => ({ label: `${code} - ${name}`, value: id }))) }))
            /* Definir o resultado para o state */
            setCourses(courses);
        },
        [],
    )


    /* Quando a pag carrega, pedir os grupos disciplinares à BD */
    useEffect(() => {
        getCourses();

    }, [getCourses])

    //Escolas
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

    //Escolha de uma escola
    const handleChange = (e) => {
        e === null ? setDados({ ...dados, school: null }) : setDados({ ...dados, school: e.value })
    }
    //Escolha de um grupo disciplinar
    const handleChangeCourse = (e) => {
        e === null ? setDados({ ...dados, course: null }) : setDados({ ...dados, course: e.value })
    }

    //Verificar se está tudo preenchido
    useEffect(() => {
        if (dados.school !== null && dados.course !== null) {
            setvalidadeFormulario4(true)
        } else {
            setvalidadeFormulario4(false)
        }
    }, [dados, setvalidadeFormulario4])

    //Ao clicar no ultimo botão, efetuar o registo na BD
    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            await register(dados);

            getLoggedIn();
        } catch (error) {

        }


    }

    const redirectBack = () => { history.push('/registo/3') }

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
                            <form className="formularioRegisto">
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
                                        <p>Por fim, precisamos apenas da sua Escola/Agrupamento de forma a melhorarmos a sua experiência!</p>
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
                                        <AsyncCreatableSelect
                                            onChange={(e) => handleChange(e)}
                                            cacheOptions={true}
                                            defaultOptions={false}
                                            loadOptions={(e) => (e !== '' && e.length > 2) ? loadOptions(e).then((res) =>
                                                res.data.success.map(({ id, name }) => ({ label: name, value: id }))) : ''}
                                            isClearable={true}
                                            noOptionsMessage={() => 'Não existem resultados. Escreva o nome do seu concelho, escola ou agrupamento...'}
                                            loadingMessage={(e) => e.inputValue.length <= 2 ? 'Digite mais do que 2 carateres para pesquisar' : 'A Pesquisar...'}
                                            allowCreateWhileLoading={false}
                                            /* Criar uma nova escola caso a do utilizador não esteja na lista  */
                                            isValidNewOption={(inputValue, selectValue, selectOptions, accessors) => {
                                                if (inputValue.length > 2) {
                                                    if (selectValue.length === 0) {
                                                        if (selectOptions.length === 0) {
                                                            return true
                                                        }
                                                    }
                                                }
                                                return false
                                            }}

                                            id='inputRole'
                                            className='react-select-form'
                                            styles={colourStyles}
                                            placeholder={'Pesquisar por Concelho | Agrupamento | Escola'}
                                        />
                                        <div className="error">

                                        </div>


                                    </section>
                                    {dados.role === 1 &&
                                        <section className="selectFormulario">
                                            <label>Grupo Disciplinar</label>
                                            <Select
                                                options={courses}
                                                className='react-select-form'
                                                styles={colourStyles}
                                                placeholder={'Selecione o seu Grupo Disciplinar'}
                                                isClearable={true}
                                                isSearchable={false}
                                                onChange={(e) => handleChangeCourse(e)}
                                            >

                                            </Select>

                                        </section>
                                    }



                                    <section className="botao">
                                        {validadeFormulario4 ? <button type="submit" id='nextStep4' onClick={onSubmit}>Criar Conta</button> : <button id='nextStep4' disabled>Criar Conta</button>}


                                    </section>
                                </div>
                            </form>
                        </div>
                        <div className="conteudoDireitaDesktop">
                            <div className="botaoEtapaAnterior">
                                <img src={setaAtras} className="iconSeta" alt="seta para retroceder" />
                                <p className="textoBotao">Etapa anterior</p>
                            </div>
                            <img src={registoImgDesktop} className="imgEquipa" alt="criar equipa primeira imagem" />
                        </div>
                    </div>
                </section>
            </div>
        </>

    );

}

export default RegistoEtapa4;