import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaChartLine, FaRobot, FaSearch, FaGlobe, FaUsers, FaEnvelope, FaCheck } from 'react-icons/fa';
import { handleFormSubmit } from '../utils/formHandler';

const ReviewBuilderPage: React.FC = () => {
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
        source: 'Review Builder Page'
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#086375] to-[#1dd3b0] opacity-90 backdrop-blur-sm">
          <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
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
              Power Your Online Reputation
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Manage, monitor, and improve your online reputation effortlessly
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1dd3b0' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#affc41] text-[#3c1642] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#affc41]/30"
            >
              Book a Free Demo
            </motion.button>
          </motion.div>

          {/* Floating Testimonial Slider */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mt-12"
          >
            {[
              "Increased our 5-star reviews by 40% in just 3 months!",
              "Customer feedback helped us improve our services significantly.",
              "Our online reputation has never been better!"
            ].map((quote, index) => (
              <motion.div
                key={index}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#affc41] text-xl" />
                  ))}
                </div>
                <p className="text-white italic">"{quote}"</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: FaStar,
                title: 'Centralized Reviews',
                desc: 'Monitor all reviews from various platforms in one place and respond quickly using customizable templates.'
              },
              {
                icon: FaChartLine,
                title: 'Automated Reports',
                desc: 'Track service success and gather feedback automatically with Customer Voice for actionable insights.'
              },
              {
                icon: FaRobot,
                title: 'Sentiment Analysis',
                desc: 'AI-powered insights to identify strengths and opportunities for improvement based on reviews.'
              },
              {
                icon: FaGlobe,
                title: 'Web Monitoring',
                desc: 'Track brand mentions and reviews across social media, news outlets, and more.'
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

      {/* Customer Voice Section */}
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
              Boost Your Online Reputation with Customer Voice
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Collect reviews effortlessly and maximize your online presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaEnvelope,
                title: 'Collect Reviews Effortlessly',
                desc: 'Request reviews via text or email with customizable templates.'
              },
              {
                icon: FaSearch,
                title: 'Maximize SEO Benefits',
                desc: 'Enhance your search rankings with positive customer feedback.'
              },
              {
                icon: FaUsers,
                title: 'Attract New Customers',
                desc: 'Build trust and increase visibility with authentic reviews.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-[#1dd3b0] text-4xl mb-6">
                  <benefit.icon />
                </div>
                <h3 className="text-xl font-semibold text-[#086375] mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Analysis Section */}
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
              Stay Ahead of the Competition
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Evaluate how your business stacks up against your competitors in search rankings and customer sentiment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#086375] mb-4">Review Ratings Comparison</h3>
              <div className="space-y-4">
                {['Your Business', 'Competitor A', 'Competitor B'].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{item}</span>
                    <div className="flex items-center">
                      <span className="text-[#1dd3b0] mr-2">4.8</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-[#1dd3b0] text-sm" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold text-[#086375] mb-4">Sentiment Analysis</h3>
              <div className="space-y-4">
                {['Positive', 'Neutral', 'Negative'].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600">{item}</span>
                    <div className="w-48 bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-[#1dd3b0] h-2.5 rounded-full"
                        style={{ width: `${[75, 20, 5][index]}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SEO & Business Listings Section */}
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
              Boost Your Local SEO with Accurate Listings
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Optimize your online presence by correcting inaccuracies in business listings across Google, Facebook, and Bing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Verify business information",
              "Update contact details",
              "Add business hours",
              "Upload high-quality images",
              "Respond to customer reviews",
              "Monitor listing performance"
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-4"
              >
                <FaCheck className="text-[#1dd3b0] text-xl" />
                <span className="text-gray-600">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              See how businesses like yours have transformed their online reputation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#1dd3b0] text-xl" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "In just 3 months, we increased our 5-star reviews by 40% and saw a 20% boost in customer conversions."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-[#3c1642]">John Smith</p>
                  <p className="text-gray-500">Marketing Director</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-[#1dd3b0] text-xl" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "The platform helped us identify areas for improvement and increased our customer satisfaction significantly."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <p className="font-semibold text-[#3c1642]">Sarah Johnson</p>
                  <p className="text-gray-500">Business Owner</p>
                </div>
              </div>
            </motion.div>
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
            <h2 className="text-2xl font-bold text-[#3c1642] mb-6">Let's Get Your Reputation on Track</h2>
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

export default ReviewBuilderPage; 