import React from "react";
import { motion } from "framer-motion";

const Hero2 = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center items-center py-10 px-4 bg-[#0e453f]">
      {/* Card 1 */}
      <motion.div
        className="bg-[#155b53] bg-opacity-80 text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 flex flex-col items-center relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        style={{ boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.2)" }}
      >
        {/* Image */}
        <motion.img
          src="/images/b3.png"
          alt="Body Butter"
          className="w-full h-80 object-cover rounded-t-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Content */}
        <div className="p-4 text-center">
          <h3 className="text-2xl font-bold mb-2">FREE 400ML BODY BUTTER</h3>
          <p className="text-lg font-semibold mb-2">when you spend £65</p>
          <p className="text-base">
            Butter up! Grab a 400ML version when you spend £65.
          </p>
          <p className="text-lg font-bold mt-4">Use code: BUTTER</p>
          {/* Button */}
          <motion.button
            className="bg-white text-green-950 font-semibold py-2 px-6 rounded-lg mt-6 hover:bg-gray-200 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            View More
          </motion.button>
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="bg-[#155b53] bg-opacity-80 text-white p-6 rounded-lg shadow-lg w-full md:w-1/2 flex flex-col items-center relative"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        style={{ boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.2)" }}
      >
        {/* Image */}
        <motion.img
          src="/images/b2.png"
          alt="Skincare & Makeup"
          className="w-full h-80 object-cover rounded-t-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Content */}
        <div className="p-4 text-center">
          <h3 className="text-2xl font-bold mb-2">3 FOR 2 ON SKINCARE & MAKEUP</h3>
          <p className="text-base">
            Perfect standalone presents because they’re that good (or a treat
            for yourself).
          </p>
          <p className="text-base mt-2">
            Whoever you’re buying for, we have just the skincare routine to go
            with some makeup bits, ready for the festive season! <br />
            come on
          </p>
          {/* Button */}
          <motion.button
            className="bg-white text-green-950 font-semibold py-2 px-6 rounded-lg mt-6 hover:bg-gray-200 transition"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            View More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero2;
