import React from 'react';
import { CSSTransition , TransitionGroup } from 'react-transition-group';
// import seedColors from './seedColors';
import MiniPalette from './MiniPalette';
import styles from './styles/PaletteListStyles'
import { withStyles } from '@mui/styles';
import {Link} from 'react-router-dom'

function PaletteList({classes , palettes , deletMiniPalette}) {
    const paletteList = palettes;
    const paletteCards = paletteList.map(palette => (
        <CSSTransition  key={palette.id} classNames='fade' timeout={500}>
            <MiniPalette key={palette.id} id={palette.id} deletMiniPalette={deletMiniPalette} {...palette}>{palette.paletteName}</MiniPalette>
        </CSSTransition>
        ))
    return (
        <div className={classes.root}>
            <div className={classes.container}>
                <nav className={classes.nav}>
                    <h1>React colors</h1>
                    <Link to='palette/new'>Create Palatte</Link>
                </nav>
                    <TransitionGroup className={classes.palettes}>
                        {paletteCards}
                    </TransitionGroup>
            </div>
        </div>
    );
}

export default  withStyles(styles)(PaletteList);
