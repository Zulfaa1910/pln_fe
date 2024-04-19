import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo.png";
import { UilSignOutAlt, UilEstate, UilUser, UilExchangeAlt, UilCommentDots, UilAnalytics } from "@iconscout/react-unicons";
import { useNavigate, useLocation } from 'react-router-dom';

const Sidebar = ({ setContent }) => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (index) => {
    setSelected(index);
    setContent(index);
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="sidebar" style={expanded ? { left: "0" } : { left: "-60%" }}>
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>Admin</span>
        </div>

        <div className="menu">
          <div className={selected === 0 ? "menuItem active" : "menuItem"} onClick={() => handleMenuClick(0)}>
            <UilEstate />
            <span>Dashboard</span>
          </div>
          <div className={selected === 1 ? "menuItem active" : "menuItem"} onClick={() => handleMenuClick(1)}>
            <UilUser />
            <span>User</span>
          </div>
          <div className={selected === 2 ? "menuItem active" : "menuItem"} onClick={() => handleMenuClick(2)}>
            <UilExchangeAlt />
            <span>Transaksi</span>
          </div>
          <div className={selected === 3 ? "menuItem active" : "menuItem"} onClick={() => handleMenuClick(3)}>
            <UilCommentDots />
            <span>Chat</span>
          </div>
          <div className={selected === 4 ? "menuItem active" : "menuItem"} onClick={() => handleMenuClick(4)}>
            <UilAnalytics />
            <span>Analytics</span>
          </div>
          <div className="menuItem" onClick={handleLogout}>
            <UilSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
      </div>
      {/* Tombol untuk toggle Sidebar */}
      <div className="bars" onClick={toggleSidebar}>
        {expanded ? '<<' : '>>'}
      </div>
    </>
  );
};

export default Sidebar;
