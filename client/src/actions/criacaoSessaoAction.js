import { minhasEquipas } from '../API'

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

