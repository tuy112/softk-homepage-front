import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

// sub page
import AboutCompany from './pages/sub/aboutCompany/AboutCompany';
import Vision from './pages/sub/aboutCompany/Vision';
import Partners from './pages/sub/aboutCompany/Partners';

import OrderStatus from './pages/sub/news/OrderStatus';
import SoftkNews from './pages/sub/news/SoftkNews';

import Business from './pages/sub/business/Business';

import Clients from './pages/sub/clients/Clients';
import Dirctions from './pages/sub/directions/Directions';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* main */}
        <Route path="/" element={<MainPage />} />

        {/* sub */}
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/partners" element={<Partners />} />

        <Route path="/order-status" element={<OrderStatus />} />
        <Route path="/softk-news" element={<SoftkNews />} />
        
        <Route path="/business/:businessId" element={<Business />} />
        
        <Route path="/clients" element={<Clients />} />
        
        <Route path="/directions" element={<Dirctions />} />
      </Routes>
    </HashRouter>
  );
}

export default App;