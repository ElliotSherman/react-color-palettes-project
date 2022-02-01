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
import DragableColorBox from './DragableColorBox';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';


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
  const [open, setOpen] = useState(false);
  const [colorHex, setColorHex] = useState('')
  const [newName , setNewName] = useState('')
  const [colorBoxes , setColorBoxes ] = useState([]);
  const [newPaletteName , setNewPaletteName] = useState('')

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
  const handleDelete = () => {
    alert('clicked')
  }
  useEffect(() => {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
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
            <Button variant='outlined' color='secondary'>Clear Palette</Button>
            <Button variant='outlined' color='primary'>Random Color</Button>
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
          type='submit'
          variant='contained' 
          style={{backgroundColor:colorHex}} 
          color='info' >Add Color</Button>
        </ValidatorForm>
        
      </Drawer>
      <Main open={open}>
      <DrawerHeader />{colorBoxes.map( color => (
            <DragableColorBox color={color.color} name={color.name} handleDelete={handleDelete} />
          ))}
      </Main>
    </Box>
  );
}