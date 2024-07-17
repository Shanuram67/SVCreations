import { useNavigate } from 'react-router-dom';

function NavBar({ cartItemCount }) {
  const navigate = useNavigate();

  return (
    <nav className="flex justify-center bg-gray-100 mb-5 ">
      <button
        className="text-center p-2 m-2 active:bg-orange-800 bg-violet-500 text-white rounded hover:bg-green-700"
        onClick={() => navigate('/login')}
      >
        Login
      </button>
      <button
        className="text-center p-2 m-2 active:bg-orange-800 bg-green-500 text-white rounded hover:bg-green-700"
        onClick={() => navigate('/')}
      >
        Home
      </button>
      <button
        className="text-center p-2 m-2 active:bg-orange-800 bg-blue-500 text-white rounded hover:bg-blue-700"
        onClick={() => navigate('/about')}
      >
        About
      </button>
      <button
        className="text-center p-2 m-2 active:bg-orange-800 bg-red-500 text-white rounded hover:bg-red-700"
        onClick={() => navigate('/products')}
      >
        Products
      </button>
      <button
        className="text-center p-2 m-2 active:bg-orange-800 bg-yellow-500 text-white rounded hover:bg-yellow-700"
        onClick={() => navigate('/contact')}
      >
        Contact
      </button>
      <button onClick={() => navigate('/cart')} className="text-black hover:text-gray-300 relative">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        {cartItemCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            {cartItemCount}
          </span>
        )}
      </button>
    </nav>
  );
}

export default NavBar;
