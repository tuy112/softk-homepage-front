import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import ContactModal from './popup/ContactModal';

function Footer() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const openContactModal = (e) => {
    e.preventDefault();
    setIsContactOpen(true);
  };

  const closeContactModal = () => {
    setIsContactOpen(false);
  };

  return (
    <>
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
            <Link to="/privacy" className="footer-link">
              개인정보처리방침
            </Link>

            <Link to="/terms" className="footer-link">
              이용약관
            </Link>

            <Link
              to="#"
              className="footer-link"
              onClick={openContactModal}
            >
              문의하기
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>Copyright © Soft.K. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      <ContactModal
        isOpen={isContactOpen}
        onClose={closeContactModal}
      />
    </>
  );
}

export default Footer;