import React from "react";
import {
  Typography,
  Button,

} from "@material-tailwind/react";
import logo from '../../assets/image/logoBK.png';
import { Link } from "react-router-dom";
import ProfileMenu from './ProfileMenu'

 

 
 export default function Header(props) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const {isLogin, username, role} = props.value.value;
  console.log('Header',{isLogin, username, role})
  return (
    <div className="w-full py-3 px-8 drop-shadow-lg" style={{ borderBottom: '1px solid #E5E7EB' }}>
      <div className="relative flex items-center justify-between text-blue-gray-900">
        <Link to ='/'>
            <img src={logo} alt="logo" size="md" width={50} height={50}/>
        </Link>
        
        {role==='user' && (<ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ml-10">
          <Link to= '/LichSuIn'>
              <li>
              <Typography
                  color="blue-gray"
                  className="font-mono transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer font-medium"
              >
                  LỊCH SỬ IN
              </Typography>
              </li>
          </Link>
          <Link to= '/TaiTaiLieu'>

              <li>
              <Typography
                  color="blue-gray"
                  className="font-mono transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer font-medium"
              >
                  TẢI TÀI LIỆU
              </Typography>
              </li>
          </Link>
          <Link to= '/InTaiLieu'>
              <li>
              <Typography
                  color="blue-gray"
                  className="font-mono transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer font-medium"
              >
                  IN TÀI LIỆU
              </Typography>
              </li>
          </Link>
          <Link to= '/MuaGiayIn'>
              <li>
              <Typography
                  color="blue-gray"
                  className="font-mono transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer font-medium"
              >
                  MUA GIẤY IN
              </Typography>
              </li>
          </Link>
        </ul>)}
        {role === 'admin' &&(  <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ml-10">
              <Link to= '/QuanLiMayIn'>
              <li>
              <Typography
                  color="blue-gray"
                  className="font-mono transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer font-medium"
              >
                  QUẢN LÍ MÁY IN
              </Typography>
              </li>
              </Link>
          </ul>
        )
        }
        {
          isLogin ?
          (<ProfileMenu props={props.value.value}/>):
          (
            <Link to= '/ChonDoiTuong'>
              <Button color="blue">Đăng nhập</Button>
            </Link>
          )
        }
      </div>
    </div>
  );
}