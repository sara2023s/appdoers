import React from 'react';
import { Link } from 'react-router-dom';
import { FaMobile, FaSearch, FaGlobe, FaPenFancy, FaToolbox } from 'react-icons/fa';

const DigitalSolutions: React.FC = () => {
  const services = [
    {
      icon: <FaMobile className="feature-icon" />,
      title: "Mobile Apps",
      description: "Create engaging mobile experiences that drive customer loyalty and increase sales.",
      link: "/apps"
    },
    {
      icon: <FaSearch className="feature-icon" />,
      title: "SEO Services",
      description: "Boost your online visibility and attract more customers through strategic optimization.",
      link: "/seo"
    },
    {
      icon: <FaGlobe className="feature-icon" />,
      title: "Websites",
      description: "Build stunning, responsive websites that convert visitors into customers.",
      link: "/websites"
    },
    {
      icon: <FaPenFancy className="feature-icon" />,
      title: "Content Strategy",
      description: "Craft compelling content that resonates with your audience and drives engagement.",
      link: "/content"
    },
    {
      icon: <FaToolbox className="feature-icon" />,
      title: "Business Toolkit",
      description: "Access powerful tools to manage and grow your business efficiently.",
      link: "/business-center"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title" id="featured-services">Featured Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the modern marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="feature-card reveal"
            >
              <div className="text-center">
                {service.icon}
                <h3 className="text-2xl font-bold text-[#086375] mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-[#1dd3b0] hover:text-[#affc41] group"
                >
                  Learn More
                  <svg
                    className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalSolutions;