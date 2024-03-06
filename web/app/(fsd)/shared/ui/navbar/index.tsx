import Link from 'next/link'
import React from 'react'
import { HiOutlineShoppingBag } from 'react-icons/hi2'
import { Container } from '../container'

export const Navbar = () => {
    return (
        <nav className="header-bg py-4">
            <Container className='flex items-center justify-between !py-0'>
                <h1 className="text-[35px] font-semibold text-white">SevenPrize</h1>
                <ul className="flex items-center text-[17px] text-white gap-x-8">
                    <li><Link href={''}>Home</Link></li>
                    <li><Link href={''}>Categories</Link></li>
                    <li><Link href={''}>About us</Link></li>
                    <li><Link href={''}><HiOutlineShoppingBag size={26} /></Link></li>
                </ul>
            </Container>
        </nav>
    )
}
