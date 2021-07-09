
import { sessaoInfo } from '../API'

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

