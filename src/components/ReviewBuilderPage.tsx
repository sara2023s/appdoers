import React from 'react';
import { FaStar, FaChartBar, FaRobot, FaSearch, FaUsers, FaGlobe, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const ReviewBuilderPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Power your online reputation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Manage, monitor, and improve your online reputation
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Online Reputation Management</h2>
          <p className="text-gray-600 mb-8">
            In today's digital age, your online reputation can make or break your business. That's why we offer a comprehensive Reputation Management service that brings together all the crucial elements affecting your online presence, empowering you to take control and shape a positive image for your brand.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaStar className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Centralised Reviews</h3>
              <p className="text-gray-600">
                Get reviews from various sites, respond quickly with built-in suggestions, and customise your own responses.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaChartBar className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Automated Reports</h3>
              <p className="text-gray-600">
                Gather feedback effortlessly with Customer Voice for easy understanding of your service's success.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaRobot className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sentiment Analysis</h3>
              <p className="text-gray-600">
                AI analyses reviews to identify strengths and areas for improvement, turning insights into actionable strategies.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaSearch className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Monitoring</h3>
              <p className="text-gray-600">
                Track mentions across news, blogs, and social networks. Engage with Google Q&A directly from the dashboard.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaUsers className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Competition Analysis</h3>
              <p className="text-gray-600">
                Evaluate your performance against competitors in search rankings, review ratings, and social comparisons.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaGlobe className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Online Presence Optimization</h3>
              <p className="text-gray-600">
                Identify and correct inaccuracies in business listings on Google, Facebook, and Bing to improve search rank.
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Book a Demo
            </button>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Customer Voice</h3>
            <p className="text-gray-600 mb-6">
              Online reviews are crucial for local business success, with nearly 90% of consumers considering 3-5 star ratings. Our business tool streamlines feedback collection to enhance online reputation, attract new customers, and save time. Leverage happy customers, collect valuable feedback, and boost your presence on popular review sites.
            </p>
            <p className="text-gray-600">
              Maximize SEO benefits and reach customers through Customer Voice, offering flexibility in review requests via text or email. Enhance trust, visibility, and business growth with positive customer experiences.
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

export default ReviewBuilderPage; 