import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function PaletteMetaForm({handlePaletteNameInput , handleSubmit , newPaletteName }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    return (
        <div>
        <Button variant="outlined" 
            onClick={handleClickOpen}
            >
        Save Palette
        </Button>
      <Dialog 
      open={open} 
      onClose={handleClose}
      >
        <DialogTitle>Choose A Palette Name</DialogTitle>
        <Picker />
        <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)} style={{display:'flex'}}>
        <DialogContent>
          <DialogContentText>
            Please Type in a unique name for your newly created palette.
          </DialogContentText>
            <TextValidator 
            validators={['required' , 'isPaletteNameUnique']}
            errorMessages={['Enter Palette Name' , 'Palette Name Exists']}
            value={newPaletteName} 
            onChange={handlePaletteNameInput}
            variant="standard"
            placeholder='Palette Name'
            label='Palette Name' 
            fullWidth={true}
            margin='normal'
            />
        
        <DialogActions>
          <Button onClick={handleClose}>
              Cancel</Button>
          <Button color='primary' variant='contained' type='submit'>
              Save Palette</Button>
        </DialogActions>
        </DialogContent>
        </ValidatorForm>
      </Dialog>
        </div>
    );
}

export default PaletteMetaForm;