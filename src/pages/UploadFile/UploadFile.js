import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

export default function UploadPage (props) {
    const [files, setFiles] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const fileType = file.name.split('.').pop();

        if (['doc', 'pdf', 'pptx'].includes(fileType)) {
            setFiles([...files, {file, fileType, isPrintable: true}]);
        } else {
            setFiles([...files, {file, fileType, isPrintable: false}]);
        }
    };

    const handleFileDelete = (index) => {
        setFiles(files.filter((_, i) => i !== index));
    };

    return (
        <>
            <Header value={props}/>
            <h1>UploadPage</h1>
            <input type="file" onChange={handleFileUpload} />
            {files.map((file, index) => (
                <div key={index}>
                    <p>{file.file.name}</p>
                    {file.isPrintable ? (
                        <button onClick={() => window.print()}>Print</button>
                    ) : (
                        <button style={{color: 'red'}} onClick={() => handleFileDelete(index)}>X</button>
                    )}
                </div>
            ))}
            <Footer/>
        </>
    );
}
