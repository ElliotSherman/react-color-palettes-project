import React from 'react';
import { borderRadius, styled } from '@mui/system';

const MyStyles = {
    Root:styled('div',{
    name:'Root'
    })({
        height:'100%',
        backgroundColor:'white',
        border:'1px solid black',
        borderRadius: '5px',
        padding: '0.5rem',
        position:'relative',
        overflow:'hidden',
        "&:hover":{
            cursor:'pointer'
        }
    }),
    Colors:styled('div',{
        name:'Colors'
    })({
        backgroundColor:'grey',
        height:'150px',
        width:'100%',
        borderRadius:'5px',
        overflow:'hidden'
    }),
    Title:styled('h5',{
        name:'Title'
    })({
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        margin:'0',
        color:'black',
        paddingTop:'0.5rem',
        fontSize:'1rem',
        position:'relative'
    }),
    Emoji:styled('span',{
        name:'Emoji'
    })({
        marginLeft:'0.5rem',
        fontSize:'1.5rem'
    }),
    MiniPaletteDispaly:styled('div',{
        name:'MiniPaletteDispaly'
    })({
        height:'25%',
        width:'20%',
        display:'inline-block',
        margin:'0 auto',
        position:'relative',
        marginBottom:'-4px'
    })
};

export default function MiniPalette({ paletteName , emoji, colors }) {
     const {Root , Colors , Title , Emoji , MiniPaletteDispaly} = MyStyles;
     const miniColorPalette = colors.map(color => (
         <MiniPaletteDispaly 
         style={{backgroundColor:color.color}}
         key={color.name}
         >
        </MiniPaletteDispaly>
     ))
    return (
        <Root>
            <Colors>{miniColorPalette}</Colors>
            <Title>{paletteName}<Emoji>{emoji}</Emoji></Title>
        </Root>
    );
};