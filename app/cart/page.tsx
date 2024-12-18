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
  quantity: number;
  discount?: number; // Optional discount field
}

const CartPage = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [deliveryPrice, setDeliveryPrice] = useState(50); // Default delivery price

  // Load cart data from localStorage
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(savedCart);
    calculateTotalPrice(savedCart);
  }, []);

  // Calculate total price of items in the cart, including discounts
  const calculateTotalPrice = (cart: Product[]) => {
    const total = cart.reduce((acc, product) => {
      const discountedPrice = product.discount
        ? product.price - (product.price * product.discount) / 100
        : product.price;
      return acc + discountedPrice * product.quantity;
    }, 0);
    setTotalPrice(total);
  };

  // Update quantity in cart
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    const updatedCart = cart.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  // Remove product from cart
  const handleRemoveFromCart = (productId: number) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    setCart(updatedCart);
    calculateTotalPrice(updatedCart);
  };

  // Apply discount if present
  const getDiscountedPrice = (price: number, discount: number | undefined) => {
    return discount ? (price - (price * discount) / 100).toFixed(2) : price.toFixed(2);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-r from-[#042421] via-[#074740] to-[#00534a] py-8 px-4">
      <h1 className="text-4xl font-extrabold mb-6 text-center py-8 text-[#e0feff]">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center text-white">Your cart is empty</div>
      ) : (
        <div className="space-y-6">
          <div className="flex flex-col space-y-3">
            {cart.map((product) => (
              <div
                key={product.id}
                className="flex items-center w-full sm:w-[800px] justify-between p-8 ml-3 sm:p-9 bg-[#e4fcfe] rounded-lg shadow-md"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-md"
                  />
                  <div>
                    <h2 className="text-sm sm:text-lg font-semibold text-gray-800">{product.name}</h2>
                    <p className="text-gray-500 text-xs sm:text-sm">{product.description}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div>
                    <p className="font-semibold text-sm sm:text-md text-gray-800">
                      ₹{getDiscountedPrice(product.price, product.discount)}
                    </p>
                    {product.discount && (
                      <p className="line-through text-red-500 text-xs sm:text-sm">
                        ₹{product.price.toFixed(2)}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center space-x-3">
                    <label htmlFor={`quantity-${product.id}`} className="text-white text-xs sm:text-sm">Qty:</label>
                    <input
                      type="number"
                      id={`quantity-${product.id}`}
                      value={product.quantity}
                      min="1"
                      className="p-1 w-10 sm:w-12 rounded-md text-gray-800"
                      onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                    />
                  </div>

                  <button
                    className="text-black hover:text-[#c0392b] text-xl"
                    onClick={() => handleRemoveFromCart(product.id)}
                  >
                    🗑️
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-white text-lg flex flex-col items-center">
            <h2 className="font-semibold">Subtotal: ₹{totalPrice.toFixed(2)}</h2>
            <h3 className="mt-2 font-semibold">Delivery: ₹{deliveryPrice.toFixed(2)}</h3>
            <h3 className="mt-2 font-semibold">Total: ₹{(totalPrice + deliveryPrice).toFixed(2)}</h3>
            <div className="mt-4 w-full max-w-md">
              <Link href="/checkout">
                <button className="bg-[#4b7772] text-white py-2 px-6 rounded-lg hover:bg-[#365d54] w-full">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
