import React from 'react';
import './BusinessSection.css';
import businessData from '../../data/businessData';

function BusinessSection() {
  return (
    <div className="business-section" id="business">
      <div className="section-shell business-section__shell">
        <div className="container section-inner business-section__inner">
          <div className="business-section__left">
            <span className="section-badge">BUSINESS AREA</span>
            <h2 className="section-title">
              도입 컨설팅부터 운영까지
              <br />
              한 흐름으로 지원
            </h2>
            <p className="section-desc">
              기록관리 체계를 분석하고, 시스템을 구축하고,
              데이터를 정비하고, 실제 운영 안정화까지 이어지는 사업 구조를 보여줍니다.
            </p>

            <div className="btn-group">
              <a href="#clients" className="btn-primary">구축 경험 보기</a>
            </div>
          </div>

          <div className="business-section__right">
            {businessData.map((item) => (
              <div key={item.id} className="business-step">
                <div className="business-step__step">{item.step}</div>
                <div className="business-step__body">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSection;