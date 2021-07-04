const initState = {
    message: null,
    status: false,
    type: null
    /* type: valid || error || alert */
}

const feedbackReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SHOW_FEEDBACK':
            return { ...state, message: action.payload.message, status: true, type: action.payload.type }
        case 'HIDE_FEEDBACK':
            return { ...state, message: null, status: false, type: null }


        default:
            return { ...state }
    }
}
export default feedbackReducer