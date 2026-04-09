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
                    <Link to="/about/intro" className="header-dropdown-link">
                      회사개요
                    </Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link to="/about/core" className="header-dropdown-link">
                      핵심역량
                    </Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link to="/about/partner" className="header-dropdown-link">
                      협력사
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* 솔루션 */}
            <li className="header-menu-item" onMouseEnter={() => handleMouseEnter('solution')} onMouseLeave={handleMouseLeave}>
              <button type="button" className="header-menu-btn">솔루션</button>

              <div className={`header-dropdown ${activeMenu === 'solution' ? 'is-open' : ''}`}>
                <ul className="header-dropdown-list">
                  <li className="header-dropdown-item">
                    <Link to="/solution/rms" className="header-dropdown-link">
                      RMS
                    </Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link to="/solution/ai" className="header-dropdown-link">
                      AI 솔루션
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* 사업분야 */}
            <li className="header-menu-item" onMouseEnter={() => handleMouseEnter('business')} onMouseLeave={handleMouseLeave}>
              <button type="button" className="header-menu-btn">사업분야</button>

              <div className={`header-dropdown ${activeMenu === 'business' ? 'is-open' : ''}`}>
                <ul className="header-dropdown-list">
                  <li className="header-dropdown-item">
                    <Link to="/business/public" className="header-dropdown-link">
                      공공기관
                    </Link>
                  </li>
                  <li className="header-dropdown-item">
                    <Link to="/business/private" className="header-dropdown-link">
                      민간기업
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            {/* 빈 메뉴 */}
            <li className="header-menu-item" onMouseEnter={() => handleMouseEnter('empty')} onMouseLeave={handleMouseLeave}>
              <button type="button" className="header-menu-btn">빈메뉴</button>

              <div className={`header-dropdown ${activeMenu === 'empty' ? 'is-open' : ''}`}>
                <ul className="header-dropdown-list">
                  <li className="header-dropdown-item">
                    <Link to="/" className="header-dropdown-link">세부탭1</Link>
                    <Link to="/" className="header-dropdown-link">세부탭2</Link>
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