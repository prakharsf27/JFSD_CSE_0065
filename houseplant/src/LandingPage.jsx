import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center text-white px-4"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1603481546579-05c603f505b9')" }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-md">Green Haven</h1>
      <p className="text-lg md:text-2xl max-w-2xl text-center drop-shadow-md mb-6">
        Welcome to Green Haven – your online destination for beautiful houseplants that bring life and tranquility to your space.
      </p>
      <button
        onClick={() => navigate('/products')}
        className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-all"
      >
        Get Started
      </button>
    </div>
  );
}
