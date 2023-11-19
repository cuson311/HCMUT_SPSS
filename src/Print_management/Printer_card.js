import React from "react";
import "./Print_manage.css";
import ReactSwitch from "react-switch";
import { useState, useEffect } from "react";

const PrinterCard = ({ data }) => {
  const printer = require("./printer_data");
  const [triggerRender, setTriggerRender] = useState(false);

  const handleChange = () => {
    printer.onChangeItem(data);
    setTriggerRender((prev) => !prev);
  };
  useEffect(() => {}, [triggerRender]);
  return (
    <div className="printer_card">
      <img src={data.img_source} alt="printer_img" className="printer_img" />
      <span className="card_text">ID: {data.id_printer} </span>
      <span className="card_text">Brand: {data.brand_name} </span>
      <span className="card_text">Model: {data.model_name} </span>
      <span className="card_text">
        Location: {data.campus_name}/{data.building_name}/{data.location_name}
      </span>
      <span className="card_text">Paper type: A3, A4, A5</span>
      <span className="card_text">File type: .pdf, .doc, .xlsx</span>
      <div className="switch_wrap">
        <ReactSwitch
          checked={data.status}
          onChange={handleChange}
          uncheckedIcon={false}
          checkedIcon={false}
          className="switch_button"
        />
      </div>
    </div>
  );
};

export default PrinterCard;
