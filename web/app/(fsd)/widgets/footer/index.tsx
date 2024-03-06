import { Container } from '@/app/(fsd)/shared/ui/container'
import React from 'react'

export const Footer = () => {
    return (
        <Container.Footer className="!py-6">
            <div className="flex flex-wrap items-center justify-between">
                <h1 className="font-semibold text-primary text-[24px]">SevenPrize</h1>
                <p>© Copyright 2020. Powered by WPDeveloper</p>
            </div>
        </Container.Footer>
    )
}
