import React from 'react';
import { FaSearch, FaChartLine, FaUsers, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const SEOPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Elevate Your Google Rankings with Our SEO Power
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Surpass Competitors and Connect with Fresh Customers in the Digital Arena
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Free SEO Audit
          </button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <FaSearch className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Clear Strategy</h3>
              <p className="text-gray-600">Top-tier SEO strategy for search dominance</p>
            </div>
            <div className="text-center p-6">
              <FaUsers className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Find Customers</h3>
              <p className="text-gray-600">Attract new customers via Google search</p>
            </div>
            <div className="text-center p-6">
              <FaChartLine className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Increase Sales</h3>
              <p className="text-gray-600">Get ahead of the competition & increase sales</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Free Consultation</h2>
          <p className="text-xl text-gray-600 mb-8">
            Receive a free SEO advice and website audit
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Your Roadmap to Dominating Search Results and Enhanced Sales
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center">
            Boosting Your Online Presence for Business Growth
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Strategy</h3>
              <p className="text-gray-600">
                We'll craft a simple plan to boost your search rankings and drive sales without technical jargon.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Implementation</h3>
              <p className="text-gray-600">
                For a set monthly fee, we will execute your tailored strategy to enhance your online visibility.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Results</h3>
              <p className="text-gray-600">
                We'll monitor your website's performance on Google and provide monthly reports to keep you informed.
              </p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Success</h3>
              <p className="text-gray-600">
                Tap into new customer opportunities through Google search, stay ahead of the competition, and boost your sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Free SEO Audit Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Free SEO Audit</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            The dynamics of communication and information retrieval have been transformed by the internet. Your business's online presence serves as a crucial portal. If your customers can't locate you on the web, the risk of losing them to competitors is significant.
          </p>
          <p className="text-xl text-gray-600 mb-12 text-center">
            This is your opportunity to get to the top of the search results and increase sales. Contact us today to schedule your 100% FREE SEO consultation. In this initial session, you will learn:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Competitor Analysis</h3>
              <p className="text-gray-600">
                The performance of your website compared to competitors
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Google Search Success</h3>
              <p className="text-gray-600">
                Tactics for Google Search success
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Business Growth</h3>
              <p className="text-gray-600">
                Methods to expand your business and boost revenue
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8">
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

export default SEOPage;