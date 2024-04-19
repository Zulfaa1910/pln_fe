import React, { useState } from "react";
import "./SideUser.css";
import Logo from "../../../imgs/logo.png";
import { UilSignOutAlt, UilEstate, UilQuestionCircle, UilListUl, UilBell } from "@iconscout/react-unicons";
import { useNavigate } from 'react-router-dom';

const notifications = [
  {
    id: 1,
    title: 'Notifikasi 1',
    content: 'Detail notifikasi 1.',
    read: false,
  },
  {
    id: 2,
    title: 'Notifikasi 2',
    content: 'Detail notifikasi 2.',
    read: true,
  },
];

const countUnreadNotifications = () => {
  return notifications.filter(notification => !notification.read).length;
};

const SideUser = ({ setContent }) => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

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
          <span>User</span>
        </div>
  
        <div className="menu">
          {/* Menu items */}
          <div className={selected === 0 ? "menuItem active" : "menuItem"} onClick={() => handleMenuClick(0)}>
            <UilEstate />
            <span>Menu</span>
          </div>
          <div className={selected === 1 ? "menuItem active" : "menuItem"} onClick={() => handleMenuClick(1)}>
            <UilQuestionCircle />
            <span>FAQ</span>
          </div>
          <div className={selected === 2 ? "menuItem active" : "menuItem"} onClick={() => handleMenuClick(2)}>
            <UilListUl />
            <span>Form</span>
          </div>
          <div className={selected === 3 ? "menuItem active" : "menuItem"} onClick={() => handleMenuClick(3)}>
            <UilBell />
            <span>Notification</span>
            {countUnreadNotifications() > 0 && (
              <span className="notification-badge">{countUnreadNotifications()}</span>
            )}
          </div>
          
          <div className="menuItem" onClick={handleLogout}>
            <UilSignOutAlt />
            <span>Logout</span>
          </div>
        </div>
        <div className="bars" onClick={toggleSidebar}>
          {expanded ? '<<' : '>>'}
        </div>
      </div>
    </>
  );
};

export default SideUser;
