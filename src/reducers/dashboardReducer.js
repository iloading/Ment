const initState = {
    minhasEquipas: [],
    status: 'idle'
}

const dashboardReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_DASHBOARD':
            return { ...state, minhasEquipas: action.payload.minhasEquipas, status: 'completed' }
        case 'LOADING_DASHBOARD':
            return { ...state, status: 'loading' }


        default:
            return { ...state }
    }
}
export default dashboardReducer