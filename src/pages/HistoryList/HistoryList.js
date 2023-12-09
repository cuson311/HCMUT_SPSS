import React, {useState} from 'react';
import './History.css';
import { Input } from "@material-tailwind/react";
import {historyData} from '../../data/HistoryData'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RequiredLogin from '../../components/RequiredLogin';
import {
  DataGrid,
} from '@mui/x-data-grid';
export default function HistoryList(props) {
    const [state, setState] = useState(
        {historyList: historyData, input:''})
    function handleOnchange(event) {
        event.preventDefault();
        console.log(event.target.value)
        setState({...state,input:event.target.value})
    }
    const columns = [      
    { field: "stamp", headerName: "Thời điểm in", align: "center",headerAlign: "center",flex:1 },
    {
      field: "fileName",
      headerName: "Tên file",
      headerAlign: "center",
      align: "center",
      flex: 1.5,
      cellClassName: "name-column--cell",
    },
    {
      field: "printerID",
      headerName: "Tên máy in",
      headerAlign: "center",
      align: "center",
      flex: 0.8,
      cellClassName: "name-column--cell",
    },
    {
      field: "pageNums",
      headerName: "Số trang in",
      headerAlign: "center",
      align: "center",
      flex: 0.8,
      cellClassName: "name-column--cell",
    },
  ];

  return (
    <>
      <Header value={props}/>
      { props.value.isLogin === false ? (<RequiredLogin/>) : (

        <>
          <div className="grid mx-4 gap-y-4  md:mt-28" style={{marginTop:'70px'}}>
          <Input label="Tìm kiếm" className='h-full' onChange={(event) => handleOnchange(event)}/>
            <div
              m="40px 0 0 0"
              height="80vh"
              sx={{
                "& .MuiDataGrid-columnHeaders": {
                  backgroundColor: "bg-dark",
                  color: "text-light",
                },
                "& .MuiDataGrid-footerContainer": {
                  backgroundColor: "bg-dark",
                  color: "text-light",
                },
              }}
              style={{overflow: 'scroll'}}

            >
              <DataGrid
                rows={state.historyList
                            .filter((item) => item.printerID.toLowerCase().includes(state.input.toLowerCase()))}
                columns={columns}
                rowHeight={100}
                style={{minWidth:'1000px'}}
              />
            </div>
          </div>
        </>
      )}
      <Footer/>
    </>
  );
}