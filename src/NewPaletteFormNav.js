import React, { useEffect} from 'react';
import { withStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';

const drawerWidth = 400;
const styles = {
  root:{
    display:'flex'
  },
  navBtns:{

  }
}
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection:'row',
    justifyContent:'space-between',
    height:'64px',
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

function NewPaletteFormNav({
    classes,
    palettes,
    open , 
    handleDrawerOpen , 
    handlePaletteNameInput , 
    handleSubmit , 
    newPaletteName ,
    }) {
    
    useEffect(()=>{
      ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
        return palettes.every(
          ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
        );
      });
    })
    return (
        <div className={classes.root} >
        <CssBaseline />
        <AppBar position="fixed" open={open} color='default'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
          </Toolbar>
          <div className={classes.navBtns}>
          {/* <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)} style={{display:'flex'}}>
            <TextValidator 
            validators={['required' , 'isPaletteNameUnique']}
            errorMessages={['Enter Palette Name' , 'Palette Name Exists']}
            value={newPaletteName} 
            onChange={handlePaletteNameInput}
            variant="standard"
            placeholder='Palette Name'
            label='Palette Name' />
            <Button color='primary' variant='contained' type='submit'>Save Palette</Button>
          </ValidatorForm> */}
          <Link to='/'>
                <Button color='secondary' variant='contained'>Go Back</Button>
            </Link>
          </div>
      </AppBar>
        </div>
    );
}

export default withStyles(styles)(NewPaletteFormNav);