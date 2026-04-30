import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

// sub page
import AboutCompany from './pages/sub/aboutCompany/AboutCompany';
import Vision from './pages/sub/aboutCompany/Vision';
import Partners from './pages/sub/aboutCompany/Partners';
import OrderStatus from './pages/sub/aboutCompany/OrderStatus';

import Business from './pages/sub/business/Business';

import Clients from './pages/sub/clients/Clients';
import Dirctions from './pages/sub/directions/Directions';

// components
import TopButton from './components/common/top/TopButton';

function App() {
  return (
    <HashRouter>
      <Routes>
        {/* main */}
        <Route path="/" element={<MainPage />} />

        {/* sub */}
        {/* 회사소개 */}
        <Route path="/about-company" element={<AboutCompany />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/order-status" element={<OrderStatus />} />
        
        {/* 사업소개 */}
        <Route path="/business/:businessId" element={<Business />} />
        
        {/* 고객사 */}
        <Route path="/clients" element={<Clients />} />
        
        {/* 오시는길 */}
        <Route path="/directions" element={<Dirctions />} />
      </Routes>

      <TopButton />

    </HashRouter>
  );
}

export default App;