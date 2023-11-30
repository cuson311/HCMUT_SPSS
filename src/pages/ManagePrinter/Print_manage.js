import React from "react";
import "./Print_manage.css";
import search_icon from "./asset/search_icon.png";
import PrinterCard from "./Printer_card";
import { useState, useEffect } from "react";
import quit_logo from "./asset/quit_icon.png";
import ReactDropdown from "react-dropdown";
import "react-dropdown/style.css";

const PrintManage = () => {
  const printer = require("./printer_data");
  const [data, setData] = useState(printer.get_array());
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
      alert("Please type all information");
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
    setData(printer.get_array());
    setShowModal(false);
  };
  useEffect(() => {}, [data]);
  return (
    <>

      <div className="print_manager_search">
        <div className="search_wrapper">
          <input
            type="text"
            className="print_manager_search_input"
            placeholder="Tìm kiếm"
          />
          <button className="print_manager_search_button">
            <img src={search_icon} alt="search_icon" width={30} height={30} />
          </button>
        </div>
        <button className="add_print_button" onClick={() => setShowModal(true)}>
          Thêm máy in
        </button>
      </div>
      <div className="printer_container">
        {data.length > 0 ? (
          data.map((item, index) => <PrinterCard key={index} data={item} />)
        ) : (
          <div>NOT FOUND</div>
        )}
      </div>

      {showModal && (
        <div className="add_printer_model">
          <div className="model_container">
            <img
              src={quit_logo}
              alt="quit_logo"
              className="model_quit"
              width={20}
              height={20}
              onClick={() => setShowModal(false)}
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
  );
};

export default PrintManage;
