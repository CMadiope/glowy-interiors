import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='p-10  relative z-10'>
      <nav className='w-full'>
        <div className='flex justify-between items-center'>
          <a href='/'>
            <h1 className='uppercase text-yellow-700 font-bold'>
              Glowy <span className='text-2xl font-normal'>interiors</span>
            </h1>
          </a>
          <div className='flex gap-2 '>
            <BiShoppingBag size={30} className='cursor-pointer' />
            <BsPerson size={30} className='cursor-pointer' />
          </div>
          <div onClick={handleNav} className='z-30 sm:hidden '>
            {nav ? (
              <RxCross1 size={30} className=' cursor-pointer text-gray-300' />
            ) : (
              <FaBars size={30} className='cursor-pointer' />
            )}
          </div>
        </div>
        <div className='py-8 px-10'>
          <ul className='hidden sm:flex justify-between items-center uppercase font-light'>
            <li>
              <a href='/'>shop the look</a>
            </li>
            <li>
              <a href='furniture'>furniture</a>
            </li>
            <li>
              <a href='lighting'>lighting</a>
            </li>
            <li>
              <a href='accessories'>accessories</a>
            </li>
            <li>
              <a href='rugs'>rugs</a>
            </li>
            <li>
              <a href='textiles'>textiles</a>
            </li>
          </ul>
          {/* mobile nav */}
          <div
            onClick={handleNav}
            className={
              nav
                ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-white left-0 top-0 w-full h-screen bg-black/70 px-4 py-10 flex flex-col z-10"
                : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
            }
          >
            <ul className='h-full w-full text-center pt-20 flex flex-col text-xl text-gay-300 gap-8 uppercase'>
              <li>
                <a href='/'>shop the look</a>
              </li>
              <li>
                <a href='furniture'>furniture</a>
              </li>
              <li>
                <a href='lighting'>lighting</a>
              </li>
              <li>
                <a href='accessories'>accessories</a>
              </li>
              <li>
                <a href='rugs'>rugs</a>
              </li>
              <li>
                <a href='textiles'>textiles</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
