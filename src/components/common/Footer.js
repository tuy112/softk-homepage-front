import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-brand">Soft.K</div>
          <p className="footer-text">
            기록관리시스템 구축 · 유지보수 · 기록물 데이터 이관
          </p>
          <p className="footer-text">
            Tel. 051-516-1473 | Email. jhyeok47@softk.kr
          </p>
        </div>

        <div className="footer-right">
          <a href="#!" className="footer-link">개인정보처리방침</a>
          <a href="#!" className="footer-link">이용약관</a>
          <a href="#contact" className="footer-link">문의하기</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>Copyright © Soft.K. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;