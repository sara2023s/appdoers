import React from 'react';
import { FaLaptop, FaEnvelope, FaInbox, FaSearch, FaStar, FaShareAlt, FaChartLine, FaUsers, FaList, FaMapMarkerAlt, FaPhone, FaEnvelope as FaEnvelopeIcon } from 'react-icons/fa';

const BusinessCenterProPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Business Center Pro!
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Business Center Pro comprehensively supports every facet of local business growth, paving the way for a successful journey. From day-to-day operations to online presence, seamless integrations with industry-leading channels ensure efficiency and consistency for your local business clients.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Request a Demo
          </button>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
            <FaLaptop className="text-blue-600 text-6xl mx-auto mb-4" />
            <p className="text-gray-600">A laptop computer with a dashboard on the screen.</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaEnvelope className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Campaigns Pro</h3>
              <p className="text-gray-600">
                Create captivating, customised email campaigns in minutes with Campaigns Pro.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaInbox className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Inbox Pro</h3>
              <p className="text-gray-600">
                Increase lead capture and conversion by centralising communication in Inbox Pro.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaSearch className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local SEO Pro</h3>
              <p className="text-gray-600">
                Optimise business profiles and boost keyword rankings to get found faster with Local SEO Pro.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaStar className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Reputation Management</h3>
              <p className="text-gray-600">
                Collect more reviews to build an ironclad reputation with Reputation Management Premium.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaShareAlt className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Social Marketing Pro</h3>
              <p className="text-gray-600">
                Curate an engaging online presence with unlimited social posting from Social Marketing Pro.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaChartLine className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Advertising Intelligence</h3>
              <p className="text-gray-600">
                Effortlessly oversee your online presence with just a few clicks using Advertising Intelligence.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Email Marketing Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Email Marketing</h2>
          <p className="text-gray-600 mb-8">
            Email marketing is a powerful tool for businesses, allowing them to communicate directly with customers and prospects. It helps in building relationships, promoting products or services, and driving sales. By using email marketing platforms, companies can segment their audience, personalize messages, and track performance metrics. This targeted approach ensures that the right message reaches the right people at the right time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Builds customer relationships</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Promotes products/services</h3>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Tracks performance metrics</h3>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Integrated CRM Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Integrated CRM</h2>
          <p className="text-gray-600 mb-8">
            Customer Relationship Management (CRM) is essential for modern businesses, enabling them to manage interactions with current and potential customers efficiently. By leveraging CRM systems, companies can streamline processes, improve customer service, and boost profitability. CRM tools provide a centralised platform for tracking customer data, analysing interactions, and automating workflows.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Enhances customer service</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Streamlines business processes</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Centralises customer data</h3>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Choose a Plan</h2>
          <p className="text-gray-600 mb-8 text-center">
            Selecting the right Business App plan is crucial for meeting your company's needs and goals. Whether you opt for the Standard or Pro version, each plan offers a unique set of features designed to enhance your business operations and drive growth.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">BUSINESS APP Pro Toolkit</h3>
              <p className="text-gray-600 mb-6">Perfect for larger businesses or those seeking advanced functionalities</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <FaEnvelope className="text-blue-600 mr-2" />
                  <span>Campaigns Pro</span>
                </li>
                <li className="flex items-center">
                  <FaInbox className="text-blue-600 mr-2" />
                  <span>Inbox Pro</span>
                </li>
                <li className="flex items-center">
                  <FaShareAlt className="text-blue-600 mr-2" />
                  <span>Social Marketing</span>
                </li>
                <li className="flex items-center">
                  <FaUsers className="text-blue-600 mr-2" />
                  <span>Integrated CRM</span>
                </li>
                <li className="flex items-center">
                  <FaStar className="text-blue-600 mr-2" />
                  <span>Reputation Management</span>
                </li>
                <li className="flex items-center">
                  <FaUsers className="text-blue-600 mr-2" />
                  <span>Customer Voice</span>
                </li>
                <li className="flex items-center">
                  <FaList className="text-blue-600 mr-2" />
                  <span>Listing Builder</span>
                </li>
                <li className="flex items-center">
                  <FaChartLine className="text-blue-600 mr-2" />
                  <span>Advertising Intelligence</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">BUSINESS APP Standard</h3>
              <p className="text-gray-600 mb-6">Ideal for small to medium businesses, this plan provides essential tools</p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <FaUsers className="text-blue-600 mr-2" />
                  <span>Integrated CRM</span>
                </li>
                <li className="flex items-center">
                  <FaStar className="text-blue-600 mr-2" />
                  <span>Reputation Management</span>
                </li>
                <li className="flex items-center">
                  <FaUsers className="text-blue-600 mr-2" />
                  <span>Customer Voice</span>
                </li>
                <li className="flex items-center">
                  <FaList className="text-blue-600 mr-2" />
                  <span>Listing Builder</span>
                </li>
                <li className="flex items-center">
                  <FaChartLine className="text-blue-600 mr-2" />
                  <span>Advertising Intelligence</span>
                </li>
              </ul>
              <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Get Started
              </button>
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
                <FaEnvelopeIcon className="text-blue-600 mr-4 text-xl" />
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

export default BusinessCenterProPage; 