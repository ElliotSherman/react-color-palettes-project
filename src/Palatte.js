import React, { Component } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css'


class Palatte extends Component {
    constructor(props){
        super(props);
        this.state = {level: 500}
        this.updateLevel = this.updateLevel.bind(this);
    }
    updateLevel(level){
        this.setState({level})
    }
    render() {
        const {colors} = this.props.palette;
        const {level} = this.state
        const colorBoxes = colors[level].map(color => (
            <ColorBox 
            background={color.hex}
            name ={color.name}
            />
        ));
        return (
            <div className='Palette'>
                <Navbar level={level} updateLevel={this.updateLevel}/>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                {/* footer here */}
            </div>
        );
    }
}

export default Palatte;