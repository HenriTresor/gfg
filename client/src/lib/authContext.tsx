import React, { createContext, useContext, useEffect, useState } from 'react';
import { authAPI } from './api';

interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    role: 'FARM_SUPERVISOR' | 'SYSTEM_ADMIN';
    isActive: boolean;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    loading: boolean;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is already logged in
        const token = localStorage.getItem('accessToken');
        if (token) {
            try {
                const userData = localStorage.getItem('user');
                if (userData) {
                    const parsedUser = JSON.parse(userData);
                    setUser(parsedUser);
                }
            } catch (error) {
                console.error('Error parsing user data from localStorage:', error);
                // Clear invalid data
                localStorage.removeItem('user');
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            }
        }
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const response = await authAPI.login({ email, password });
            const { user: userData, accessToken, refreshToken } = response.data.data;

            localStorage.setItem('accessToken', accessToken);
            localStorage.setItem('refreshToken', refreshToken);
            localStorage.setItem('user', JSON.stringify(userData));

            console.log('Login successful, setting user:', userData);
            setUser(userData);
        } catch (error: any) {
            throw new Error(error.response?.data?.error || 'Login failed');
        }
    };

    const logout = async () => {
        try {
            await authAPI.logout();
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
            setUser(null);
        }
    };

    const value: AuthContextType = {
        user,
        login,
        logout,
        loading,
        isAuthenticated: !!user,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
