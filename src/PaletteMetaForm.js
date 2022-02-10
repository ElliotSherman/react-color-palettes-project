import React , {useState} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

function PaletteMetaForm({handlePaletteNameInput , handleSubmit , newPaletteName , hideForm }) {
    const [stage, setStage] = useState('form');
    const savePalette = (emoji) => {
      const newPalette = {
        paletteName: newPaletteName ,
        emoji:emoji.native,
        }
      handleSubmit(newPalette)
      setStage('')
    } 
    return (
      <>
      <Dialog open={stage === 'emoji'} onClose={hideForm}>
      <DialogTitle>Choose A Palette Emoji</DialogTitle>
        <Picker onSelect={savePalette} title="Pick Palette Emoji"/>
      </Dialog>
      <Dialog 
      open={stage === 'form'} 
      onClose={hideForm}
      >
        <DialogTitle>Choose A Palette Name</DialogTitle>
        <ValidatorForm onSubmit={()=> setStage('emoji')} style={{display:'flex'}}>
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
          <Button onClick={hideForm}>
              Cancel</Button>
                    <Button color='primary' variant='contained' type='submit'>
              Save Palette
              </Button>
        </DialogActions>
        </DialogContent>
        </ValidatorForm>
      </Dialog>
      </>
    );
}

export default PaletteMetaForm;