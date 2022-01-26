import React, { useState } from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';
import chroma from 'chroma-js';

export default function ColorBox({name,background , id , paletteId , showLink}){
    // control names and more link using chroma-luninance
    const isDarkColor = chroma(background).luminance() <= 0.08;
    const isLightColor = chroma(background).luminance() >= 0.5;
    const [copied ,setCopied] = useState(false);
    const moreUrl = `/palette/${paletteId}/${id}`
    const changeCopyState = () =>{
        setCopied(true)
        setTimeout(() => setCopied(false),1500);
        };
        const navigate = useNavigate();
        return (
            <CopyToClipboard text={background} onCopy={changeCopyState} >
            <div className='ColorBox'
            style={{background}}
            >
            <div className={`copy-msg ${copied && "show"}`}>
                <h1>Copied!</h1>
                <p className={isLightColor ? 'dark-text' : undefined} >{background}</p>    
            </div>
            <div 
                className={`copy-overlay ${copied && "show"}`} 
                style={{background}} 
            />
            <div className='copy-container'>
                <div className='box-content'> 
                    <span className={isDarkColor ? 'light-text' : undefined} >{name}</span>
                </div>
                <button className={isLightColor ? 'dark-text copy-button' : 'copy-button'}>Copy</button>
            </div>
            {showLink && (
            <span 
            onClick={e => {e.stopPropagation();navigate(moreUrl);}} 
            className={isLightColor ? 'dark-text see-more' : 'see-more'}
            >More</span>
            )}
            </div>
            </CopyToClipboard>
        );
    }