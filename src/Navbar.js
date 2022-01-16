import React, { Component } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './Navbar.css'
import { IconButton } from '@mui/material';

class Navbar extends Component {
    constructor(props){
        super(props);
        this.state={format:'hex',open:false};

        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.handleCloseSnkbr = this.handleCloseSnkbr.bind(this);
    }
    handleFormatChange(e){
        this.setState({format:e.target.value, open:true});
        this.props.handleFormatChange(e.target.value)
    }
    handleCloseSnkbr(){
        this.setState({open:false})
    }
    render() {
        const {level, updateLevel } = this.props;
        const {format,open} = this.state;
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
                        value={format}
                        onAfterChange={updateLevel}
                    />
                    </div>
                    </div>
                    <div className='select-container'>
                        <Select value={format} onChange={this.handleFormatChange}>
                            <MenuItem value='hex'>HEX - #FFFFFF</MenuItem>
                            <MenuItem value='rgb'>RGB - rgb(255,255,255)</MenuItem>
                            <MenuItem value='rgba'>RGBA - rgba(255,255,255,1.0)</MenuItem>
                        </Select>
                        <Snackbar 
                            anchorOrigin={{vertical:'bottom',horizontal:'left'}} 
                            open={open} 
                            autoHideDuration={1500}
                            message={<span id='snackbar-message'>Format Changed successfully!</span>}
                            ContentProps={{
                                "aria-describedby": "snackbar-message"
                            }}
                            onClose={this.handleCloseSnkbr}
                            action={[
                                <IconButton onClick={this.handleCloseSnkbr} color='inherit' key='close' aria-label='close'>
                                    <CloseIcon />
                                </IconButton>
                            ]}
                            />
                    </div>
            </header>
        );
    }
}

export default Navbar;