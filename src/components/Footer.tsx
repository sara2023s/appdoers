import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#086375] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="mb-8 md:mb-0">
            <Link to="/" className="inline-block">
              <img
                src="/images/logo.png"
                alt="App Doers Logo"
                className="h-12 w-auto"
              />
            </Link>
            <p className="mt-4 text-white max-w-md">
              Empowering businesses with innovative digital solutions and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/websites" className="text-gray-300 hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link to="/apps" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</Link>
              </li>
              <li>
                <Link to="/social-marketing" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/seo" className="text-gray-300 hover:text-white transition-colors">SEO Services</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                250b Mangorei Road, Merrilands,<br />
                New Plymouth, 4312, New Zealand
              </li>
              <li className="text-gray-300">
                Phone: <a href="tel:+64225060870" className="hover:text-white transition-colors">+64 22 5060 870</a>
              </li>
              <li className="text-gray-300">
                Email: <a href="mailto:contact@appdoers.co.nz" className="hover:text-white transition-colors">contact@appdoers.co.nz</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between items-center text-gray-300">
          <p>&copy; 2025 AppDoers. All rights reserved.</p>
          <p>Website developed by <a href="https://buildwithsds.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">buildwithsds.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;