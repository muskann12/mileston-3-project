'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi"; // Import cart icon

const Navbar: React.FC = () => {
  const [scroll, setScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 h-[88px] w-full z-10 transition-colors duration-300 ${
        scroll ? "bg-[#c9fff9]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-9 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              src="/images/logo.png" // Replace with actual path to your image
              alt="Logo"
              width={90}
              height={90}
              className="rounded-full mt-[40px]"
            />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden flex items-center" onClick={toggleMenu}>
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-11 bg-green-950 rounded-sm"
            />
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isOpen ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-green-950 mt-1"
            />
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: isOpen ? -45 : 0 }}
              transition={{ duration: 0.3 }}
              className="w-6 h-0.5 bg-green-950 mt-1"
            />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-20 text-[20px] font-extralight">
            <Link href="/" className="text-green-950 hover:text-gray-200 transition">
              Home
            </Link>
            <Link href="/about" className="text-green-950 hover:text-gray-200 transition">
              About
            </Link>
            <Link href="/shop" className="text-green-950 hover:text-gray-200 transition">
              Shop
            </Link>
          </div>

          {/* Cart Icon */}
          <div className="hidden md:flex items-center">
            <Link href="/cart" className="text-green-950 hover:text-gray-200 transition">
              <FiShoppingCart size={28} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isOpen ? "block" : "hidden"
        } bg-[#134E47] w-full px-4 py-4 absolute top-16 left-0`}
      >
        <Link href="/" className="block text-white py-2 text-center hover:bg-[#155b53]">
          Home
        </Link>
        <Link href="/about" className="block text-white py-2 text-center hover:bg-[#155b53]">
          About
        </Link>
        <Link href="/shop" className="block text-white py-2 text-center hover:bg-[#155b53]">
          Shop
        </Link>
        <Link href="/cart" className="block text-white py-2 text-center hover:bg-[#155b53]">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
