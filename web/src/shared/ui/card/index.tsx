import Image from 'next/image'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    image: string
    title: string;
    price: string;
}

interface CardCompositionType {
    Product: React.FC<Props>;
}

export const Card: CardCompositionType & React.FC<Props> = ({ image, title, price, ...props }) => {
    return (
        <div {...props} className="cart border border-grey bg-light rounded-2xl overflow-hidden">
            <div className="h-[175px] md:h-[200px] xl:h-[250px] relative">
                <Image src={image} alt="Product" fill />
            </div>
            <div className="p-2 text-grey">
                <p className="font-medium text-[12px] lg:text-[14px]">{title}</p>
                <p className="text-[14px] md:text-[15px] font-semibold mt-1">Price: {price}</p>
            </div>
            <div className="px-2 pb-2">
                <button className="bg-primary text-white text-[13px] sm:text-[14.5px] px-6 h-9 sm:h-11 rounded-xl w-full border border-primary hover:bg-[#EEF1F6] hover:text-primary transition-all duration-500">Add to cart</button>
            </div>
        </div>
    )
}

Card.Product = Card