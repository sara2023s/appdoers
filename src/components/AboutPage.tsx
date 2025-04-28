import React, { useRef } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaChessKnight, 
  FaSearch, 
  FaComments, 
  FaRocket, 
  FaBullseye, 
  FaCompass, 
  FaHeart,
  FaClock,
  FaSmile,
  FaChartLine
} from 'react-icons/fa';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#086375]/80 to-[#1dd3b0]/80" />
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute w-64 h-64 rounded-full bg-white/10"
              animate={{
                x: [0, 100, 0],
                y: [0, 50, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute w-96 h-96 rounded-full bg-white/5"
              animate={{
                x: [100, 0, 100],
                y: [50, 0, 50],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6 font-poppins"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
            >
              Turning Ideas into Beautiful Digital Realities
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Over 20 years of experience helping businesses thrive in a digital-first world.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 bg-white" ref={statsRef}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-card">
            <FaClock className="text-4xl text-[#1dd3b0] mx-auto mb-4" />
            <div className="text-5xl font-bold text-[#3c1642] mb-2 stats-counter">
              {statsInView ? "20+" : "0"}
            </div>
            <div className="text-lg font-normal text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-card">
            <FaSmile className="text-4xl text-[#1dd3b0] mx-auto mb-4" />
            <div className="text-5xl font-bold text-[#3c1642] mb-2 stats-counter">
              {statsInView ? "99.7%" : "0%"}
            </div>
            <div className="text-lg font-normal text-gray-600">Customer Satisfaction</div>
          </div>
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-card">
            <FaChartLine className="text-4xl text-[#1dd3b0] mx-auto mb-4" />
            <div className="text-5xl font-bold text-[#3c1642] mb-2 stats-counter">
              {statsInView ? "12x" : "0x"}
            </div>
            <div className="text-lg font-normal text-gray-600">Revenue Growth</div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -top-4 -left-4 bg-[#affc41] text-[#3c1642] px-4 py-2 rounded-lg font-semibold shadow-lg z-10">
                Our Team
              </div>
              <div className="relative overflow-hidden rounded-xl shadow-xl group">
                <img 
                  src="https://images.pexels.com/photos/3182765/pexels-photo-3182765.jpeg" 
                  alt="AppDoers Team" 
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3c1642]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-medium">Dedicated to Your Success</p>
                    <p className="text-sm opacity-90">Our team of experts is ready to help you achieve your digital goals</p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Who Are We?</h2>
              <p className="text-xl font-normal text-gray-600 leading-relaxed mb-6">
                At AppDoers, we craft powerful digital marketing solutions backed by two decades of expertise. Our passionate team helps brands grow stronger, reach further, and connect deeper with their audiences.
              </p>
              <p className="text-xl font-normal text-gray-600 leading-relaxed">
                From SEO to social media management, we deliver results that exceed expectations. Unlock your brand's potential with us.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 stagger-animation">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-card">
              <FaChessKnight className="text-4xl text-[#1dd3b0] mb-4" />
              <h3 className="text-xl font-semibold mb-4">Digital Strategy</h3>
              <p className="text-gray-600 font-normal">Crafting winning digital strategies that drive growth and engagement.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-card">
              <FaSearch className="text-4xl text-[#1dd3b0] mb-4" />
              <h3 className="text-xl font-semibold mb-4">SEO & Content</h3>
              <p className="text-gray-600 font-normal">Optimizing your online presence for maximum visibility and impact.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-card">
              <FaComments className="text-4xl text-[#1dd3b0] mb-4" />
              <h3 className="text-xl font-semibold mb-4">Social Media</h3>
              <p className="text-gray-600 font-normal">Building meaningful connections through strategic social engagement.</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-card">
              <FaRocket className="text-4xl text-[#1dd3b0] mb-4" />
              <h3 className="text-xl font-semibold mb-4">Brand Development</h3>
              <p className="text-gray-600 font-normal">Creating compelling brand stories that resonate with your audience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-animation">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-card hover:bg-[#affc41]/10">
              <FaBullseye className="text-4xl text-[#1dd3b0] mb-4" />
              <div className="text-2xl font-bold text-[#3c1642] mb-4">01</div>
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600 font-normal">
                Empowering businesses to thrive in the digital age by delivering tailored marketing solutions backed by unparalleled expertise and dedication to client success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-card hover:bg-[#affc41]/10">
              <FaCompass className="text-4xl text-[#1dd3b0] mb-4" />
              <div className="text-2xl font-bold text-[#3c1642] mb-4">02</div>
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600 font-normal">
                We lead with groundbreaking digital strategies, redefining industry standards, and driving transformative growth for our current and new clients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover-card hover:bg-[#affc41]/10">
              <FaHeart className="text-4xl text-[#1dd3b0] mb-4" />
              <div className="text-2xl font-bold text-[#3c1642] mb-4">03</div>
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600 font-normal">
                Our values drive every aspect, ensuring we exceed expectations, deliver tangible results, and uphold integrity, innovation, and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3c1642]/5 via-[#086375]/5 to-[#1dd3b0]/5"></div>
        <div className="relative max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Let's talk about your project</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Full name</label>
                  <input 
                    type="text" 
                    className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Phone number</label>
                  <input 
                    type="tel" 
                    className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-gray-700 font-medium">Message</label>
                  <textarea 
                    className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all duration-300 h-32"
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <button className="w-full btn-primary text-lg font-semibold">
                  Send Message
                </button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-2xl text-[#1dd3b0] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-gray-600 font-normal">New Plymouth, Taranaki, New Zealand</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaPhone className="text-2xl text-[#1dd3b0] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-gray-600 font-normal">+64 22 5060 870</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-2xl text-[#1dd3b0] mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-gray-600 font-normal">contact@appdoers.co.nz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;