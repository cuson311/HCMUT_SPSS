import React from 'react';
import hcmut from '../../assets/image/bk_logo.png';
import Footer from '../../components/Footer/Footer';
import {useNavigate  } from 'react-router-dom';
import {UserData} from '../../data/UserData';
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function Login(props) {
  console.log(UserData);
  console.log('Login', props.value['isLogin'])
  const navigate  = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredUsername = document.getElementById('email').value;
    const enteredPassword = document.getElementById('password').value;
    if (!(enteredUsername && enteredPassword)) {
      toast.warning('Vui lòng nhập đầy đủ thông tin')
    }
    else {
      const matchedUser = UserData.find(user => user.username === enteredUsername && user.password === enteredPassword);
      if (matchedUser) {
        console.log("Data match:", matchedUser);
        props.value.username = matchedUser.username;
        props.value.fullname = matchedUser.fullname;
        props.value.avatar = matchedUser.avatar;
        props.value.paperNumber = matchedUser.paperNumber;
        props.value.isLogin = true;
        toast.success("Đăng nhập thành công!")
        navigate('/');
      } else {
        toast.error("Sai thông tin đăng nhập");
      }
    }
  }
  return (
    <>
      <div style={{ backgroundColor: '#EEEEEE', minHeight: '100vh'}}>
        <div className="container pt-2 pb-5" style={{minWidth: '85vw'}}>
          <div className="w-100 w-md-85 bg-white mx-auto shadow-sm">
            <div className="w-full d-flex align-items-center text-white" style={{ backgroundColor: '#210F7A' }}>
              <img className='m-2' src={hcmut} alt="logo" />
              <div className='ms-2' style={{width: '100%', height: '100%', color: 'white', fontSize: 24.88, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>DỊCH VỤ XÁC THỰC TẬP TRUNG</div>
            </div>
            <div className="d-flex flex-column flex-md-row">
              <div className='m-2 rounded' style={{ backgroundColor: '#EEEEEE'}}>
                <div className='p-2'>
                  <div className='m-2 mt-0 mb-0 pb-2' style={{ height: '100%', color: '#990033', fontSize: 17.92, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', borderBottom: '1px solid #DDDDDD' }}>Nhập thông tin tài khoản của bạn</div>
                    <form 
                      onSubmit={(e) => handleSubmit(e)}
                    >
                    <div className="mt-2">
                    <label
                      htmlFor="email"
                      className="block font-weight-semibold text-16 text-secondary"
                    >
                      <div className='ms-2'style={{width: '100%', height: '100%', color: '#777777', fontSize: 13.45, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Tên tài khoản</div>
                    </label>
                    <input
                      name="email"
                      id="email"
                      type="text"
                      className="mt-1 ms-2 px-2 py-1 outline-none border border-secondary rounded-1"
                      style={{backgroundColor: '#FFFFDD'}}
                    />
                  </div>
                  <div className="mt-2">
                    <label
                      htmlFor="password"
                      className="block font-weight-semibold text-16 text-secondary"
                    >
                      <div  className='ms-2 mt-2' style={{width: '100%', height: '100%', color: '#777777', fontSize: 13.56, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Mật khẩu</div>
                    </label>
                    <input
                      name="password"
                      id="password"
                      type="password"
                      className="mt-1 ms-2 mb-2 px-2 py-1 outline-none border border-secondary rounded-1"
                      style={{backgroundColor: '#FFFFDD'}}
                    />

                  </div>
                  <div className="form-check d-flex align-items-center ms-2 mb-2 pb-2" style={{borderBottom: '1px solid #DDDDDD'}}>
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label d-flex align-items-center" for="flexCheckDefault">
                    <span className='ms-2' style={{width: '100%', height: '100%', color: '#777777', fontSize: 11.25, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Cảnh báo trước khi tôi đăng nhập vào các trang web khác</span>
                    </label>
                  </div>
                  <div className="">
                    <button
                      type="submit"
                      className="btn rounded-2 outline-none ms-2 me-2"
                      style={{backgroundColor: '#006DCC'}}
                      onClick = {(e) => handleSubmit(e)}
                    >
                      <div style={{width: '100%', height: '100%', textAlign: 'center', color: 'white', fontSize: 13.23, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Đăng nhập</div>
                    </button>
                    <button
                      type="reset"
                      className="btn rounded-2 outline-none"
                      style={{backgroundColor: '#006DCC'}}
                    >
                      <div style={{width: '100%', height: '100%', textAlign: 'center', color: 'white', fontSize: 13.23, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Xóa</div>
                    </button>
                  </div>
                  <div className='ms-2 mt-2' style={{height: '100%', color: '#0000EE', fontSize: 12.39, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>Thay đổi mật khẩu?</div>
                    </form>
                </div>
              </div>
              <div className="mt-2 mt-md-30 ms-md-20">
              <h2 className='m-3 mb-0 p-0' style={{color: '#990033', fontSize: 15.23, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Ngôn ngữ</h2>
              <div className='m-4 mt-0 mb-3' >
              <span style={{color: '#0000EE', fontSize: 12.29, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>Tiếng Việt</span>
                <span> </span>
                <span className="vr"></span>
                <span> </span>
                <span style={{color: '#0000EE', fontSize: 12.59, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>Tiếng Anh</span>
              </div>
              <h2 className='m-3 mb-0 p-0' style={{color: '#990033', fontSize: 15.11, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Lưu ý</h2>
                <p className='m-4 mt-0 mb-0' style={{color: 'black', fontSize: 12.19, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                Trang đăng nhập này cho phép đăng nhập một lần đến nhiều hệ thống web ở trường Đại học Bách Khoa Tp.HCM. Điều này có nghĩa là bạn chỉ đăng nhập một lần cho những hệ thống web đã đăng ký với hệ thống xác thực quản lý truy cập tập trung.
                </p>
                <p className='m-4 mt-0 mb-0' style={{color: 'black', fontSize: 12.19, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                Bạn cần dùng tài khoản HCMUT để đăng nhập. Tài khoản HCMUT cho phép truy cập đến nhiều tài nguyên bao gồm hệ thống thông tin, thư điện tử, ...
                </p>
                <p className='m-4 mt-0' style={{color: 'black', fontSize: 12.19, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>
                Vì lý do an ninh, bạn hãy Thoát khỏi trình duyệt Web khi bạn kết thúc việc truy cập các dịch vụ đòi hỏi xác thực!
                </p>

              <h2 className='m-3 mb-0 p-0' style={{color: '#990033', fontSize: 15.23, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word'}}>Hỗ trợ kỹ thuật</h2>
                <div className='m-4 mt-0'>
                  <span style={{width: 178.87, height: 15}}>
                    <span style={{color: 'black', fontSize: 12.19, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>E-mail: </span>
                    <span style={{color: '#0000EE', fontSize: 12.19, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', wordWrap: 'break-word'}}>support@hcmut.edu.vn</span>
                  </span>
                  <span> </span>
                  <span className="vr"></span>
                  <span style={{width: '100%', height: '100%', color: 'black', fontSize: 11.68, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}> ĐT: (84-8) 38647256 - 5200</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className='mt-2 mb-2' style={{ width: '100%', color: '#999999', fontSize: 12.09, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Bản quyền © 2011 - 2012 Đại học Bách Khoa Tp. Hồ Chí Minh.</div>
          <div className='pb-2' style={{ width: '100%', color: '#999999', fontSize: 12.90, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>
            Được hỗ trợ bởi
            <span style={{ color: '#0000EE', textDecoration: 'underline' }}> Jasig CAS 3.5.1</span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;