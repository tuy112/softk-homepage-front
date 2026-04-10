import React from 'react';
import './Clients.css';

import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

function Clients() {
  return (
    <div className="clients-page">
      <Header />

      <main className="clients-main">
        {/* HERO */}
        <section className="clients-hero">
          <h1>고객사</h1>
          <p>소프트케이와 함께한 주요 고객</p>
        </section>

        {/* 고객사 목록 */}
        <section className="clients-section">
          <div className="container">
            <h2 className="sub-section-title">Clients</h2>

            <div className="clients-grid">
              <div className="client-card">OO기관</div>
              <div className="client-card">OO공사</div>
              <div className="client-card">OO시청</div>
              <div className="client-card">OO대학교</div>
              <div className="client-card">OO기업</div>
              <div className="client-card">OO연구소</div>
            </div>
          </div>
        </section>

        {/* 설명 */}
        <section className="clients-section bg-dark">
          <div className="container">
            <h2 className="sub-section-title-white">협력 분야</h2>

            <p className="clients-desc">
              공공기관 및 기업을 대상으로 기록관리 시스템 구축,
              데이터 이관 및 유지보수 사업을 수행하고 있습니다.
            </p>
          </div>
        </section>

        {/* placeholder */}
        <section className="clients-section">
          <div className="container">
            <h2 className="sub-section-title">추가 영역</h2>
            <div className="placeholder-box">
              로고 이미지 / 상세 페이지 연결 가능
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Clients;