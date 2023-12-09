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

    // const [state, setState] = useState(
    //     {historyList: historyData, input:''})
    // function handleOnchange(event) {
    //     event.preventDefault();
    //     console.log(event.target.value)
    //     setState({...state,input:event.target.value})
    // }

    // return (
      
    //   <div className="History">
    //       <Header value={props}/>
    //         { props.value.isLogin === false ? (<RequiredLogin/>) : (
    //           <>
    //             <div className="search-bar w-6/12 mx-auto">
    //                 <Input label="Tìm kiếm" className='h-full' onChange={(event) => handleOnchange(event)}/>
    //             </div>
    //             {<div className='file-table-wrapper'>
    //                     <table className='data-table'>
    //                         <tr>
    //                             <th><p className='rectangle'>ID</p></th>
    //                             <th><p className='rectangle'>Thời điểm in</p></th>
    //                             <th><p className='rectangle'>Tên máy tin</p></th>
    //                             <th><p className='rectangle'>Tên tệp tin</p></th>
    //                             <th><p className='rectangle'>Số trang</p></th>
    //                         </tr>
    //                         {
    //                         state.historyList
    //                         .filter((item) => item.printerID.toLowerCase().includes(state.input.toLowerCase()))
    //                         .map((item, index) => (
    //                           <tr key={index}>
    //                             <td>{item.ID}</td>
    //                             <td>{item.stamp}</td>
    //                             <td>{item.printerID}</td>
    //                             <td>{item.fileName}</td>
    //                             <td>{item.pageNums}</td>
    //                           </tr>
    //                         ))
    //                         }
    //                     </table>
    //                 </div>
    //                 }
    //             <nav class="mt-5">
    //               <ul class="pag pagination justify-content-end">
    //                 <li class="page-item">
    //                   <a class="page-link text-dark">Previous</a>
    //                 </li>
    //                 <li class="page-item active">
    //                   <a class="page-link" href="#">1</a>
    //                 </li>
    //                 <li class="page-item">
    //                   <a class="page-link text-dark">2</a>
    //                 </li>
    //                 <li class="page-item">
    //                   <a class="page-link text-dark">3</a>
    //                 </li>
    //                 <li class="page-item">
    //                   <a class="page-link text-dark">4</a>
    //                 </li>
    //                 <li class="page-item">
    //                   <a class="page-link text-dark">Next</a>
    //                 </li>
    //               </ul>
    //             </nav>
    //           </>
    //         )}
    //         <Footer/>
    //     </div>

    // );
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