import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Business Center Pro', href: '/business-center-pro' },
    { name: 'Contact', href: '/contact' },
  ];

  const products = [
    { name: 'Apps', href: '/apps' },
    { name: 'Websites', href: '/websites' },
    { name: 'SEO', href: '/seo' },
    { name: 'Content', href: '/content' },
    { name: 'Social Marketing', href: '/social-marketing' },
    { name: 'Ad Intelligence', href: '/ad-intelligence' },
    { name: 'Review Builder', href: '/review-builder' },
    { name: 'Listing Builder', href: '/listing-builder' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white shadow-md py-4">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold text-dark hover:text-primary transition-colors duration-300">
            AppDoers
          </Link>

          {/* Desktop Navigation - Hidden on tablets and phones */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-body hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            
            <div className="relative group">
              <button
                className="flex items-center text-body hover:text-primary transition-colors duration-300"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Products
                <FaChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
              </button>
              
              <div className={`absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg transform transition-all duration-300 ${isDropdownOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                {products.map((product) => (
                  <Link
                    key={product.name}
                    to={product.href}
                    className="block px-4 py-2 text-body hover:bg-soft hover:text-primary transition-colors duration-300"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/contact"
              className="btn-primary"
            >
              Get a Quote
            </Link>
          </div>

          {/* Hamburger Menu Button - Visible on tablets and phones */}
          <button
            className="lg:hidden text-body hover:text-primary transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-xl md:text-2xl font-medium text-body hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="space-y-4">
                <button
                  className="flex items-center text-xl md:text-2xl font-medium text-body hover:text-primary transition-colors duration-300"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Products
                  <FaChevronDown className={`ml-2 h-5 w-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <div className={`pl-4 space-y-2 transform transition-all duration-300 ${isDropdownOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                  {products.map((product) => (
                    <Link
                      key={product.name}
                      to={product.href}
                      className="block text-lg md:text-xl text-body hover:text-primary transition-colors duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                className="btn-primary text-center text-lg md:text-xl py-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;