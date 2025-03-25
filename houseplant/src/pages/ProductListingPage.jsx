import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import "./ProductListingPage.css";

const products = [
  { id: 1, name: 'Aloe Vera', price: 10, category: 'Succulents', image: 'https://source.unsplash.com/featured/?aloe' },
  { id: 2, name: 'Peace Lily', price: 15, category: 'Flowering', image: 'https://source.unsplash.com/featured/?peace-lily' },
  { id: 3, name: 'Snake Plant', price: 12, category: 'Air Purifying', image: 'https://source.unsplash.com/featured/?snake-plant' },
  { id: 4, name: 'Spider Plant', price: 9, category: 'Air Purifying', image: 'https://source.unsplash.com/featured/?spider-plant' },
  { id: 5, name: 'Jade Plant', price: 14, category: 'Succulents', image: 'https://source.unsplash.com/featured/?jade-plant' },
  { id: 6, name: 'Orchid', price: 20, category: 'Flowering', image: 'https://source.unsplash.com/featured/?orchid' },
];

export default function ProductListingPage() {
  const { cartItems, addToCart } = useContext(CartContext);

  const grouped = products.reduce((acc, product) => {
    acc[product.category] = acc[product.category] || [];
    acc[product.category].push(product);
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Our Plants</h2>
      {Object.keys(grouped).map(category => (
        <div key={category} className="mb-6">
          <h3 className="text-2xl font-semibold mb-2">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {grouped[category].map(product => (
              <div key={product.id} className="product-card p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2 rounded" />
              <h4 className="text-lg font-semibold">{product.name}</h4>
              <p className="text-green-700 font-bold mb-2">${product.price}</p>
              <button
                disabled={cartItems[product.id]}
                onClick={() => addToCart(product)}
                className={`w-full py-2 rounded text-white font-semibold ${cartItems[product.id] ? 'disabled-btn' : 'add-to-cart-btn'}`}
              >
                {cartItems[product.id] ? 'Added to Cart' : 'Add to Cart'}
              </button>
            </div>
            
            ))}
          </div>
        </div>
      ))}
    </div>
    
  );
}