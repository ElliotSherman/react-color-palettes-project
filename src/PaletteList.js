import React from 'react';
import seedColors from './seedColors';
import MiniPalette from './MiniPalette';
import {styled} from   "@mui/system"

const MyStyles = {
    Root:styled('div',{
    name:'Root'
    })({
    backgroundColor:'blue',
    height:'100vh',
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
        color:'white',
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
    const {Root ,Container ,Nav, Palettes} = MyStyles;
    const palettes = seedColors;
    const paletteCards = palettes.map(palette => (
        <MiniPalette key={palette.id} {...palette}>{palette.paletteName}</MiniPalette>
        ))

    return (
        <Root>
            <Container>
                <Nav>
                    <h1>React color palette list</h1>
                </Nav>
                <Palettes>
                    {paletteCards}
                </Palettes>
            </Container>
        </Root>
    );
}

export default PaletteList;
