import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const SubmitHandler = async (data) => {
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          expiresInMins: 30,
        }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed. Please check your username and password.');
      }

      const result = await response.json();
      console.log("Login Result:", result);

      if (result.token && result.id) { 
        toast.success('Login successful!');
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        throw new Error('Authentication failed. Please check your username and password.');
      }
    } catch (error) {
      console.error('Login Error:', error);
      setError(error.message);
      toast.error(error.message);
    }
};

return (
  <div>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
    <div className="max-w-md w-full mx-auto p-8 bg-white rounded-3xl shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8 ">SignUp</h1>
      <form onSubmit={handleSubmit(SubmitHandler)}>
        {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 text-2xl" htmlFor="username">
            Name
          </label>
          <input
            {...register('Name')}
            type="text"
            id="Name"
            className="w-full px-3 py-2 text-xl border rounded-lg focus:outline-none focus:border-blue-500"
            placeholder="Enter your Name"
            required
          />
          <label className="block text-gray-700 font-bold mb-2 text-2xl" htmlFor="username">
          Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="Email"
              className="w-full px-3 py-2 text-xl border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your Email"
              required
            />
            <label className="block text-gray-700 font-bold mb-2 text-2xl" htmlFor="username">
              Phone Number
            </label>
            <input
              {...register('Phone Number')}
              type="text"
              id="Phone Number"
              className="w-full px-3 py-2 text-xl border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your Phone Number"
              required
            />
            <label className="block text-gray-700 font-bold mb-2 text-2xl" htmlFor="username">
            address
            </label>
           
            <input
              {...register('address')}
              type="address"
              id="address"
              className="w-full px-3 py-2 text-xl border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your address"
              required
            />
            
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2 text-2xl" htmlFor="password">
              Password
            </label>
            <input
              {...register('password')}
              type="password"
              id="password"
              className="w-full px-3 py-2 text-xl border rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
              required
            />
           </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold py-2 px-4 mb-10 rounded-lg focus:outline-none focus:shadow-outline"
            >
            
            Sign Up
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
      
    </div>
    );
}

export default LoginForm;