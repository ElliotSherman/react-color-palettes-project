import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css'


class Palatte extends Component {
    constructor(props){
        super(props);
        this.state = {level: 500 ,format:'hex'}
        this.updateLevel = this.updateLevel.bind(this);
        this.changeColorFormat = this.changeColorFormat.bind(this);
    }
    updateLevel(level){
        this.setState({level})
    }
    changeColorFormat(value){
       this.setState({format:value})
    }
    render() {
        const {colors , paletteName, emoji} = this.props.palette;
        const {level,format} = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
            background={color[format]}
            name ={color.name}
            key={color.id}
            />
        ));
        return (
            <div className='Palette'>
                <Navbar 
                    level={level} 
                    updateLevel={this.updateLevel}
                    handleFormatChange={this.changeColorFormat}
                    />
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <footer className='palette-footer'>
                    {paletteName}
                    <span>{emoji}</span>
                </footer>
            </div>
        );
    }
}

export default Palatte;
