const initState = {
    minhasEquipas: [],
    status: 'idle'
}

const minhasEquipasReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MINHASEQUIPAS':
            return { ...state, minhasEquipas: action.payload.minhasEquipas, status: 'completed' }
        case 'LOADING_MINHASEQUIPAS':
            return { ...state, status: 'loading' }


        default:
            return { ...state }
    }
}
export default minhasEquipasReducer