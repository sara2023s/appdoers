import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import DigitalServicesIllustration from './DigitalServicesIllustration';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#3c1642] via-[#086375] to-[#1dd3b0] animate-gradient">
        <div className="absolute inset-0 bg-[url('/src/assets/hero-pattern.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-white space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in text-white">
              Transform Your Business & Increase Revenue
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 animate-fade-in animation-delay-200">
              Access 5 Cutting-Edge Digital Solutions for a Competitive Edge
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
              <Link
                to="/contact"
                className="btn-primary text-center"
              >
                Get a Quote
              </Link>
              <Link
                to="/services"
                className="flex items-center justify-center text-white hover:text-[#affc41] transition-colors duration-300 group"
              >
                See Our Services
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Right Column - Digital Services Illustration */}
          <div className="hidden lg:block animate-fade-in animation-delay-600 h-[500px]">
            <DigitalServicesIllustration />
          </div>
        </div>
      </div>

      {/* Trust Banner */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#086375] py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-white text-lg font-medium">20+ Years Experience</span>
              <div className="relative">
                <div className="absolute inset-0 bg-[#1dd3b0] opacity-20 rounded-full animate-pulse"></div>
                <div className="relative flex items-center justify-center w-8 h-8">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;