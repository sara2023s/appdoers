import React from 'react';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    text: 'AppDoers transformed our digital presence. Their expertise in web development and SEO has significantly increased our online visibility and customer engagement.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
    text: 'The team at AppDoers delivered exceptional results with our social media campaigns. Their strategic approach and creative content have helped us reach new audiences.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, E-Commerce Solutions',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
    text: 'Working with AppDoers has been a game-changer for our business. Their comprehensive digital solutions have streamlined our operations and boosted our sales.',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`text-xl ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <section className="py-20 bg-[#f0fdf4] mt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-[#086375]">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 mt-4 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience with AppDoers.
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg transition-all duration-500 hover:shadow-xl hover:scale-[1.02]"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-[#086375]">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-[#1dd3b0] text-4xl absolute -top-4 left-0 opacity-20" />
                  <p className="text-gray-700 pl-8">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
