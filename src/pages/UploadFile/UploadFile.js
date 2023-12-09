import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Button } from '@material-tailwind/react';
import pdfLogo from '../../assets/image/pdf_1.png';
import { useNavigate} from 'react-router-dom'
import RequiredLogin from '../../components/RequiredLogin'
import {toast} from 'react-toastify'

export default function UploadPage(props) {
  const navigate  = useNavigate();
  const [selectedFiles, setSelectedFiles] = useState(props.value['uploadedFile']);
  useEffect(() => {
    props.value['uploadedFile'] = selectedFiles;
  }, [selectedFiles]);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    if (file.type === 'application/pdf'){
      toast.success("Tải lên thành công")
    }
    else {
      toast.warn("File không đúng định dạng")
    }
    setSelectedFiles([...selectedFiles, file]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file.type === 'application/pdf' ||
    file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ){
      toast.success("Tải lên thành công")
    }
    else {
      toast.warn("File không đúng định dạng")
    }
    setSelectedFiles([...selectedFiles, file]);
  };

  const handlePrintingFile = (file) => {
    props.value['printingFile'] = file;
    console.log(props.value['printingFile'])
    navigate('/InTaiLieu');
  }; 


  return (
    <>
      <Header value={props} />
      { props.value.isLogin === false ? (<RequiredLogin/>) : (
      <div className='container mt-3 mx-auto'>
        
        <div className='flex justify-center'>
          <div
            style={{
              display: 'flex',
              flex: '1',
              maxWidth: '60%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '400px',
              border: '2px dashed gray',
              margin: '20px',
            }}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <label htmlFor='fileInput' className='cursor-pointer'>
              <input type='file' id='fileInput' style={{ display: 'none' }} onChange={handleFileInputChange} />
              <div style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <img src={pdfLogo} alt="PDF" style={{ width: '64px', height: '64px' }}></img>
              </div>
            </label>
          </div>
          {selectedFiles.length !== 0 && (
            <div className='w-1/2 overflow-y-scroll	' style={{ margin: '20px', height: '400px'}}>
              {selectedFiles.length > 0 && (
                <ul>
                  {selectedFiles.map((file, index) => (
                    <div
                      className='rounded-lg'
                      style={{
                        border:
                          file.type === 'application/pdf'
                            ? '2px solid rgb(34,211,238)'
                            : '2px solid rgb(253,164,175)',
                        marginBottom: '10px',
                      }}
                    
                      key={file.name}
                    >
                      <li className='p-2' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            {file.name}
                            {file.type === 'application/pdf' ? (
                            <span style={{width:'100px'}}>
                              <Button fullWidth color='blue' size="sm" onClick={() => handlePrintingFile (file)}>In ngay</Button>
                            </span>
                            ) : (
                            <span style={{width:'100px'}}>
                            <Button fullWidth color='red'  size="sm" style= {{minWidth:'60px'}}onClick={() => {
                                const updatedFiles = [...selectedFiles];
                                updatedFiles.splice(index, 1);
                                toast.success("Xóa file thành công!")
                                setSelectedFiles(updatedFiles);
                            }}>Xóa</Button>
                            </span>
                            )}
                      </li>
                    </div>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>) }
      <Footer />
    </>
  );
}