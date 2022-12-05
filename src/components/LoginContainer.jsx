import React from 'react'

export const LoginContainer = ({ children }) => {
    return (
        <div className="bg-slate-500 p-3 rounded">
            <h1 className="py-3 text-xl text-white font-semibold">Firebase Authentication</h1>
            {children}
        </div>
    )
}
