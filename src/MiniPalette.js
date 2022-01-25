import React from 'react';
import { styled } from '@mui/system';

const MyStyles = {
    Root:styled('div',{
    name:'Root'
    })({
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
        backgroundColor:'grey'
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
    })
};

export default function MiniPalette({ paletteName , emoji }) {
     const {Root , Colors , Title , Emoji} = MyStyles;
    return (
        <Root>
            <Colors>
                <Title>{paletteName}<Emoji>{emoji}</Emoji></Title>
            </Colors>
        </Root>
    );
};