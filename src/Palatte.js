import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css'



export default function Palatte (props) {
    const {colors , paletteName ,emoji } = props.palette;
    const [level ,setLevel] = useState(500);
    const [format, setFormat] = useState('hex')

    const changeFormat = (e) => {
        setFormat(e.target.value)
    }

    const colorBoxes = colors[level].map(color => (
        <ColorBox 
        background={color[format]}
        name ={color.name}
        key={color.id}
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
            <footer className='palette-footer'>
                {paletteName}
            <span className='emoji'>{emoji}</span>
            </footer>
        </div>
    );
}
