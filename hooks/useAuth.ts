import axios from 'axios'

export const useAuth = () => {
    const signIn = async ({
        email,
        password,
    }: {
        email: string
        password: string
    }) => {
        try {
            const response = await axios.post('http://localhost:3000/api/auth/signin', {
                email,
                password,
            })
        } catch (error) {
            console.log(error)
        }
    }
    const signOut = async () => {}

    return {
        signIn,
        signOut,
    }
}
