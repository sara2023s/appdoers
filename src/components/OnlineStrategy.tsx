import React, { useEffect, useRef } from 'react';
import { Users, Mail, Calendar, MessageCircle, BarChart } from 'lucide-react';

type ToolCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
};

const ToolCard: React.FC<ToolCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${delay} flex items-center p-4 bg-white rounded-lg shadow-sm border border-gray-100`}>
      <div className="text-blue-600 mr-4 flex-shrink-0">{icon}</div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const OnlineStrategy: React.FC = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl md:text-4xl font-bold mb-6">
                Manage Your Online Strategy <span className="text-blue-600">Effortlessly</span>
              </h2>
              <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg text-gray-600 mb-8">
                Our comprehensive business management platform gives you powerful tools to streamline operations, enhance customer relationships, and drive growth.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                <ToolCard
                  icon={<Users className="h-8 w-8" />}
                  title="CRM System"
                  description="Manage customer relationships and track interactions"
                  delay="delay-200"
                />
                <ToolCard
                  icon={<Mail className="h-8 w-8" />}
                  title="Email Marketing"
                  description="Create and track email campaigns to engage customers"
                  delay="delay-300"
                />
                <ToolCard
                  icon={<Calendar className="h-8 w-8" />}
                  title="Appointment Booking"
                  description="Allow customers to schedule appointments online"
                  delay="delay-400"
                />
                <ToolCard
                  icon={<MessageCircle className="h-8 w-8" />}
                  title="Communication Hub"
                  description="Centralized platform for all customer interactions"
                  delay="delay-500"
                />
                <ToolCard
                  icon={<BarChart className="h-8 w-8" />}
                  title="Automated Reporting"
                  description="Get insights with automated performance reports"
                  delay="delay-600"
                />
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-2 md:p-8 rounded-2xl shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Dashboard Visualization" 
                  className="rounded-xl shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineStrategy;