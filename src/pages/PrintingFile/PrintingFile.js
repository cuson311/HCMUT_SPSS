import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
const PrintingFile = (props) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <> 
    <Header value={props}/>
      
        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">Column 1</div>
            <div className="col-span-1">
                <div>
                    <h2>Upload a File</h2>
                    
                    <input type="file" accept=".pdf,.doc,.docx,.ppt,.pptx" onChange={handleFileChange} />
                    {file && (
                        <div>
                        <object data={URL.createObjectURL(file)} type={file.type} width="100%" height="600px">
                            <p>File cannot be displayed. You can download it using the link below:</p>
                            <a href={URL.createObjectURL(file)} download>Download file</a>
                        </object>
                        </div>
                    )}
                </div>
            </div>
            <div className="col-span-1">Column 3</div>
        </div>
        <Footer/>
    </>
  );
};

export default PrintingFile;