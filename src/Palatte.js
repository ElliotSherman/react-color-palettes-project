import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css'



export default function Palatte (props) {
    const {colors} = props.palette;
    const [level ,setLevel] = useState(500);
    const [format, setFormat] = useState('hex')

    const changeFormat = (e) => {
        setFormat(e.target.value)
    }

    const colorBoxes = colors[level].map(color => (
        <ColorBox 
        background={color[format]}
        name ={color.name}
        />
    ));
    return (
        <div className='Palette'>
            <Navbar
                format={format}
                level={level}
                setLevel={setLevel}
                changeFormat={changeFormat}
            />
            <div className='Palette-colors'>
                {colorBoxes}
            </div>
            {/* footer here */}
        </div>
    );
}
