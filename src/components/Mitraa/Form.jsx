import React, { useState } from 'react';
import './Form.css';
// import SideUser from './SideUser/SideUser';

export default function FormPage() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmitForm = () => {
    // Logic untuk menangani pengiriman form

    // Menampilkan pop-up
    setShowPopup(true);

    // Anda mungkin ingin mereset form atau melakukan tindakan lain setelah mengirim
  };

  return (
    <>
      {/* <SideUser /> */}
      <main className="form-page-container">
        <center><h1 className="form-title">Form Transaksi</h1></center>
        <div className="form-container">
          <form className="form-content">
            <div className="form-group">
              <label className="form-label" htmlFor="form-name">Nama</label>
              <input
                className="form-input"
                id="form-name"
                type="text"
                placeholder="Masukkan nama"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="form-section">Bagian</label>
              <select className="form-input" id="form-section">
                <option value="pegawai">Pegawai PLN</option>
                <option value="mitra">Mitra</option>
                <option value="tak">TAK</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="form-date">Tanggal</label>
              <input
                className="form-input"
                id="form-date"
                type="date"
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="form-image">Gambar Bukti Transaksi</label>
              <input className="form-file" id="form-image" type="file" />
            </div>
            <div className="form-group">
              <button className="form-button" type="button" onClick={handleSubmitForm}>
                Kirim
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Pop-up */}
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <p>Form berhasil dikirim!</p>
            <button onClick={() => setShowPopup(false)}>OK</button>
          </div>
        </div>
      )}
    </>
  );
}
