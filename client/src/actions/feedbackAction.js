
export const showFeedback = (message) => async (dispatch) => {
    dispatch({
        type: "SHOW_FEEDBACK",
        payload: {
            message: message
        }
    })
}
export const hideFeedback = () => async (dispatch) => {
    dispatch({
        type: "HIDE_FEEDBACK",
    })
}

