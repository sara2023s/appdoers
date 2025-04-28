import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGoogle, FaFacebook, FaInstagram, FaTwitter,
  FaMapMarkerAlt, FaShieldAlt, FaSync,
  FaQuoteLeft, FaChevronRight, FaChartBar
} from 'react-icons/fa';

const ListingBuilderPage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#086375] to-[#1dd3b0] opacity-90">
          <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
          {/* Animated Background Icons */}
          <div className="absolute inset-0 flex justify-center items-center opacity-10">
            {[FaMapMarkerAlt, FaGoogle, FaFacebook, FaInstagram].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-white text-6xl mx-8"
              >
                <Icon />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Enhance Your Local Presence
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Easily manage and optimize business listings with Listing Sync.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#086375' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1dd3b0] text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#1dd3b0]/30"
            >
              Book a Free Demo
            </motion.button>
          </motion.div>

          {/* Platform Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8"
          >
            {[FaGoogle, FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
              <motion.div
                key={index}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className="text-white text-4xl"
              >
                <Icon />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c1642] mb-4">
              Features and Benefits
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools to simplify your listing management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaSync,
                title: 'One-Click Listing Generation',
                desc: 'Create and update listings on 25+ platforms with a single click.'
              },
              {
                icon: FaShieldAlt,
                title: 'Protection Against Changes',
                desc: 'Automatically restore your listings if third parties change your business info.'
              },
              {
                icon: FaMapMarkerAlt,
                title: 'Centralized Updates',
                desc: 'Manage all your listings from one simple, intuitive dashboard.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#1dd3b0] to-[#affc41] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <feature.icon className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#086375] mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Sync Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c1642] mb-4">
              Sync to Major Platforms
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sync listings instantly across popular platforms like Google, Facebook, Instagram, Twitter, and more.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[FaGoogle, FaFacebook, FaInstagram, FaTwitter].map((Icon, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-white p-6 rounded-xl shadow-lg flex items-center justify-center"
              >
                <Icon className="text-4xl text-[#086375]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Listings Matter Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c1642] mb-4">
              Why Accurate Listings Matter
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <FaChartBar className="text-4xl text-[#1dd3b0]" />
                  <div>
                    <h3 className="text-2xl font-bold text-[#086375]">80%</h3>
                    <p className="text-gray-600">of consumers use search engines for local info</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <FaChartBar className="text-4xl text-[#1dd3b0]" />
                  <div>
                    <h3 className="text-2xl font-bold text-[#086375]">50%</h3>
                    <p className="text-gray-600">act within 24 hours of finding local info</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <p className="text-gray-600 mb-4">
                Incorrect listings mean lost sales, frustrated consumers, and lower rankings.
              </p>
              <p className="text-gray-600">
                Accurate listings are key to building trust and improving your local rankings.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-r from-[#3c1642] to-[#086375]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Success Stories
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-2xl mx-auto"
          >
            <FaQuoteLeft className="text-[#1dd3b0] text-4xl mb-4" />
            <p className="text-white text-xl mb-4">
              "We increased local foot traffic by 40% after implementing Listing Sync for our business."
            </p>
            <div className="text-white/80">
              <div className="font-semibold">John Smith</div>
              <div>Owner, Local Cafe</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1dd3b0]/10 to-[#affc41]/10"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3c1642] mb-4">
                Let's Enhance Your Local Presence
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Fill in the form to set up a meeting or call +64 22 5060 870.
              </p>
              <form className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                    placeholder="Full name"
                  />
                </div>
                <div className="relative">
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                    placeholder="Phone number"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                    placeholder="Email"
                  />
                </div>
                <div className="relative">
                  <textarea
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all h-32"
                    placeholder="Tell us about your business"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1dd3b0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#affc41] transition-all duration-300"
                >
                  Book a Demo Now
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Floating CTA Button */}
      {isScrolled && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1dd3b0] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-[#affc41] transition-all duration-300 flex items-center space-x-2"
          >
            <span>Book a Free Demo</span>
            <FaChevronRight />
          </motion.button>
        </motion.div>
      )}

      {/* Footer CTA */}
      <section className="py-12 px-4 md:px-8 bg-[#3c1642]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ensure your business is accurately represented online
          </h2>
          <p className="text-white/80 mb-6">
            Trusted by over 500 businesses worldwide
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#1dd3b0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#affc41] transition-all duration-300"
          >
            Book a Free Demo
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default ListingBuilderPage; 