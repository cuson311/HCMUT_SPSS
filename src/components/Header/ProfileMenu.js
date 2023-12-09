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
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import HistoryIcon from '@mui/icons-material/History';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import UploadIcon from '@mui/icons-material/Upload';
import PrintIcon from '@mui/icons-material/Print';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Link , useNavigate } from "react-router-dom";
const profileMenuUser = [
  {
    label: "Lịch sử in",
    to: '/LichSuIn',
    icon: HistoryIcon,
  },
  {
    label: "Tải tài liệu",
    to: '/TaiTaiLieu',
    icon: UploadIcon,
  },
  {
    label: "In tài liệu",
    to: '/InTaiLieu',
    icon: PrintIcon,
  },
  {
    label: "Mua giấy in",
    to: '/MuaGiayIn',
    icon: AddShoppingCartIcon,
  },
  {
    label: "Đăng xuất",
    to: '/',
    icon: PowerSettingsNewIcon,
  },
];
const profileMenuAdmin = [
  {
    label: "Quản lí máy in",
    to: '/QuanLiMayIn',
    icon: LocalPrintshopIcon,
  },
  {
    label: "Đăng xuất",
    to: '/',
    icon: PowerSettingsNewIcon,
  },
];
 
export default function ProfileMenu(props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const {isLogin, fullname, avatar, role} = props.props;
  const navigate  = useNavigate();
  const handleClickLogOut = (e) => {
    props.props['isLogin'] = false;
    navigate('/')
    window.location.reload();
  }
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
            size="sl"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={avatar}
          />
            <Typography variant="small">
                {fullname}
            </Typography>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      {isLogin && role==='user' && (<MenuList className="p-1">
        {profileMenuUser.map(({ label, to,icon }, key) => {
          const isLastItem = key === profileMenuUser.length - 1;
          return (
            <Link to = {to}>
              <MenuItem
                key={label}
                onClick={isLastItem ? handleClickLogOut : closeMenu}
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
      {isLogin && role==='admin' && (<MenuList className="p-1">
        {profileMenuAdmin.map(({ label, to, icon }, key) => {
          const isLastItem = key === profileMenuAdmin.length - 1;
          return (
            <Link to = {to}>
              <MenuItem
                key={label}
                onClick={isLastItem ? handleClickLogOut : closeMenu}
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
 