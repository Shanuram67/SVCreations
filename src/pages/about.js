import React from 'react';

const about = () => {
    return (
        <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/premium-photo/top-view-creative-flat-lay-black-table-with-camera-stationery-copy-space_67155-14325.jpg?size=626&ext=jpg' }}>
            <div className="bg-gray bg-opacity-50 h-screen flex items-center justify-center">
                <div className="bg- gray p-8 rounded-lg shadow-lg max-w-4xl mx-auto  text-white ">
                    <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
                    <p className="mb-4 text-lg leading-relaxed">
                    Welcome to our shopping paradise! At SV CREATION, we strive to bring you the latest trends and the best deals in fashion. Whether you're looking for everyday essentials or something special for a night out, we've got you covered.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                    Our mission is to make shopping enjoyable and convenient for you. With a wide range of products and a commitment to customer satisfaction, we ensure that every purchase you make with us is a delightful experience.
                </p>
                <p className="mb-4 text-lg leading-relaxed">
                    We believe in style, quality, and affordability. Our curated collections cater to every taste and occasion, ensuring that you find exactly what you need, when you need it.
                </p>
                </div>
            </div>
        </div>
    );
};

export default about;
