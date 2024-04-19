import React from 'react';

const AnalyticsPage = () => {
  return (
    <div>
      <h1>Analytics</h1>
      <table>
        <thead>
          <tr>
            <th>Tanggal</th>
            <th>Pengunjung</th>
            <th>Transaksi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01-04-2024</td>
            <td>200</td>
            <td>50</td>
          </tr>
          {/* Anda bisa menambahkan lebih banyak baris sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsPage;
