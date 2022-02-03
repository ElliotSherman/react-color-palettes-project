import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';

function ColorPickerForm({handleChange , changeColor , addNewColor , isPaletteFull , colorHex , newName , colorBoxes}) {
    useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
          return colorBoxes.every(
            ({ name }) => name.toLowerCase() !== value.toLowerCase()
          );
        });
        ValidatorForm.addValidationRule("isColorUnique", (value) => {
          return colorBoxes.every(
          ({ color }) => color !== colorHex
          );
        });
      });
    return (
        <div>
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
        </div>
    );
}

export default ColorPickerForm;