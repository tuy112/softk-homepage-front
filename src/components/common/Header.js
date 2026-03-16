import React, { useState } from 'react';
import './Header.css';
import menuData from '../../data/menuData';

function Header() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#hero" className="header__logo">
          <span className="header__logo-mark">S</span>
          <div className="header__logo-text">
            <strong>Soft.K</strong>
            <span>Records Management System</span>
          </div>
        </a>

        <nav className="header__nav">
          <ul className="header__menu">
            {menuData.map((menu, index) => (
              <li
                key={menu.title}
                className="header__menu-item"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button type="button" className="header__menu-btn">
                  {menu.title}
                </button>

                <div
                  className={`header__dropdown ${
                    activeMenu === index ? 'is-open' : ''
                  }`}
                >
                  <ul className="header__dropdown-list">
                    {menu.children.map((child) => (
                      <li key={child} className="header__dropdown-item">
                        <a href="#!" className="header__dropdown-link">
                          {child}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="header__cta">
          문의하기
        </a>
      </div>
    </header>
  );
}

export default Header;