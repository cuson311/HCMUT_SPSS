import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ViewPrinter from '../../components/ViewPrinter';

export default function PrinterPicker() {
    const printerData = require("../ManagePrinter/printer_data");
    const data = printerData.get_array();
    
    const [printer, setPrinter] = React.useState(data[0]);
  
    const handleChange = (event) => {
      console.log(event.target.value);
      setPrinter(event.target.value);
    };

  return (
    <div className="w-80">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Chọn máy in</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Chọn máy in"
          onChange={handleChange}
          value={printer}
          displayEmpty = {true}
        >
          {data.map((item, index) => (
            <MenuItem
              value={item}
              className="p-2"
              key={item['id_printer']}
            >
              <div className="flex items-center">
                <div className="w-12 h-8 pe-1">
                  <img
                    src={item['img_source']}
                    className="w-full h-full object-contain"
                  ></img>
                </div>
                <div>
                  <div>
                    <span style={{ fontWeight: 600 }} className="pe-1">
                      Tên:
                    </span>
                    {item['brand_name']} {item['model_name']}
                  </div>
                  <div>
                    <span style={{ fontWeight: 600 }} className="pe-1">
                      Vị trí:
                    </span>
                    {item['campus_name']} - {item['building_name']}
                  </div>
                </div>
              </div>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ViewPrinter className='mt-3' value={printer} />
    </div>
  );
}