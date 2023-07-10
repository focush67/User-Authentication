import React from 'react';

const LandingPage: React.FC = ({params} : any) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-8">Welcome {params.id}</h1>
      <p className="text-xl mb-12">
        Discover amazing products and services that will enhance your life.
      </p>
      <a
        href="/products"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-xl font-semibold transition duration-300 ease-in-out"
      >
        Explore Products
      </a>
    </div>
  );
};

export default LandingPage;

