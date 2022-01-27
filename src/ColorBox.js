import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import styles from './styles/ColorBoxStyles'

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