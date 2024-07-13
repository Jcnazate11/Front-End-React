import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes, faHeadset } from '@fortawesome/free-solid-svg-icons';
import '../styles/Header.css'; // Adjust this file for custom styles if needed

const Header = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b-2 border-gray-200">
      <div className="bg-pink-300 text-center text-white py-2">
        Free Fast Shipping Included
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="hidden md:flex items-center space-x-6">
            <FontAwesomeIcon icon={faHeadset} className="text-5xl" style={{ color: "#f288c6" }} />
            <span className="text-gray-500">Customer Support: (123) 456-7890</span>
          </div>
          <div className="flex-1 flex justify-center">
            <img src={'/images/Logo2.png'} alt="logo" className="h-16 w-auto" />
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-500 hover:text-gray-700">HOME</Link>
            <Link to="/galeria" className="text-gray-500 hover:text-gray-700">PRODUCTS</Link>
            <Link to="/contacto" className="text-gray-500 hover:text-gray-700">CONTACT</Link>
            <div className="relative ml-4">
              <input 
                type="text" 
                placeholder="Search" 
                className="px-2 py-1 border rounded-md pl-10"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-2 text-pink-300" />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={handleMenuClick} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-pink-300 focus:outline-none focus:bg-pink-300 focus:text-white">
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" onClick={() => handleMenuItemClick('/')} className="block text-gray-500 hover:text-gray-700">HOME</Link>
            <Link to="/galeria" onClick={() => handleMenuItemClick('/galeria')} className="block text-gray-500 hover:text-gray-700">PRODUCTS</Link>
            <Link to="/contacto" onClick={() => handleMenuItemClick('/contacto')} className="block text-gray-500 hover:text-gray-700">CONTACT</Link>
            <div className="relative mt-2">
              <input 
                type="text" 
                placeholder="Search" 
                className="block w-full px-2 py-1 border rounded-md pl-10"
              />
              <FontAwesomeIcon icon={faSearch} className="absolute left-2 top-2 text-pink-300" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
