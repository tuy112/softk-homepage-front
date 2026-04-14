import React from 'react';
import './SolutionsSection.css';
import solutionsData from '../../data/main/solutionsData';

function SolutionsSection() {
  return (
    <div className="solutions-section" id="solutions">
      <div className="section-shell solutions-section__shell">
        <div className="container section-inner solutions-section__inner">
          <div className="solutions-section__content">
            <div className="section-heading-dark">
              <span className="section-heading-dark__eyebrow">SOLUTIONS</span>
              <h2 className="section-heading-dark__title">
                소프트케이의 핵심 솔루션
              </h2>
              <p className="section-heading-dark__desc">
                퍼스트정보의 시각적 톤을 참고하되, 더 정돈된 카드형 정보 구조로 재해석한 영역입니다.
              </p>
            </div>

            <div className="solutions-grid">
              {solutionsData.map((item) => (
                <div key={item.id} className="solution-card">
                  <span className="solution-card__subtitle">{item.subtitle}</span>
                  <h3 className="solution-card__title">{item.title}</h3>
                  <p className="solution-card__desc">{item.desc}</p>
                  <a href="#contact" className="solution-card__link">문의하기 →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SolutionsSection;