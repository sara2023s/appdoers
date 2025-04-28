import React from 'react';
import { FaLaptop, FaEdit, FaSearch, FaPuzzlePiece, FaShareAlt, FaGlobe, FaShoppingCart, FaCloud, FaChartLine, FaShieldAlt, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const WebsitesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            We Build Amazing Creative Experiences
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Powerful responsive websites that improve SEO, increase traffic and user engagement
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            View Examples
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Revamp Your Online Presence with Our Modern Website Design</h2>
              <p className="text-gray-600">
                Transform your online storefront with our modern, fast, and optimized websites for seamless display on all devices, boosting online prospect conversion.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Simplify Website Management with Our Robust Editor</h2>
              <p className="text-gray-600">
                Effortlessly update text, incorporate promotions, change images, or seamlessly add new pages with our powerful website editor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="text-center p-4">
              <FaLaptop className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Responsive Design</p>
            </div>
            <div className="text-center p-4">
              <FaEdit className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Drag-and-drop Editor</p>
            </div>
            <div className="text-center p-4">
              <FaSearch className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">SEO-Friendly</p>
            </div>
            <div className="text-center p-4">
              <FaPuzzlePiece className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Advanced Widgets</p>
            </div>
            <div className="text-center p-4">
              <FaShareAlt className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Social Media Integration</p>
            </div>
            <div className="text-center p-4">
              <FaGlobe className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Multi-Language Support</p>
            </div>
            <div className="text-center p-4">
              <FaShoppingCart className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">eCommerce Integration</p>
            </div>
            <div className="text-center p-4">
              <FaCloud className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Automated Backups</p>
            </div>
            <div className="text-center p-4">
              <FaChartLine className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Intelligent Marketing</p>
            </div>
            <div className="text-center p-4">
              <FaShieldAlt className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Website Protection</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              View Example Websites
            </button>
          </div>
        </div>
      </section>

      {/* Website Examples Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Website Examples</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">Check out some of our design work for our clients!</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg" alt="Flow Pilates" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Flow Pilates</h3>
                <p className="text-gray-600">A website showcasing different types of classes</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg" alt="Beauty Salon" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Beauty Salon</h3>
                <p className="text-gray-600">A modern website for a beauty and hair salon</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg" alt="Gym" className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Gym</h3>
                <p className="text-gray-600">Join now, your mat is ready!</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              View More Examples
            </button>
          </div>
        </div>
      </section>

      {/* Intelligent Marketing Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Intelligent Marketing</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">Create impactful experiences by engaging every visitor, every time</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Triggers</h3>
              <p className="text-gray-600">
                Implement personalized experiences using triggers such as time of day, geolocation, visit frequency, and more.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Actions</h3>
              <p className="text-gray-600">
                Select from pre-designed actions like popups and notification bars, or craft your custom actions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Conversions</h3>
              <p className="text-gray-600">
                Engage visitors with precisely timed, tailored actions and witness a surge in conversion rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Let's talk about your project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">Full name</label>
                  <input type="text" className="w-full p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Phone number</label>
                  <input type="tel" className="w-full p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input type="email" className="w-full p-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea className="w-full p-2 border rounded-lg h-32"></textarea>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-blue-600 mr-4 text-xl" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p>New Plymouth, Taranaki, New Zealand</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-4 text-xl" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p>+64 22 5060 870</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-4 text-xl" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p>contact@appdoers.co.nz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Get In Touch</h3>
              <p>New Plymouth, Taranaki, New Zealand</p>
              <p>+64 22 5060 870</p>
              <p>contact@appdoers.co.nz</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Learn More</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Terms</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-blue-400">Terms of Use</a></li>
                <li><a href="#" className="hover:text-blue-400">Cookies Policy</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <p>© 2024 Appdoers Limited.</p>
              <p>All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebsitesPage;