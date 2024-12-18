import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-[#042421] text-white py-8">
      <div className="container mx-auto px-4">
        {/* Footer links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="font-bold text-xl mb-4">Store Locator</h3>
            <ul>
              <li><a href="#" className="hover:text-green-500">Love Your Body Club</a></li>
              <li><a href="#" className="hover:text-green-500">All Ingredients</a></li>
              <li><a href="#" className="hover:text-green-500">Our Commitment</a></li>
              <li><a href="#" className="hover:text-green-500">About Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Help & Info</h3>
            <ul>
              <li><a href="#" className="hover:text-green-500">FAQ's</a></li>
              <li><a href="#" className="hover:text-green-500">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-500">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-500">Delivery & Returns</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Policies</h3>
            <ul>
              <li><a href="#" className="hover:text-green-500">Policy Documentation</a></li>
              <li><a href="#" className="hover:text-green-500">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-green-500">Cookies</a></li>
              <li><a href="#" className="hover:text-green-500">Sitemap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-4">Company</h3>
            <ul>
              <li><a href="#" className="hover:text-green-500">Gift Cards</a></li>
              <li><a href="#" className="hover:text-green-500">Pakistan</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-2xl hover:text-green-500">
            <FaFacebook />
          </a>
          <a href="#" className="text-2xl hover:text-green-500">
            <FaTwitter />
          </a>
          <a href="#" className="text-2xl hover:text-green-500">
            <FaInstagram />
          </a>
          <a href="#" className="text-2xl hover:text-green-500">
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-sm mt-6 text-gray-400">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
