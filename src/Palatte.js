import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css'



export default function Palatte (props) {
    const {colors} = props.palette;

        const [level ,setLevel] = useState(500);
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
            background={color.hex}
            name ={color.name}
            />
        ));
        return (
            <div className='Palette'>
                <Navbar 
                    level={level}
                    setLevel={setLevel}
                />
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer here */}
            </div>
        );
    }
