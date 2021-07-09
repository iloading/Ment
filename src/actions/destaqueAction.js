import { destaqueInfo } from '../API'

export const loadDestaque = () => async (dispatch) => {
    dispatch({
        type: "LOADING_DESTAQUE"
    })

    const sessoesDestaqueDB = await destaqueInfo();

    dispatch({
        type: "FETCH_DESTAQUE",
        payload: {
            sessoesDestaque: sessoesDestaqueDB.data.success
        }
    })
}

