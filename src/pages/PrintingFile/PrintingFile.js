import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Typography } from '@material-tailwind/react';
import PrinterPicker from './PrinterPicker'
import RequiredFile from '../../components/RequiredFile';
import RequiredLogin from '../../components/RequiredLogin'
import Box from '@mui/material/Box';
import PropertiesPicker from './PropertiesPicker.js';
const PrintingFile = (props) => {
    const file = props.value['printingFile']
    return (
    <> 
    <Header value={props}/>
        { props.value.isLogin === false ? (<RequiredLogin/>) : (
        <Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            typography: 'body1',
            minHeight: '500px',
            '& > :not(style) ~ :not(style)': {
            ml: 2,
            },
        }}
        >
            {
                file ? (
                    <div className="grid grid-cols-3 gap-4 mb-5">
                        <div className="col-span-1 h-fit" style={{display:'flex',justifyContent:'center', flexWrap:'wrap'}}>
                            <Typography
                                    variant='h4'
                                    color="blue-gray"
                                    className="font-mono font-medium text-cyan-500	my-3 text-center h-fit w-full"
                                >
                                    CHỌN MÁY IN
                            </Typography>
                            <PrinterPicker/>
                        </div>
                        <div className="col-span-1">
                            <div>
                                <Typography
                                    variant='h4'
                                    color="blue-gray"
                                    className="font-mono font-medium text-cyan-500	my-3 text-center"
                                >
                                    XEM TRƯỚC
                                </Typography>
                                {
                                file ? (
                                    <div className='border bg-cyan-500 shadow-md shadow-cyan-500/20'>
                                    <object data={URL.createObjectURL(file)} type={file.type} width="100%" height="600px">
                                        <p>Tệp tin không thể hiển thị, bạn có thể tải xuống bằng link sau</p>
                                        <a href={URL.createObjectURL(file)} download>Download file</a>
                                    </object>
                                    </div>
                                ) : (
                                    <p>Vui lòng tải file lên</p>
                                )}
                            </div>
                        </div>
                        <div className="col-span-1">
                            <Typography
                                    variant='h4'
                                    color="blue-gray"
                                    className="font-mono font-medium text-cyan-500	my-3 text-center h-fit"
                                >
                                    CHỌN THÔNG SỐ
                            </Typography>
                            <div className='bordershadow-md shadow-cyan-500/20 px-5'>
                            <PropertiesPicker/>
                            </div>
                        </div>
                    </div>

                ) : 
                (
                    <RequiredFile/>
                )
            }
        </Box>)}
    <Footer/>
    </>
  );
};

export default PrintingFile;