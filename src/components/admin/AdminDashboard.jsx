import React, { useState } from 'react';
import '../../App.css';
import Sidebar from './Sidebar';
import MainDash from './MainDash/MainDash';
import User from './pages/User'; // Import komponen User
import TransaksiPage from './pages/TransaksiPage'; // Import komponen Transaksi
import Chat from './pages/Chat'; // Import komponen Chat
import Analytics from './pages/Analytics'; // Import komponen Analytics
import RightSide from './RigtSide/RightSide'; // Import komponen RightSide

function AdminDashboard() {
  const [content, setContent] = useState(0); // Menyimpan indeks konten yang dipilih

  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar setContent={setContent} />
        <div className="content">
          <div className="main-content">
            {content === 0 && <MainDash />}
            {content === 0 && <RightSide />}
            {content === 1 && <User />}
            {content === 2 && <TransaksiPage />}
            {content === 3 && <Chat />}
            {content === 4 && <Analytics />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
