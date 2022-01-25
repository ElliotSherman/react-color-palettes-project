import React from 'react';
import seedColors from './seedColors';
// import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette';
import {styled} from   "@mui/system"

const MyStyles = {
    Root:styled('div',{
    name:'Root'
    })({
    backgroundColor:'blue',
    height:'100%',
    display:'flex',
    alignItems:'flex-start',
    justifyContent:'center',
    }),
    Container:styled('div',{
        name:'Container'
    })({
        width:'50%',
        display:'flex',
        alignItems:'flex-start',
        flexDirection:'column',
        flexWrap:'wrap'
    }),
    Nav:styled('nav',{
        name:'Nav'
    })({
        display:'flex',
        width:'100%',
        justifyContent:'space-between'
    }),
    Palettes:styled('div',{
        name:'Palettes'
    })({
        boxSizing:'border-box',
        width:'100%',
        display:'grid',
        gridTemplateColumns:'repeat(3,30%)',
        gridGap:'5%'
    })
}

function PaletteList(props) {
    const {Root ,Container ,Nav, Palettes} = MyStyles
    const palettes = seedColors;
    return (
        <Root>
            <Container>
                <Nav>
                    <h1>React color palette list</h1>
                </Nav>
                <Palettes>
                {palettes.map(palette => (
                <MiniPalette {...palette} to={`/palette/${palette.id}`}>{palette.paletteName}</MiniPalette>
                ))}
                </Palettes>
            </Container>
        </Root>
    );
}

export default PaletteList;
