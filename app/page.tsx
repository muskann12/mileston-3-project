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
        className="flex flex-col md:flex-row bg-gradient-to-r from-[#bbfff7] to-[#ffffff] min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section - Text */}
        <div className="flex flex-col justify-center p-6 md:p-10 w-full md:w-1/2 text-center mt-4 md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-black mb-4">
            EMBRACING <span className="text-[#155b53] block">NATURAL BEAUTY</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg font-normal text-black mb-6">
            At BodyShop, we’re committed to enhancing your natural beauty with products crafted from nourishing ingredients
            that are as gentle on your skin as they are effective. Our collection is thoughtfully created to provide the
            care your skin deserves, combining formulas for lasting results.
          </p>

          {/* Shop Now Button with Motion */}
          <div className="flex justify-center md:justify-start">
            <motion.button
              className="bg-gradient-to-r from-[#042421] to-[#106e63] text-white py-3 sm:py-4 px-6 sm:px-8 w-full max-w-[330px] rounded-lg shadow-xl hover:from-[#106e63] hover:to-[#042421] transition duration-300 text-sm sm:text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              SHOP NOW
            </motion.button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto flex justify-center items-center">
          {/* Background overlay with green color */}
          <div className="absolute inset-0 bg-[#134E47] "></div> {/* Green overlay with opacity */}
          
          {/* Image */}
          <div className="relative w-full h-full">
            <Image
              src="/images/bg.png" // Replace with your image path
              alt="Natural Beauty"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Products Section */}
      <div className="px-4 py-8 sm:px-6 md:px-10 lg:px-12">
        <Products />
        <Hero2 />
      </div>
    </>
  );
};

export default Page;
