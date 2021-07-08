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
export const criarNovaSessao = (dados) => async (dispatch) => {

    await criarSessao(dados);
    /* METER DISPATCH FEEDBACK DA BD */
    dispatch({
        type: "CRIAR_NOVA_SESSAO",
        payload: {
            dados: dados
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

