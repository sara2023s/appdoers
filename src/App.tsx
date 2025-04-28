import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import AppsPage from './components/AppsPage';
import WebsitesPage from './components/WebsitesPage';
import SEOPage from './components/SEOPage';
import ContentPage from './components/ContentPage';
import SocialMarketingPage from './components/SocialMarketingPage';
import ListingBuilderPage from './components/ListingBuilderPage';
import BusinessCenterProPage from './components/BusinessCenterProPage';
import ReviewBuilderPage from './components/ReviewBuilderPage';
import AdIntelligencePage from './components/AdIntelligencePage';
import { useScrollAnimation } from './hooks/useScrollAnimation';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  useScrollAnimation();

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/apps" element={<AppsPage />} />
            <Route path="/websites" element={<WebsitesPage />} />
            <Route path="/seo" element={<SEOPage />} />
            <Route path="/content" element={<ContentPage />} />
            <Route path="/social-marketing" element={<SocialMarketingPage />} />
            <Route path="/listing-builder" element={<ListingBuilderPage />} />
            <Route path="/business-center-pro" element={<BusinessCenterProPage />} />
            <Route path="/review-builder" element={<ReviewBuilderPage />} />
            <Route path="/ad-intelligence" element={<AdIntelligencePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;