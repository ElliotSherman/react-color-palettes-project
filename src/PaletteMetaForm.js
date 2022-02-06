import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';

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
        Open form dialog
      </Button>
      <Dialog 
      open={open} 
      onClose={handleClose}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <ValidatorForm onSubmit={() => handleSubmit(newPaletteName)} style={{display:'flex'}}>
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button> 
        </DialogActions>
      </Dialog>
        </div>
    );
}

export default PaletteMetaForm;