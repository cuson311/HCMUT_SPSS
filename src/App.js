import Homepage from './pages/Homepage/Homepage'
import BuyingPaper from './pages/BuyingPaper/BuyingPaper'
import HistoryList from './pages/HistoryList/HistoryList'
import UploadFile from './pages/UploadFile/UploadFile'
import PrintingFile from './pages/PrintingFile/PrintingFile'
import ManagePrinter from './pages/ManagePrinter/Print_manage'
import SelectMember from "./pages/Login/selectmember";
import {StateLogin} from './data/StateLogin'
import Login from './pages/Login/login';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage value={StateLogin}/>} />
        <Route path="/LichSuIn" element={<HistoryList value={StateLogin} />} />
        <Route path="/ChonDoiTuong" element={<SelectMember value={StateLogin} />} />
        <Route path="/DangNhap" element={<Login value={StateLogin} />} />
        <Route path="/TaiTaiLieu" element={<UploadFile value={StateLogin} />} />
        <Route path="/InTaiLieu" element={<PrintingFile value={StateLogin} />} />
        <Route path="/MuaGiayIn" element={<BuyingPaper value={StateLogin} />} />
        <Route path="/QuanLiMayIn" element={<ManagePrinter value={StateLogin} />} />
      </Routes>
      <ToastContainer />

    </>
  );
}

export default App;
