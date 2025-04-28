import React, { useEffect, useRef } from 'react';
import { Smartphone, Globe, Search, MessageSquare, LayoutGrid } from 'lucide-react';

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${delay} bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300`}>
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-blue-600 font-medium hover:text-blue-700 transition-colors inline-flex items-center">
        Learn More <span className="ml-1">›</span>
      </a>
    </div>
  );
};

const DigitalSolutions: React.FC = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white" id="solutions">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl md:text-4xl font-bold mb-6">
            Your customers are online. Your business could be losing sales to your competitors who have better digital solutions in place.
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg text-gray-600">
            At AppDoers, we help make your business highly discoverable, improve customer engagement, and drive sales through innovative digital solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Smartphone className="h-10 w-10" />}
            title="Mobile Apps"
            description="Crafting a revenue-generating app tailored to your business needs and customer expectations."
            delay="delay-100"
          />
          <FeatureCard
            icon={<Search className="h-10 w-10" />}
            title="SEO"
            description="Ascend Google search rankings with our potent SEO solutions designed to increase visibility."
            delay="delay-200"
          />
          <FeatureCard
            icon={<Globe className="h-10 w-10" />}
            title="Websites"
            description="Boost SEO, traffic, and engagement with our powerful websites built for conversion."
            delay="delay-300"
          />
          <FeatureCard
            icon={<MessageSquare className="h-10 w-10" />}
            title="Content Strategy"
            description="Uncover our framework for clear messaging and engaging content that resonates with your audience."
            delay="delay-400"
          />
          <FeatureCard
            icon={<LayoutGrid className="h-10 w-10" />}
            title="Business Toolkit"
            description="Access powerful tools: Social Marketing, Review Builder, Ad Intelligence, and more."
            delay="delay-500"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;