'use client'
import React from 'react'
import { IProduct } from '@/app/(fsd)/entities/product/interfaces'
import { Button } from '@/app/(fsd)/shared/ui/button'
import { useAddToCart } from '@/app/(fsd)/shared/lib/hooks/useAddToCart'
import toast from 'react-hot-toast'

interface Props {
    data: IProduct
}

export const AddToCartButton: React.FC<Props> = ({ data }) => {
    const addToCart = useAddToCart({ data })
    const handleClick = () => {
        addToCart()
        toast.success('Item added successfully')
    }
    return (
        <Button onClick={handleClick}>Add to cart</Button>
    )
}
