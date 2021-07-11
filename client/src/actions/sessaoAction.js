
import { sessaoInfo, listaGrausEnsino, listaGruposDisciplinares } from '../API'

export const loadSessao = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_SESSAO"
    })

    const sessaoDB = await sessaoInfo({ id: id });


    dispatch({
        type: "FETCH_SESSAO",
        payload: sessaoDB.data.success[0]

    })
}



export const alterarNome = (nome) => async (dispatch) => {

    dispatch({
        type: "ALTERAR_NOME",
        payload: {
            nome: nome
        }
    })
}

export const escolherGrauEscolaridade = (id) => async (dispatch) => {

    dispatch({
        type: "ESCOLHER_GRAU",
        payload: {
            id: id
        }
    })
}

export const escolherDisciplina = (id) => async (dispatch) => {

    dispatch({
        type: "ESCOLHER_DISCIPLINA",
        payload: {
            id: id
        }
    })
}
export const alterarDisciplina = (id) => async (dispatch) => {

    dispatch({
        type: "ALTERAR_DISCIPLINA",
        payload: {
            id: id
        }
    })
}
export const alterarConteudos = (conteudos) => async (dispatch) => {

    dispatch({
        type: "ALTERAR_CONTEUDOS",
        payload: {
            conteudos: conteudos
        }
    })
}
export const alterarDescricao = (descricao) => async (dispatch) => {

    dispatch({
        type: "ALTERAR_DESCRICAO",
        payload: {
            descricao: descricao
        }
    })
}
export const alterarSituacaoProblema = (situacao_problema) => async (dispatch) => {
    dispatch({
        type: "ALTERAR_SITUACAO_PROBLEMA",
        payload: {
            situacao_problema: situacao_problema
        }
    })
}

export const alterarReais = (reais) => async (dispatch) => {
    dispatch({
        type: "ALTERAR_REAIS",
        payload: {
            reais: reais
        }
    })
}
export const alterarFiccionais = (ficcionais) => async (dispatch) => {
    dispatch({
        type: "ALTERAR_FICCIONAIS",
        payload: {
            ficcionais: ficcionais
        }
    })
}

export const alterarMentores = (mentores) => async (dispatch) => {
    dispatch({
        type: "ALTERAR_MENTORES",
        payload: {
            funcao_alunos_mentores: mentores
        }
    })
}
export const alterarMentorandos = (mentorandos) => async (dispatch) => {
    dispatch({
        type: "ALTERAR_MENTORANDOS",
        payload: {
            funcao_alunos_mentorandos: mentorandos
        }
    })
}
export const alterarResultados = (resultados) => async (dispatch) => {
    dispatch({
        type: "ALTERAR_RESULTADOS",
        payload: {
            resultados_esperados: resultados
        }
    })
}


export const loadGrausGrupos = () => async (dispatch) => {

    const grausEnsino = await listaGrausEnsino();
    const gruposDisciplinares = await listaGruposDisciplinares();
    dispatch({
        type: "FETCH_GRAUS_GRUPOS",
        payload: { grausDeEnsino: grausEnsino.data.success, disciplinas: gruposDisciplinares.data.success }
    })
}
