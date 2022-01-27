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
    },
    boxContent:{
        position: 'absolute',
        width: '100%',
        left:'0px',
        bottom: '0px',
        padding: '10px',
        color: 'black',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        fontSize: '12px',
    },
    copyOverlay:{
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.6s ease-in-out",
        transform:'scale(0.1)'
    },
    showOverlay:{
        opacity: '1',
        transform: 'scale(50)',
        zIndex: '10',
        position: 'absolute',
    },
    copyMsg:{
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        bottom: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '4rem',
        transform: 'scale(0.1)',
        opacity: '0',
        color: 'white',
        flexDirection: 'column',
        textAlign: 'center',
        textTransform: 'uppercase',
        '& h1':{
            fontWeight: '100',
            textShadow: '1px 2px black',
            background: 'rgba(255,255,255, 0.2)',
            width: '100%',
            marginBottom: '0',
            padding: '1rem',
            letterSpacing: '1rem',
        },
        '& p':{
            fontSize: '2rem',
            fontWeight: '200',
        }
    },
    showMsg:{
        opacity: '1',
        transform: 'scale(1)',
        zIndex: '25',
        transition: 'all 0.4s ease-in-out',
        transitionDelay: '0.3s',
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
            <CopyToClipboard text={background} onCopy={changeCopyState}>
            <div className={classes.ColorBox}
            style={{background}}
            >
            <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
                <h1>Copied!</h1>
                <p className={classes.copyText} >{background}</p>
            </div>
            <div 
                className={`${classes.copyOverlay} ${copied && classes.showOverlay}`} 
                style={{background}} 
            />
            <div>
                <div className={classes.boxContent}> 
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