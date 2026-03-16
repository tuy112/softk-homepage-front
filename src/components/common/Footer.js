import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <div className="footer__brand">Soft.K</div>
          <p className="footer__text">
            기록관리시스템 구축 · 유지보수 · 기록물 데이터 이관
          </p>
          <p className="footer__text">
            Tel. 051-516-1473 | Email. jhyeok47@softk.kr
          </p>
        </div>

        <div className="footer__right">
          <a href="#!" className="footer__link">개인정보처리방침</a>
          <a href="#!" className="footer__link">이용약관</a>
          <a href="#contact" className="footer__link">문의하기</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>Copyright © Soft.K. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;