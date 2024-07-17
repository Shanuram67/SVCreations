import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './pages/NavBar';
import Home from './pages/home';
import About from './pages/about';
import Products from './pages/products';
import Contact from './pages/contact';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Footer from './pages/footer';
import Signup from './pages/Signup';

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchingData() {
      const result = await fetch('https://dummyjson.com/products');
      const actualData = await result.json();
      setProducts(actualData.products);
    }
    fetchingData();
  }, []);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar cartItemCount={cartItems.length} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
