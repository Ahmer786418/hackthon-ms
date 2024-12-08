import React from 'react';
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser  } from "react-icons/fa6";
import Link from 'next/link';
import Footer from '../components/footer';
import { Poppins } from "next/font/google";

const popins = Poppins({
    subsets: ["latin"],
    weight: "100",
});

const Shop = () => {
    return (
        <div>
            <div className='bg-white'>
                <nav className="hidden md:flex space-x-16 items-center justify-center py-8">
                    <Link href="/" className={`${popins.className} text-[16px] leading-[24px]`}>
                        Home
                    </Link>
                    <Link href="/shop" className={`${popins.className} text-[16px] leading-[24px]`}>
                        Shop
                    </Link>
                    <a href="#" className={`${popins.className} text-[16px] leading-[24px]`}>
                        About
                    </a>
                    <a href="#" className={`${popins.className} text-[16px] leading-[24px]`}>
                        Contact
                    </a>
                    <div className="flex items-end pl-32 text-xl space-x-6 cursor-pointer">
                        <FaRegUser  />
                        <IoIosSearch />
                        <CiHeart />
                        <AiOutlineShoppingCart />
                    </div>
                </nav>
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default Shop;