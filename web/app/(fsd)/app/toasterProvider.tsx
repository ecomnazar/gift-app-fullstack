import React from 'react'
import { Toaster } from 'react-hot-toast'

interface Props {
    children: React.ReactNode
}

export const ToasterProvider: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Toaster />
            {children}
        </>
    )
}
