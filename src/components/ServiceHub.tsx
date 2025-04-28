import React, { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';

const ServiceHub: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl md:text-4xl font-bold mb-6">
            All Your Digital Services in One Place
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg text-gray-600">
            AppDoers manages everything under one roof, providing ultra-modern solutions with expert support and ongoing management to keep your business ahead of the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-blue-600">Expert Solutions</h3>
            <ul className="space-y-4">
              {['Custom development to your specifications', 'Ongoing support and optimization', 'Dedicated account management', 'Regular performance reports'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300 bg-white rounded-xl p-8 shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-purple-600">Integrated Management</h3>
            <ul className="space-y-4">
              {['Centralized dashboard for all services', 'Streamlined communication channels', 'Comprehensive analytics and insights', 'Scalable solutions that grow with you'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHub;