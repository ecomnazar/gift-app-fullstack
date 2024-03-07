import React from 'react'
import { Container } from '@/app/(fsd)/shared/ui/container'
import { useGetCart } from '@/app/(fsd)/shared/lib/hooks/useGetCart'
import { IProduct } from '@/app/(fsd)/entities/product/interfaces'

export const CartPage = () => {
    const cart = useGetCart()

    return (
        <>
            <Container>
                <h2 className='text-dark font-semibold text-3xl'>Shopping bag</h2>
                {cart?.map((item) => {
                    return <div key={item.id}>
                        <h1>{item.name}</h1>
                    </div>
                })}
            </Container>
        </>
    )
}
