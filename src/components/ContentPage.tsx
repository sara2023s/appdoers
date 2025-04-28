import React from 'react';
import { FaPen, FaChartLine, FaSync, FaUsers, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContentPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Elevate Your Message & Boost Your Brand
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Transform your messaging with our specialised approach, and let your brand story resonate with customers like never before
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Book a Session
          </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Clarify Your Business Message</h2>
              <p className="text-gray-600">
                Businesses that effectively communicate their brand message tend to achieve higher sales. Our team is equipped to offer you a reliable framework that guides you in refining your message, enabling you to captivate your target audience. Elevate your marketing content for greater effectiveness and, in turn, boost your revenue.
              </p>
              <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Book a Session
              </button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaChartLine className="text-blue-600 text-3xl mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Increase Revenue</h3>
                <p className="text-gray-600">Generate more business with clear brand messaging</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaSync className="text-blue-600 text-3xl mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Synchronise Messaging</h3>
                <p className="text-gray-600">Improve brand awareness via consistent communication</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaPen className="text-blue-600 text-3xl mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Eliminate Confusion</h3>
                <p className="text-gray-600">Communicate with your customers in a clear and effective way</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <FaUsers className="text-blue-600 text-3xl mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Connect with Customers</h3>
                <p className="text-gray-600">Improve brand awareness via consistent communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
          <p className="text-xl text-gray-600">Happy Clients</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Transform Your Message?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Unlock the power of persuasive storytelling with us. Let us amplify your brand voice, connect with your audience, and drive the results you desire. Through our meticulous and personalised approach, we don't just craft narratives; we sculpt compelling stories that resonate authentically.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today to discuss how our copywriting services can elevate your business to new heights.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
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

export default ContentPage; 