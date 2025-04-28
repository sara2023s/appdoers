import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaGoogle, FaMobile, FaRobot, FaComments, FaShoppingCart, FaHeadset, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const SocialMarketingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Simplify Your Social Media Journey
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Effortlessly navigate the world of social media with our simplified approach, making your journey seamless and enjoyable
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Streamline Your Social Presence</h2>
          <p className="text-gray-600 mb-6">
            Managing social media can be a daunting task, especially when you're juggling multiple platforms and striving to maintain a consistent online presence.
          </p>
          <p className="text-gray-600 mb-8">
            We understand the challenges businesses face in the ever-evolving landscape of social media. That's why we've developed a comprehensive solution to simplify your social marketing efforts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex space-x-4 mb-4">
                <FaFacebook className="text-blue-600 text-2xl" />
                <FaInstagram className="text-pink-600 text-2xl" />
                <FaGoogle className="text-green-600 text-2xl" />
                <FaTwitter className="text-blue-400 text-2xl" />
                <FaLinkedin className="text-blue-700 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Post everywhere from one place</h3>
              <p className="text-gray-600">
                Publish and schedule posts for all your social accounts including Facebook, Instagram, Google My Business, Twitter, and LinkedIn
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaComments className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Engage your followers</h3>
              <p className="text-gray-600">
                Simplify engagement by responding to customers, sharing pre-made content, and fostering stronger social connections
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaShoppingCart className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Boost e-commerce on Instagram</h3>
              <p className="text-gray-600">
                Transform Instagram posts into a shoppable gallery with Clickable.bio, converting social media fans into customers
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaRobot className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Content Creation</h3>
              <p className="text-gray-600">
                Utilise powerful AI technology to easily and quickly create new posts relevant to the audience
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaHeadset className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Deliver stellar customer service</h3>
              <p className="text-gray-600">
                Easily communicate with customers by managing post comments and mentions within Social Marketing
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FaMobile className="text-blue-600 text-3xl mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile-friendly</h3>
              <p className="text-gray-600">
                Accessible on any device. This enables you to post and respond promptly, ensuring you never miss a moment
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready for Social Media Excellence?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Say goodbye to the complexities of social media management. Our mission goes beyond simplifying your social marketing journey; we empower you with a comprehensive suite of cutting-edge tools tailored to navigate the complexities of the digital landscape.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join a thriving community of businesses that have already harnessed innovative solutions to not only streamline their social media efforts but also achieve heightened efficiency, enhanced engagement, and unprecedented success in the dynamic world of online presence.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
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

export default SocialMarketingPage; 