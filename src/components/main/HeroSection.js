import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className="hero-section" id="hero">
      <div className="section-shell hero-section__shell">
        <div className="container section-inner hero-section__inner">
          <div className="hero-section__content">
            <span className="section-badge">Records Management Partner</span>
            <h1 className="section-title">
              기록관리 시스템을
              <br />
              더 안정적이고 더 유연하게
            </h1>
            <p className="section-desc hero-section__desc">
              소프트케이는 공공기관과 기업의 기록관리 업무를 이해하고,
              시스템 구축부터 유지보수, 기록물 데이터 이관까지
              실무 중심의 서비스를 제공합니다.
            </p>

            <div className="btn-group">
              <a href="#solutions" className="btn-primary">솔루션 보기</a>
              <a href="#contact" className="btn-secondary">문의하기</a>
            </div>
          </div>

          <div className="hero-section__visual">
            <div className="hero-section__glass-card hero-section__glass-card--lg">
              <strong>핵심 서비스</strong>
              <p>기록관리시스템 구축 / 유지보수 / 데이터 이관 / 클라우드형 운영</p>
            </div>

            <div className="hero-section__stat-wrap">
              <div className="hero-section__glass-card hero-section__glass-card--sm">
                <strong>15+</strong>
                <span>구축 및 운영 경험</span>
              </div>
              <div className="hero-section__glass-card hero-section__glass-card--sm">
                <strong>24/7</strong>
                <span>운영 대응 체계</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-section__bg-circle hero-section__bg-circle--one"></div>
        <div className="hero-section__bg-circle hero-section__bg-circle--two"></div>
      </div>
    </div>
  );
}

export default HeroSection;