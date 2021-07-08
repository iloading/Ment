import { carregarEscolaOwner, carregarMentores } from '../API'




export const preencherNome = (nome) => async (dispatch) => {

    dispatch({
        type: "PREENCHER_NOME_EQUIPA",
        payload: {
            nome: nome
        }
    })
}
export const preencherAlias = (alias) => async (dispatch) => {

    dispatch({
        type: "PREENCHER_ALIAS_EQUIPA",
        payload: {
            alias: alias
        }
    })
}
export const preencherDescricao = (descricao) => async (dispatch) => {

    dispatch({
        type: "PREENCHER_DESCRICAO_EQUIPA",
        payload: {
            descricao: descricao
        }
    })
}
export const loadEscolaOwner = () => async (dispatch) => {
    const escolaOwner = await carregarEscolaOwner();
    dispatch({
        type: "CARREGAR_ESCOLA_OWNER",
        payload: {
            school: escolaOwner.data.success
        }
    })
}
export const mudarEscola = (school) => async (dispatch) => {

    dispatch({
        type: "MUDAR_ESCOLA_EQUIPA",
        payload: {
            school: school
        }
    })
}
export const loadMentores = (pesquisa) => async (dispatch) => {
    await carregarMentores({ pesquisa: pesquisa });
    dispatch({
        type: "LOAD_MENTORES_ESCOLA",
        payload: {
            pesquisa: pesquisa
        }
    })
}
export const selecionarMentor = (selected) => async (dispatch) => {

    dispatch({
        type: "SELECIONAR_MENTOR",
        payload: {
            mentores_selecionados: selected
        }
    })
}
export const eliminarMentor = (selected) => async (dispatch) => {

    dispatch({
        type: "ELIMINAR_MENTOR",
        payload: {
            mentor_eliminado: selected
        }
    })
}

/* export const criarNovaSessao = (dados) => async (dispatch) => {

    const minhasEquipasDB = await criarSessao(dados);

    dispatch({
        type: "CRIAR_NOVA_EQUIPA",
        payload: {
            dados: dados
        }
    })
} */

/* export const loadInfo = () => async (dispatch) => {
    const grausEnsino = await listaGrausEnsino();
    const gruposDisciplinares = await listaGruposDisciplinares();
    dispatch({
        type: "FETCH_INFO",
        payload: { grausEnsino: grausEnsino.data.success, disciplinas: gruposDisciplinares.data.success }
    })
} */

