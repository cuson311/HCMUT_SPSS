import { React, useState } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import paperImg from '../../assets/image/paper.jpg';
import { Typography, Button, Select, Option } from '@material-tailwind/react';
import RequiredLogin from '../../components/RequiredLogin'
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
const BuyingPapers = (props) => {
  console.log(props.value['paperNumber'])
  const [state, SetQuantity] = useState({ quantity: 0, price: 0 });

  const handleIncrement = () => {
    SetQuantity((prevState) => ({
      ...prevState,
      quantity: prevState.quantity + 1,
      price: prevState.price + 250,
    }));
  };

  const handleChangeQuantity = (e) => {
    let newQuantity = parseInt(e.target.value);
    if (isNaN(newQuantity)) newQuantity = 0;
    const newPrice = isNaN(newQuantity) ? 0 : newQuantity * 250;
    SetQuantity({ quantity: newQuantity, price: newPrice });
  };

  const handleDecrement = () => {
    if (state.quantity > 0) {
      SetQuantity((prevState) => ({
        ...prevState,
        quantity: prevState.quantity - 1,
        price: prevState.price - 250,
      }));
    }
  };
  
  const handleBuyPaper = () => {
    if (parseInt(state.quantity) === 0) {
      toast.warn("Vui lòng chọn số lượng!");
      return;
    }
    else {
        props.value['paperNumber'] = parseInt(props.value['paperNumber']) + state.quantity;
        toast.success("Mua giấy thành công!")
        SetQuantity((prevState) => ({
          ...prevState,
          quantity: 0,
          price: 0,
        }
        ));
    }
    
  }
  return (
    <>
      <Header value={props} />
       { props.value.isLogin === false ? (<RequiredLogin/>) : (
        <section className="text-gray-700 body-font overflow-hidden bg-white ">
          <div className="container px-5 py-5 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                src={paperImg}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <Typography className='mb-3'>Số giấy bạn đang có : {props.value['paperNumber']}</Typography>
                <h2 className="text-sm title-font text-gray-500 tracking-widest ps-0">Loại giấy</h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Giấy in A4 Double A 80gsm</h1>
                <div className="flex mb-4"></div>
                <p className="leading-relaxed">Giấy A4 Double A định lượng 80gsm với độ dày cao, bề mặt giấy đẹp rất phù hợp để in photo</p>
                <div className="mt-3 items-center pb-3 border-b-2 border-gray-200 ">
                  <div className='flex items-center mb-3'>
                      <p className="text-slate-400 hover:text-sky-400">Đơn giá : 250 VNĐ</p>
                  </div>
                  <div className="flex items-center w-50 mb-3">
                    <Select
                      label="Chọn gói"
                    >
                      <Option value="50" onClick={(e) => {SetQuantity((prevState) => ({
                          ...prevState,
                          quantity: 50,
                          price: 50*250,
                          }));}}>50</Option>
                      <Option value="100" onClick={(e) => {SetQuantity((prevState) => ({
                          ...prevState,
                          quantity: 100,
                          price: 100*250,
                          }));}}>100</Option>
                      <Option value="150" onClick={(e) => {SetQuantity((prevState) => ({
                          ...prevState,
                          quantity: 150,
                          price: 150*250,
                          }));}}>150</Option>
                      <Option value="200" onClick={(e) => {SetQuantity((prevState) => ({
                          ...prevState,
                          quantity: 250,
                          price: 200*250,
                          }));}}>250</Option>
                    </Select>
                  </div>
                  <div className="d-flex items-center">
                    <p className="me-3">Số lượng</p>
                    <div className="flex items-center">
                      <Button
                        color="blue"
                        buttonType="outline"
                        className="px-3 py-2 rounded-none"
                        onClick={handleDecrement}
                        disabled={state.quantity === 0}
                      >
                        -
                      </Button>
                      <input
                        type="number"
                        className="bg-gray-50 border border-gray-300 w-16 text-center text-gray-700 font-semibold outline-none focus:border-indigo-500 h-100 p-1.5"
                        value={state.quantity}
                        onChange={(e) => handleChangeQuantity(e)}
                      />
                      <Button color="blue" buttonType="outline" className="px-3 py-2 rounded-none" onClick={handleIncrement}>
                        +
                      </Button>
                    </div>
                  </div>
                  
                </div>
                <div className="flex pt-3">
                      <p className="title-font font-medium text-2xl text-sky-400/100">Thành tiền : {state.price} VNĐ</p>
                    <Button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={()=>handleBuyPaper()}>
                      Mua ngay
                    </Button>
                  </div>
                </div>
              </div>
            </div>
        </section>
      )}
        <Footer />
        </>

    );
  };
  
  export default BuyingPapers;