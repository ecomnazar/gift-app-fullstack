'use client'
import React from 'react'
import { IProduct } from '@/app/(fsd)/entities/product/interfaces'
import { Button } from '@/app/(fsd)/shared/ui/button'
import { useAddToCart } from '@/app/(fsd)/shared/lib/hooks/useAddToCart'

interface Props {
    data: IProduct
}

export const AddToCartButton: React.FC<Props> = ({ data }) => {
    const addToCart = useAddToCart({ data })
    return (
        <Button onClick={addToCart}>Add to cart</Button>
    )
}
