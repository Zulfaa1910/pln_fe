import React from 'react';

const ChatPage = () => {
  return (
    <div>
      <h1>Chat</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Pesan Terakhir</th>
            <th>Waktu</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bob</td>
            <td>Hai, apa kabar?</td>
            <td>09:00 AM</td>
          </tr>
          {/* Anda bisa menambahkan lebih banyak baris sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

export default ChatPage;
