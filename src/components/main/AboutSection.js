import React from 'react';
import './AboutSection.css';

function AboutSection() {
  return (
    <div className="about-section" id="about">
      <div className="section-shell about-section__shell">
        <div className="container section-inner about-section__inner">
          <div className="about-section__content">
            <div className="section-heading-dark about-section__heading">
              <span className="section-heading-dark__eyebrow">ABOUT SOFT.K</span>
              <h2 className="section-heading-dark__title">
                기록관리 업무를 이해하는
                <br />
                실무형 기술 파트너
              </h2>
              <p className="section-heading-dark__desc">
                회사소개, 핵심역량, 협력사 정보를 정리하는 신뢰 중심 섹션입니다.
              </p>
            </div>

            <div className="about-section__grid">
              <div className="about-card">
                <h3>회사개요</h3>
                <p>
                  기록관리시스템 구축과 운영 경험을 기반으로,
                  기관 환경에 맞는 안정적인 서비스를 제공합니다.
                </p>
              </div>

              <div className="about-card">
                <h3>핵심역량</h3>
                <p>
                  RMS 구축, 유지보수, 데이터 정비, 이관,
                  공공사업 대응 경험을 갖춘 전문 조직입니다.
                </p>
              </div>

              <div className="about-card">
                <h3>협력사 네트워크</h3>
                <p>
                  유관 기업 및 파트너사와의 협력을 통해
                  보다 유연한 구축과 운영 체계를 제공합니다.
                </p>
              </div>

              <div className="about-card about-card--highlight">
                <span>Soft.K</span>
                <strong>기록관리 구축부터 운영까지
                  <br />
                  하나의 흐름으로 연결
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;