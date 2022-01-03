import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';

import { Api } from '../providers';

interface AuthContextData {
    signed: boolean;
    Sign(user: object): Promise<void>;
    Logout(): void;
    token: string;
    user: object | null;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    const [token, setToken] = useState('');
    const [user, setUser] = useState<object | null>(null);

    useEffect(() => {
        function loadStoragedData() {
            const storagedUser = sessionStorage.getItem('@App:user');
            const storagedToken = sessionStorage.getItem('@App:token');

            if (storagedToken && storagedUser) {
                setUser(JSON.parse(storagedUser));
                Api.defaults.headers.common['Authorization'] = `Bearer ${storagedToken}`;
            }
        }
        loadStoragedData();
    }, []);

    async function Sign(user: object) {

        const response = await Api.post('/Auth/entrar', user);
        console.log(response);
        if (response.status === 200) {
            setUser(user);
            console.log(user);
            setToken(response.data);
            Api.defaults.headers.common['Authorization'] = `Bearer ${response.data}`

            localStorage.setItem('@App:user', JSON.stringify(user));

            localStorage.setItem('@App:token', response.data);

        }
    };

    function Logout() {
        setUser(null);
        setToken('');

        sessionStorage.removeItem('@App:user');
        sessionStorage.removeItem('App:token');
    }

    return (
        <AuthContext.Provider value={{ signed: Boolean(user), Sign, Logout, token, user }}>
            {children}
        </AuthContext.Provider>
    );

};

export function useAuth() {
    const context = useContext(AuthContext);

    return context;
}