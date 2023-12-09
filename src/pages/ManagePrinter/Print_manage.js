import React from "react";
import "./Print_manage.css";
import PrinterCard from "./Printer_card";
import { useState, useEffect } from "react";
import quit_logo from "./asset/quit_icon.png";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import RequiredLogin from '../../components/RequiredLogin'
import { Button } from "@material-tailwind/react";
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const PrintManage = (props) => {
  const printer = require("./printer_data");
  const [data, setData] = useState(printer.get_array());
  const [inputState, setinputState] = useState({ input: '' });

  function handleOnchange(event) {
    event.preventDefault();
    console.log('evnet',inputState.input)
    setinputState({ input: event.target.value });
  }
  const [showModal, setShowModal] = useState(false);
  const campus = ["BK_CS1", "BK_CS2"];
  const building_cs1 = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "B1",
    "B2",
    "B3",
    "B4",
    "B6",
    "B8",
    "B9",
    "B10",
    "B11",
    "C4",
    "C5",
    "C6",
  ];
  const Building_cs2 = ["H1", "H2", "H3", "H6"];
  const building = building_cs1.concat(Building_cs2);
  const [campus_choice, setCampus_choice] = useState("Campus");
  const [building_choice, setBuilding_choice] = useState("Building");
  const [id, setId] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [location, setLocation] = useState("");
  const [img, setImg] = useState("");

  const add_printer = () => {
    if (
      campus_choice === "Campus" ||
      building_choice === "Building" ||
      id === "" ||
      brand === "" ||
      model === "" ||
      location === "" ||
      img === ""
    ) {
      toast.warn("Vui lòng điền đầy đủ thông tin")
      return;
    }
    let item = {
      id_printer: id,
      brand_name: brand,
      model_name: model,
      campus_name: campus_choice,
      building_name: building_choice,
      location_name: location,
      img_source: img,
      status: true,
    };
    printer.add_printer(item);
    toast.success("Thêm máy in thành công")
    setData(printer.get_array());
    setShowModal(false);
  };
  useEffect(() => {}, [data]);
  return (
    <>
      <Header value={props}/>
      { props.value.isLogin === false ? (<RequiredLogin/>) : (
        <>
          <div className="flex justify-between items-center my-4 px-4">
            <div className="h-fit"> 
              <div className="relative flex w-full flex-wrap items-stretch">
                <input
                  // type="search"
                  className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon1"
                  onChange={(e) => handleOnchange(e)} />
                <button
                  className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
                  type="button"
                  id="button-addon1"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5">
                    <path
                      fill-rule="evenodd"
                      d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                      clip-rule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <Button color="blue" style={{minWidth:'150px'}} onClick={() => setShowModal(true)}>
              Thêm máy in
            </Button>
          </div>
            {data.filter((item) => item.brand_name && item.brand_name.toLowerCase().includes(inputState.input.toLowerCase())).length > 0 ? (
            <div className="grid grid-cols-4 mx-auto gap-3 mb-3">
              { 
                data
                .filter((item) => {
                  const brandName = item.brand_name && item.brand_name.toLowerCase();
                  const modelName = item.model_name && item.model_name.toLowerCase();
                  const input = inputState.input.toLowerCase();
                  return (brandName && brandName.includes(input)) || (modelName && modelName.includes(input));
                })
                .map((item, index) => <PrinterCard key={index} data={item} />)
              }
            </div>
            ) : (
              <div className="w-full flex justify-center items-center" style={{minHeight:'300px'}}>Không tìm thấy kết quả</div>
            )}

          {showModal && (
            <div className="add_printer_model" >
              <div className="model_container">
                <img
                  src={quit_logo}
                  alt="quit_logo"
                  className="model_quit"
                  width={20}
                  height={20}
                  onClick={() => setShowModal(!showModal)}
                />
                <div className="modal_wrapper_add">
                  <h3>ADD PRINTER</h3>
                  <div className="modal_wrapper_input">
                    <span>ID :</span>
                    <input
                      type="text"
                      placeholder="ID..."
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                    />
                  </div>
                  <div className="modal_wrapper_input">
                    <span>Brand :</span>
                    <input
                      type="text"
                      placeholder="Brand..."
                      value={brand}
                      onChange={(e) => setBrand(e.target.value)}
                    />
                  </div>
                  <div className="modal_wrapper_input">
                    <span>Model :</span>
                    <input
                      type="text"
                      placeholder="Model..."
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                    />
                  </div>
                  <div className="modal_wrapper_input">
                    <span>Campus :</span>
                    <ReactDropdown
                      options={campus}
                      onChange={(e) => setCampus_choice(e.value)}
                      value={"Campus"}
                      placeholder="Select a campus"
                      className="modal_wrapper_input_dropdown"
                    />
                  </div>
                  <div className="modal_wrapper_input">
                    <span>Building :</span>
                    <ReactDropdown
                      options={
                        campus_choice === "BK_CS1"
                          ? building_cs1
                          : campus_choice === "BK_CS2"
                          ? Building_cs2
                          : building
                      }
                      onChange={(e) => setBuilding_choice(e.value)}
                      value={"Building"}
                      placeholder="Select a campus"
                      className="modal_wrapper_input_dropdown"
                    />
                  </div>
                  <div className="modal_wrapper_input">
                    <span>Location :</span>
                    <input
                      type="text"
                      placeholder="Location..."
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>
                  <div className="modal_wrapper_input">
                    <span>Image :</span>
                    <input
                      type="text"
                      placeholder="Image_source..."
                      value={img}
                      onChange={(e) => setImg(e.target.value)}
                    />
                  </div>
                  <button
                    className="add_print_button add_more"
                    onClick={add_printer}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          )}
        </>
      )}
      <Footer/>
    </>
  );
};

export default PrintManage;
