import React from 'react';
import { withStyles } from '@mui/styles';
import styles from './styles/PaletteFooterStyle'



function PalletteFooter({paletteName , emoji , classes}) {
    return (
            <footer className={classes.paletteFooter}>
                {paletteName}
            <span className='emoji'>{emoji}</span>
            </footer>
    );
}

export default withStyles(styles)(PalletteFooter);