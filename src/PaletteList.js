import React from 'react';
// import seedColors from './seedColors';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles'
import { withStyles } from '@mui/styles';
import {Link} from 'react-router-dom'

function PaletteList({classes , palettes , deletMiniPalette}) {
    const paletteList = palettes;
    const paletteCards = paletteList.map(palette => (
        <MiniPalette key={palette.id} id={palette.id} deletMiniPalette={deletMiniPalette} {...palette}>{palette.paletteName} </MiniPalette>
        ))
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React colors</h1>
                    <Link to='palette/new'>Create Palatte</Link>
                </nav>
                <div className={classes.palettes}>
                    {paletteCards}
                </div>
            </div>
        </div>
    );
}

export default  withStyles(styles)(PaletteList);
