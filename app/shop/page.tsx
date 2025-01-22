'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  // Import styles
import { FaTrashAlt } from 'react-icons/fa'; // Import trash icon for "dustbin"

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const Index = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState<{ product: Product, quantity: number }[]>([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/product'); // Replace with actual API
        const data = await response.json();
        setProducts(data);  // Setting the fetched data
      } catch (err) {
        toast.error("Failed to fetch products");
      }
    };

    fetchProducts();
  }, []);

  const categories = ['All', 'Serums', 'Mists', 'Cleansers', 'Moisturizers'];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    const existingProduct = cart.find(item => item.product.id === product.id);

    if (existingProduct) {
      // Increase the quantity if product already exists in cart
      setCart(
        cart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
      toast.success(`${product.name} quantity increased in your cart!`);
    } else {
      setCart([...cart, { product, quantity: 1 }]);
      toast.success(`${product.name} has been added to your cart!`);
    }
  };

  const handleRemoveFromCart = (productId: number) => {
    setCart(cart.filter(item => item.product.id !== productId));
    toast.info("Product removed from your cart");
  };

  const handleIncreaseQuantity = (productId: number) => {
    setCart(
      cart.map(item =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const handleDecreaseQuantity = (productId: number) => {
    setCart(
      cart.map(item =>
        item.product.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#042421] via-[#074740] to-[#00534a] p-10">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-8"
        >
          <h1 className="text-5xl font-bold text-[#A0D3D4] mb-6">
            Discover Your Glow
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Premium skincare products for your daily routine
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category)}
              className={`category-button ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-transparent text-[#A0D3D4] border border-[#A0D3D4]'} px-8 py-3 rounded-full transition-all duration-300`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="product-card p-6 bg-white shadow-xl rounded-xl transition-transform duration-500 hover:scale-105"
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-lg font-bold text-[#202C4C]">${product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleAddToCart(product)}
                    className="px-6 py-2 bg-[#042421] text-white rounded-full hover:shadow-lg transition-all duration-300"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Cart Section */}
      <div className="fixed bottom-10 right-10 bg-white p-6 rounded-lg shadow-xl w-80">
        <h3 className="text-xl font-semibold text-[#202C4C]">Your Cart</h3>

        {/* Cart Items List */}
        <div className="max-h-60 overflow-y-auto mt-4 space-y-4">
          {cart.length > 0 ? (
            cart.map(({ product, quantity }) => (
              <div key={product.id} className="flex flex-col gap-4 bg-gray-100 p-4 rounded-lg shadow-md">
                <div className="flex items-center gap-4">
                  <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
                  <div>
                    <p className="font-medium text-gray-800">{product.name}</p>
                    <p className="text-gray-500 text-sm">${product.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecreaseQuantity(product.id)}
                    className="px-4 py-2 bg-gray-300 rounded-full text-sm text-gray-800 hover:bg-gray-300 transition-all duration-300"
                  >
                    -
                  </button>
                  <span className="text-gray-800 font-semibold">{quantity}</span>
                  <button
                    onClick={() => handleIncreaseQuantity(product.id)}
                    className="px-4 py-2 bg-gray-200 rounded-full text-sm text-gray-800 hover:bg-gray-300 transition-all duration-300"
                  >
                    +
                  </button>
                </div>

                {/* Remove Button */}
                <div>
                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="w-full mt-2 px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaTrashAlt />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {/* Cart Total */}
        <div className="flex justify-between mt-4 border-t-2 pt-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-bold text-[#202C4C]">${getTotalPrice()}</span>
        </div>

        {/* Checkout Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-[#042421] text-white rounded-full hover:shadow-lg transition-all duration-300 w-full"
        >
          Checkout
        </motion.button>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Index;
