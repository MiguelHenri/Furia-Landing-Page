import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        setToken(storedToken);
        setLoading(false);
    }, []);

    const clearAuth = () => {
        localStorage.removeItem('token');
        setToken('');
    };

    const saveLogin = (token) => {
        setToken(token);
        localStorage.setItem('token', token);
    };

    if (loading) return null; // Waiting for data

    return (
        <AuthContext.Provider value={{ clearAuth, saveLogin, token, setToken }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;