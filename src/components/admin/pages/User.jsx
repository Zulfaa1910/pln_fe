import React from 'react';

const UserPage = () => {
  return (
    <div>
      <h1>User</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Alice</td>
            <td>Admin</td>
          </tr>
          {/* Anda bisa menambahkan lebih banyak baris sesuai kebutuhan */}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
