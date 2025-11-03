// src/components/MenuItems.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MenuItems = ({ isMobile, setSideBarOpen }) => {
  const handleClick = () => {
    if (isMobile && setSideBarOpen) setSideBarOpen(false);
  };

  return (
    <ul className="flex flex-col md:flex-row gap-6 text-white text-lg font-medium">
      <li><Link onClick={handleClick} to="/">الرئيسية</Link></li>
      <li><Link onClick={handleClick} to="/cart">السلة</Link></li>
      <li><Link onClick={handleClick} to="/myorders">طلباتي</Link></li>
      <li><Link onClick={handleClick} to="/login">تسجيل الدخول</Link></li>
    </ul>
  );
};

export default MenuItems;
