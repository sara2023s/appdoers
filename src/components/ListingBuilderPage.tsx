import React from 'react';
import { FaGoogle, FaFacebook, FaTwitter, FaInstagram, FaApple, FaLinkedin, FaYelp, FaGlobe, FaShieldAlt, FaSync, FaChartLine, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ListingBuilderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Enhance Your Local Presence
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Elevate your business's local presence with Listing Sync, the all-in-one solution for managing and optimizing your business listings effortlessly.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Found More with Precision</h2>
          <p className="text-gray-600 mb-8">
            Elevate your online visibility by ensuring accurate business listings. With Listing Sync, manage and maintain precision across multiple listing sites effortlessly from one centralised platform, saving you valuable time while enhancing your online presence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaGlobe className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">One-Click Listing Generation</h3>
              <p className="text-gray-600">
                Quickly generate and correct business listings across a network of 25+ platforms.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaShieldAlt className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Protection Against Changes</h3>
              <p className="text-gray-600">
                Automatically re-establish accurate data if listings are manipulated by third parties.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaSync className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Centralised Updates</h3>
              <p className="text-gray-600">
                Manage all business information from a single dashboard for consistent and updated listings.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaChartLine className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sync to Major Platforms</h3>
              <p className="text-gray-600">
                Instantaneously update Google, Facebook, and Twitter listings without additional charges.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Supported Platforms</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center space-x-2">
                <FaGoogle className="text-blue-600" />
                <span>Google</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaFacebook className="text-blue-600" />
                <span>Facebook</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-blue-600" />
                <span>Instagram</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaTwitter className="text-blue-600" />
                <span>Twitter (X)</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-blue-600" />
                <span>Bing</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaApple className="text-blue-600" />
                <span>Apple</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaYelp className="text-blue-600" />
                <span>Yelp</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaLinkedin className="text-blue-600" />
                <span>LinkedIn</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-blue-600" />
                <span>Tripadvisor</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe className="text-blue-600" />
                <span>Yahoo & many more</span>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Book a Demo
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Why Accurate Listings Matter?</h3>
            <p className="text-gray-600 mb-6">
              80% of consumers use search engines for local info, and 50% act within 24 hours. Incorrect listings mean lost sales, frustrated consumers, and lower rankings. Trust is crucial; 73% lose faith in brands with inaccurate listings. Accurate listings are key to a strong local marketing strategy.
            </p>
            <p className="text-gray-600">
              Ensure your business stands out with Listing Sync, the tool that not only simplifies listing management but also enhances your online presence. Elevate your local marketing stack and build trust with accurate listings today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Let's talk about your project</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Fill in the form to set up a meeting or call +64 22 5060 870.
          </p>
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

export default ListingBuilderPage; 