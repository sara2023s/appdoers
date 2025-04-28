import React from 'react';
import { FaChartLine, FaSearch, FaRobot, FaTable, FaClock, FaSlidersH, FaGoogle, FaFacebook, FaYoutube, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const AdIntelligencePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Unleash Advertising Excellence
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Elevate your digital footprint through strategic evaluation and continuous improvement
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Optimize Your Digital Presence with AI-Powered Solutions</h2>
          <p className="text-gray-600 mb-8">
            Welcome to the future of digital success with our AI-powered tools. Take control of your digital footprint to enhance SEO and optimize advertising efforts, ensuring a powerful online presence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaChartLine className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reporting Set for Comprehensive Analysis</h3>
              <p className="text-gray-600">
                Uncover your online potential with free reporting and analysis for Google, Facebook, YouTube, and Instagram. Identify successful campaigns, address SEO issues, and implement fixes with ease.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaSearch className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Smart Comparison for Results</h3>
              <p className="text-gray-600">
                Confidently understand your advertising data. Our insightful comparison tools guide you in determining the most effective ad types. Streamline your campaigns for smarter results.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaRobot className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Maximize ROI with Smart Insights</h3>
              <p className="text-gray-600">
                Move beyond traditional metrics. Combine live reporting with unique sales data for a true Return on Investment. Pinpoint profitable campaigns and optimize your advertising budget.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Advertising Intelligence Hub</h3>
            <p className="text-gray-600 mb-8">
              Transform your online storefront with our modern, fast, and optimized websites for seamless display on all devices, boosting online prospect conversion.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="flex items-center space-x-2">
                <FaGoogle className="text-blue-600" />
                <span>Google Search Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGoogle className="text-blue-600" />
                <span>Google Display Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGoogle className="text-blue-600" />
                <span>Google Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaYoutube className="text-blue-600" />
                <span>YouTube Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGoogle className="text-blue-600" />
                <span>Google Shopping Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGoogle className="text-blue-600" />
                <span>Gmail Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaFacebook className="text-blue-600" />
                <span>Facebook Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaInstagram className="text-blue-600" />
                <span>Instagram Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaFacebook className="text-blue-600" />
                <span>Messenger Ads</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaGoogle className="text-blue-600" />
                <span>Advance Network Ads</span>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
                Book a Demo
              </button>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-6">Advanced Reporting</h3>
          <p className="text-gray-600 mb-8">
            Unlock more in-depth performance reporting and tools for your campaigns
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaTable className="text-blue-600 text-3xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">Full Campaign Data Tables</h4>
              <p className="text-gray-600">
                Analyse ad campaigns comprehensively with side-by-side comparisons, including objective, user journey, and spend metrics.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaClock className="text-blue-600 text-3xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">Real-Time Review</h4>
              <p className="text-gray-600">
                Compare campaigns side-by-side to see the big picture of your advertising efforts and discover what's working for you.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaSlidersH className="text-blue-600 text-3xl mb-4" />
              <h4 className="text-xl font-semibold mb-2">Customise Your Insights</h4>
              <p className="text-gray-600">
                Customise date ranges to evaluate specific advertising time frames and determine what strategies worked best for your business.
              </p>
            </div>
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

export default AdIntelligencePage; 