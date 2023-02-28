import React from "react";
import { BsFacebook, BsTwitter, BsPinterest } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className='pt-[50px] px-10 bg-[#E5E2E2] flex flex-col items-center'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 border-b-2 pb-16 text-[#3C3631]'>
        <div>
          <h3 className='font-bold text-sm uppercase'>Corporate</h3>
          <ul className='flex flex-col mt-2 gap-2 font-light text-xs'>
            <a href='#'>About us</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Contact us</a>
            <a href='#'>Cookie Policy</a>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-sm uppercase'>Customer Services</h3>
          <ul className='flex flex-col mt-2 gap-2 font-light text-xs'>
            <a href='#'>Delivery Info</a>
            <a href='#'>Returns & Refund Policy</a>
            <a href='#'>Care of Products</a>
            <a href='#'>FAQs</a>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-sm uppercase'>Explore</h3>
          <ul className='flex flex-col mt-2 gap-2 font-light text-xs'>
            <a href='#'>Blog</a>
            <a href='#'>Gift Cards</a>
            <a href='#'>Promotions</a>
            <a href='#'>Interior Design Service</a>
          </ul>
        </div>
        <div>
          <h3 className='font-bold text-sm uppercase'>Subscribe</h3>
          <div className='flex'>
            <input
              type='email'
              placeholder='Enter email'
              className='p-4 bg-transparent border-2 border-[#3C3631] outline-none'
            />
            <button className='py-4 px-4 bg-[#3C3631] text-white'>
              SIGN UP
            </button>
          </div>
          <div className='py-2'>
            <h3 className='font-bold text-sm uppercase'>Follow us</h3>
            <div className="flex gap-2 py-2">
              <BsFacebook size={25} />
              <BsTwitter size={25} />
              <AiOutlineInstagram size={25} />
              <BsPinterest size={25} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
