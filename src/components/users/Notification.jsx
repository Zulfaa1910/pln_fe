import React, { useState } from 'react';
import './Notification.css';
// import SideUser from './SideUser/SideUser';

const Notification = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Contoh notifikasi dari admin
  const notifications = [
    {
      id: 1,
      title: 'Notifikasi 1',
      content: 'Detail notifikasi 1.',
    },
    {
      id: 2,
      title: 'Notifikasi 2',
      content: 'Detail notifikasi 2.',
    },
    // Tambahkan lebih banyak notifikasi di sini
  ];

  const handleNotificationClick = () => {
    // Tampilkan pop-up notifikasi
    setShowPopup(true);
  };

  return (
    <div className="notification-page">
      {/* <SideUser /> */}
      <div className="notification-container">
        <h1>Notification</h1>
        <div className="notification-list">
          {notifications.map((notification) => (
            <div className="notification-item" key={notification.id} onClick={handleNotificationClick}>
              <h3>{notification.title}</h3>
              <p>{notification.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Notifikasi */}
      {showPopup && (
        <div className="notification-popup">
          <div className="notification-popup-content">
            <h2>Notifikasi Baru</h2>
            <p>Anda mendapatkan pesan dari admin!</p>
            <button onClick={() => setShowPopup(false)}>Tutup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
