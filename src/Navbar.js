import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Select from '@mui/material/Select';
import './Navbar.css'
import { MenuItem } from '@mui/material';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={format:'hex'}
        this.handleFormatChange = this.handleFormatChange.bind(this);
    }
    handleFormatChange(e){
        this.setState({format:e.target.value})
        this.props.handleFormatChange(e.target.value)
    }
    render() {
        const {level,updateLevel} = this.props;
        const {format} = this.state;
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
                        onAfterChange={updateLevel}
                    />
                    </div>
                    </div>
                    <div className='select-container'>
                        <Select
                            value={format}
                            onChange={this.handleFormatChange}
                            >
                            <MenuItem value='hex'>HEX - #ffffff </MenuItem>
                            <MenuItem value='rgb'>RGB - rgb(255,255,255) </MenuItem>
                            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0) </MenuItem>
                        </Select>
                    </div>
            </header>
        );
    }
}

export default Navbar;