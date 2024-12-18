'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Products from '@/components/products'; // Import the Products component
import Hero2 from '@/components/Hero2';

const Page = () => {
  return (
    <>
      <motion.div
        className="flex flex-col md:flex-row bg-gradient-to-r from-[#bbfff7] to-[#ffffff] h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section - Text */}
        <div className="flex flex-col justify-center p-10 w-full md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-extrabold text-center text-black mb-4">
            EMBRACING <span className="text-[#155b53]"> <br />NATURAL BEAUTY</span>
          </h1>
          <p className="text-base md:text-lg text-center font-normal text-black mb-6">
            At BodyShop, we’re committed to enhancing your natural beauty with products crafted from nourishing ingredients
            that are as gentle on your skin as they are effective. Our collection is thoughtfully created to provide the
            care your skin deserves, combining formulas for lasting results.
          </p>

          {/* Shop Now Button with Motion */}
          <div className="flex justify-center">
            <motion.button
              className="bg-gradient-to-r from-[#042421] to-[#106e63] text-white py-4 px-8 w-[330px] items-center rounded-lg shadow-xl hover:from-[#106e63] hover:to-[#042421] transition duration-300 text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              SHOP NOW
            </motion.button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:w-1/2 relative">
          {/* Background overlay with green color */}
          <div className="absolute inset-0 bg-[#134E47] opacity-70"></div> {/* Green overlay with opacity */}
          
          {/* Image */}
          <Image
            src="/images/bg.png" // Replace with your image path
            alt="Natural Beauty"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </motion.div>

      {/* Products Section */}
      <div>
       
        
        <Products />
        <Hero2 /> {/* This will render the Products component here */}
      </div>

     
    </>
    
  );
};

export default Page;
