import React from 'react';
import './SoftkNews.css';

import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

function NewsPage() {
  return (
    <div className="news-page">
      <Header />

      <main className="news-main">
        {/* HERO */}
        <section className="news-hero">
          <h1>소프트케이 뉴스</h1>
          <p>회사 소식 및 공지사항</p>
        </section>

        {/* 뉴스 리스트 */}
        <section className="news-section">
          <div className="container">
            <h2 className="sub-section-title">News</h2>

            <div className="news-list">
              <div className="news-item">
                <div className="news-date">2026.04</div>
                <div className="news-title">소프트케이 신규 프로젝트 수주</div>
              </div>

              <div className="news-item">
                <div className="news-date">2026.03</div>
                <div className="news-title">기록관리 시스템 고도화 완료</div>
              </div>

              <div className="news-item">
                <div className="news-date">2026.02</div>
                <div className="news-title">클라우드 서비스 확대</div>
              </div>
            </div>
          </div>
        </section>

        {/* placeholder */}
        <section className="news-section">
          <div className="container">
            <h2 className="sub-section-title">추가 영역</h2>
            <div className="placeholder-box">
              상세 페이지 / pagination / 검색 추가 가능
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default NewsPage;