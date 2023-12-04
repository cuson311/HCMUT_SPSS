import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import Dialog from '@mui/material/Dialog';
import {Link} from 'react-router-dom';
import LockPersonIcon from '@mui/icons-material/LockPerson';
export default function NotificationDialog() {
  const [open, setOpen] = React.useState(true);
 
  const handleOpen = () => setOpen(open);
 
  return (
    <>
      <div style={{minHeight:'550px'}}>
        <Dialog open={open} handler={handleOpen}>
            <div className="rounded-lg flex-wrap justify-center p-5">
            <div className="flex justify-center pt-3 py-5">
              <LockPersonIcon style={{  transform: 'scale(4)'}}/>
            </div>
            <Typography variant="h4">
              Vui lòng thực hiện đăng nhập
            </Typography>
            <div className="mb-2  flex justify-center mt-4">
              <span class="absolute flex h-3 w-3" style={{right:'35%'}}>
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full  bg-red-600 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              <Link to='/ChonDoiTuong'>
                <Button variant="gradient" color="blue" onClick={handleOpen}>
                    Đăng nhập
                </Button>
              </Link>
            </div>
          </div>
        </Dialog>
      </div>
    </>
  );
}