import { useState, useEffect, createContext } from 'react'
import { checkLoggedIn } from '../API'

const AuthContext = createContext();


function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined)
    async function getLoggedIn() {
        const loggedInResponse = await checkLoggedIn()
        setLoggedIn(loggedInResponse.data)
    }

    useEffect(() => {
        getLoggedIn();
    }, [])
    return <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>{props.children}</AuthContext.Provider>
}

export default AuthContext
export { AuthContextProvider }
