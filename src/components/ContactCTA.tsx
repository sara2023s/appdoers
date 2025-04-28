import React, { useState } from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
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
              Get in Touch With AppDoers
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We'd love to hear about your project, answer your questions, and help your business thrive.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="text-[#1dd3b0] text-2xl"
                >
                  <FaPhone />
                </motion.div>
                <div>
                  <h3 className="font-bold text-[#086375]">Phone</h3>
                  <a href="tel:+64225060870" className="text-gray-600 hover:text-[#1dd3b0] transition-colors">
                    +64 22 5060 870
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="text-[#1dd3b0] text-2xl"
                >
                  <FaMapMarkerAlt />
                </motion.div>
                <div>
                  <h3 className="font-bold text-[#086375]">Address</h3>
                  <p className="text-gray-600">
                    250b Mangorei Road, Merrilands,<br />
                    New Plymouth, 4312, New Zealand
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <motion.div
                  whileHover={{ rotate: 10 }}
                  className="text-[#1dd3b0] text-2xl"
                >
                  <FaEnvelope />
                </motion.div>
                <div>
                  <h3 className="font-bold text-[#086375]">Email</h3>
                  <a href="mailto:contact@appdoers.co.nz" className="text-gray-600 hover:text-[#1dd3b0] transition-colors">
                    contact@appdoers.co.nz
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form and Map Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg bg-gradient-to-br from-white to-[#b2ff9e]/10"
            >
              <h2 className="text-2xl font-bold text-[#3c1642] mb-6">Let's Talk About Your Project</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                    required
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-200 ${
                      formData.name ? 'text-xs -top-2 bg-white px-1' : 'top-3'
                    } text-gray-500`}
                  >
                    Full Name *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                    required
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-200 ${
                      formData.email ? 'text-xs -top-2 bg-white px-1' : 'top-3'
                    } text-gray-500`}
                  >
                    Email *
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                  />
                  <label
                    htmlFor="phone"
                    className={`absolute left-4 transition-all duration-200 ${
                      formData.phone ? 'text-xs -top-2 bg-white px-1' : 'top-3'
                    } text-gray-500`}
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#1dd3b0] focus:border-transparent transition-all"
                    required
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-200 ${
                      formData.message ? 'text-xs -top-2 bg-white px-1' : 'top-3'
                    } text-gray-500`}
                  >
                    Message *
                  </label>
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
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>

            {/* Map Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.1234567890123!2d174.12345678901234!3d-39.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d1b123456789012%3A0x1234567890123456!2s250b%20Mangorei%20Road%2C%20Merrilands%2C%20New%20Plymouth%204312%2C%20New%20Zealand!5e0!3m2!1sen!2snz!4v1234567890123!5m2!1sen!2snz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[400px]"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactCTA;