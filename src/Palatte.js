import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import { useParams } from "react-router-dom";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PalletteFooter from './PalletteFooter';
import { withStyles } from '@mui/styles';
import styles from './styles/PaletteStyles'

function Palette ({classes}) {
    // generate palette by url :id {
    const {id} = useParams();
    const paletteIndex = seedColors.filter(obj => obj.id === id)
    const palette = generatePalette(paletteIndex[0]);
    //  }
    const {colors , paletteName ,emoji } = palette;
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
        id={color.id}
        paletteId={id}
        showingFullPalette
        />
    ));
    return (
        <div className={classes.Palatte}>
            <Navbar
                format={format}
                level={level}
                setLevel={setLevel}
                changeFormat={changeFormat}
                isFullPalette
            />
            <div className={classes.colors}>
                {colorBoxes}
            </div>
            <PalletteFooter paletteName={paletteName} emoji={emoji}/>
        </div>
    );
}

export default withStyles(styles)(Palette)