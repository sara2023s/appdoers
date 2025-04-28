import React from 'react';
import { FaCheckCircle, FaChartLine, FaUsers, FaCog, FaSync, FaShieldAlt } from 'react-icons/fa';

const ServiceHub: React.FC = () => {
  const features = [
    {
      category: "Expert Solutions",
      items: [
        {
          icon: <FaCheckCircle className="text-[#1dd3b0] text-xl" />,
          text: "Professional website design and development"
        },
        {
          icon: <FaChartLine className="text-[#1dd3b0] text-xl" />,
          text: "Advanced SEO optimization strategies"
        },
        {
          icon: <FaUsers className="text-[#1dd3b0] text-xl" />,
          text: "Social media management and marketing"
        }
      ]
    },
    {
      category: "Integrated Management",
      items: [
        {
          icon: <FaCog className="text-[#1dd3b0] text-xl" />,
          text: "Centralized business management tools"
        },
        {
          icon: <FaSync className="text-[#1dd3b0] text-xl" />,
          text: "Automated workflow and processes"
        },
        {
          icon: <FaShieldAlt className="text-[#1dd3b0] text-xl" />,
          text: "Secure data management and backup"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-[#3c1642]/5 via-[#086375]/5 to-[#1dd3b0]/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">All Your Digital Services in One Place</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Streamline your business operations with our comprehensive suite of digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 reveal"
            >
              <h3 className="text-2xl font-bold text-[#086375] mb-6">{feature.category}</h3>
              <ul className="space-y-4">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    {item.icon}
                    <span className="text-gray-600">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHub;