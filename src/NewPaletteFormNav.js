import React, { useState , useEffect} from 'react';
import { withStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { Link } from 'react-router-dom';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/NewPaletteFormNavStyles' 
const { AppBar , drawerWidth , root , navBtns } = styles;

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

export default withStyles({ drawerWidth , root , navBtns})(NewPaletteFormNav);