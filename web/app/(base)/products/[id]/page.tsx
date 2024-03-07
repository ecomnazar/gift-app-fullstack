import React from 'react'
import Image from 'next/image'
import { fetchProductById } from '@/app/(fsd)/entities/product/productApi'
import { AddToCartButton } from '@/app/(fsd)/features/add-to-cart-button'
import { Container } from '@/app/(fsd)/shared/ui/container'
import { Navbar } from '@/app/(fsd)/shared/ui/navbar'

const Page = async ({ params }: { params: any }) => {
    const { id } = params
    const data = await fetchProductById(id)

    return (
        <>
            <Navbar />
            <Container className='flex gap-x-12'>
                <div className='relative w-[400px] h-[400px]'>
                    <Image className='rounded-lg object-cover object-center' src={`http://localhost:3002/${data.imageUrl}`} fill alt={data?.name} />
                </div>
                <div className='max-w-[600px] space-y-6'>
                    <h1 className='text-dark font-semibold text-3xl'>{data?.name}</h1>
                    <h2 className='font-normal text-[#7a7a7a]'>{data?.description} Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis illo soluta nostrum modi vitae saepe! Soluta mollitia in explicabo, doloremque et provident veritatis, corporis architecto dolores odio laudantium nemo dolor iste, maiores sed! Asperiores ipsam minima eligendi minus assumenda magnam.</h2>
                    <h3 className='font-semibold text-3xl text-dark'>{data?.price} TMT</h3>
                    <div className='max-w-[300px]'>
                        <AddToCartButton data={data} />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Page