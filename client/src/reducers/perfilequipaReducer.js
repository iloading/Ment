const initState = {
    sessoesEquipa: [],
    status: 'idle'
}

const perfilequipaReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_PERFILEQUIPA':
            return { ...state, sessoesEquipa: action.payload.sessoesEquipa, status: 'completed' }
        case 'LOADING_PERFILEQUIPA':
            return { ...state, status: 'loading' }


        default:
            return { ...state }
    }
}
export default perfilequipaReducer