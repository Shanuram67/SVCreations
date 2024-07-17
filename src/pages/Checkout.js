import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Checkout() {
  const navigate = useNavigate();
  const location = useLocation();
  const total = location.state?.total || 0;

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Checkout</h1>
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <p className="text-xl font-bold mb-6 text-center text-blue-600">Total: ${total.toFixed(2)}</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Full Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Delivery Address</label>
            <textarea id="address" name="address" value={formData.address} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">Card Number</label>
            <input type="text" id="cardNumber" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 mr-2">
              <label htmlFor="expiryDate" className="block text-gray-700 font-bold mb-2">Expiry Date</label>
              <input type="text" id="expiryDate" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="MM/YY" />
            </div>
            <div className="w-1/2 ml-2">
              <label htmlFor="cvv" className="block text-gray-700 font-bold mb-2">CVV</label>
              <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleChange} required className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
          </div>
          <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300">Place Order</button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;