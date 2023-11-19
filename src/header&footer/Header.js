import React from "react";
import bell_icon from "../Print_management/asset/bell.png";
import logo from "../Print_management/asset/logoBK.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="print_manager_nav">
        <div className="print_manager_nav_button">
          <img src={logo} alt="logo_bk" width={60} height={60} />
          <a href="/" className="nav_link nav_link_mana">
            QUẢN LÍ MÁY IN
          </a>
        </div>
        <div className="print_manager_nav_button">
          <div className="nav_noti">
            <img src={bell_icon} alt="bell_icon" width={20} height={20} />
            <span className="nav_link nav_link_noti">Thông báo</span>
          </div>
          <a href="/" className="nav_link nav_link_quit">
            <img src={logo} alt="logo" width={40} height={40}></img>
            Đăng xuất
          </a>
        </div>
      </div>
      <div className="print_manager_bar"></div>
    </>
  );
};

export default Header;
