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
export const criarNovaSessao = (dados) => async (dispatch) => {

    const minhasEquipasDB = await criarSessao(dados);

    dispatch({
        type: "CRIAR_NOVA_EQUIPA",
        payload: {
            dados: dados
        }
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

