import React from 'react';
import './TopButton.css';

function TopButton() {
    const handleClick = () => {
        console.log('click scrollY:', window.scrollY);
        
        // 강제 스크롤 (호환성 포함)
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // window.location.reload();
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button className="top-button" onClick={handleClick}>
            ↑
        </button>
    );
}

export default TopButton;