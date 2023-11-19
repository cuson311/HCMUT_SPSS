import React, {useState} from 'react';
import './History.css';
function History() {
    const [state, setState] = useState(
        {historyList: [{ID:'1', stamp: '2023-11-15 T20:35:02' , printerID: 'HP PhotoSmart 7520 ' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',},
        {ID:'1',stamp: '2023-11-15 T20:35:02' , printerID: 'HP PhotoSmart 7520 ' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',},
        {ID:'1',stamp: '2023-11-15 T20:35:02' , printerID: 'Canon Pixma MX922' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',},
        {ID:'1',stamp: '2023-11-15 T20:35:02' , printerID: 'Canon Pixma MX922' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',},
        {ID:'1',stamp: '2023-11-15 T20:35:02' , printerID: 'Canon Pixma MX922' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',},
        {ID:'1',stamp: '2023-11-15 T20:35:02' , printerID: 'Epson Workforce WF-3640' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',},
        {ID:'1',stamp: '2023-11-15 T20:35:02' , printerID: 'Epson Workforce WF-3640' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',},
        {ID:'1',stamp: '2023-11-15 T20:35:02' , printerID: 'Epson Workforce WF-3640' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',},
        {ID:'1',stamp: '2023-11-15 T20:35:02' , printerID: 'Epson Workforce WF-3640' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',},
        {ID:'1',stamp: '2023-11-15 T20:35:02' , printerID: 'Brother MFC-J480DW ' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',},
        {ID:'1',stamp: '2023-11-15 T20:35:02' , printerID: 'Brother MFC-J480DW ' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',},
        {ID:'1',stamp: '2023-11-15 T20:35:02' , printerID: 'Brother MFC-J480DW ' , fileName: 'Capstone_Project_hk231_2023_v3', pageNums :'2',}
    ], input:''})
    function handleOnchange(event) {
        event.preventDefault();
        console.log(event.target.value)
        setState({...state,input:event.target.value})
    }

    return (
        <div className="History">
            
            <div className="search-bar">
            <input type="text" placeholder="Nhập tên file..." onChange={(event) => handleOnchange(event)}/>
            <button className="add-button-blue">Xem chi tiết</button>
            </div>
            {<div className='file-table-wrapper'>
                    <table className='data-table'>
                        <tr>
                            <th><p className='rectangle'>ID</p></th>
                            <th><p className='rectangle'>Thời điểm in</p></th>
                            <th><p className='rectangle'>Tên máy tin</p></th>
                            <th><p className='rectangle'>Tên tệp tin</p></th>
                            <th><p className='rectangle'>Num of pages</p></th>
                        </tr>
                        {
                        state.historyList
                        .filter((item) => item.printerID.toLowerCase().includes(state.input.toLowerCase()))
                        .map((item, index) => (
                          <tr key={index}>
                             <td>{item.ID}</td>
                            <td>{item.stamp}</td>
                            <td>{item.printerID}</td>
                            <td>{item.fileName}</td>
                            <td>{item.pageNums}</td>
                           
                          </tr>
                        ))
                        }
                    </table>
                </div>
                }
            <nav class="mt-5">
              <ul class="pag pagination justify-content-end">
                <li class="page-item">
                  <a class="page-link text-dark">Previous</a>
                </li>
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item">
                  <a class="page-link text-dark">2</a>
                </li>
                <li class="page-item">
                  <a class="page-link text-dark">3</a>
                </li>
                <li class="page-item">
                  <a class="page-link text-dark">4</a>
                </li>
                <li class="page-item">
                  <a class="page-link text-dark">Next</a>
                </li>
              </ul>
            </nav>
        </div>

    );
}
export default History;