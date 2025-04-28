import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaLaptop, FaEnvelope, FaInbox, FaSearch, FaStar, 
  FaShareAlt, FaChartLine, FaUsers, FaList, FaMapMarkerAlt, 
  FaPhone, FaEnvelope as FaEnvelopeIcon, FaChevronRight,
  FaCheck, FaArrowRight
} from 'react-icons/fa';

const BusinessCenterProPage: React.FC = () => {
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
              Business Center Pro!
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Your All-In-One Solution for Seamless Local Business Growth
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1dd3b0' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#affc41] text-[#3c1642] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#affc41]/30"
            >
              Request a Free Demo
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Key Features Section */}
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
              Powerful Tools for Business Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Choose between our Pro and Standard solutions to match your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Pro Version */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border-2 border-[#1dd3b0]"
            >
              <h3 className="text-2xl font-bold text-[#3c1642] mb-6">Business Center Pro</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: FaEnvelope,
                    title: 'Campaigns Pro',
                    desc: 'Create customized email campaigns in minutes to engage your audience and boost conversions.'
                  },
                  {
                    icon: FaInbox,
                    title: 'Inbox Pro',
                    desc: 'Centralize all communications to capture more leads and improve conversions.'
                  },
                  {
                    icon: FaSearch,
                    title: 'Local SEO Pro',
                    desc: 'Optimize business profiles and rank for more keywords to get found faster.'
                  },
                  {
                    icon: FaStar,
                    title: 'Reputation Management Premium',
                    desc: 'Build a strong reputation with automated review collection and management.'
                  },
                  {
                    icon: FaShareAlt,
                    title: 'Social Marketing Pro',
                    desc: 'Post unlimited content across social platforms to enhance your online presence.'
                  },
                  {
                    icon: FaChartLine,
                    title: 'Advertising Intelligence',
                    desc: 'Optimize your ads with AI-powered intelligence to maximize ROI.'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-gradient-to-br from-[#1dd3b0] to-[#affc41] p-3 rounded-lg">
                      <feature.icon className="text-white text-xl" />
            </div>
                    <div>
                      <h4 className="font-semibold text-[#086375]">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
                  </motion.div>
                ))}
            </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-[#1dd3b0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#affc41] transition-all duration-300"
              >
                Get Started with Pro
              </motion.button>
            </motion.div>

            {/* Standard Version */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-[#3c1642] mb-6">Business Center Standard</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: FaUsers,
                    title: 'Integrated CRM',
                    desc: 'Manage customer relationships and streamline your business processes.'
                  },
                  {
                    icon: FaStar,
                    title: 'Reputation Management',
                    desc: 'Build trust with automated review collection and response management.'
                  },
                  {
                    icon: FaChartLine,
                    title: 'Advertising Intelligence',
                    desc: 'Track and optimize your advertising performance with smart insights.'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="bg-gradient-to-br from-[#1dd3b0] to-[#affc41] p-3 rounded-lg">
                      <feature.icon className="text-white text-xl" />
            </div>
                    <div>
                      <h4 className="font-semibold text-[#086375]">{feature.title}</h4>
                      <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
                  </motion.div>
                ))}
            </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-8 bg-[#1dd3b0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#affc41] transition-all duration-300"
              >
                Get Started with Standard
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Benefits Section */}
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
              Unlock Powerful Features for Business Growth
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Discover how our tools can transform your business operations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FaUsers,
                title: 'Build Customer Relationships',
                desc: 'Engage with customers using personalized, automated email marketing campaigns.'
              },
              {
                icon: FaChartLine,
                title: 'Boost Revenue with Smart CRM',
                desc: 'Improve customer service and streamline processes with centralized customer data.'
              },
              {
                icon: FaStar,
                title: 'Automated Reputation Management',
                desc: 'Collect reviews and respond in real-time to build trust.'
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
                <div className="bg-gradient-to-br from-[#1dd3b0] to-[#affc41] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <benefit.icon className="text-white text-2xl" />
            </div>
                <h3 className="text-xl font-semibold text-[#086375] mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Rated 5 stars by over 300 businesses for driving growth and increasing revenue
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "Business Center Pro has transformed how we manage our local business. The tools are intuitive and powerful.",
                author: "Sarah Johnson",
                role: "Marketing Director"
              },
              {
                quote: "The integration between tools is seamless. We've seen a 40% increase in customer engagement.",
                author: "Michael Chen",
                role: "Business Owner"
              },
              {
                quote: "The ROI on our investment has been incredible. The platform pays for itself.",
                author: "Emily Rodriguez",
                role: "Operations Manager"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-[#1dd3b0] text-xl" />
                  ))}
            </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-[#3c1642]">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
            </div>
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
            <h2 className="text-2xl font-bold text-[#3c1642] mb-6">Request a Demo</h2>
            <p className="text-gray-600 mb-8">
              Fill in the form to set up a meeting or call <a href="tel:+64225060870" className="text-[#1dd3b0] hover:text-[#affc41]">+64 22 5060 870</a>
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
                  placeholder="Message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#1dd3b0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#affc41] transition-all duration-300"
              >
                Submit
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
            <span>Request a Demo</span>
            <FaEnvelope />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default BusinessCenterProPage; 