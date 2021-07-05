import React from 'react'
import setaAtras from "../../img/setaAtras.png";
import criarSessao3 from "../../img/criarSessoes/criarSessao3.svg";
import Select from 'react-select';

import { Link } from "react-router-dom"
//REDUX//
import { loadInfo, escolherGrauEscolaridade, escolherDisciplina, preencherNome, preencherConteudos, criarNovaSessao } from "../../actions/criacaoSessaoAction";
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

function CriarSessao3() {



    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(loadInfo())

        /* setselectedDisciplina(gruposDisciplinares.find(grupo => dadosPreenchidos.DisciplinaEscolhida === grupo.id) || undefined);
        setselectedAno(grausDeEnsino.find(ano => dadosPreenchidos.grauEscolhido === ano.id) || undefined); */
    }, [dispatch])

    const { grausDeEnsino, gruposDisciplinares, dadosPreenchidos } = useSelector(state => state.criarSessao)




    const selectGrauEscolaridade = (e) => {

        dispatch(escolherGrauEscolaridade(e))
    }
    const selectDisciplina = (e) => {

        dispatch(escolherDisciplina(e))
    }
    const nomeHandler = (e) => {
        let Nome;
        if (e.target.value === '') {
            Nome = null
        } else {
            Nome = e.target.value
        }

        dispatch(preencherNome(Nome))
    }
    const conteudosHandler = (e) => {
        let conteudo;
        if (e.target.value === '') {
            conteudo = null
        } else {
            conteudo = e.target.value
        }
        dispatch(preencherConteudos(conteudo))
    }
    const submitHandler = (e) => {
        dispatch(criarNovaSessao(dadosPreenchidos))
    }
    return (
        <form className="formularioCriarSessao">
            <header className="criarSessaoImg">


                <Link to='/criarsessao/2' className="setaTras">
                    <img src={setaAtras} alt="seta atras" />
                </Link>

                <img src={criarSessao3} alt="criar sessao primeira imagem" />

            </header>

            <section id="corpo">
                <label id="titulo">Detalhes</label>

                <div className="formulario">
                    <label className="tituloFormulario">Nome da sessão</label>

                    <input type="text" className="inputTexto" placeholder="ex: Escape Room" onChange={nomeHandler} value={dadosPreenchidos.nome}></input>
                </div>
                <div className="formulario">
                    <label className="tituloFormulario">Ano de Escolaridade dos mentorandos</label>

                    <Select
                        options={grausDeEnsino.map(grau => ({ label: grau.year, value: grau.id }))}
                        className='react-select-form'
                        /* styles={colourStyles} */
                        placeholder={'Ex: 7ºano'}
                        isClearable={true}
                        isSearchable={false}
                        onChange={(e) => selectGrauEscolaridade(e)}
                        defaultValue={dadosPreenchidos.grauEscolhido}
                    ></Select>
                </div>



                <div className="formulario">
                    <label className="tituloFormulario">Disciplina</label>

                    <Select
                        options={gruposDisciplinares.map(grupo => ({ label: `${grupo.code} - ${grupo.name}`, value: grupo.id }))}
                        className='react-select-form'
                        /* styles={colourStyles} */
                        placeholder={'Ex: Inglês, Matemática, etc...'}
                        isClearable={true}
                        isSearchable={false}
                        onChange={(e) => selectDisciplina(e)}
                        defaultValue={dadosPreenchidos.DisciplinaEscolhida}
                    >

                    </Select>
                </div>

                <div className="formulario">
                    <label className="tituloFormulario">Counteúdos programáticos</label>

                    <input type="text" className="inputTexto" placeholder="ex: Past tense, teorema de pitágoras" onChange={conteudosHandler} value={dadosPreenchidos.conteudos}></input>
                </div>
                {(dadosPreenchidos.equipaEscolhida) && (dadosPreenchidos.grauEscolhido) && (dadosPreenchidos.DisciplinaEscolhida) && (dadosPreenchidos.nome) && (dadosPreenchidos.conteudos) ?
                    <button to="/criarsessao/3" onClick={submitHandler}>
                        <button id="divBotao">
                            <div id="botao" >
                                <p id="textoBotao">Próximo passo</p>
                            </div>
                        </button>
                    </button>
                    :
                    <button id="divBotao" disabled>
                        <div id="botao" >
                            <p id="textoBotao">Próximo passo</p>
                        </div>
                    </button>
                }
            </section>

        </form>
    )
}

export default CriarSessao3
