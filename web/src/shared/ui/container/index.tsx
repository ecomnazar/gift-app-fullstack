import clsx from 'clsx';
import React from 'react'

interface Props {
    children: React.ReactNode
    className?: string;
}

interface ContainerCompositionType {
    Footer: React.FC<Props>;
};

export const Container: ContainerCompositionType & React.FC<Props> = ({ children, className }) => {
    return (
        <section className={clsx('container mx-auto px-4 py-6 sm:py-12', className)}>{children}</section>
    )
}

const Footer: React.FC<Props> = ({ children, className }) => {
    return (
        <footer className={clsx('container mx-auto px-4 py-6 sm:py-12', className)}>{children}</footer>
    )
}

Container.Footer = Footer