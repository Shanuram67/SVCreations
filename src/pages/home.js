import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Home() {
  const username = localStorage.getItem('username');
  const navigate = useNavigate();

  const carouselImages = [
    "blog-Cover.jpg",
    "./src/a.jpg",
    "saree3.jpeg",
    "saree4.jpeg",
    "saree5.jpeg",
    "kanjiaram-saree.jpg"
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Heading */}
      <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Saree Company</h1>
        <p className="text-xl">Discover the Beauty of Traditional Indian Sarees</p>
      </header>

      {/* Carousel */}
      <section className="max-w-6xl mx-auto my-12 px-4">
        <Carousel 
          autoPlay 
          infiniteLoop 
          showStatus={false} 
          showThumbs={false}
          className="rounded-lg overflow-hidden shadow-2xl"
        >
          {carouselImages.map((img, index) => (
            <div key={index}>
              <img src={img} alt={`Saree ${index + 1}`} className="w-full h-96 object-cover"/>
            </div>
          ))}
        </Carousel>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">About Us</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <p className="text-gray-600 mb-4">
            Welcome to <span className="font-semibold">Saree Company</span>, where tradition meets elegance. 
            Founded with a passion for preserving the rich cultural heritage of India, we specialize in 
            offering an exquisite range of sarees that celebrate the beauty and craftsmanship of our diverse regions.
          </p>
          <button 
            onClick={() => navigate('/about')} 
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="max-w-6xl mx-auto my-12 px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
          <button 
            onClick={() => navigate('/products')} 
            className="text-purple-500 hover:text-purple-600 font-semibold"
          >
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {carouselImages.slice(0, 4).map((img, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={img} alt={`Product ${index + 1}`} className="w-full h-64 object-cover"/>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">Saree {index + 1}</h3>
                <p className="text-gray-600">Beautiful traditional saree</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;