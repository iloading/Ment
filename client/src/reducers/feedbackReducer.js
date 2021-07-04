const initState = {
    message: null,
    status: false
}

const feedbackReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_FEEDBACK':
            return { ...state, message: action.payload.message, status: true }
        case 'HIDE_FEEDBACK':
            return { ...state, message: null, status: false }


        default:
            return { ...state }
    }
}
export default feedbackReducer