'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
type UserId = 'u1' | 'u2';
interface UserContextType {
    userId: UserId;
    setUserId: (id: UserId) => void;
}
const UserContext = createContext<UserContextType | null>(null);
export function UserProvider({ children }: { children: ReactNode }) {
    const [userId, setUserId] = useState<UserId>('u1');

    return (
        <UserContext.Provider value={{ userId, setUserId }}>
            {children}
        </UserContext.Provider>
    );
}
export function useUser(): UserContextType {
    const ctx = useContext(UserContext);
    if (!ctx) throw new Error('useUser must be used inside <UserProvider>');
    return ctx;
}