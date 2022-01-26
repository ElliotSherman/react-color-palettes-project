import React from 'react';

function PalletteFooter({paletteName , emoji}) {
    return (
            <footer className='palette-footer'>
                {paletteName}
            <span className='emoji'>{emoji}</span>
            </footer>
    );
}

export default PalletteFooter;