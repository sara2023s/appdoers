import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaFacebook, FaInstagram, FaYoutube, FaChartLine, FaSearch, FaFilter, FaEnvelope } from 'react-icons/fa';
import { handleFormSubmit } from '../utils/formHandler';

const AdIntelligencePage: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const result = await handleFormSubmit({
        ...formData,
        source: 'Ad Intelligence Page'
      });
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/intelligence.jpg"
            alt="Ad Intelligence Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#086375]/40 to-[#1dd3b0]/40 backdrop-blur-sm"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Unlock the Power of Ad Intelligence
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your advertising strategy with data-driven insights and AI-powered analytics.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#1dd3b0' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#affc41] text-[#3c1642] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#affc41]/30"
              >
                Book a Free Demo
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
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
              Optimize Your Digital Presence with AI-Powered Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Welcome to the future of digital success with our AI-powered tools. Take control of your digital footprint to enhance SEO and optimize advertising efforts, ensuring a powerful online presence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaChartLine,
                title: 'Reporting Set for Comprehensive Analysis',
                desc: 'Uncover your online potential with free reporting and analysis for Google, Facebook, YouTube, and Instagram. Identify successful campaigns, address SEO issues, and implement fixes with ease.'
              },
              {
                icon: FaSearch,
                title: 'Smart Comparison for Results',
                desc: 'Confidently understand your advertising data. Our insightful comparison tools guide you in determining the most effective ad types. Streamline your campaigns for smarter results.'
              },
              {
                icon: FaFilter,
                title: 'Maximize ROI with Smart Insights',
                desc: 'Move beyond traditional metrics. Combine live reporting with unique sales data for a true Return on Investment. Pinpoint profitable campaigns and optimize your advertising budget.'
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

      {/* Advertising Intelligence Hub */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#3c1642]/5 to-[#086375]/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c1642] mb-4">
              Advertising Intelligence Hub
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Transform your online storefront with our modern, fast, and optimized websites for seamless display on all devices, boosting online prospect conversion.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FaGoogle, name: 'Google Search Ads' },
              { icon: FaGoogle, name: 'Google Display Ads' },
              { icon: FaGoogle, name: 'Google Analytics' },
              { icon: FaYoutube, name: 'YouTube Ads' },
              { icon: FaGoogle, name: 'Google Shopping Ads' },
              { icon: FaGoogle, name: 'Gmail Ads' },
              { icon: FaFacebook, name: 'Facebook Ads' },
              { icon: FaInstagram, name: 'Instagram Ads' },
              { icon: FaFacebook, name: 'Messenger Ads' },
              { icon: FaFacebook, name: 'Advance Network Ads' }
            ].map((platform, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="text-[#1dd3b0] text-4xl mb-4">
                  <platform.icon />
                </div>
                <p className="text-gray-600">{platform.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Reporting Section */}
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
              Advanced Reporting
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Unlock more in-depth performance reporting and tools for your campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Full Campaign Data Tables',
                desc: 'Analyse ad campaigns comprehensively with side-by-side comparisons, including objective, user journey, and spend metrics.'
              },
              {
                title: 'Real-Time Review',
                desc: 'Compare campaigns side-by-side to see the big picture of your advertising efforts and discover what\'s working for you.'
              },
              {
                title: 'Customise Your Insights',
                desc: 'Customise date ranges to evaluate specific advertising time frames and determine what strategies worked best for your business.'
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
                <h3 className="text-xl font-semibold text-[#086375] mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-[#3c1642] mb-6">Let's talk about your project</h2>
            <p className="text-gray-600 mb-8">
              Fill in the form to set up a meeting or call <a href="tel:+64225060870" className="text-[#1dd3b0] hover:text-[#affc41]">+64 22 5060 870</a>
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                  placeholder="Full name"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                  placeholder="Phone number"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all h-32"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              {submitStatus === 'success' && (
                <div className="text-green-600 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-sm">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1dd3b0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#affc41] transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </motion.button>
            </form>
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
            <span>Book a Demo</span>
            <FaEnvelope />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default AdIntelligencePage; 