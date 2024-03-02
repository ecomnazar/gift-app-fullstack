import { Container } from '@/src/shared/ui/container'
import { Navbar } from '@/src/shared/ui/navbar'
import React from 'react'

export const Header = () => {
    return (
        <header>
            <Navbar />
            <div className='header-bg'>
                <Container className="!py-6">
                    <div className="py-16 max-w-[900px] text-center mx-auto">
                        <h2 className="text-center text-white text-[40px] font-medium">From Our Heart to Their Doorstep: Thoughtful Gifts, Delivered Online with Love!</h2>
                        <p className="text-white/70 mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, eius molestiae possimus et laboriosam eaque esse repellat error doloribus exercitationem expedita cumque voluptas tenetur impedit soluta? Dolor id facere ipsam?</p>
                    </div>
                </Container>
            </div>
        </header>
    )
}
