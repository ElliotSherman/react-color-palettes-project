import React from 'react';
import seedColors from './seedColors';
import {Link} from 'react-router-dom'
function PaletteList(props) {
    const palettes = seedColors;
    return (
        <div>
            <h1>React color palette list</h1>
            {palettes.map(palette => (
                <p>
                    <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                </p>
                
            ))}
        </div>
    );
}

export default PaletteList;