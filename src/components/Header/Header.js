import React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import logo from '../../assets/image/logoBK.png';
import { Link } from "react-router-dom";
// profile menu component
const profileMenuUser = [
  {
    label: "Lịch sử in",
    to: '/LichSuIn',
    icon: UserCircleIcon,
  },
  {
    label: "Tải tài liệu",
    to: '/TaiTaiLieu',
    icon: Cog6ToothIcon,
  },
  {
    label: "In tài liệu",
    to: '/InTaiLieu',
    icon: InboxArrowDownIcon,
  },
  {
    label: "Mua giấy in",
    to: '/MuaGiayIn',
    icon: LifebuoyIcon,
  },
  {
    label: "Đăng xuất",
    role: 'user',
    icon: PowerIcon,
  },
];
const profileMenuAdmin = [
  {
    label: "Quản lí máy in",
    to: '/QuanLiMayIn',
    icon: UserCircleIcon,
  },
  {
    label: "Đăng xuất",
    icon: PowerIcon,
  },
];
 
function ProfileMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const role = props.props;
  console.log(role)
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      {role==='user' && (<MenuList className="p-1">
        {profileMenuUser.map(({ label, to,icon }, key) => {
          const isLastItem = key === profileMenuUser.length - 1;
          return (
            <Link to = {to}>
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                {/* Đăng xuất */}
                <Typography
                  as="span"
                  variant="small"
                  className="font-mono"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>)}
      {role==='admin' && (<MenuList className="p-1">
        {profileMenuAdmin.map(({ label, to, icon }, key) => {
          const isLastItem = key === profileMenuAdmin.length - 1;
          return (
            <Link to = {to}>
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                {/* Đăng xuất */}
                <Typography
                  as="span"
                  variant="small"
                  className="font-mono"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>)}
    </Menu>
  );
}
 

 
 export default function Header(props) {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const role = props.role;

  return (
    <div className="w-full py-2 px-8">
      <div className="relative flex items-center justify-between text-blue-gray-900">
        <Link to ='/'>
            <img src={logo} alt="logo" size="md" width={60} height={60}/>
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
        <ProfileMenu props={role}/>
        
      </div>
    </div>
  );
}