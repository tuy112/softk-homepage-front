import React from 'react';
import './OrderStatus.css';

import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

function OrderStatus() {
  return (
    <div className="order-page">
      <Header />

      <main className="order-main">
        {/* HERO */}
        <section className="order-hero">
          <h1>수주현황</h1>
          <p>소프트케이 주요 프로젝트 현황</p>
        </section>

        {/* 리스트 */}
        <section className="order-section">
          <div className="container">
            <h2 className="sub-section-title">프로젝트 목록</h2>

            <div className="order-table">
              <div className="order-row header">
                <span>연도</span>
                <span>프로젝트명</span>
                <span>발주처</span>
              </div>

              <div className="order-row">
                <span>2026</span>
                <span>기록관리시스템 구축</span>
                <span>OO기관</span>
              </div>

              <div className="order-row">
                <span>2025</span>
                <span>데이터 이관 사업</span>
                <span>OO공사</span>
              </div>

              <div className="order-row">
                <span>2025</span>
                <span>클라우드 RMS 구축</span>
                <span>OO시청</span>
              </div>
            </div>
          </div>
        </section>

        {/* placeholder */}
        <section className="order-section">
          <div className="container">
            <h2 className="sub-section-title">추가 영역</h2>
            <div className="placeholder-box">
              상세 페이지 연결 / 검색 / 필터 추가 가능
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default OrderStatus;