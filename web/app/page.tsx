import Image from "next/image";

export default function Home() {
  return (
    <section className="container mx-auto px-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-dark text-2xl sm:text-3xl">BestSeller Gifts</h2>
          <p className="text-grey text-sm sm:text-md">Explore Our Timeless Top Sellers</p>
        </div>
        <h4 className="cursor-pointer hover:underline text-primary font-medium">View All</h4>
      </div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3  md:gap-6">
        {Array.from({ length: 12 }).map((item, i) => {
          return (
            <div key={i} className="cart border border-grey rounded-2xl overflow-hidden">
              <div className="h-[175px] md:h-[200px] xl:h-[250px] relative">
                <Image src={'https://imgcdn.floweraura.com/heart-printed-black-coffee-mug-9788917gf-B_0.jpg?tr=w-304,dpr-1.75,q-70'} alt="Product" fill />
              </div>
              <div className="p-2 text-grey">
                <p className="font-medium text-[12px] lg:text-[14px]">Personalised Snuggly Cushion</p>
                <p className="text-[14px] md:text-[15px] font-semibold mt-1">Price: 445.00 TMT</p>
              </div>
              <div className="px-2 pb-2">
                <button className="bg-primary text-white text-[13px] sm:text-[14.5px] px-6 h-9 sm:h-10 rounded-xl w-full border border-primary hover:bg-white hover:text-primary transition-all duration-500">Add to cart</button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  );
}
