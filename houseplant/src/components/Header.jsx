// src/components/Header.jsx
import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import "./Header.css";

export default function Header() {
  const { cartItems } = useContext(CartContext);
  const location = useLocation();
  const totalItems = Object.values(cartItems).reduce((acc, item) => acc + item.quantity, 0);

  // Hide header on Landing Page
  if (location.pathname === '/') return null;

  return (
    <header className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
      <Link to="/products" className="text-xl font-bold">Green Haven</Link>
      <nav className="flex items-center space-x-6">
        <Link to="/products" className="hover:underline">Products</Link>
        <Link to="/cart" className="relative">
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full px-1">
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
