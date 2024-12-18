'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [cart, setCart] = useState<Product[]>([]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/product');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        if (Array.isArray(data)) setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Add to Cart and store in localStorage
  const handleAddToCart = (product: Product) => {
    // Fetch the existing cart from localStorage
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Check if the product is already in the cart
    const existingProductIndex = existingCart.findIndex((item: Product) => item.id === product.id);
    if (existingProductIndex !== -1) {
      // If product exists, update the quantity
      existingCart[existingProductIndex].quantity += 1;
    } else {
      // If product does not exist, add the product to the cart with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(existingCart));

    // Update the cart state
    setCart(existingCart);
  };

  // Filtered products based on category
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#042421] via-[#074740] to-[#00534a] py-20 px-4">
      {/* Cart Icon */}
      <div className="fixed top-5 right-5">
        <Link href="/cart">
          <button className="relative bg-gray-800 text-white py-2 px-4 rounded-md shadow-lg">
            🛒 Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-sm rounded-full w-6 h-6 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </Link>
      </div>

      <h1 className="text-4xl font-extrabold mb-8 text-center text-[#e0feff]">Our Products</h1>

      <div className="mb-8 text-center">
        {['All', 'Hand & Body', 'Makeup'].map((category) => (
          <button
            key={category}
            className={`px-6 py-3 m-2 text-sm md:text-base ${
              selectedCategory === category
                ? 'bg-[#4b7772] text-white'
                : 'bg-gray-200 text-gray-700'
            } border rounded-md shadow-md hover:shadow-lg transition-transform`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center text-white">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow-lg bg-[#e4fcfe] hover:scale-105 transition-transform"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 px-10 object-cover rounded-md"
                />
                <h2 className="mt-4 text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-500 mt-1">{product.description}</p>
                <p className="mt-2 font-bold text-lg text-gray-800">₹{product.price}</p>

                <button
                  className="mt-4 bg-[#4b7772] text-white py-2 px-4 rounded-lg hover:bg-[#365d54]"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart 🛒
                </button>
              </div>
            ))
          ) : (
            <div className="text-center text-white">No products available in this category.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default ShopPage;
