'use client'
import React from 'react'
import toast from 'react-hot-toast'
import { IProduct } from '@/app/(fsd)/entities/product/interfaces'
import { Button } from '@/app/(fsd)/shared/ui/button'
import { useAddToCart } from '@/app/(fsd)/shared/lib/hooks/useAddToCart'
import { useGetCart } from '@/app/(fsd)/shared/lib/hooks/useGetCart'
import { useRemoveFromCart } from '@/app/(fsd)/shared/lib/hooks/useRemoveFromCart'
import { localStorageSetCart } from '@/app/(fsd)/shared/lib/localstorage/cart'

interface Props {
    data: IProduct
}

export const CartActionButton: React.FC<Props> = ({ data }) => {
    const [mounted, setMounted] = React.useState(false)
    const cartLS = useGetCart()
    const [cart, setCart] = React.useState(cartLS)
    const addToCart = useAddToCart(data)
    const removeFromCart = useRemoveFromCart(data)
    const isInCart = cart?.some((item) => item.id === data.id)

    const handleAddClick = () => {
        addToCart()
        cart ? setCart([...cart, data]) : setCart([data])
        toast.success('Item added successfully')
    }

    const handleRemoveClick = () => {
        const deletedData = cart?.filter((item) => item.id !== data.id)
        localStorageSetCart(JSON.stringify(deletedData))
        setCart(deletedData!)
        toast.success('Item deleted successfully')
    }

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return
    return (
        <>
            {isInCart ? <Button onClick={handleRemoveClick}>Remove from cart</Button> :
                <Button onClick={handleAddClick}>Add to cart</Button>
            }
        </>
    )
}
