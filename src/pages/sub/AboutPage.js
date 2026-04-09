import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

function AboutPage() {
  return (
    <div>
      <Header />

      <h1>회사소개</h1>

      <ul>
        <li><Link to="/about/intro">회사개요</Link></li>
        <li><Link to="/about/core">핵심역량</Link></li>
        <li><Link to="/about/partner">협력사</Link></li>
      </ul>

      <Footer />
    </div>
  );
}

export default AboutPage;