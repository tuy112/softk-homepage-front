import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

// sub page
import AboutPage from './pages/sub/AboutPage';
import DetailPage from './pages/sub/DetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/:type" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;