import React from 'react';
import './Vision.css';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

function Vision() {
  return (
    <div className="about-page">
      <Header />

      <main className="about-main">
        {/* 상단 배너 */}
        <section className="sub-about-hero">
          <div className="sub-about-hero-inner">
            <h1>회사비전</h1>
            <p>기록관리의 표준을 만드는 기업</p>
          </div>
        </section>

        {/* 핵심 가치 */}
        <section className="vision-section">
          <div className="container">
            <h2 className="sub-section-title">Core Value</h2>

            <div className="vision-grid">
              <div className="vision-card">
                <h3>전문성</h3>
                <p>기록관리 시스템 특화 기술력</p>
              </div>

              <div className="vision-card">
                <h3>신뢰</h3>
                <p>공공기관 중심 안정적 운영</p>
              </div>

              <div className="vision-card">
                <h3>혁신</h3>
                <p>클라우드 및 AI 확장</p>
              </div>
            </div>
          </div>
        </section>

        {/* placeholder */}
        <section className="vision-section">
          <div className="container">
            <h2 className="section-title">추가 영역</h2>
            <div className="placeholder-box">
              ESG / 중장기 전략 등 추가 가능
            </div>
          </div>
        </section>

        
      </main>

      <Footer />
    </div>
  );
}

export default Vision;