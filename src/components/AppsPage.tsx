import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMobile, FaSearch, FaRocket, FaSync, 
  FaShoppingCart, FaBell, FaCalendar, FaComments, 
  FaServer, FaPalette, FaCode, FaUpload, 
  FaBullhorn, FaChartLine
} from 'react-icons/fa';

const AppsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 md:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3c1642] via-[#086375] to-[#1dd3b0] opacity-90">
          <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Increase Sales with Your Own Branded Mobile App
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12">
              Custom apps designed to captivate your customers and grow your business.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1dd3b0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#affc41] transition-all duration-300 hover:shadow-lg hover:shadow-[#affc41]/30"
            >
              View Example Apps
            </motion.button>
          </motion.div>

          {/* App Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div whileHover={{ rotate: 5 }} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <img src="/mockup-phone.png" alt="Mobile App on Phone" className="w-full" />
              </motion.div>
              <motion.div whileHover={{ rotate: -5 }} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <img src="/mockup-tablet.png" alt="Mobile App on Tablet" className="w-full" />
              </motion.div>
              <motion.div whileHover={{ rotate: 5 }} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4">
                <img src="/mockup-desktop.png" alt="Mobile App on Desktop" className="w-full" />
              </motion.div>
            </div>
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
              One App, Every Device
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your app works seamlessly across all platforms and devices
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-[#1dd3b0] to-[#affc41] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaMobile className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#086375] mb-4">One App, Every Device</h3>
              <p className="text-gray-600">Compatible across desktops, tablets, and mobile devices.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-[#1dd3b0] to-[#affc41] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaSearch className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#086375] mb-4">Easy To Find</h3>
              <p className="text-gray-600">Boost visibility and ensure easy findability on search engines.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-[#1dd3b0] to-[#affc41] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaRocket className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#086375] mb-4">Instant Access</h3>
              <p className="text-gray-600">Launch directly from a URL without the need to download from app stores.</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-[#1dd3b0] to-[#affc41] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaSync className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-[#086375] mb-4">Always Up-To-Date</h3>
              <p className="text-gray-600">Access your app in its latest version at all times.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
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
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to engage your customers and grow your business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: FaShoppingCart, title: 'Food Ordering', desc: 'Easy ordering and payment processing' },
              { icon: FaBell, title: 'Push Notifications', desc: 'Keep customers engaged with timely updates' },
              { icon: FaCalendar, title: 'Booking System', desc: 'Streamline appointments and reservations' },
              { icon: FaComments, title: 'Live Chat', desc: 'Real-time customer support and communication' },
              { icon: FaServer, title: 'Cloud Storage', desc: 'Secure data storage and management' },
              { icon: FaChartLine, title: 'Analytics', desc: 'Track user behavior and app performance' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#1dd3b0] to-[#affc41] p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  <feature.icon className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#086375] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              We Handle Everything
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From concept to launch, we're with you every step of the way
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: FaPalette, title: 'Design', desc: 'We will design your app to meet your brand guidelines' },
              { icon: FaCode, title: 'Build', desc: 'Our skilled developers bring your vision to life' },
              { icon: FaUpload, title: 'Publish', desc: 'We handle the publishing process for you' },
              { icon: FaBullhorn, title: 'Promote', desc: 'Drive engagement and growth with our marketing expertise' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-8 rounded-xl ${
                  index % 2 === 0 ? 'bg-[#b2ff9e]/10' : 'bg-white'
                } shadow-lg hover:shadow-xl transition-all duration-300`}
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

      {/* Stats Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="text-4xl font-bold text-[#1dd3b0] mb-4">500+</div>
              <div className="text-xl text-gray-600">Apps Launched</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="text-4xl font-bold text-[#1dd3b0] mb-4">98%</div>
              <div className="text-xl text-gray-600">Client Satisfaction</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="text-4xl font-bold text-[#1dd3b0] mb-4">12x</div>
              <div className="text-xl text-gray-600">Average ROI Increase</div>
            </motion.div>
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
                Have an app idea? Let's bring it to life!
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

export default AppsPage;