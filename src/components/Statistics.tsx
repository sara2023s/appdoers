import React, { useEffect, useRef } from 'react';

type StatCardProps = {
  number: string;
  label: string;
  source: string;
  delay: string;
};

const StatCard: React.FC<StatCardProps> = ({ number, label, source, delay }) => {
  return (
    <div className={`animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 ${delay} bg-white p-8 rounded-xl shadow-md flex flex-col items-center text-center`}>
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{number}</div>
      <div className="text-gray-700 mb-3">{label}</div>
      <div className="text-sm text-gray-500">Source: {source}</div>
    </div>
  );
};

const Statistics: React.FC = () => {
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
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl md:text-4xl font-bold mb-6">
            Digital Transformation by the Numbers
          </h2>
          <p className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 text-lg opacity-90">
            Stay ahead of your competition with insights from the latest digital trends and statistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard
            number="26.7%"
            label="Online transactions increased annually"
            source="Statista"
            delay="delay-100"
          />
          <StatCard
            number="$28bn"
            label="Consumers spent on apps last year"
            source="TechCrunch"
            delay="delay-200"
          />
          <StatCard
            number="44%"
            label="Businesses increasing IT spend"
            source="TechRepublic"
            delay="delay-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;