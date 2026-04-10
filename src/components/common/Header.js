import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from "../../images/softk_logo.png";

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header id="header">
      <div className="container header-inner">

        {/* 로고 */}
        <Link to="/" className="header-logo">
          <div className="logo">
            <img src={logo} alt="SoftK" className="logo-img" />
          </div>
          <div className="header-logo-text">
            <strong>SOFT.K</strong>
            <span>기록의 모든 것 (Records Management System)</span>
          </div>
        </Link>

        {/* 메뉴 */}
        <nav className="header-nav">
          <ul className="header-menu">

            {/* 회사소개 */}
            <li className="header-menu-item" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
              <button type="button" className="header-menu-btn">회사소개</button>

              <div className={`header-dropdown ${activeMenu === 'about' ? 'is-open' : ''}`}>
                <ul className="header-dropdown-list">
                  <li className="header-dropdown-item">
                    <Link to="/about-company" className="header-dropdown-link">
                      회사개요
                    </Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link to="/vision" className="header-dropdown-link">
                      회사비전
                    </Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link to="/partners" className="header-dropdown-link">
                      협력사
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* 소프트케이 소식 */}
            <li className="header-menu-item" onMouseEnter={() => handleMouseEnter('news')} onMouseLeave={handleMouseLeave}>
              <button type="button" className="header-menu-btn">소프트케이소식</button>

              <div className={`header-dropdown ${activeMenu === 'news' ? 'is-open' : ''}`}>
                <ul className="header-dropdown-list">
                  <li className="header-dropdown-item">
                    <Link to="/order-status" className="header-dropdown-link">
                      수주현황
                    </Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link to="/softk-news" className="header-dropdown-link">
                      소프트케이뉴스
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* 용역사업소개 */}
            <li className="header-menu-item" onMouseEnter={() => handleMouseEnter('business')} onMouseLeave={handleMouseLeave}>
              <button type="button" className="header-menu-btn">용역사업소개</button>

              <div className={`header-dropdown ${activeMenu === 'business' ? 'is-open' : ''}`}>
                <ul className="header-dropdown-list">
                  <li className="header-dropdown-item">
                    <Link to="/business" className="header-dropdown-link">
                      기록관리 컨설팅
                    </Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link to="/business" className="header-dropdown-link">
                      기록물 이관 용역
                    </Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link to="/business" className="header-dropdown-link">
                      공개재분류 용역
                    </Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link to="/business" className="header-dropdown-link">
                      각종 기록물 등록 용역
                    </Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link to="/business" className="header-dropdown-link">
                      구전자문서 변환 용역
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* 고객사 */}
            <li className="header-menu-item" onMouseEnter={() => handleMouseEnter('client')} onMouseLeave={handleMouseLeave}>
              <button type="button" className="header-menu-btn">고객사</button>

              <div className={`header-dropdown ${activeMenu === 'client' ? 'is-open' : ''}`}>
                <ul className="header-dropdown-list">
                  <li className="header-dropdown-item">
                    <Link to="/clients" className="header-dropdown-link">고객사</Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* 오시는길 */}
            <li className="header-menu-item" onMouseEnter={() => handleMouseEnter('directions')} onMouseLeave={handleMouseLeave}>
              <button type="button" className="header-menu-btn">오시는길</button>

              <div className={`header-dropdown ${activeMenu === 'directions' ? 'is-open' : ''}`}>
                <ul className="header-dropdown-list">
                  <li className="header-dropdown-item">
                    <Link to="/directions" className="header-dropdown-link">오시는길</Link>
                  </li>
                </ul>
              </div>
            </li>

          </ul>
        </nav>

        {/* 문의하기 */}
        <Link to="/contact" className="header-cta">문의하기</Link>
      </div>
    </header>
  );
}

export default Header;