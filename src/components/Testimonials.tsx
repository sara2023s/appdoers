import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    content: "AppDoers transformed our online presence completely. Their mobile app development and SEO strategies increased our revenue by 32% in just 6 months.",
    author: "Sarah Johnson",
    position: "CEO, RetailPlus",
    rating: 5
  },
  {
    id: 2,
    content: "The team at AppDoers provided exceptional service from start to finish. Their website redesign and content strategy helped us reach a much wider audience.",
    author: "Michael Chen",
    position: "Marketing Director, TechInnovate",
    rating: 5
  },
  {
    id: 3,
    content: "Implementing the Business Center Pro solution from AppDoers streamlined our operations and improved customer communication substantially.",
    author: "Emma Rodriguez",
    position: "Operations Manager, ServicesUnlimited",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 text-3xl md:text-4xl font-bold mb-6">
            What Our Customers Say
          </h2>
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100 inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium">
            500+ Satisfied Customers
          </div>
        </div>

        <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 max-w-4xl mx-auto relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8">
              "{testimonials[currentIndex].content}"
            </blockquote>
            
            <div className="text-center">
              <div className="font-semibold text-lg">{testimonials[currentIndex].author}</div>
              <div className="text-gray-600">{testimonials[currentIndex].position}</div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial} 
              className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;