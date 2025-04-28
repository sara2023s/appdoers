import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaFacebook, FaInstagram, FaTwitter, FaLinkedin,
  FaCalendarAlt, FaComments, FaShoppingCart,
  FaQuoteLeft, FaChevronRight
} from 'react-icons/fa';
import { handleFormSubmit } from '../utils/formHandler';

const SocialMarketingPage: React.FC = () => {
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
        source: 'Social Marketing Page'
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
              >
                Simplify Your Social Media Journey
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Effortlessly manage, engage, and boost your social presence with our seamless tools.
              </motion.p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: '#1dd3b0' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#affc41] text-[#3c1642] px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#affc41]/30"
              >
                Book a Free Demo
              </motion.button>
            </motion.div>

            {/* Social Marketing Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden md:block mt-8"
            >
              <img
                src="/images/social.png"
                alt="Social Marketing Hero"
                className="w-full h-auto rounded-lg transform scale-125"
              />
            </motion.div>
          </div>

          {/* Social Media Icons Animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center space-x-8 mt-2"
          >
            {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, index) => (
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

      {/* Streamline Your Social Presence Section */}
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
              Streamline Your Social Presence
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful tools to simplify your social media management
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: FaCalendarAlt,
                title: 'Post Everywhere from One Place',
                desc: 'Manage all your platforms effortlessly in one place.'
              },
              {
                icon: FaComments,
                title: 'Engage Your Followers',
                desc: 'Drive customer loyalty with instant engagement and response.'
              },
              {
                icon: FaShoppingCart,
                title: 'Boost E-commerce on Instagram',
                desc: 'Turn Instagram posts into revenue-generating opportunities.'
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

      {/* AI-Powered Content Creation Section */}
      <section className="py-20 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-[#3c1642] mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              AI-Powered Content Creation
            </motion.h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Create high-quality content tailored for your audience instantly.
            </p>
          </motion.div>

          {/* AI Content Generation Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
          >
            <div className="animate-pulse flex space-x-4">
              <div className="flex-1 space-y-4 py-1">
                <div className="h-4 bg-[#1dd3b0]/20 rounded w-3/4"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-[#1dd3b0]/20 rounded"></div>
                  <div className="h-4 bg-[#1dd3b0]/20 rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </motion.div>
            </div>
      </section>

      {/* Mobile Experience Section */}
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
              Seamless Mobile Experience
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Manage your social presence on the go—accessible anytime, anywhere.
            </p>
          </motion.div>

          {/* Mobile Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto"
          >
            <div className="bg-[#3c1642] rounded-[40px] p-4 shadow-2xl">
              <div className="bg-white rounded-[30px] overflow-hidden">
                <div className="h-[600px] bg-gradient-to-b from-[#086375] to-[#1dd3b0] p-4">
                  {/* Mobile Interface Content */}
                  <div className="space-y-4">
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="h-4 bg-white/40 rounded w-3/4 mb-2"></div>
                      <div className="h-4 bg-white/40 rounded w-1/2"></div>
            </div>
                    <div className="bg-white/20 rounded-lg p-4">
                      <div className="h-4 bg-white/40 rounded w-2/3 mb-2"></div>
                      <div className="h-4 bg-white/40 rounded w-1/3"></div>
            </div>
            </div>
            </div>
          </div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Excellence Section */}
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
              Take the Complexity Out of Social Media Management
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Join the businesses that trust us to simplify and elevate their social presence.
            </p>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-xl max-w-2xl mx-auto"
          >
            <FaQuoteLeft className="text-[#1dd3b0] text-4xl mb-4" />
            <p className="text-white text-xl mb-4">
              "Since using AppDoers, we've seen a 50% increase in social engagement and a 30% boost in sales."
            </p>
            <div className="text-white/80">
              <div className="font-semibold">Sarah Johnson</div>
              <div>Marketing Director, TechStart</div>
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
                Let's Chat About Your Social Media Strategy
              </h2>
              <p className="text-xl text-gray-600 mb-8">
            Fill in the form to set up a meeting or call +64 22 5060 870.
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
                    placeholder="Tell us about your project"
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
                  {isSubmitting ? 'Sending...' : 'Let\'s Talk About Your Social Media'}
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
            Simplify Your Social Media Today
          </h2>
          <p className="text-white/80 mb-6">
            Secure, Reliable, and Scalable
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

export default SocialMarketingPage; 