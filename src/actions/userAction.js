import { getLoggedUser } from '../API'

export const loadUser = () => async (dispatch) => {
    dispatch({
        type: "LOADING_USER"
    })

    const userLogado = await getLoggedUser();

    dispatch({
        type: "FETCH_USER",
        payload: {
            user: userLogado.data.success[0]
        }
    })
}

