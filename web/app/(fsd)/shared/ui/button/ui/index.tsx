import clsx from 'clsx'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    className?: string
}

export const Button: React.FC<Props> = ({ children, className, ...props }) => {
    return (
        <button {...props} className={clsx("bg-primary text-white text-[13px] sm:text-[14.5px] px-6 h-9 sm:h-11 rounded-xl w-full border border-primary hover:bg-[#EEF1F6] hover:text-primary transition-all duration-500", className)}>
            {children}
        </button>
    )
}
