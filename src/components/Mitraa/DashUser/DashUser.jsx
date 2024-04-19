import React from "react";
import "./DashUser.css";

const DashUser = () => {
  const randomText = "Ini adalah teks acak untuk container di bawah Dashboard";

  return (
    <div className="DashUser">
      <h1>Dashboard</h1>
      <div className="container-full">
        <p>{randomText}</p>
      </div>
    </div>
  );
};

export default DashUser;
