import { Container } from "@/src/shared/ui/container";
import { ProductList } from "@/src/widgets/product-list";
import Image from "next/image";
import Link from "next/link";
import { BsCake2 } from "react-icons/bs";
import { CgShoppingBag } from "react-icons/cg";
import { BiShoppingBag } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Navbar } from "@/src/shared/ui/navbar";
import { Footer } from "@/src/widgets/footer";
import { Header } from "@/src/widgets/header";
import { fetchProducts } from "@/src/entities/product/productApi";

export const HomePage = async () => {
    const { data, count } = await fetchProducts()
    return (
        <>
            <Header />
            <ProductList content={data} />
            <Container>
                <h2 className="text-dark text-center text-[24px] sm:text-[36px] max-w-[450px] mx-auto">We Don’t Just Send Gifts. We Deliver Happiness.</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mt-8 gap-3 md:gap-6">
                    {Array.from({ length: 4 }).map((item, idx) => {
                        return (
                            <div key={idx} className="bg-white rounded-2xl p-6">
                                <BsCake2 color="" className="text-primary text-[60px]" />
                                <p className="text-primary text-[20px] font-medium mt-3 mb-4">Birthday Gift’s</p>
                                <p className="text-grey text-[14px] sm:text-[15px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
            <Container>
                <h2 className="text-dark text-center text-[24px] sm:text-[36px] max-w-[450px] mx-auto">How Does It Work?</h2>
                <p className="text-center font-medium text-grey text-[14px] sm:text-[16px] max-w-[700px] mx-auto mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. industry’s standard dummy text ever since the 1500s</p>
                <div className="flex items-center justify-evenly mt-8 flex-wrap gap-y-4">
                    {Array.from({ length: 3 }).map((item, idx) => {
                        return (
                            <div key={idx} className="basis-[100%] lg:basis-[25%] cursor-pointer bg-white transition-all duration-500 rounded-2xl p-6">
                                {/* <BsCake2 color="" className="text-primary text-[60px]" /> */}
                                <p className="text-primary text-[20px] font-medium mt-3 mb-4">Choose From Our Collection Of Popular Gifts For Every Occasion</p>
                                <p className="text-grey text-[14px] sm:text-[15px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text.</p>
                            </div>
                        )
                    })}
                </div>
            </Container>
            <Container>
                <div className="bg-white rounded-2xl p-6 sm:p-12 max-w-[1000px] mx-auto space-y-4">
                    <h2 className="text-[24px] sm:text-[36px] font-semibold">Want More Special Gift Ideas?</h2>
                    <p className="text-[14px] sm:text-[15px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s,</p>
                    <button className="w-fit bg-gradient-to-r from-[#F83D5C] to-[#e76b7f] text-white px-6 rounded-xl h-12 hover:scale-[1.01] transition-all duration-500">SUBSCRIBE TO US</button>
                </div>
            </Container>
            <Footer />
        </>
    )
}
