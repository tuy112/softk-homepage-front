import React from 'react';
import './AboutCompany.css';
import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

function AboutCompany() {
  return (
    <div className="about-page">
      <Header />

      <main className="about-main">
        {/* 상단 배너 */}
        <section className="sub-about-hero">
          <div className="sub-about-hero-inner">
            <h1>회사개요</h1>
            <p>기록관리 전문 기업 소프트케이</p>
          </div>
        </section>

        {/* 회사 소개 */}
        <section className="sub-about-section">
          <div className="container">
            <h2 className="sub-section-title">회사소개</h2>
            <p className="sub-section-desc">
              소프트케이는 기록관리시스템 구축, 유지보수, 데이터 이관을 중심으로
              공공기관 및 기업의 기록관리 업무를 지원하는 전문 기업입니다.
            </p>

            <div className="about-grid">
              <div className="about-card">
                <h3>전문성</h3>
                <p>기록관리 시스템 구축 및 운영 경험 기반 기술력 확보</p>
              </div>

              <div className="about-card">
                <h3>안정성</h3>
                <p>공공기관 중심의 안정적인 서비스 제공</p>
              </div>

              <div className="about-card">
                <h3>확장성</h3>
                <p>클라우드 및 AI 연계 가능한 구조 설계</p>
              </div>
            </div>
          </div>
        </section>

        {/* 회사 정보 */}
        <section className="sub-about-section bg-dark">
          <div className="container">
            <h2 className="section-title-white">회사 정보</h2>

            <div className="info-table">
              <div className="info-row">
                <span>회사명</span>
                <span>소프트케이 (Soft.K)</span>
              </div>
              <div className="info-row">
                <span>대표</span>
                <span>권태철</span>
              </div>
              <div className="info-row">
                <span>사업분야</span>
                <span>기록관리시스템, 데이터 이관, 유지보수</span>
              </div>
              <div className="info-row">
                <span>주소</span>
                <span>부산광역시 금정구 금강로 585-1, 4층 (구서동, 신동빌딩)</span>
              </div>
            </div>
          </div>
        </section>

        {/* TODO 영역 (다음 페이지용) */}
        <section className="sub-about-section">
          <div className="container">
            <h2 className="section-title">추가 영역 (확장용)</h2>

            <div className="placeholder-box">
              여기에 “연혁 / 조직도 / 인증 / 파트너” 등 추가하시면 됩니다
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default AboutCompany;