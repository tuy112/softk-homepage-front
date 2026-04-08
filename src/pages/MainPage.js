import React from 'react';

import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import HeroSection from '../components/main/HeroSection';
import AboutSection from '../components/main/AboutSection';
import SolutionsSection from '../components/main/SolutionsSection';
import BusinessSection from '../components/main/BusinessSection';
import ClientsSection from '../components/main/ClientsSection';
import ContactSection from '../components/main/ContactSection';
import './MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <Header />

      <main className="main-content">
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <BusinessSection />
        <ClientsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default MainPage;