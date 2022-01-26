import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import chroma from 'chroma-js';

const styles = {
    ColorBox:{
        width: '20%',
        height: props => props.showingFullPalette ? '25%' : '50%',
        margin: '0 auto',
        display: 'inline-block',
        position: 'relative',
        cursor: 'pointer',
        marginBottom: '-4px',
        '&:hover button':{
            opacity:1
        }
    },
    copyText:{
        color: props => chroma(props.background).luminance() >= 0.5 ? 'black' :'white',
    },
    colorName:{
        color: props => chroma(props.background).luminance() >= 0.08 ? 'black' :'white',
    },
    seeMore:{
        color: props => chroma(props.background).luminance() >= 0.5 ? 'rgba(0,0,0,0.6)' :'white',
        background: 'rgba(255,255,255,0.3)',
        position: 'absolute',
        border: 'none',
        right:'0',
        bottom: '0',
        width: '60px',
        height: '30px',
        textAlign: 'center',
        lineHeight: '30px',
        textTransform: 'uppercase'
    },
    copyButton:{
        color: props => chroma(props.background).luminance() >= 0.5 ? 'rgba(0,0,0,0.6)' :'white',
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
        opacity:'0',
    }
}

 function ColorBox ({name,background , id , paletteId , showingFullPalette, classes}){
    // control names and more link using chroma-luninance
    const [copied ,setCopied] = useState(false);
    const moreUrl = `/palette/${paletteId}/${id}`;

    const changeCopyState = () =>{
        setCopied(true)
        setTimeout(() => setCopied(false),1500);
        };

        const navigate = useNavigate();
        return (
            <CopyToClipboard text={background} onCopy={changeCopyState} >
            <div className={classes.ColorBox}
            style={{background}}
            >
            <div className={`copy-msg ${copied && "show"}`}>
                <h1>Copied!</h1>
                <p className={classes.copyText} >{background}</p>
            </div>
            <div 
                className={`copy-overlay ${copied && "show"}`} 
                style={{background}} 
            />
            <div className='copy-container'>
                <div className='box-content'> 
                    <span className={classes.colorName}>{name}</span>
                </div>
                <button className={classes.copyButton}>Copy</button>
            </div>
            {showingFullPalette && (
            <span 
            onClick={e => {e.stopPropagation();navigate(moreUrl);}} 
            className={classes.seeMore}
            >More</span>
            )}
            </div>
            </CopyToClipboard>
        );
    }

    export default withStyles(styles)(ColorBox)