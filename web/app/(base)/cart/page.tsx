'use client'
import React from 'react'
import { CartPage } from '@/app/(fsd)/pages/cart-page'


const Page = () => {
    const [mounted, setMounted] = React.useState(false)
    React.useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) return null
    return (
        <>
            <CartPage />
        </>
    )
}

export default Page