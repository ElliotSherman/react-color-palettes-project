import React,{useState} from 'react';
import {useParams , useNavigate} from 'react-router-dom'
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PalletteFooter from './PalletteFooter';
import './ColorBox.css'
import { withStyles } from '@mui/styles';

const styles = {
    Palette:{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    colors:{
        height: '90vh',
    },
    goBack:{
        width: '20%',
        height: '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        opacity: 1,
        backgroundColor:'black',
        '& button':{
            color:'white',
            width: '100px',
            height: '30px',
            position: 'absolute',
            display: 'inline-block',
            top: '50%',
            left:'50%',
            marginLeft: '-50px',
            marginTop: '-15px',
            textAlign: 'center',
            outline: 'none',
            background: 'rgba(255,255,255, 0.3)',
            fontSize: '1rem',
            lineHeight: '30px',
            textTransform: 'uppercase',
            border: 'none',
        }
    },
    
}

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