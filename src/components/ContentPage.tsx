import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaPen, FaBullhorn, FaHeart,
  FaCheck, FaLock, FaQuoteLeft
} from 'react-icons/fa';

const ContentPage: React.FC = () => {
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const animateCounter = () => {
      if (clientCount < 500) {
        setClientCount(prev => Math.min(prev + 5, 500));
      }
    };

    const interval = setInterval(animateCounter, 20);
    return () => clearInterval(interval);
  }, [clientCount]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-4 md:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#086375] via-[#1dd3b0] to-[#affc41] opacity-90">
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
              Amplify Your Message. Elevate Your Brand.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 italic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transform your brand messaging with powerful storytelling that drives action and sales.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#1dd3b0' }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#affc41] text-[#3c1642] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#affc41]/30"
            >
              Book a Free Messaging Strategy Session
            </motion.button>
          </motion.div>

          {/* Animated Keywords */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8"
          >
            {['Transform', 'Drive Action', 'Sales'].map((word, index) => (
              <motion.div
                key={index}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
                className="text-white text-xl font-semibold"
              >
                {word}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Benefits Section */}
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
              Transform Your Brand Messaging
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful strategies that drive real results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaPen,
                title: 'Clarify Your Business Message',
                desc: 'Speak directly to your audience\'s heart. Boost your sales by refining your message.'
              },
              {
                icon: FaBullhorn,
                title: 'Synchronize Messaging',
                desc: 'Build consistency across all touchpoints and enhance brand recognition.'
              },
              {
                icon: FaHeart,
                title: 'Eliminate Confusion',
                desc: 'Deliver a clear, engaging, and persuasive message every time.'
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
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="text-4xl font-bold text-[#1dd3b0] mb-4">
              {clientCount}+
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c1642] mb-4">
              Happy Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what our clients have to say about their success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Our sales increased 20% within 3 months after working with AppDoers!",
                name: "Sarah Johnson",
                role: "CEO, TechStart"
              },
              {
                quote: "The messaging strategy transformed our brand's voice and customer engagement.",
                name: "Michael Chen",
                role: "Marketing Director, GrowthCo"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <FaQuoteLeft className="text-[#1dd3b0] text-4xl mb-4" />
                <p className="text-xl text-gray-600 mb-4">{testimonial.quote}</p>
                <div className="font-semibold text-[#086375]">
                  {testimonial.name}
                </div>
                <div className="text-gray-500">
                  {testimonial.role}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Transform Section */}
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
              Ready to Transform Your Brand's Message?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Let's Get Started
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Proven Framework for Clarity',
              'Personalized Messaging Strategy',
              'Direct Impact on Sales & Engagement'
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl"
              >
                <FaCheck className="text-[#1dd3b0] text-2xl mb-4" />
                <p className="text-white text-lg">{item}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1dd3b0] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#affc41] transition-all duration-300 hover:shadow-lg hover:shadow-[#affc41]/30"
            >
              Schedule Your Free Strategy Session Today
            </motion.button>
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
                Ready to Craft Your Brand's Story?
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
                  Let's Talk About Your Brand
                </motion.button>
              </form>
              <div className="mt-6 flex items-center justify-center space-x-4 text-sm text-gray-500">
                <FaLock className="text-[#1dd3b0]" />
                <span>100% Privacy Guaranteed</span>
                <span>•</span>
                <span>Secure Data Handling</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContentPage; 