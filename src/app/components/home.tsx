import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiContactsLine } from "react-icons/ri";
import Image from "next/image";
import { Poppins } from "next/font/google";
import Footer from "./footer";
import { FaRegClock, FaRegUser } from "react-icons/fa6";
import { FaRegCalendar } from "react-icons/fa6";
import Link from "next/link";



const popins = Poppins({
  subsets: ["latin"],
  weight: "100",
});

const Home = () => {
  return (
    <div className="h-screen">
      <div className="bg-myOrange">
        <nav className="hidden md:flex space-x-16 items-center justify-center py-8">
          <Link href="/" className={`${popins.className} text-[16px] leading-[24px]`}>
            Home
          </Link>
  
          
          <Link href="/"
   className={`${popins.className} text-[16px] leading-[24px]`}>Shop
</Link>

          
          
          
          
          
          <Link href="/" className={`${popins.className} text-[16px] leading-[24px]`}>
            About
         </Link>
          

  <Link href="/"   className={`${popins.className} text-[16px] leading-[24px]`}  >
  Contact
  </Link>


          <div className="flex items-end pl-32 text-xl space-x-6 cursor-pointer">
            <FaRegUser />
            <IoIosSearch />
            <CiHeart />
            <AiOutlineShoppingCart />
          </div>
        </nav>

        <div className={`${popins.className} text-[64px] px-40 py-36`}>
          <p className="font-bold flex">
            Rocket single
            <br /> seater{" "}
          </p>
          <div className={`${popins.className} text-[24px]`}>
            <span className="font-bold underline cursor-pointer">Shop Now</span>
            <div className="flex items-center justify-center">
              <div className=" w-[100%] pb-6  mb-8 flex justify-center items-center">
                <Image
                  src={"/assest/Rocket single seater 1.png"}
                  alt={"logo"}
                  width={440}
                  height={200}
                  className="flex items-center justify-between"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-myhashtag">
          <div className="flex">
         
            <div >
              <Image
                src={"/assest/Sidetable.png"}
                alt={"logo2"}
                width={700}
                height={500}
                className="pr-20"
              />
              <p className={`${popins.className} text-[36px] font-semibold pl-32`}>
                <span className="font-bold">Side table</span>
              </p>
              <p className={`${popins.className} underline cursor-pointer text-black pl-32`}>
                <span className="font-bold">View more</span>
              </p>
            </div>

            <div>
              <Image
                src={"/assest/40d3f8a12c09ade37e094a682f61ed9c.png"}
                alt={"logo3"}
                width={1440}
                height={500}
                className="pr-24"
              />
              <p className={`${popins.className} text-[36px] pl-56`}>
                <span className="font-bold"> Side table</span>
              </p>
              <p className={`${popins.className} underline cursor-pointer text-black pl-56`}>
                <span className="font-bold">View more</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Top picks for you */}
      <div className="bg-white">
        <div className={`${popins.className} font-bold text-center pt-8 text-[36px] leading-[56px]`}>
          <p className="font-bold">Top Picks For You</p>
        </div>

        <div className={`${popins.className} text-center`}>
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
        </div>
        {/* this 4 are div are for Images of selling product */}
        <div className="flex pt-7 gap-6">
          <div>
            <Image
              src={"/assest/Trenton modular sofa_3 1.png"}
              alt={"logo3"}
              width={287}
              height={287}
            />
            <p className={`${popins.className} text-[16px] leading-[24px]`}>
              <span className="font-extrabold pl-9">Trenton modular sofa_3</span>
              <br />
              <span className="font-extrabold pl-9 text-[24px] mt-3 flex">Rs. 25,000.00</span>
            </p>
          </div>

          <div>
            <Image
              src={"/assest/Granite dining table with dining chair 1.png"}
              alt={"logo4"}
              width={287}
              height={287}
            />
            <p className={`${popins.className} text-[16px] leading-[24px]`}>
              <span className="font-bold">Granite dining table with dining chair</span>
              <br />
              <span className="font-extrabold text-[24px] mt-3 flex">Rs. 25,000.00</span>
            </p>
          </div>

          <div>
            <Image
              src={"/assest/Outdoor bar table and stool 1.png"}
              alt={"logo5"}
              width={287}
              height={397}
            />
            <p className={`${popins.className} text-[16px] leading-[24px]`}>
              <span className="font-bold">Outdoor bar table and stool</span>
              <br />
              <span className="font-extrabold text-[24px] mt-3 flex">Rs. 25,000.00</span>
            </p>
          </div>

          <div>
            <Image
              src={"/assest/Plain console with teak mirror 1.png"}
              alt={"logo6"}
              width={287}
              height={287}
            />
            <p className={`${popins.className} text-[16px] leading-[24px]`}>
              <span className="font-bold">Plain console with teak mirror</span>
              <br />
              <span className="font-extrabold text-[24px] mt-4 flex">Rs. 25,000.00</span>
            </p>
          </div>
        </div>

        <div className={`${popins.className} text-[20px] text-center pt-10`}>
          <span className="font-extrabold mt-5">View More</span>
          <br />
          <span className="underline flex items-center justify-center">_______</span>
        </div>
      </div>

      <div className="bg-my3rdPage">
        <div className="flex">
          <div>
            <Image src={"/assest/Asgaard sofa 1.png"} alt={"sorry"} width={983} height={799} />
          </div>
          <div className={`${popins.className} text-[24px] font-extrabold pt-72`}>
            <span className="font-bold pl-12">New Arrivals</span>
            <div className={`${popins.className} text-[48px] font-[700px]`}>
              <span className="font-extrabold">Asgaard sofa</span>
              <div>
                <div className="w-72 h-32 bg-my3rdPage rounded-lg border-black text-center">
                  <span className={`${popins.className} text-[20px]`}>
                    <button className="font-bold border px-8 py-4 border-black border-spacing-3">
                      Order Now
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-myOurBlog">
        <div className={`${popins.className} text-[36px]`}>
          <p className="font-extrabold text-center pt-8">Our Blogs</p>
        </div>
        <div className={`${popins.className} text-[16px] text-center pt-3 leading-[24px]`}>
          <span className="font-bold text-[#9F9F9F]">
            Find a bright ideal to suit your taste with our great selection
          </span>
        </div>

        {/* this main div for Images */}
        <div className="flex gap-8">
          <div>
            <Image src={"/assest/bookTea.png"} alt={"logo33"} width={393} height={393} className="rounded-lg" />
            <span className={`${popins.className} text-[20px] space-y-2`}>
              <br />
              <span className="font-bold">Going all-in with millennial design</span>
              <br />
              <br />
              <span className="font-extrabold text-center pl-16 w-[1240px] h-[379px]">Read More</span>
            </span>
            <br />
            <span className="pl-20 text-[26px] text-center">______</span>
            <br />
            <br />
            <div className="flex gap-3 pl-6">
              <div className="flex gap-2">
                <p className="gap-6"><FaRegClock /></p>
                <p>5 min</p>
              </div>
              {/* div 2 pic */}
              <div className="flex gap-2">
                <p><FaRegCalendar /></p>
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>

          <div>
            <Image src={"/assest/laptop.png"} alt={"logo44"} width={393} height={393} className="rounded-lg" />
            <span className={`${popins.className} text-[20px] space-y-2`}>
              <br />
              <span className="font-bold">Going all-in with millennial design</span>
              <br />
              <br />
              <span className="font-extrabold text-center pl-16 w-[1240px] h-[379px]">Read More</span>
            </span>
            <br />
            <span className="pl-20 text-[26px] text-center">______</span>
            <br />
            <br />
            <div className="flex gap-3 pl-6">
              <div className="flex gap-2">
                <p className="gap-6"><FaRegClock /></p>
                <p>5 min</p>
              </div>
              <div className="flex gap-2">
                <p><FaRegCalendar /></p>
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>

          <div>
            <Image src={"/assest/sidelap.png"} alt={"logo54"} width={393} height={393} className="rounded-lg" />
            <span className={`${popins.className} text-[20px] space-y-2`}>
              <br />
              <span className="font-bold">Going all-in with millennial design</span>
              <br />
              <br />
              <span className="font-extrabold text-center pl-16 w-[1240px] h-[379px]">Read More</span>
            </span>
            <br />
            <span className="pl-20 text-[26px] text-center">______</span>
            <br />
            <br />
            <div className="flex gap-3 pl-6">
              <div className="flex gap-2">
                <p className="gap-6"><FaRegClock /></p>
                <p>5 min</p>
              </div>
              <div className="flex gap-2">
                <p><FaRegCalendar /></p>
                <p>12th Oct 2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${popins.className} text-[20px] text-center pt-12`}>
        <span className="font-extrabold text-[26px] text-center">
          View All Post
        </span>
        <br />
        <span className="pl-4 text-[26px] text-center underline">_______</span>
      </div>

      <p className="relative">
        <Image
          src={"/assest/chashma.png"}
          alt={"logo77"}
          width={1440}
          height={100}
          className="opacity-50 w-full h-full object-cover rounded text-[]"
        />
        <span className={`${popins.className} text-[60px] font-extrabold`}>
          <span className="absolute inset-96 text-center flex items-center justify-center text-[60px] font-extrabold">
            Our Instagram
          </span>
          <span className="absolute inset-96 pt-32 text-center flex items-center justify-center text-[20px] font-extrabold">
            Follow our store on Instagram
            <span className="absolute inset-72 pt-2 text-center flex items-center justify-center text-[20px] font-extrabold">
              <button className="bg-[#FAF4F0] rounded-xl px-6 py-3">
                Follow
              </button>
            </span>
          </span>
        </span>
      </p>













{/* shop */}
<div className="bg-white">


















<div>











</div>






</div>







      <Footer />
    </div>
  );
};

export default Home;
