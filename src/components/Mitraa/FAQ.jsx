import React from 'react';
import './FAQ.css';
import SideUser from './SideUser/SideUser';
// import SideUser from './SideUser/SideUser'; // Mengimpor SideUser

const FAQ = () => {
  return (
    <>
      {/* Tidak perlu menampilkan SideUser di sini */}
      <div className="faq-container">
        <h1>FAQ</h1>
        <div className="faq-list">
          <div className="faq-item">
            <h3>Pertanyaan 1?</h3>
            <p>Jawaban untuk pertanyaan 1.</p>
          </div>
          <div className="faq-item">
            <h3>Pertanyaan 2?</h3>
            <p>Jawaban untuk pertanyaan 2.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
