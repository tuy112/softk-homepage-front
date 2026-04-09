import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

function DetailPage() {
  const { type } = useParams();

  const renderContent = () => {
    switch (type) {
      case 'intro':
        return <div>회사개요 내용</div>;
      case 'core':
        return <div>핵심역량 내용</div>;
      case 'partner':
        return <div>협력사 내용</div>;
      default:
        return <div>존재하지 않는 페이지</div>;
    }
  };

  return (
    <div>
      <Header />
      <h1>상세페이지</h1>
      {renderContent()}
      <Footer />
    </div>
  );
}

export default DetailPage;