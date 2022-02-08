import React, { useState , useEffect} from 'react';
import { withStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';

const drawerWidth = 400;
const styles = {
  root:{
    display:'flex'
  },
  navBtns:{
    display:'flex',
    alignItems:'center',
    "& button":{
      marginRight:'1rem'
    },
    '& a':{textDecoration:'none'}

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
    setNewPaletteName ,
    }) {
    const handleHideForm = () => {
      setFormShowing(false)
      setNewPaletteName('')
    }
    const [formShowing , setFormShowing] = useState(false);
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
          <Button color='primary' variant='outlined' onClick={() => setFormShowing(true)}>
              Save Palette
              </Button>
          <Link to='/'>
                <Button color='secondary' variant='contained'>Go Back</Button>
            </Link>
          </div>
      </AppBar>
       {formShowing && (<PaletteMetaForm
                setNewPaletteName={setNewPaletteName}
                handlePaletteNameInput ={handlePaletteNameInput}  
                handleSubmit ={handleSubmit} 
                newPaletteName={newPaletteName}
                hideForm={handleHideForm}
          />)}
        </div>
    );
}

export default withStyles(styles)(NewPaletteFormNav);