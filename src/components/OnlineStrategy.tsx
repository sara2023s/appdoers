import React from 'react';
import { FaUsers, FaEnvelope, FaCalendar, FaComments, FaChartBar, FaDesktop } from 'react-icons/fa';

const OnlineStrategy: React.FC = () => {
  const features = [
    {
      icon: <FaUsers className="text-4xl text-[#1dd3b0]" />,
      title: "CRM Integration",
      description: "Manage customer relationships and track interactions seamlessly"
    },
    {
      icon: <FaEnvelope className="text-4xl text-[#1dd3b0]" />,
      title: "Email Marketing",
      description: "Create and automate targeted email campaigns"
    },
    {
      icon: <FaCalendar className="text-4xl text-[#1dd3b0]" />,
      title: "Appointment Booking",
      description: "Streamline scheduling with automated booking system"
    },
    {
      icon: <FaComments className="text-4xl text-[#1dd3b0]" />,
      title: "Communication Hub",
      description: "Centralize all customer communications in one place"
    },
    {
      icon: <FaChartBar className="text-4xl text-[#1dd3b0]" />,
      title: "Automated Reporting",
      description: "Get real-time insights with automated analytics"
    },
    {
      icon: <FaDesktop className="text-4xl text-[#1dd3b0]" />,
      title: "Dashboard Visualization",
      description: "Monitor performance with intuitive dashboards"
    }
  ];

  return (
    <section className="py-20 bg-[#b2ff9e]/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Manage Your Online Strategy</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive tools to streamline your digital presence and boost engagement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 reveal"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#086375] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineStrategy;