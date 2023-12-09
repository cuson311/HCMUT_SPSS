import React from "react";
import "./Print_manage.css";
import { useState, useEffect } from "react";
import { Switch } from "@material-tailwind/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
 

const PrinterCard = ({ data }) => {
  const printer = require("./printer_data");
  const [triggerRender, setTriggerRender] = useState(false);

  const handleChange = () => {
    printer.onChangeItem(data);
    setTriggerRender((prev) => !prev);
  };
  useEffect(() => {}, [triggerRender]);
  return (
    <div >
      <Card className="mt-6  border-2 transition ease-in-out delay-150 hover:-translate-y-2 duration-300 bg-slate-50"  >
        <CardHeader className="relative h-56 border">
          <img
            className="w-full h-full object-cover"
            src={data.img_source} alt="printer_img" 
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            ID: {data.id_printer}
          </Typography>
          <Typography>
            Brand: {data.brand_name}
          </Typography>
          <Typography>
            Model: {data.model_name}
          </Typography>
          <Typography>
            Location: {data.campus_name}/{data.building_name}/{data.location_name}
          </Typography>
          <Typography>
            Paper type: A3, A4
          </Typography>
          <Typography>
            File type: .pdf
          </Typography>
        </CardBody>
        <div className="flex justify-center my-2">
        <Switch  checked={data.status} onChange={handleChange} color="green" defaultChecked />
        </div>
      </Card>
    </div>
  );
};

export default PrinterCard;
