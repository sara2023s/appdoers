import React from 'react';
import Hero from './Hero';
import DigitalSolutions from './DigitalSolutions';
import ServiceHub from './ServiceHub';
import OnlineStrategy from './OnlineStrategy';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import ContactCTA from './ContactCTA';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <DigitalSolutions />
      <ServiceHub />
      <OnlineStrategy />
      <Statistics />
      <Testimonials />
      <ContactCTA />
      <Footer />
    </main>
  );
};

export default HomePage;