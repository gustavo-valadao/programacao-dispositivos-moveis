import { createContext, useState } from 'react';
import * as AuthService from '../services/AuthService'


const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [ usuario, setUsuario ] = useState({login: null, logado: false})

    const [ erro, setErro ] = useState("")

    const login = async ({email, senha}) => {
        
        try {
            await AuthService.signIn({email: email, password: senha, returnSecureToken: true});
            setUsuario({login: email, logado: true})
            setErro("")
        } catch (error) {
            setErro(`Deu Ruim: ${error.message}`)
        }
    }

    const logout = () => {
        setUsuario({login:null, logado: false})
    }

    return (
        <AuthContext.Provider value={{usuario, erro, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider};