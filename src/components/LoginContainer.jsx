import React from 'react'

export const LoginContainer = ({ children, title = 'Firebase Authentication'}) => {
    return (
        <div className="bg-slate-500 p-3 rounded">
            <h1 className="py-3 text-xl text-white font-semibold">{title}</h1>
            {children}
        </div>
    )
}
