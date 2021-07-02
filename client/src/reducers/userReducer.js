const initState = {
    user: null,
    status: 'idle'
}

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return { ...state, user: action.payload.user, status: 'completed' }
        case 'LOADING_USER':
            return { ...state, status: 'loading' }


        default:
            return { ...state }
    }
}
export default userReducer