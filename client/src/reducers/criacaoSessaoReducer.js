const initState = {
    minhasEquipas: { equipas: null, status: 'idle' },
}

const criarSessaoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MINHAS_EQUIPAS':
            return { ...state, minhasEquipas: { ...state.minhasEquipas, equipas: action.payload.minhasEquipas, status: 'completed' } }
        case 'LOADING_MINHAS_EQUIPAS':
            return { ...state, minhasEquipas: { ...state.minhasEquipas, status: 'loading' } }


        default:
            return { ...state }
    }
}
export default criarSessaoReducer