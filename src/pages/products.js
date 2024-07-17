import React from 'react';
import { useNavigate } from 'react-router-dom';

function Products({ products, addToCart }) {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
   
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center p-4 bg-blue-500 text-white rounded shadow-md">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
            <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.title}</h2>
              <p className="text-gray-600 mb-4 h-20 overflow-hidden">{product.description}</p>
              <p className="font-bold text-xl text-blue-600 mb-4">Price: ${product.price}</p>
              <button 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                onClick={() => handleAddToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
