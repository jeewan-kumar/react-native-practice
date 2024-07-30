// AuthContext.js

import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(null);
    const [token, setToken] = useState(null);

    const login = (id, authToken) => {
        setUserId(id);
        setToken(authToken);
    };

    const logout = () => {
        setUserId(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                userId,
                token,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
