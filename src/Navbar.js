import React from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Navbar({level , setLevel , format , changeFormat}) {
return (
    <header className='Navbar'>
        <div className='logo'>
            <a href='#'>react-color-picker</a>
            <sub className='personal-logo'><span>by</span> Elliot Sherman</sub>
        </div>
        <div className='slider-container'>
            <span>Level :{level}</span>
            <div className='slider'>
                <Slider 
                defaultValue={level} 
                min={100} 
                max={900} 
                step={100} 
                onAfterChange={e => setLevel(e)}
                />
            </div>
        </div>
        <div className='select-container'>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Format</InputLabel>
        <Select
          value={format}
          label="Format"
          onChange={changeFormat}
        >
          <MenuItem value='hex'>HEX - #ffffff</MenuItem>
          <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
          <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
        </Select>
      </FormControl>
        </div>
    </header>
    );
}

