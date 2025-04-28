import React, { useEffect, useState } from 'react';
import { FaChartLine, FaUsers, FaThumbsUp } from 'react-icons/fa';

const Statistics: React.FC = () => {
  const [counters, setCounters] = useState({
    revenue: 0,
    customers: 0,
    satisfaction: 0
  });

  const targetValues = {
    revenue: 95,
    customers: 100,
    satisfaction: 98
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const interval = setInterval(() => {
              setCounters((prev) => {
                const newCounters = { ...prev };
                let allReached = true;

                Object.keys(targetValues).forEach((key) => {
                  if (prev[key as keyof typeof targetValues] < targetValues[key as keyof typeof targetValues]) {
                    newCounters[key as keyof typeof targetValues] += 1;
                    allReached = false;
                  }
                });

                if (allReached) {
                  clearInterval(interval);
                }

                return newCounters;
              });
            }, 30);

            return () => clearInterval(interval);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.querySelector('.stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: <FaChartLine className="text-4xl" />,
      value: counters.revenue,
      label: "Revenue Growth",
      color: "from-[#3c1642] to-[#086375]"
    },
    {
      icon: <FaUsers className="text-4xl" />,
      value: counters.customers,
      label: "Happy Customers",
      color: "from-[#086375] to-[#1dd3b0]"
    },
    {
      icon: <FaThumbsUp className="text-4xl" />,
      value: counters.satisfaction,
      label: "Customer Satisfaction",
      color: "from-[#1dd3b0] to-[#affc41]"
    }
  ];

  return (
    <section className="py-20 bg-white stats-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title">Digital Transformation by the Numbers</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped businesses achieve remarkable results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${stat.color} rounded-xl p-8 text-white reveal`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{stat.icon}</div>
                <div className="text-5xl font-bold mb-2">{stat.value}%</div>
                <div className="text-xl">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;