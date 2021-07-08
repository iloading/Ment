const initState = {
    sessoesEquipa: [],
    equipa: null,
    status_sessoes: 'idle',
    status_equipa: 'idle'
}

const perfilequipaReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_SESSOES_EQUIPA':
            return { ...state, sessoesEquipa: action.payload.sessoesEquipa, status_sessoes: 'completed' }
        case 'LOADING_PERFIL_EQUIPA':
            return { ...state, status: 'loading' }
        case 'FETCH_PERFIL_EQUIPA':
            return { ...state, equipa: action.payload.equipa, status_equipa: 'completed' }



        default:
            return { ...state }
    }
}
export default perfilequipaReducer