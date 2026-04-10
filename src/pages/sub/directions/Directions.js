import React from 'react';
import './Directions.css';

import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

function Directions() {
  return (
    <div className="location-page">
      <Header />

      <main className="location-main">
        {/* HERO */}
        <section className="location-hero">
          <h1>오시는 길</h1>
          <p>소프트케이 위치 안내</p>
        </section>

        {/* 지도 영역 */}
        <section className="location-section">
          <div className="container">
            <h2 className="sub-section-title">Location</h2>

            <div className="map-box">
              지도 영역 (카카오맵 / 네이버맵 연동 예정)
            </div>
          </div>
        </section>

        {/* 주소 정보 */}
        <section className="location-info-section">
          <div className="container">
            
            <div className="location-info">
              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <p>부산광역시 금정구 금정로 585-1, 4층 (구서동, 신동빌딩)</p>
              </div>

              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <p>051-517-1473</p>
              </div>

              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <p>jhyeok47@softk.co.kr</p>
              </div>
            </div>
          </div>
        </section>

        {/* placeholder */}
        <section className="location-section">
          <div className="container">
            <h2 className="sub-section-title">추가 영역</h2>
            <div className="placeholder-box">
              교통편 / 지도 API 연동 가능
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Directions;