import React from 'react'
import setaAtras from "../img/icons/icon_setaAtrasEditarSessao.svg"
import iconFechar from "../img/icons/icon_fechar.svg"

import Select from 'react-select';
//REACT ROUTER
import { useRouteMatch, Link, useHistory } from "react-router-dom";
import { useEffect, useState } from 'react'



import { useDispatch, useSelector } from 'react-redux'
//REDUX//
import { alterarNome, alterarConteudos, alterarDescricao, alterarSituacaoProblema, alterarReais, alterarFiccionais, alterarMentores, alterarMentorandos, alterarResultados, alterarGrauEscolaridade, alterarDisciplina } from "../actions/sessaoAction";
import { colourStyles } from '../pages/CriarSessao/selectStyle';
import { loadSessao, loadGrausGrupos } from '../actions/sessaoAction'
import { editarSessaoAction } from "./../actions/editarSessaoAction";


function EditarSessao() {
    let { url } = useRouteMatch();
    let id = url.split("/")[2]
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSessao(id))
        dispatch(loadGrausGrupos())

    }, [dispatch, id])

    const { sessaoInfo: sessao, status, grausDeEnsino, gruposDisciplinares } = useSelector(state => state.sessao)
    const { nome, subject, descricao, situacao_problema, factos_reais, factos_ficcionais, funcao_alunos_mentores, funcao_alunos_mentorandos, resultados_esperados, disciplina_level, disciplina_id, ano, nova_disciplina_id } = sessao


    const [courses, setCourses] = useState()
    const [currentCourse, setcurrentCourse] = useState()
    const [currentYear, setcurrentYear] = useState()

    const history = useHistory()
    const redirectBack = () => { history.goBack() }

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

    //Ler e gravar qual é a disciplina que a sessão tinha originalment
    useEffect(() => {

        if (courses?.length > 0) {
            const labelIndex = courses.map((e) => e.label).indexOf(disciplina_level)
            // setcourseLabelIndex(labelIndex)
            const optionIndex = courses[labelIndex].options.map(e => e.value).indexOf(disciplina_id)
            // setcourseOptionIndex(optionIndex);
            setcurrentCourse(courses[labelIndex].options[optionIndex]);
        }
        if (grausDeEnsino?.length > 0) {
            const grauEscolhido = [grausDeEnsino[grausDeEnsino.map((e) => e.year).indexOf(ano)]].map(e => ({ label: e.year, value: e.id }))[0]

            setcurrentYear(grauEscolhido);
            /* .map(e => ({ label: e.id, value: e.year })); */
        }
    }, [courses, disciplina_level, disciplina_id, grausDeEnsino, ano])

    //INPUT HANDLERS  
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
        dispatch(alterarResultados(resultados))
    }

    const selectGrauEscolaridade = (e) => {

        dispatch(alterarGrauEscolaridade(e))
    }
    const selectDisciplina = (e) => {

        dispatch(alterarDisciplina(e))
    }

    const { status: feedbackStatus, type } = useSelector(state => state.feedback)
    const submitHandler = (e) => {

        dispatch(editarSessaoAction({ dados: sessao, id: id }))

    }
    useEffect(() => {
        if (feedbackStatus && type === 'valid') {
            history.push(`/sessao/${id}`)
        }
    }, [feedbackStatus, type])
    return (

        <>
            {status === 'completed' &&
                <article className="editarSessao">
                    <section id="main" className="conteudoMain">

                        {/*DESKTOP*/}
                        <div id="bemvindo">

                            <div className="bemvindo_titulos">
                                <h3>Bom dia,</h3>
                                <h1>Editar Sessão</h1>
                            </div>
                            <div className="icons">
                                <div onClick={redirectBack} className="iconFechar">
                                    <img src={iconFechar} alt="seta atras" />
                                </div>
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


                                        {/*  <div onClick={redirectBack} className="iconFechar">
                                            <img src={iconFechar} alt="seta atras" />
                                        </div> */}

                                        <div onClick={redirectBack} className="iconFechar">
                                            <img src={iconFechar} alt="seta atras" />
                                        </div>


                                    </header>

                                    <section id="corpo">
                                        <div className="formulario">
                                            <label className="tituloFormulario">Nome da sessão</label>
                                            <input type="text" className="inputTexto" value={nome} onChange={nomeHandler} />

                                            <label className="tituloFormulario">Ano de escolaridade dos mentorandos</label>
                                            {currentYear &&
                                                <Select
                                                    options={grausDeEnsino.map(grau => ({ label: grau.year, value: grau.id }))}
                                                    className='react-select-form'
                                                    placeholder={'ex: 7ºano'}
                                                    isClearable={true}
                                                    isSearchable={false} styles={colourStyles}
                                                    onChange={(e) => selectGrauEscolaridade(e)}
                                                    defaultValue={currentYear}
                                                ></Select>
                                            }

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
                                        {/* <Link className="botaoAzul" to="/criarequipa/2" >
                                            <button id="divBotao">
                                                <div id="botao" >
                                                    <p id="textoBotao">Guardar</p>
                                                </div>
                                            </button>
                                        </Link> */}
                                    </section>
                                </form>
                            </div>
                            <div className="conteudoDireita">

                                <span className="botaoAzul" onClick={submitHandler} >
                                    <button id="divBotao">
                                        <div id="botao" >
                                            <p id="textoBotao">Guardar</p>
                                        </div>
                                    </button>
                                </span>
                                <span className="botaoAzul" onClick={redirectBack} >
                                    <button id="divBotao">
                                        <div id="botao" >
                                            <p id="textoBotao">Cancelar sem guardar</p>
                                        </div>
                                    </button>
                                </span>
                            </div>
                        </div>

                    </section>
                </article>
            }
        </>
    )
}

export default EditarSessao
