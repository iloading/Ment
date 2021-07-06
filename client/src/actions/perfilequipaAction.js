import { perfilequipaInfo } from '../API'

export const loadPerfilEquipa = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_PERFILEQUIPA"
    })

    const sessoesEquipaDB = await perfilequipaInfo({ id: id });

    dispatch({
        type: "FETCH_PERFILEQUIPA",
        payload: {
            sessoesEquipa: sessoesEquipaDB.data.success
        }
    })
}

