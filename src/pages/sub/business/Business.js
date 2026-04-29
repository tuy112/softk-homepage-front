import React from 'react';
import { useParams, Link } from 'react-router-dom';
import businessDetailData from '../../../data/sub/businessData';
import './Business.css';

import Header from '../../../components/common/Header';
import Footer from '../../../components/common/Footer';

import exampleImage1 from '../../../images/example_01.jpg';
import exampleImage2 from '../../../images/example_02.jpg';

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

    // conversion 페이지 여부
    const isConversion = businessId === 'conversion';

    return (
        <div className="business-detail-page">
            <Header />

            <main className="business-detail-main">

                {/* HERO */}
                <section className="business-detail-hero">
                    <h1>{business.title}</h1>
                    <p>{business.subtitle}</p>
                </section>

                {/* 이미지 섹션 (conversion 제외) */}
                {/* 01 Section */}
                {!isConversion && (
                    <section className="business-image-section">
                        <div className="business-image-container">

                            {/* LEFT TEXT */}
                            <div className="business-image-text">
                                <span>01</span>
                                <h2>인공지능 OCR 기반 공개재분류 자동화</h2>
                                <ul>
                                    <li>기록물 분류 작업의 자동화 기능</li>
                                    <li>전자화기록물의 개인정보 검출 분류(추가 기능)</li>
                                </ul>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="business-image-box">
                                <img src={exampleImage1} alt="example1" />
                            </div>

                        </div>
                    </section>
                )}

                {/* 02 Section */}
                {!isConversion && (
                    <section className="business-image-section">
                        <div className="business-image-container reverse">

                            {/* LEFT IMAGE */}
                            <div className="business-image-box">
                                <img src={exampleImage2} alt="example2" />
                            </div>

                            {/* RIGHT TEXT */}
                            <div className="business-image-text">
                                <span>02</span>
                                <h2>기록관리시스템 공개재분류 자동화 기능 구축 기관</h2>

                                <div className="business-history">
                                    <p><strong>2022년</strong></p>
                                    <p>서울대학교, 한국도로공사서비스, 한국주택금융공사</p>

                                    <p><strong>2021년</strong></p>
                                    <p>한전KPS, 코레일테크, 부산항만공사, 충남연구원</p>
                                </div>
                            </div>

                        </div>
                    </section>
                )};

                {/* CONTENT */}
                <section className="business-detail-section">
                    <div className="business-detail-container">

                        {isConversion ? (
                            <div className="business-detail-layout">

                                <aside className="business-detail-sidebar">
                                    <div className="business-detail-sidebar-box">
                                        <h3>사업소개</h3>
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

                                <div className="business-detail-content">
                                    {business.sections.map((section, i) => (
                                        <div key={i} className="business-detail-content-box">
                                            <h3>{section.title}</h3>

                                            {section.content?.map((text, idx) => (
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
                        ) : (
                            <div className="business-detail-content">
                                {business.sections.map((section, i) => (
                                    <div key={i} className="business-detail-content-box">
                                        <h3>{section.title}</h3>

                                        {section.content?.map((text, idx) => (
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
                        )}

                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default Business;