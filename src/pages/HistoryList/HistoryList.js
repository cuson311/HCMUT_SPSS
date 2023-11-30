import React, {useState} from 'react';
import './History.css';
import { Input } from "@material-tailwind/react";
import {historyData} from '../../data/HistoryData'

export default function HistoryList() {
    const [state, setState] = useState(
        {historyList: historyData, input:''})
    function handleOnchange(event) {
        event.preventDefault();
        console.log(event.target.value)
        setState({...state,input:event.target.value})
    }

    return (
        <div className="History">
            <div className="search-bar w-6/12 mx-auto">
              <Input label="Tìm kiếm" className='h-full' onChange={(event) => handleOnchange(event)}/>
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