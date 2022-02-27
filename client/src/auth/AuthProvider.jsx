import { createContext, useState } from "react";
import roles from "../helpers/role";
import { useNavigate as useHistory } from 'react-router-dom';

export const AuthContext = createContext()

export default function AuthProvider({ children }) {

    const history = useHistory()
    const [user, setUser] = useState(null)

    const login = (userCredentials, fromLocation) => {
        setUser({ id: 1, name: 'John Doe', email: 'MiEmail@email.com', rol: roles.regular })
        if (fromLocation) {
            history(fromLocation.pathname)
        }
    }
    const logout = () => setUser(null)

    const isLogged = () => !!user;
    const hasRole = (role) => user?.role === role

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout
    }
    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}