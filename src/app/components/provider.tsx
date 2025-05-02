"use client";

import { SessionProvider } from 'next-auth/react'


const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <SessionProvider>{children}</SessionProvider>
        </div>
    )
}

export default Provider
