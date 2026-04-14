import React from 'react';
import './ClientsSection.css';
import clientsData from '../../data/main/clientsData';

function ClientsSection() {
  return (
    <div className="clients-section" id="clients">
      <div className="section-shell clients-section__shell">
        <div className="container section-inner clients-section__inner">
          <div className="clients-section__content">
            <div className="section-heading-dark">
              <span className="section-heading-dark__eyebrow">PARTNERS & CLIENTS</span>
              <h2 className="section-heading-dark__title">
                함께 구축하고 함께 운영하는 관계
              </h2>
              <p className="section-heading-dark__desc">
                고객사와 협력 네트워크를 신뢰 요소로 보여주는 로고월 형식 섹션입니다.
              </p>
            </div>

            <div className="clients-section__stats">
              <div className="clients-stat">
                <strong>15+</strong>
                <span>프로젝트 경험</span>
              </div>
              <div className="clients-stat">
                <strong>10+</strong>
                <span>협력 네트워크</span>
              </div>
              <div className="clients-stat">
                <strong>24/7</strong>
                <span>운영 지원 체계</span>
              </div>
            </div>

            <div className="clients-grid">
              {clientsData.map((item) => (
                <div key={item} className="client-logo-card">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsSection;