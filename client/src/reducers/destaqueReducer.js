const initState = {
    sessoesDestaque: [],
    status: 'idle'
}

const destaqueReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_DESTAQUE':
            return { ...state, sessoesDestaque: action.payload.sessoesDestaque, status: 'completed' }
        case 'LOADING_DESTAQUE':
            return { ...state, status: 'loading' }


        default:
            return { ...state }
    }
}
export default destaqueReducer