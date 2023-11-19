import React from 'react';
import './Navbar.css'; 
import myImage from './logo.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={myImage} alt="Description" style={{ width: '60px', height: 'auto' }}/>
      <ul className="nav-links">
        <li><a href="/">In tài liệu</a></li>
        <li><a href="/about">Quản lý</a></li>
        <li><a href="/contact">Lịch sử in</a></li>
        <li><a href="/contact">Thanh toán</a></li>
        <li><a href="/contact">Đăng xuất</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
