import React from 'react';
import './ContactSection.css';

function ContactSection() {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-section__page">
        <div className="contact-section__top">
          <div className="container contact-section__top-inner">
            <div className="contact-section__map">
              <div className="contact-section__map-placeholder">
                MAP / Kakao Map / Naver Map 영역
              </div>
            </div>

            <div className="contact-section__info">
              <span className="section-heading-dark__eyebrow">CONTACT</span>
              <h2 className="contact-section__title">
                문의부터 제안까지
                <br />
                빠르게 연결
              </h2>
              <p className="contact-section__desc">
                마지막 섹션에는 회사 위치, 연락처, 이메일, 문의 CTA를 넣습니다.
              </p>

              <ul className="contact-info-list">
                <li>
                  <strong>Tel</strong>
                  <span>051-516-1473</span>
                </li>
                <li>
                  <strong>Email</strong>
                  <span>jhyeok47@softk.kr</span>
                </li>
                <li>
                  <strong>Business</strong>
                  <span>클라우드형 기록관리시스템 구축, 유지보수, 기록물 데이터 이관</span>
                </li>
                <li>
                  <strong>Address</strong>
                  <span>부산광역시 금정구 금강로 585-1, 4층</span>
                </li>
              </ul>

              <div className="btn-group">
                <a href="mailto:jhyeok47@softk.kr" className="btn-primary">메일 보내기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;