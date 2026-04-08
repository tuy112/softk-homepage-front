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
      <div className="container header-inner">
        <a href="#hero" className="header-logo">
          <span className="header-logo-mark">S</span>
          <div className="header-logo-text">
            <strong>Soft.K</strong>
            <span>Records Management System</span>
          </div>
        </a>

        <nav className="header-nav">
          <ul className="header-menu">
            {menuData.map((menu, index) => (
              <li
                key={menu.title}
                className="header-menu-item"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <button type="button" className="header-menu-btn">
                  {menu.title}
                </button>

                <div
                  className={`header-dropdown ${
                    activeMenu === index ? 'is-open' : ''
                  }`}
                >
                  <ul className="header-dropdown-list">
                    {menu.children.map((child) => (
                      <li key={child} className="header-dropdown-item">
                        <a href="#!" className="header-dropdown-link">
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

        <a href="#contact" className="header-cta">
          문의하기
        </a>
      </div>
    </header>
  );
}

export default Header;