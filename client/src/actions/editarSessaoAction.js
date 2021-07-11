import { editarSessao } from '../API'


export const editarSessaoAction = (dados) => async (dispatch) => {

    const novaSessao = await editarSessao(dados);
    if (novaSessao.data.error) {
        dispatch({
            type: "SHOW_FEEDBACK",
            payload: {
                message: novaSessao.data.error,
                type: 'error',
            }
        })
    } else {
        dispatch({
            type: "SHOW_FEEDBACK",
            payload: {
                message: novaSessao.data.success,
                type: 'valid',
            }
        })
    }

    dispatch({
        type: "CLEAR_SESSAO",
    })
}

