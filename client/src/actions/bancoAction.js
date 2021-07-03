import { bancoInfo } from '../API'

export const loadBanco = () => async (dispatch) => {
    dispatch({
        type: "LOADING_BANCO"
    })

    const todasSessoesDB = await bancoInfo();

    dispatch({
        type: "FETCH_BANCO",
        payload: {
            todasSessoes: todasSessoesDB.data.success
        }
    })
}

