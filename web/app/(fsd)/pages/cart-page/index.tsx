
import React from 'react'
import Image from 'next/image'
import { Container } from '@/app/(fsd)/shared/ui/container'
import { useGetCart } from '@/app/(fsd)/shared/lib/hooks/useGetCart'
import { BASE_URL } from '@/app/(fsd)/shared/api/instance'
import { MdOutlineClose } from "react-icons/md";
import { IProduct } from '@/app/(fsd)/entities/product/interfaces'
import { calculateTotalPrice } from '@/app/(fsd)/shared/lib/calculateTotalPrice'
import { currency } from '@/app/(fsd)/shared/lib/constants'
import { Button } from '@/app/(fsd)/shared/ui/button'
import { localStorageSetCart } from '../../shared/lib/localstorage/cart'


export const CartPage = () => {
    const cartLS = useGetCart()
    const [cart, setCart] = React.useState(cartLS)
    // const removeFromCart = useRemoveFromCart(data)

    const onRemoveItem = (product: IProduct) => {
        const deletedData = cart?.filter((item) => item.id !== product.id)
        setCart(deletedData!)
        localStorageSetCart(JSON.stringify(deletedData))
    }

    const submitPayment = () => {
    }
    // 
    return (
        <>
            {cart?.length === 0 || !cart ? '' :
                <Container>
                    <h2 className='text-dark font-semibold text-3xl text-center mb-12'>Shopping bag</h2>
                    <div className='bg-white max-w-[600px] mx-auto p-4 rounded-md'>
                        {cart?.map((item) => {
                            return <div className='flex items-center justify-between border-b-2 border-light py-4' key={item.id}>
                                <div className='flex items-center gap-x-4'>
                                    <div className='relative w-20 h-20 flex'>
                                        <Image src={`${BASE_URL}/${item.imageUrl}`} alt={item.name} fill />
                                    </div>
                                    <div className=''>
                                        <h2>{item.name}</h2>
                                        {/* <h2>{item.}</h2> */}
                                    </div>
                                </div>
                                <div className='flex flex-col items-end'>
                                    <h3>{item.price} {currency}</h3>
                                    <button onClick={() => onRemoveItem(item)}>
                                        <MdOutlineClose />
                                    </button>
                                </div>
                            </div>
                        })}
                        <div className='flex items-center justify-between my-4'>
                            <h2>Total</h2>
                            <h4>{calculateTotalPrice(cart)} {currency}</h4>
                        </div>
                        <Button>Continue to paymant</Button>
                    </div>
                </Container>
            }

        </>
    )
}
