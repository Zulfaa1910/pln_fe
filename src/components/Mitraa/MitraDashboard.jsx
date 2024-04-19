import React, { useState } from 'react';
import '../../App.css';
import SideUser from './SideUser/SideUser';
import DashUser from './DashUser/DashUser';
import FAQ from './FAQ';
import Form from './Form';
import Notification from './Notification';

function MitraDashboard() {  // <-- Ubah penamaan komponen di sini
  const [content, setContent] = useState(0); // Menyimpan indeks konten yang dipilih

  return (
    <div className="App">
      <div className="AppGlass">
        <SideUser setContent={setContent} />
        <div className="content">
          {content === 0 && <DashUser />}
          {content === 1 && <FAQ />}
          {content === 2 && <Form />}
          {content === 3 && <Notification />}
        </div>
      </div>
    </div>
  );
}

export default MitraDashboard; // <-- Juga ubah penamaan ekspor di sini
