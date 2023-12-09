import React from 'react';
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import './Properties.css'
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


export default function PropertiesPicker() {
    function handlePrintingSubmit() {
        return toast.success("Đặt in thành công!")
    }
    return (
    <form className="custom-options-form flex flex-wrap justify-center">
        <div className="w-72" id="prop1">
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        </InputLabel>
        <NativeSelect
        defaultValue={10}
        inputProps={{
            name: 'print prop',
            id: 'uncontrolled-native',
        }}
        >
        <option value={10}>Print All Pages</option>
        <option value={20}>Print Selection</option>
        <option value={30}>Print Current Page</option>
        <option value={40}>Custom Print</option>
        </NativeSelect>
        </FormControl>
        </Box>
    </div>
    <div className="w-72" id="prop1">
    <Input label="Pages:" />
    </div>
    <div className="w-72" id="prop1">
    
    

    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        </InputLabel>
        <NativeSelect
        defaultValue={10}
        inputProps={{
            name: 'print prop',
            id: 'uncontrolled-native',
        }}
        >
        <option value={10}>Print One Sided</option>
        <option value={20}>Manually Print On Both Sides</option>
    
        </NativeSelect>
        </FormControl>
        </Box>
    </div>

    <div className="w-72" id="prop1">
    
    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        </InputLabel>
        <NativeSelect
        defaultValue={10}
        inputProps={{
            name: 'print prop',
            id: 'uncontrolled-native',
        }}
        >
        <option value={10}>Collated</option>
        <option value={20}>Uncollated</option>
    
        </NativeSelect>
        </FormControl>
        </Box>


    </div>


    <div className="w-72" id="prop1">
    
    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        </InputLabel>
        <NativeSelect
        defaultValue={10}
        inputProps={{
            name: 'print prop',
            id: 'uncontrolled-native',
        }}
        >
        <option value={10}>Portrait Orientation</option>
        <option value={20}>Landscape Orientation</option>
    
        </NativeSelect>
        </FormControl>
        </Box>
    </div>
    <div className="w-72" id="prop1">
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        </InputLabel>
        <NativeSelect
        defaultValue={10}
        inputProps={{
            name: 'print prop',
            id: 'uncontrolled-native',
        }}
        >
        <option value={10}>Letter</option>
        <option value={20}>Tabloid</option>
        <option value={30}>Legal</option>
        <option value={40}>Statement</option>
        <option value={50}>Executive</option>
    
        </NativeSelect>
        </FormControl>
        </Box>
    </div>

    <div className="w-72" id="prop1">
        <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        </InputLabel>
        <NativeSelect
        defaultValue={10}
        inputProps={{
            name: 'print prop',
            id: 'uncontrolled-native',
        }}
        >
        <option value={10}>1 Page Per Sheet</option>
        <option value={20}>2 Pages Per Sheet</option>
        <option value={30}>4 Pages Per Sheet</option>
        <option value={40}>6 Pages Per Sheet</option>
        <option value={50}>8 Pages Per Sheet</option>
    
        </NativeSelect>
        </FormControl>
        </Box>



    </div>
    <div className="w-72" id="prop1">
    

    <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
        </InputLabel>
        <NativeSelect
        defaultValue={10}
        inputProps={{
            name: 'print prop',
            id: 'uncontrolled-native',
        }}
        >
        <option value={10}>Normal Margins</option>
        <option value={20}>Custom Margin</option>
    
        </NativeSelect>
        </FormControl>
        </Box>
    </div>
    <div className="w-72" id="printbutton">
    <Button color="blue" onClick={(e)=>handlePrintingSubmit(e)} fullWidth>In Ngay</Button>
    </div>
    </form>
    )
}