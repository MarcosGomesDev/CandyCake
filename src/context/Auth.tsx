import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getData, UserProps } from '../utils/storage';

export interface AuthData {
    token: string;
    email: string;
    name: string;
    avatar: string;
}

interface AuthProps {
    authData?: UserProps;
    signOut: () => Promise<void>;
    loading: boolean;
    setAuth: React.Dispatch<React.SetStateAction<UserProps | undefined>>;
};

interface ProviderProps {
    children: React.ReactNode
}

export const AuthContext = createContext<AuthProps>({} as AuthProps)

export const AuthProvider: React.FC<ProviderProps> = ({ children }) => {
    const [authData, setAuth] = useState<UserProps>()
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        loadStorage();
    }, [])

    async function loadStorage() {
        const auth = await getData()

        if (auth) {
            setAuth(auth)
        }
        setLoading(false)
    }

    async function signOut(): Promise<void> {
        setAuth(undefined)
        AsyncStorage.removeItem('@AuthData')
        return;
    }

    return (
        <AuthContext.Provider
            value={{ authData, loading, setAuth, signOut }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)

    return context
}