import React, { Component } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import Select from '@mui/material/Select';

import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css'
import { IconButton, MenuItem } from '@mui/material';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={format:'hex',open:false}
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(e){
        this.setState({format:e.target.value , open:true})
        this.props.handleFormatChange(e.target.value)
    }
    closeSnackbar(){
        this.setState({open:false})
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
                    <Snackbar 
                    anchorOrigin={{vertical:'bottom', horizontal: 'left'}}
                    open={this.state.open}
                    autoHideDuration={1500}
                    message={<span>Format Changed Successfully!</span>}
                    ContentProps={{
                        "aria-describedby":"message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                    <IconButton 
                        onClick={this.closeSnackbar}
                        color='inherit'
                        key='close'
                        aria-label='close'
                        >
                        <CloseIcon />
                    </IconButton>]}
                    />
            </header>
        );
    }
}

export default Navbar;