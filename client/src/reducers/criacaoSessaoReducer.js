const initState = {
    equipaEscolhida: { id: null },
    minhasEquipas: { equipas: null, status: 'idle' },
}

const criarSessaoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_MINHAS_EQUIPAS':
            return { ...state, minhasEquipas: { ...state.minhasEquipas, equipas: action.payload.minhasEquipas, status: 'completed' } }
        case 'LOADING_MINHAS_EQUIPAS':
            return { ...state, minhasEquipas: { ...state.minhasEquipas, status: 'loading' } }
        case 'ESCOLHER_EQUIPA':
            return { ...state, equipaEscolhida: { ...state.equipaEscolhida, id: action.payload.id } }

        default:
            return { ...state }
    }
}
export default criarSessaoReducer