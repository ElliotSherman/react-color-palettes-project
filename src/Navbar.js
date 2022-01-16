import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css'

class Navbar extends Component {
    render() {
        const {level,updateLevel} = this.props;
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href='#'>ReactColorPicker</a>
                </div>
                    <div className='slider-container'><span>Level: {level}</span>
                    <div className='slider'>
                    <Slider 
                        defaultValue={level} 
                        min={100} 
                        max={900} 
                        step={100} 
                        onAfterChange={this.props.updateLevel}
                    />
                    </div>
                    </div>
            </header>
        );
    }
}

export default Navbar;