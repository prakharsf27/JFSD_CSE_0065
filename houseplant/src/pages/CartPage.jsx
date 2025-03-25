// pages/CartPage.jsx
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import "./CartPage.css";

export default function CartPage() {
  const { cartItems, increaseItem, decreaseItem, removeItem } = useContext(CartContext);

  const items = Object.values(cartItems);
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalCost = items.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      <p className="mb-2">Total items: {totalItems}</p>
      <p className="mb-4">Total cost: ${totalCost.toFixed(2)}</p>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="flex items-center space-x-4 border p-4 rounded shadow">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <h4 className="text-lg font-semibold">{item.name}</h4>
                <p className="text-green-700 font-bold">${item.price}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => decreaseItem(item.id)} className="px-2 py-1 bg-gray-300 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseItem(item.id)} className="px-2 py-1 bg-gray-300 rounded">+</button>
              </div>
              <button onClick={() => removeItem(item.id)} className="ml-4 text-red-600 hover:underline">Delete</button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <Link to="/products" className="text-green-700 hover:underline">Continue Shopping</Link>
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow">
          Checkout (Coming Soon)
        </button>
      </div>
    </div>
  );
}
