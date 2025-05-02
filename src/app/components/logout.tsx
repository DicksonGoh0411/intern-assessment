'use client'

import { signOut } from "next-auth/react"

const logout = () => {
    return (
        <button className="hover:cursor-pointer" onClick={() => signOut()}>Logout</button>
    )
}

export default logout