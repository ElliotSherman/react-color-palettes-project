import React from 'react';
import seedColors from './seedColors';
import {Link} from 'react-router-dom'
import MiniPalette from './MiniPalette';

function PaletteList(props) {
    const palettes = seedColors;
    return (
        <div>
            <h1>React color palette list</h1>
            {palettes.map(palette => (
                <MiniPalette {...palette} to={`/palette/${palette.id}`}>{palette.paletteName}</MiniPalette>
            ))}
        </div>
    );
}

export default PaletteList;
