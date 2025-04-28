import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaDesktop, FaSearch, FaShoppingCart,
  FaChartLine, FaRocket, FaServer, FaUsers,
  FaCheck
} from 'react-icons/fa';

const WebsitesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden pt-24">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3c1642] via-[#086375] to-[#1dd3b0]">
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
        <div className="relative max-w-6xl mx-auto h-full flex items-center px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}
              >
                Increase Sales with Your Own Branded Mobile App
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto md:mx-0 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Custom apps designed to captivate your customers and grow your business.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#3c1642] font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                View Example Apps
              </motion.button>
            </motion.div>

            {/* Website Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block"
            >
              <img
                src="/images/website hero.png"
                alt="Website Hero"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative">
              <img 
                src="/images/website image.jpg" 
                alt="Modern Website Design" 
                className="w-full h-auto rounded-lg border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3c1642] mb-6">
                Revamp Your Online Presence
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Transform your online storefront into a powerful conversion machine. Our websites are designed to engage visitors and turn them into loyal customers.
              </p>
              <div className="space-y-4">
                {[
                  "Stunning, responsive designs",
                  "Lightning-fast performance",
                  "SEO-optimized structure",
                  "Conversion-focused layouts"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <FaCheck className="text-[#1dd3b0] text-xl" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Simplify Your Website Management
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run your website efficiently
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaDesktop, title: 'Responsive Design', desc: 'Looks perfect on any device' },
              { icon: FaSearch, title: 'SEO Optimized', desc: 'Rank higher in search results' },
              { icon: FaShoppingCart, title: 'eCommerce Ready', desc: 'Sell products online easily' },
              { icon: FaChartLine, title: 'Analytics', desc: 'Track visitor behavior' },
              { icon: FaRocket, title: 'Fast Performance', desc: 'Lightning-fast loading times' },
              { icon: FaServer, title: 'Secure Hosting', desc: 'Reliable and secure infrastructure' }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
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

      {/* Website Examples Section */}
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
              Our Work Speaks for Itself
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check out some of our recent website projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <img 
                src="/images/websites showcase.jpg" 
                alt="Websites Showcase"
                className="w-full h-auto rounded-lg border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <img 
                src="/images/showcase 2.jpg" 
                alt="Websites Showcase 2"
                className="w-full h-auto rounded-lg border-4 border-white shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketing Flow Section */}
      <section className="py-20 px-4 md:px-8 bg-[#b2ff9e]/10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c1642] mb-4">
              Intelligent Marketing Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Turn visitors into loyal customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUsers,
                title: 'Triggers',
                desc: 'Engage at the perfect moment',
                color: '#3c1642'
              },
              {
                icon: FaRocket,
                title: 'Actions',
                desc: 'Deliver powerful experiences',
                color: '#086375'
              },
              {
                icon: FaChartLine,
                title: 'Conversions',
                desc: 'Turn visitors into loyal customers',
                color: '#1dd3b0'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <div className="bg-gradient-to-br from-[#1dd3b0] to-[#affc41] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <step.icon className="text-white text-2xl" />
            </div>
                <h3 className="text-xl font-semibold text-[#086375] mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
                Let's build your dream website together!
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
                    placeholder="Tell us about your project"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1dd3b0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#affc41] transition-all duration-300"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebsitesPage;