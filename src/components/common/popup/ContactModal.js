import React, { useEffect } from 'react';
import './ContactModal.css';

function ContactModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'auto';
      return;
    }

    document.body.style.overflow = 'hidden';

    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="contact-modal-close"
          onClick={onClose}
          aria-label="팝업 닫기"
        >
          ×
        </button>

        <div className="contact-modal-header">
          <p className="contact-modal-label">Contact</p>
          <h2>문의하기</h2>
          <p className="contact-modal-desc">
            소프트케이의 기록관리 솔루션 및 구축/운영 서비스에 대해 문의해 주세요.
          </p>
        </div>

        <div className="contact-modal-body">
          <div className="contact-info-card">
            <h3>연락처 정보</h3>

            <div className="contact-info-item">
              <span className="contact-info-title">회사명</span>
              <p>(주)소프트케이</p>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-title">전화</span>
              <p>051-517-1473</p>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-title">이메일</span>
              <p>jhyeok47@softk.co.kr</p>
            </div>

            <div className="contact-info-item">
              <span className="contact-info-title">주소</span>
              <p>부산광역시 금정구 금정로 585-1, 4층</p>
            </div>
          </div>

          <div className="contact-form-card">
            <h3>빠른 문의</h3>

            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                alert('문의가 접수되었습니다.');
                onClose();
              }}
            >
              <input type="text" placeholder="성함" required />
              <input type="text" placeholder="연락처" required />
              <input type="email" placeholder="이메일" required />
              <input type="text" placeholder="회사명" />
              <textarea
                rows="5"
                placeholder="문의 내용을 입력해 주세요."
                required
              ></textarea>

              <button type="submit" className="contact-submit-btn">
                문의 접수
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;