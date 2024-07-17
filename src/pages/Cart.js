import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, removeFromCart }) {
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout', { state: { total } });
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Cart Items</h2>
        <button onClick={() => navigate('/')} className="btn btn-circle btn-outline hover:bg-red-500 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <div className="flex-grow overflow-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center mb-4 bg-gray-100 rounded-lg p-2">
            <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded-md mr-4" />
            <div className="flex-grow">
              <h3 className="font-semibold text-gray-800">{item.title}</h3>
              <p className="text-gray-600">${item.price} x {item.quantity}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)} className="btn btn-circle btn-outline btn-sm hover:bg-red-500 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" /></svg>
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <p className="text-xl font-bold mb-4 text-gray-800">Total: ${total.toFixed(2)}</p>
        <button onClick={handleCheckout} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300">Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
