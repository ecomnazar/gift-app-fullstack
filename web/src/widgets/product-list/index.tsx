import React from 'react'
import { Card } from '@/src/shared/ui/card'
import { Container } from '@/src/shared/ui/container'

export const ProductList = () => {
    return (
        <Container>
            <div className="flex items-center justify-between">
                <div className='text-center mx-auto'>
                    <h2 className="font-semibold text-dark text-2xl sm:text-4xl">BestSeller Gifts</h2>
                    <p className="text-grey text-sm sm:text-lg">Explore Our Timeless Top Sellers</p>
                </div>
                {/* <h4 className="cursor-pointer hover:underline text-primary font-medium">View All</h4> */}
            </div>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-6">
                {Array.from({ length: 15 }).map((item, i) => {
                    return (
                        <Card.Product key={i} image='https://imgcdn.floweraura.com/heart-printed-black-coffee-mug-9788917gf-B_0.jpg?tr=w-304,dpr-1.75,q-70' title='Personalised Snuggly Cushion' price='445.00 TMT' />
                    )
                })}
            </div>
        </Container>
    )
}
