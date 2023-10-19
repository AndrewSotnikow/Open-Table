"use client"

import { ReactNode, useState, createContext, Dispatch, SetStateAction } from 'react'

const initialState = {
    loading: false,
    data: null,
    error: null,
}

interface User {
    id: number
    firstName: string
    lastName: string
    email: string
}

interface State {
    loading: boolean,
    data: User | null,
    error: string | null
}

interface AuthState extends State {
    setAuthState:  Dispatch<SetStateAction<{loading: boolean, data: null, error: null}>>
}

export const AuthenticationContext = createContext<AuthState>({
    ...initialState,
    setAuthState: () => null
})

export default function AuthContext({children}: {children: ReactNode}){
    const[authState, setAuthState] = useState(initialState)

    return (<AuthenticationContext.Provider value={{
        ...initialState,
        setAuthState
    }}>{children}
    </AuthenticationContext.Provider>)
}