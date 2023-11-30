import React from "react";
import map_icon from "../../assets/image/map.png";
import phone_p_icon from "../../assets/image/calling.png";
import mail_icon from "../../assets/image/email.png";
import "./Footer.css";
import logo from '../../assets/image/LogoBKSolid.png'
const Footer = () => {
  return (
    <>
      <footer className="printer_footer">
        <div className="footer_logo">
          <h3>SMART PRINTING SERVICE</h3>
          <img
            src={logo}
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="footer_link">
          <h3>WEBSITE</h3>
          <a href="https://hcmut.edu.vn/">HCMUT</a>
          <a href="https://mybk.hcmut.edu.vn/">MyBK</a>
          <a href="https://mybk.hcmut.edu.vn/bksi/public/vi/">BKSI</a>
        </div>
        <div className="footer_info">
          <h3>LIÊN HỆ</h3>
          <p>
            <img src={map_icon} alt="map" width={13} height={13} /> 268 Lý
            Thường Kiệt, P.14, Q.10, TP.HCM
          </p>
          <p>
            <img src={phone_p_icon} alt="phone" className="phone_icon" /> (028)
            38 651 670 - (028) 38 647 256 (Ext: 5258, 5234)
          </p>
          <p>
            <img src={mail_icon} alt="mail" className="phone_icon" />{" "}
            spss@hcmut.edu.vn
          </p>
        </div>
      </footer>
      <div className="footer_copyright">Copyright 2007-2023 SPSS</div>
    </>
  );
};

export default Footer;
