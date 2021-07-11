import { perfilequipaInfo, equipaInfo } from '../API'

export const loadPerfilEquipa = (id) => async (dispatch) => {
    dispatch({
        type: "LOADING_PERFIL_EQUIPA"
    })

    const sessoesEquipaDB = await perfilequipaInfo({ id: id });
    const equipa = await equipaInfo({ id: id });

    dispatch({
        type: "FETCH_SESSOES_EQUIPA",
        payload: {
            sessoesEquipa: sessoesEquipaDB.data.success
        }
    })
    dispatch({
        type: "FETCH_PERFIL_EQUIPA",
        payload: {
            equipa: equipa.data.success[0]
        }
    })
}

