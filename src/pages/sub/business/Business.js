import React from 'react';
import { useParams, Link } from 'react-router-dom';
import businessDetailData from '../../../data/sub/businessData';
import './Business.css';

import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

const businessMenu = [
    { key: 'consulting', label: '기록관리 컨설팅' },
    { key: 'build', label: '기록관리시스템 구축' },
    { key: 'transfer', label: '기록물 이관 용역' },
    { key: 'disclosure', label: '공개재분류 용역' },
    { key: 'registration', label: '각종 기록물 등록 용역' },
    { key: 'conversion', label: '구전자문서 변환 용역' },
];

function Business() {
    const { businessId } = useParams();
    const business = businessDetailData[businessId];

    if (!business) {
        return (
            <div className="business-detail-page">
                <Header />

                <main className="business-detail-main">
                    <section className="business-detail-hero">
                        <h1>페이지 없음</h1>
                        <p>요청하신 페이지를 찾을 수 없습니다.</p>
                    </section>
                </main>

                <Footer />
            </div>
        );
    }

    return (
        <div className="business-detail-page">
            <Header />

            <main className="business-detail-main">
                {/* HERO */}
                <section className="business-detail-hero">
                    <h1>{business.title}</h1>
                    <p>{business.subtitle}</p>
                </section>

                {/* CONTENT */}
                <section className="business-detail-section">
                    <div className="business-detail-container">
                        <div className="business-detail-layout">
                            {/* SIDEBAR */}
                            <aside className="business-detail-sidebar">
                                <div className="business-detail-sidebar-box">
                                    <h3>용역사업소개</h3>

                                    <ul>
                                        {businessMenu.map((item) => (
                                            <li key={item.key}>
                                                <Link
                                                    to={`/business/${item.key}`}
                                                    className={businessId === item.key ? 'active' : ''}
                                                >
                                                    {item.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </aside>

                            {/* MAIN CONTENT */}
                            <div className="business-detail-content">
                                {business.sections.map((section, i) => (
                                    <div key={i} className="business-detail-content-box">
                                        <h3>{section.title}</h3>

                                        {section.content &&
                                            section.content.map((text, idx) => (
                                                <p key={idx}>{text}</p>
                                            ))}

                                        {section.list && (
                                            <ul>
                                                {section.list.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

export default Business;