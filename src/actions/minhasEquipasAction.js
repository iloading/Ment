import { minhasEquipasInfo } from '../API'

export const loadminhasEquipas = () => async (dispatch) => {
    dispatch({
        type: "LOADING_MINHASEQUIPAS"
    })

    const todasMinhasEquipasDB = await minhasEquipasInfo();

    dispatch({
        type: "FETCH_MINHASEQUIPAS",
        payload: {
            minhasEquipas: todasMinhasEquipasDB.data.success
        }
    })
}

