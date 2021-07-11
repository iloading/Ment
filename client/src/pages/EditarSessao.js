import React from 'react'
import setaAtras from "../img/icons/icon_setaAtrasEditarSessao.svg"
import iconFechar from "../img/icons/icon_fechar.svg"

import Select from 'react-select';
//REACT ROUTER
import { useRouteMatch, Link } from "react-router-dom";
import { useEffect, useState } from 'react'



import { useDispatch, useSelector } from 'react-redux'
//REDUX//
import { alterarNome, alterarConteudos, alterarDescricao, alterarSituacaoProblema, alterarReais, alterarFiccionais, alterarMentores, alterarMentorandos, alterarResultados, escolherGrauEscolaridade, alterarDisciplina } from "../actions/sessaoAction";
import { colourStyles } from '../pages/CriarSessao/selectStyle';
import { loadSessao, loadGrausGrupos } from '../actions/sessaoAction'


function EditarSessao() {
    let { url } = useRouteMatch();
    let id = url.split("/")[2]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadSessao(id))
        dispatch(loadGrausGrupos())

    }, [dispatch, id])

    const { sessaoInfo: sessao, status, grausDeEnsino, gruposDisciplinares } = useSelector(state => state.sessao)
    const { nome, subject, descricao, situacao_problema, factos_reais, factos_ficcionais, funcao_alunos_mentores, funcao_alunos_mentorandos, resultados_esperados, disciplina_level, disciplina_id } = sessao


    const [courses, setCourses] = useState()
    const [currentCourse, setcurrentCourse] = useState()



    function uniqBy(a) {
        let niveisDeEnsino = new Set();
        return a.filter(item => {
            return niveisDeEnsino.has(item.label) ? false : niveisDeEnsino.add(item.label);
        });
    }

    useEffect(() => {

        const levelsArrayFiltrados = uniqBy(gruposDisciplinares.map((course) => ({ label: course.level })))
        /* Para cada nivel de ensino já no array, escolher as disciplinas que fazem parte desse mesmo nivel de ensino */
        const courses = levelsArrayFiltrados.map((level) => ({ label: level.label, options: (gruposDisciplinares.filter((course) => course.level === level.label).map(({ name, id, code }) => ({ label: `${code} - ${name}`, value: id }))) }))
        /* Definir o resultado para o state */
        setCourses(courses);



    }, [gruposDisciplinares, disciplina_level])

    useEffect(() => {

        if (courses?.length > 0) {
            const labelIndex = courses.map((e) => e.label).indexOf(disciplina_level)
            // setcourseLabelIndex(labelIndex)
            const optionIndex = courses[labelIndex].options.map(e => e.value).indexOf(disciplina_id)
            // setcourseOptionIndex(optionIndex);
            setcurrentCourse(courses[labelIndex].options[optionIndex]);
        }

    }, [courses, disciplina_level, disciplina_id])

    // useEffect(() => {
    //     const courseOriginalmenteEscolhido = gruposDisciplinares.filter((e) => e.name === sessao.disciplina).map((grupo) => ({ label: `${grupo.code} - ${grupo.name}`, value: grupo.id }));
    //     setCourseOriginal(courseOriginalmenteEscolhido)
    // }, [input])

    const nomeHandler = (e) => {
        let Nome;
        if (e.target.value === '') {
            Nome = null
        } else {
            Nome = e.target.value
        }

        dispatch(alterarNome(Nome))
    }
    const conteudosHandler = (e) => {
        let conteudo;
        if (e.target.value === '') {
            conteudo = null
        } else {
            conteudo = e.target.value
        }
        dispatch(alterarConteudos(conteudo))
    }
    const descricaoHandler = (e) => {

        let Descricao;
        if (e.target.value === '') {
            Descricao = ''
        } else {
            Descricao = e.target.value
        }

        dispatch(alterarDescricao(Descricao))
    }
    const situacao_problemaHandler = (e) => {

        let situacao;
        if (e.target.value === '') {
            situacao = ''
        } else {
            situacao = e.target.value
        }

        dispatch(alterarSituacaoProblema(situacao))
    }

    const reaisHandler = (e) => {

        let reais;
        if (e.target.value === '') {
            reais = ''
        } else {
            reais = e.target.value
        }

        dispatch(alterarReais(reais))
    }
    const ficcionaisHandler = (e) => {

        let fic;
        if (e.target.value === '') {
            fic = ''
        } else {
            fic = e.target.value
        }

        dispatch(alterarFiccionais(fic))
    }
    const mentoresHandler = (e) => {

        let mentores;
        if (e.target.value === '') {
            mentores = ''
        } else {
            mentores = e.target.value
        }

        dispatch(alterarMentores(mentores))
    }
    const mentorandosHandler = (e) => {

        let mentorandos;
        if (e.target.value === '') {
            mentorandos = ''
        } else {
            mentorandos = e.target.value
        }

        dispatch(alterarMentorandos(mentorandos))
    }
    const resultadosHandler = (e) => {

        let resultados;
        if (e.target.value === '') {
            resultados = ''
        } else {
            resultados = e.target.value
        }
        console.log(resultados);
        dispatch(alterarResultados(resultados))
    }

    const selectGrauEscolaridade = (e) => {

        dispatch(escolherGrauEscolaridade(e))
    }
    const selectDisciplina = (e) => {

        dispatch(alterarDisciplina(e))
    }

    return (

        <>
            {status === 'completed' &&
                <article className="editarSessao">
                    <section id="main" className="conteudoMain">

                        {/*DESKTOP*/}
                        <div id="bemvindo">

                            <div className="bemvindo_titulos">
                                <h3>Bom dia,</h3>
                                <h1>Criar Sessão</h1>
                            </div>
                            <div className="icons">
                                <Link to='/criarsessao/6' className="iconFechar">
                                    <img src={iconFechar} alt="seta atras" />
                                </Link>
                            </div>

                        </div>

                        <div className="titulo">
                            <div className="tituloPag criarEquipaTitulo" id="tituloPag">
                                <div className="gridAdicionar">
                                    <label className="tituloCriarEquipas desktop">Detalhes</label>

                                </div>

                            </div>



                        </div>

                        <div className="conteudoMid">
                            <div className="conteudoEsquerda">
                                <form className="formularioCriarSessao">
                                    <header className="criarSessaoImg">


                                        <Link to='/criarsessao/6' className="setaTras">
                                            <img src={setaAtras} alt="seta atras" />
                                        </Link>

                                        <Link to='/criarsessao/6' className="iconFechar">
                                            <img src={iconFechar} alt="seta atras" />
                                        </Link>


                                    </header>

                                    <section id="corpo">
                                        <div className="formulario">
                                            <label className="tituloFormulario">Nome da sessão</label>
                                            <input type="text" className="inputTexto" value={nome} onChange={nomeHandler} />

                                            <label className="tituloFormulario">Ano de escolaridade dos mentorandos</label>
                                            <Select
                                                options={grausDeEnsino.map(grau => ({ label: grau.year, value: grau.id }))}
                                                className='react-select-form'
                                                placeholder={'ex: 7ºano'}
                                                isClearable={true}
                                                isSearchable={false} styles={colourStyles}
                                                onChange={(e) => selectGrauEscolaridade(e)}
                                                defaultValue={sessao.ano}
                                            ></Select>

                                            <label className="tituloFormulario">Disciplina</label>
                                            {currentCourse &&
                                                <Select
                                                    options={courses}
                                                    className='react-select-form'
                                                    styles={colourStyles}
                                                    placeholder={'ex: Inglês, Matemática, etc...'}
                                                    isClearable={true}
                                                    isSearchable={false}
                                                    onChange={(e) => selectDisciplina(e)}
                                                    defaultValue={currentCourse}
                                                >

                                                </Select>
                                            }
                                            <label className="tituloFormulario">Conteúdos programáticos</label>
                                            <textarea type="text" className="textareaTexto" onChange={conteudosHandler} value={subject} />

                                            <label className="tituloFormulario">Descrição</label>
                                            <textarea type="text" className="textareaTexto" onChange={descricaoHandler} value={descricao} />

                                            <label className="tituloFormulario">Situação problema</label>
                                            <textarea type="text" className="textareaTexto" onChange={situacao_problemaHandler} value={situacao_problema} />

                                            <label className="tituloFormulario">Factos reais</label>
                                            <textarea type="text" className="textareaTexto" onChange={reaisHandler} value={factos_reais} />

                                            <label className="tituloFormulario">Factos ficcionais</label>
                                            <textarea type="text" className="textareaTexto" onChange={ficcionaisHandler} value={factos_ficcionais} />

                                            <label className="tituloFormulario">Papel dos mentores</label>
                                            <textarea type="text" className="textareaTexto" onChange={mentoresHandler} value={funcao_alunos_mentores} />

                                            <label className="tituloFormulario">Papel dos mentorandos</label>
                                            <textarea type="text" className="textareaTexto" onChange={mentorandosHandler} value={funcao_alunos_mentorandos} />

                                            <label className="tituloFormulario">O que se espera da sessão</label>
                                            <textarea type="text" className="textareaTexto" onChange={resultadosHandler} value={resultados_esperados} />
                                        </div>
                                        <Link className="botaoAzul" to="/criarequipa/2" >
                                            <button id="divBotao">
                                                <div id="botao" >
                                                    <p id="textoBotao">Guardar</p>
                                                </div>
                                            </button>
                                        </Link>
                                    </section>
                                </form>
                            </div>
                            <div className="conteudoDireita">

                                <Link className="botaoAzul" to="/criarequipa/2" >
                                    <button id="divBotao">
                                        <div id="botao" >
                                            <p id="textoBotao">Guardar</p>
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </div>

                    </section>
                </article>
            }
        </>
    )
}

export default EditarSessao
