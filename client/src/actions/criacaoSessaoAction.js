import { minhasEquipas, listaGrausEnsino, listaGruposDisciplinares, criarSessao } from '../API'

export const loadMinhasEquipas = () => async (dispatch) => {
    dispatch({
        type: "LOADING_MINHAS_EQUIPAS"
    })

    const minhasEquipasDB = await minhasEquipas();

    dispatch({
        type: "FETCH_MINHAS_EQUIPAS",
        payload: {
            minhasEquipas: minhasEquipasDB.data.success
        }
    })
}
export const escolherEquipa = (id) => async (dispatch) => {

    dispatch({
        type: "ESCOLHER_EQUIPA",
        payload: {
            id: id
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
export const preencherNome = (nome) => async (dispatch) => {

    dispatch({
        type: "PREENCHER_NOME",
        payload: {
            nome: nome
        }
    })
}
export const preencherConteudos = (conteudos) => async (dispatch) => {

    dispatch({
        type: "PREENCHER_CONTEUDOS",
        payload: {
            conteudos: conteudos
        }
    })
}
export const preencherDescricao = (descricao) => async (dispatch) => {

    dispatch({
        type: "PREENCHER_DESCRICAO",
        payload: {
            descricao: descricao
        }
    })
}
export const preencherSituacaoProblema = (situacao_problema) => async (dispatch) => {
    dispatch({
        type: "PREENCHER_SITUACAO_PROBLEMA",
        payload: {
            situacao_problema: situacao_problema
        }
    })
}

export const preencherReais = (reais) => async (dispatch) => {
    dispatch({
        type: "PREENCHER_REAIS",
        payload: {
            reais: reais
        }
    })
}
export const preencherFiccionais = (ficcionais) => async (dispatch) => {
    dispatch({
        type: "PREENCHER_FICCIONAIS",
        payload: {
            ficcionais: ficcionais
        }
    })
}
export const preencherMentores = (mentores) => async (dispatch) => {
    dispatch({
        type: "PREENCHER_MENTORES",
        payload: {
            funcao_mentores: mentores
        }
    })
}
export const preencherMentorandos = (mentorandos) => async (dispatch) => {
    dispatch({
        type: "PREENCHER_MENTORANDOS",
        payload: {
            funcao_mentorandos: mentorandos
        }
    })
}
export const preencherResultados = (resultados) => async (dispatch) => {
    dispatch({
        type: "PREENCHER_RESULTADOS",
        payload: {
            resultados_esperados: resultados
        }
    })
}
export const criarNovaSessao = (dados) => async (dispatch) => {

    const novaSessao = await criarSessao(dados);
    /* METER DISPATCH FEEDBACK DA BD */
    dispatch({
        type: "SHOW_FEEDBACK",
        payload: {
            message: novaSessao.data.success,
            type: 'valid',
        }
    })
    dispatch({
        type: "CLEAR_SESSAO",
    })
}
export const loadInfo = () => async (dispatch) => {
    const grausEnsino = await listaGrausEnsino();
    const gruposDisciplinares = await listaGruposDisciplinares();
    dispatch({
        type: "FETCH_INFO",
        payload: { grausEnsino: grausEnsino.data.success, disciplinas: gruposDisciplinares.data.success }
    })
}

