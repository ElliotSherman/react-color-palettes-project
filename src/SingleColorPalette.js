import React,{useState} from 'react';
import {useParams , useNavigate} from 'react-router-dom'
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PalletteFooter from './PalletteFooter';
import { withStyles } from '@mui/styles';
import styles from './styles/PaletteStyles'


function SingleColorPalette({classes}) {
    // setting useNavigate
    const navigate = useNavigate();
    // generate palette by url :id {
        const {id , shades} = useParams();
        const paletteIndex = seedColors.filter(obj => obj.id === id)
        const palette = generatePalette(paletteIndex[0]);
        //  }
        const {paletteName, emoji} = palette;
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
        // functions from Palette need to be refactored
        const [format, setFormat] = useState('hex')
        const changeFormat = (e) => {
        setFormat(e.target.value)
    }
        // console.log(genShades(palette ,shades));
        const shadesArray = genShades(palette,shades);
        const shadeBoxes = shadesArray.map(shade => (
            <ColorBox 
                key={shade.name} 
                name={shade.name} 
                background={shade[format]} 
                showingFullPalette={false}/>
        ))
    return (
        <div className={classes.Palette}>
            <Navbar
                format={format}
                changeFormat={changeFormat}
                isFullPalette = {false}
            />
            <div className={classes.colors}>
                {shadeBoxes}
                <div className={classes.goBack}>
                    <button onClick={()=> navigate(-1)}>Go Back</button>
                </div>
            </div>
            <PalletteFooter paletteName={paletteName} emoji={emoji}/>
        </div>
    );
};

export default withStyles(styles)(SingleColorPalette)