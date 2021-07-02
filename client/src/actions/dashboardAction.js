import { dashboardInfo } from '../API'

export const loadDashboard = () => async (dispatch) => {
    dispatch({
        type: "LOADING_DASHBOARD"
    })

    const minhasEquipasDB = await dashboardInfo();

    dispatch({
        type: "FETCH_DASHBOARD",
        payload: {
            minhasEquipas: minhasEquipasDB.data.success
        }
    })
}

