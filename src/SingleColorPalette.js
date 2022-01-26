import React from 'react';
import {useParams} from 'react-router-dom'
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import ColorBox from './ColorBox';
import { color } from '@mui/system';

export default function SingleColorPalette(props) {
    // generate palette by url :id {
        const {id , shades} = useParams();
        const paletteIndex = seedColors.filter(obj => obj.id === id)
        const palette = generatePalette(paletteIndex[0]);
        //  }
        // filter out an array of shades from palette.colors by the key id that matches the id in the params 
        const genShades =(data , filterId)=>{
            const singleColors = data.colors;
            let singledOutShades = [];
            for (let key in singleColors){
                singledOutShades = singledOutShades.concat(
                singleColors[key].filter(color => color.id === filterId)
                )
            }
            return singledOutShades.slice(1)
        }
        // console.log(genShades(palette ,shades));
        const shadesArray = genShades(palette,shades);
        const shadeBoxes = shadesArray.map(shade => (
            <ColorBox key={shade.name} name={shade.name} background={shade.hex} showLink={false}/>
        ))
    return (
        <div className='Palette'>
            <h1>Hello world</h1>
            <div className='Palette-colors'>
                {shadeBoxes}
            </div>

        </div>
    );
};