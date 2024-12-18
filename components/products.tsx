'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Have from './Have';
import { FaLeaf } from 'react-icons/fa';

// Dummy data for products with different discounts
const productsData = [
  { id: 1, name: 'Vitamin C Gentle Facial Wash', price: '3000 PKR', image: '/images/img1.png', rating: 4, discount: 0.20 },
  { id: 2, name: 'Vitamin C Hydrating Toner', price: '5000 PKR', image: '/images/img7.png', rating: 5, discount: 0.30 },
  { id: 3, name: 'Tea Tree Night Mask And Toner', price: '6000 PKR', image: '/images/img3.png', rating: 3.5, discount: 0.25 },
  { id: 4, name: 'Coffee Energising Moisturiser', price: '4000 PKR', image: '/images/img4.png', rating: 4, discount: 0.15 },
  { id: 5, name: 'Almond Milk Butter', price: '4500 PKR', image: '/images/img5.png', rating: 5, discount: 0.10 },
  { id: 6, name: 'Aloe Face Wash', price: '3500 PKR', image: '/images/img6.png', rating: 4, discount: 0.35 },
  { id: 7, name: 'Vitamen E Cream', price: '2500 PKR', image: '/images/img7.png', rating: 4, discount: 0.20 },
  { id: 5, name: 'Almond Milk Butter', price: '4500 PKR', image: '/images/img5.png', rating: 5, discount: 0.10 },
  { id: 3, name: 'Tea Tree Night Mask And Toner', price: '6000 PKR', image: '/images/img3.png', rating: 3.5, discount: 0.25 },
];

// Function to apply the discount based on each product
const applyDiscount = (price: string, discount: number) => {
  const numericPrice = parseInt(price.replace(' PKR', '').replace(',', ''));
  const discountedPrice = numericPrice - numericPrice * discount;
  return `${discountedPrice.toFixed(0)} PKR`;
};

const Products = () => {
  return (
    <div
    className="py-10 bg-gradient-to-r from-[#ffffff] to-[#ebfffd] bg-cover bg-center"
    style={{ backgroundImage: "url('/images/imgb.png')" }}
  >
      {/* Heading */}
      <div className="flex items-center justify-center mb-8">
      {/* Left Leaf Icon */}
      < FaLeaf className="text-green-600 w-8 h-8 md:w-12 md:h-12 mr-4" />

      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold text-center text-black">
        Featured Products
      </h2>

      {/* Right Leaf Icon */}
      < FaLeaf className="text-green-600 w-8 h-8 md:w-12 md:h-12 ml-4" />
    </div>
      <p className="text-center text-xl font-semibold text-green-950 mb-6">
        Explore top-rated products, crafted for your perfect look And give your skin glow!
      </p>

      {/* Product Slider Container */}
      <div className="container relative overflow-hidden">
        <motion.div
          className="flex gap-8 animate-slider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {productsData.map((product) => (
            <motion.div
              key={product.id}
              className="p-6 rounded-lg shadow-xl w-80 flex-shrink-0 transition-all hover:scale-105"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-47 object-cover rounded-md"
                />
              </div>

              <div className="mt-4 text-center">
                {/* Shrinking the product name */}
                <h3 className="text-xl md:text-2xl font-bold text-black">{product.name}</h3>

                {/* Discount Price Style */}
                <div className="text-lg font-semibold text-gray-500 line-through mt-2">
                  {applyDiscount(product.price, product.discount)}
                </div>

                <div className="text-2xl font-bold text-red-600 mt-1">
                  {applyDiscount(product.price, product.discount)}
                </div>

                {/* Star Ratings */}
                <div className="flex justify-center mt-2">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${index < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                      />
                    </svg>
                  ))}
                </div>

                {/* Shop Now Button */}
                <div className="mt-4">
                  <button className="bg-gradient-to-r from-[#042421] to-[#106e63] text-white py-2 px-6 w-full rounded-lg hover:from-[#106e63] hover:to-[#042421] transition duration-300">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className=''>
        <Have />

      </div>
    </div>
  );
};

export default Products;
