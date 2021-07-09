
export const showFeedback = (message, type) => async (dispatch) => {
    dispatch({
        type: "SHOW_FEEDBACK",
        payload: {
            message: message,
            type: type
        }
    })
}
export const hideFeedback = () => async (dispatch) => {
    dispatch({
        type: "HIDE_FEEDBACK",
    })
}

