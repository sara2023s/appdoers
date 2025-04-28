import React from 'react';
import { FaMobile, FaSearch, FaRocket, FaSync, FaShoppingCart, FaBell, FaCalendar, FaComments, FaServer, FaPalette, FaCode, FaUpload, FaBullhorn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const AppsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Increase Sales with Your Own Branded Mobile App
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We will design, build and deliver a revenue-generating app for your business
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            View Examples
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <FaMobile className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">One App, Every Device</h3>
              <p className="text-gray-600">Compatible across desktops, tablets, and mobile devices.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <FaSearch className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Easy To Find</h3>
              <p className="text-gray-600">Boost visibility and ensure easy findability on search engines.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <FaRocket className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Instant Access</h3>
              <p className="text-gray-600">Launch directly from a URL without the need to download from app stores.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <FaSync className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Always Up-To-Date</h3>
              <p className="text-gray-600">Access your app in its latest version at all times.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Advanced Feature Set</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand that your business is unique. Your app can include additional custom features designed around your business.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="text-center p-4">
              <FaShoppingCart className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Food Ordering</p>
            </div>
            <div className="text-center p-4">
              <FaBell className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Digital Loyalty</p>
            </div>
            <div className="text-center p-4">
              <FaShoppingCart className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Mobile Shopping</p>
            </div>
            <div className="text-center p-4">
              <FaBell className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Push Notifications</p>
            </div>
            <div className="text-center p-4">
              <FaComments className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Engaging Multimedia</p>
            </div>
            <div className="text-center p-4">
              <FaCalendar className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Appointments</p>
            </div>
            <div className="text-center p-4">
              <FaServer className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">3rd Party Integrations</p>
            </div>
            <div className="text-center p-4">
              <FaComments className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Dynamic Content</p>
            </div>
            <div className="text-center p-4">
              <FaComments className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Real-Time Chat</p>
            </div>
            <div className="text-center p-4">
              <FaServer className="text-blue-600 text-3xl mx-auto mb-3" />
              <p className="text-gray-700">Secure Hosting</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              View Example Apps
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">We Handle Everything From Start to Finish</h2>
            <p className="text-xl text-gray-600">
              Our skilled team of proficient developers will conceptualise, create, and launch your app
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <FaPalette className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Design</h3>
              <p className="text-gray-600">We will design your app to meet your brand guidelines and requirements.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <FaCode className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Build</h3>
              <p className="text-gray-600">Boost visibility and ensure easy findability on search engines.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <FaUpload className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Publish</h3>
              <p className="text-gray-600">We will publish your app, making it readily available for your customers to download.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <FaBullhorn className="text-blue-600 text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Promote</h3>
              <p className="text-gray-600">Drive increased bookings, reservations, mobile purchases, and more with our powerful solutions!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
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

export default AppsPage;