import React from 'react';

const TransaksiPage = () => {
  return (
    <div>
      <h1>Transaksi</h1>
      <table>
        <thead>
          <tr>
            <th>ID Transaksi</th>
            <th>Nama Barang</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRX001</td>
            <td>Laptop</td>
            <td>2</td>
          </tr>
          {/* Anda bisa menambahkan lebih banyak baris sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

export default TransaksiPage;
