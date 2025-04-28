import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-50 to-purple-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            Transform Your Business & <span className="text-blue-600">Increase Revenue</span>
          </h1>
          
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
            Access 5 Cutting-Edge Digital Solutions for a Competitive Edge
          </p>
          
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="#contact" 
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get a Quote
            </a>
            
            <div className="flex items-center justify-center bg-white px-4 py-2 rounded-full shadow-md border border-gray-200">
              <span className="text-purple-600 font-bold">20+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;