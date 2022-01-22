import React from 'react';
import 'rc-slider/assets/index.css';
import Slider, { Range } from 'rc-slider';
import './Navbar.css'

function Navbar({level , setLevel}) {
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
    </header>
);
}

export default Navbar;