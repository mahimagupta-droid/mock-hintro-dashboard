'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
export type UserId = 'u1' | 'u2';

interface UserContextType {
    userId: UserId;
    setUserId: (id: UserId) => void;
}

const UserContext = createContext<UserContextType | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
    const [userId, setUserIdState] = useState<UserId>('u1');
    useEffect(() => {
        const storedUser = localStorage.getItem('hintro-user');
        if (storedUser === 'u1' || storedUser === 'u2') {
            setUserIdState(storedUser);
        }
    }, []);

    const setUserId = (id: UserId) => {
        localStorage.setItem('hintro-user', id);
        setUserIdState(id);
    };

    return (
        <UserContext.Provider
            value={{
                userId,
                setUserId,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);

    if (!context) {
        throw new Error(
            'useUser must be used inside UserProvider'
        );
    }
    return context;
}