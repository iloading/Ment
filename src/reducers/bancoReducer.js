const initState = {
    todasSessoes: [],
    status: 'idle'
}

const bancoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_BANCO':
            return { ...state, todasSessoes: action.payload.todasSessoes, status: 'completed' }
        case 'LOADING_BANCO':
            return { ...state, status: 'loading' }


        default:
            return { ...state }
    }
}
export default bancoReducer