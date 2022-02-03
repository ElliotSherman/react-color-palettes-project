import React, {useState , useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import { ChromePicker } from 'react-color';
// import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
// import { ValidatorForm } from 'react-material-ui-form-validator';
import DragableColorList from './DragableColorList';
import {arrayMove} from 'react-sortable-hoc'
import NewPaletteFormNav from './NewPaletteFormNav';
import ColorPickerForm from './ColorPickerForm';

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
  // picks a random color from existing colors in the all color palette this is just to be used as a placeholder
  const randColor = () => {
    const allColors = palettes.map(p => p.colors).flat();
    const rand = Math.floor(Math.random()*allColors.length);
    const randomColor = allColors[rand];
    return randomColor;
  }

  const [open, setOpen] = useState(false);
  const [colorHex, setColorHex] = useState(randColor().color)
  const [newName , setNewName] = useState('')
  const [colorBoxes , setColorBoxes ] = useState(palettes[0].colors);
  const [newPaletteName , setNewPaletteName] = useState('')
  const isPaletteFull = colorBoxes.length >= maxColorsInPalette;

  const addRandomColor = () => {
    setColorBoxes([...colorBoxes,randColor()])
    // setColorHex(createRandColor().color)
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

  return (
    <Box sx={{ display: 'flex' }}>
      <NewPaletteFormNav 
        newPaletteName={newPaletteName}
        handlePaletteNameInput={handlePaletteNameInput}
        handleSubmit={handleSubmit}
        palettes={palettes}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
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
        {/* colorHex , newName */}
        <ColorPickerForm 
          colorHex={colorHex} newName={newName} isPaletteFull={isPaletteFull} addNewColor={addNewColor}
          changeColor={changeColor} handleChange={handleChange} colorBoxes={colorBoxes} />
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