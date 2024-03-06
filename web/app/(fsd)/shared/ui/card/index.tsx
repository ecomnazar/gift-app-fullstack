import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { Button } from '../button';

interface CardCompositionType {
    Product: React.FC<Props>;
}

interface Props extends React.HTMLAttributes<HTMLAnchorElement> {
    id: string
    image: string
    title: string;
    price: string;
}


export const Card: CardCompositionType & React.FC<Props> = ({ id, image, title, price, ...props }) => {
    return (
        <Link href={`/products/${id}`} {...props} className="cart border border-grey bg-light rounded-2xl overflow-hidden">
            <div className="h-[175px] md:h-[200px] xl:h-[220px] relative">
                <Image src={`http://localhost:3002/${image}`} alt="Product" fill />
            </div>
            <div className="p-2 text-grey">
                <p className="font-medium text-[12px] lg:text-[14px]">{title}</p>
                <p className="text-[14px] md:text-[15px] font-semibold mt-1">Price: {price}</p>
            </div>
            <div className="px-2 pb-2">
                <Button>Add to cart</Button>
            </div>
        </Link>
    )
}

Card.Product = Card