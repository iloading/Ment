import { perfilequipaInfo } from '../API'

export const loadPerfilEquipa = () => async (dispatch) => {
    dispatch({
        type: "LOADING_PERFILEQUIPA"
    })

    const sessoesEquipaDB = await perfilequipaInfo();

    dispatch({
        type: "FETCH_PERFILEQUIPA",
        payload: {
            sessoesEquipa: sessoesEquipaDB.data.success
        }
    })
}

