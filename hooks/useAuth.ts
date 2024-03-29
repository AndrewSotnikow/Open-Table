import axios from 'axios'
import { AuthenticationContext } from '../app/context/AuthContext'
import { useContext } from 'react'

export const useAuth = () => {
    const {data, error, loading, setAuthState} = useContext(AuthenticationContext)


    const signIn = async ({
        email,
        password,
    }: {
        email: string
        password: string
    }) => {
        setAuthState({data: null, error: null, loading: true})
        try {
            const response = await axios.post('http://localhost:3000/api/auth/signin', {
                email,
                password,
            })

            setAuthState({data: response.data, error: null, loading: false})
        } catch (error: any) {
            setAuthState({data: null, error: error.response.data.errorMessage, loading: true})

        }
    }
    const signOut = async () => {}

    return {
        signIn,
        signOut,
    }
}
