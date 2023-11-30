import "./App.css";

import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import BuyingPaper from './pages/BuyingPaper/BuyingPaper'
import HistoryList from './pages/HistoryList/HistoryList'
import UploadFile from './pages/UploadFile/UploadFile'
import PrintingFile from './pages/PrintingFile/PrintingFile'
import ManagePrinter from './pages/ManagePrinter/Print_manage'
import Footer from "./components/Footer/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/TrangChu" element={<Homepage />} />
        <Route path="/LichSuIn" element={<HistoryList />} />
        <Route path="/TaiTaiLieu" element={<UploadFile />} />
        <Route path="/InTaiLieu" element={<PrintingFile />} />
        <Route path="/MuaGiayIn" element={<BuyingPaper />} />
        <Route path="/QuanLiMayIn" element={<ManagePrinter />} />

      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
