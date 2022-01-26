import React, { useState } from 'react';
import './ColorBox.css'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useNavigate } from 'react-router-dom';

export default function ColorBox({name,background , id , paletteId , showLink}){
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
                <p>{background}</p>    
            </div>
            <div 
                className={`copy-overlay ${copied && "show"}`} 
                style={{background}} 
            />
            <div className='copy-container'>
                <div className='box-content'>
                    <span>{name}</span>
                </div>
                <button className='copy-button'>Copy</button>
            </div>
            {showLink && (
            <span onClick={e => {e.stopPropagation();navigate(moreUrl);}} className='see-more'>More</span>
            )}
            </div>
            </CopyToClipboard>
        );
    }