import React from 'react';
import './Partners.css';

import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

function Partners() {
  return (
    <div className="partners-page">
      <Header />

      <main className="partners-main">
        {/* HERO */}
        <section className="partners-hero">
          <h1>협력사</h1>
          <p>함께 성장하는 파트너 네트워크</p>
        </section>

        {/* 협력사 목록 */}
        <section className="partners-section">
          <div className="container">
            <h2 className="sub-section-title">Partners</h2>

            <div className="partners-grid">
              <div className="partner-card">협력사 1</div>
              <div className="partner-card">협력사 2</div>
              <div className="partner-card">협력사 3</div>
              <div className="partner-card">협력사 4</div>
              <div className="partner-card">협력사 5</div>
              <div className="partner-card">협력사 6</div>
            </div>
          </div>
        </section>

        {/* 협력 내용 */}
        <section className="partners-section bg-dark">
          <div className="container">
            <h2 className="sub-section-title-white">협력 분야</h2>

            <div className="partners-desc">
              기록관리 시스템 구축, 데이터 이관, 유지보수 등 다양한 분야에서
              협력사와 함께 프로젝트를 수행합니다.
            </div>
          </div>
        </section>

        {/* placeholder */}
        <section className="partners-section">
          <div className="container">
            <h2 className="sub-section-title">추가 영역</h2>
            <div className="placeholder-box">
              로고 / 상세 설명 / 프로젝트 사례 추가 가능
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Partners;