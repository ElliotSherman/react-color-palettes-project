import React, {useState , useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { ChromePicker } from 'react-color';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import DragableColorList from './DragableColorList';
import {arrayMove} from 'react-sortable-hoc'

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    height:'calc(100vh - 64px)',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NewPaletteForm({savePalette , palettes}) {
  const maxColorsInPalette = 20;

  const [open, setOpen] = useState(false);
  const [colorHex, setColorHex] = useState('')
  const [newName , setNewName] = useState('')
  const [colorBoxes , setColorBoxes ] = useState(palettes[0].colors);
  const [newPaletteName , setNewPaletteName] = useState('')
  const isPaletteFull = colorBoxes.length >= maxColorsInPalette;

  const addRandomColor = () => {
    // add random color from existing palettes
    const allColors = palettes.map(p => p.colors).flat();
    const rand = Math.floor(Math.random()*allColors.length);
    const randomColor = allColors[rand];
    setColorBoxes([...colorBoxes,randomColor])
    console.log(randomColor);
  }
  const clearPalette = () =>{
    setColorBoxes([]);
  }
  const onSortEnd = ({oldIndex, newIndex}) => {
    setColorBoxes((colorBoxes) => arrayMove(colorBoxes, oldIndex, newIndex));
  };
  const addNewColor = () => {
    const newColor = {color:colorHex,name:newName}
    setColorBoxes([...colorBoxes,newColor])
    setNewName('')
  }
  const changeColor = (newColor) => {
    setColorHex(newColor.hex)
  }
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleChange = (e) => {
    setNewName(e.target.value);
  };
  const handlePaletteNameInput = (e)=>{
    setNewPaletteName(e.target.value)
  }
  function handleSubmit(){
    let newName = newPaletteName;
    const newPalette = {
      paletteName:newName,
      id: newName.toLowerCase().replace(/ /g,'-'),
      colors: colorBoxes,
    };
    savePalette(newPalette);
  };
  const handleDelete = (colorName) => {
    setColorBoxes(colorBoxes.filter(color => color.name !== colorName))
  }
  
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
      return colorBoxes.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", (value) => {
      return colorBoxes.every(
      ({ color }) => color !== value
      );
    });
    ValidatorForm.addValidationRule("isPaletteNameUnique", (value) => {
      return palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      );
    });
  });
  return (
    <Box sx={{ display: 'flex' }}>
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
          <ValidatorForm onSubmit={handleSubmit} style={{display:'flex'}}>
            <TextValidator 
            validators={['required' , 'isPaletteNameUnique']}
            errorMessages={['Enter Palette Name' , 'Palette Name Exists']}
            value={newPaletteName} 
            onChange={handlePaletteNameInput}
            variant="standard"
            placeholder='Palette Name'
            label='Palette Name' />
            <Button color='primary' variant='contained' type='submit'>Save Palette</Button>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Typography variant='h4'>Design your palette</Typography>
        <div>
            <Button variant='outlined' color='secondary' onClick={clearPalette} >Clear Palette</Button>
            <Button 
            variant='outlined' 
            color='primary' 
            onClick={addRandomColor} 
            disabled={colorBoxes.length >= maxColorsInPalette}
            >Random Color</Button>
        </div>
        <ChromePicker color={colorHex} onChange={(newColor)=>changeColor(newColor)} disableAlpha />
        <ValidatorForm onSubmit={addNewColor} style={{display:'flex'}}>
          <TextValidator
          validators={['required','isColorNameUnique','isColorUnique']}
          errorMessages={['Enter Color Name', 'Name Already Exists','Color Already Exists!']}
          variant="standard"
          placeholder='Color Name'
          label='Color Name'
          value={newName}
          onChange={handleChange}
          />
          <Button 
          disabled={isPaletteFull}
          type='submit'
          variant='contained' 
          style={ isPaletteFull ? {backgroundColor:'lightgray'} : {backgroundColor:colorHex}} 
          color='info' >{isPaletteFull? 'Palette Full' : 'Add Color'}</Button>
        </ValidatorForm>
        
      </Drawer>
      <Main open={open}>
      <DrawerHeader />
        <DragableColorList 
        colorBoxes={colorBoxes} 
        handleDelete={handleDelete} 
        axis='xy' 
        onSortEnd={onSortEnd}/>
      </Main>
    </Box>
  );
}