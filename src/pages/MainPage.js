import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import Header from '../components/common/Header';
import HeroSection from '../components/main/HeroSection';
import AboutSection from '../components/main/AboutSection';
import SolutionsSection from '../components/main/SolutionsSection';
import BusinessSection from '../components/main/BusinessSection';
import ClientsSection from '../components/main/ClientsSection';
import ContactSection from '../components/main/ContactSection';
import FooterSection from '../components/common/Footer';

import './MainPage.css';

function MainPage() {
  return (
    <div className="site-wrap">
      <Header />

      <ReactFullpage
        licenseKey={'gplv3-license'}
        navigation={true}
        navigationPosition="right"
        scrollingSpeed={800}
        anchors={[
          'hero',
          'about',
          'solutions',
          'business',
          'clients',
          'contact',
          'footer'
        ]}
        credits={{ enabled: false }}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <HeroSection />
              </div>

              <div className="section">
                <AboutSection />
              </div>

              <div className="section">
                <SolutionsSection />
              </div>

              <div className="section">
                <BusinessSection />
              </div>

              <div className="section">
                <ClientsSection />
              </div>

              <div className="section">
                <ContactSection />
              </div>

              <div className="section fp-auto-height">
                <FooterSection />
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </div>
  );
}

export default MainPage;