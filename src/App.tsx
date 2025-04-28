import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AppsPage from './components/AppsPage';
import AboutPage from './components/AboutPage';
import WebsitesPage from './components/WebsitesPage';
import SEOPage from './components/SEOPage';

function App() {
  return (
    <Router>
      <div className="font-inter text-gray-800 min-h-screen bg-white overflow-x-hidden">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/apps" element={<AppsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/websites" element={<WebsitesPage />} />
          <Route path="/seo" element={<SEOPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;