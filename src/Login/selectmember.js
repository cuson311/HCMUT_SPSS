import React from "react";
import { Container } from "react-bootstrap";
import hcmut from '../Login/bk_logo_2.png';
import Footer from "../header&footer/Footer";

function SelectMember() {
  return (
    <>
      <div className='d-flex align-items-center justify-content-center' style={{ backgroundColor: '#EEEEEE', width: '100vw', minHeight: '70vh', paddingTop: '20px', paddingBottom: '20px'}}>
        <Container className="d-flex flex-column" style={{ backgroundColor: '#F8FAFB', width: '90vw', maxWidth: '400px', padding: '1em', borderRadius: '3%', boxShadow: '0px 0px 5px 0px #000000' }}>
          <div className="d-flex align-items-center justify-content-center" style={{ borderBottom: '1px solid #DDDDDD' }}><img src={hcmut} alt="" /></div>
          <div className='mt-3' style={{ width: '100%', height: '100%', color: '#676C70', fontSize: 18, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Đăng nhập dành cho</div>
          <div style={{ textAlign: 'center', borderBottom: '1px solid #DDDDDD' }}>
            <button className='m-1 ms-0 mt-3 btn btn-light' style={{ width: '100%', borderRadius: '8px', border: '1px #DEE2E6 solid', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <div style={{ width: '100%', height: '100%', textAlign: 'center', color: '#1D2125', fontSize: 14.88, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Cán bộ / Sinh viên trường ĐH Bách Khoa Tp.HCM</div>
            </button>
            <button className='m-1 ms-0 mb-4 btn btn-light' style={{ width: '100%', borderRadius: '8px', border: '1px #DEE2E6 solid', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <div style={{ width: '100%', height: '100%', textAlign: 'center', color: '#1D2125', fontSize: 14.88, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Nhân viên SPSO</div>
            </button>
          </div>
          <div className='mt-3 d-flex align-items-center justify-content-start'>
            <span className='me-2' style={{ color: '#0F6CBF', fontSize: 15, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Vietnamese ‎(vi)‎ </span>
            <span className="vr"></span>
            <button className='ms-2 btn btn-light' style={{ borderRadius: '8px', border: '1px #CED4DA solid', background: '#CED4DA', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
              <div style={{ width: '100%', height: '100%', textAlign: 'center', color: '#1D2125', fontSize: 14.88, fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Cookies notice</div>
            </button>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default SelectMember;
