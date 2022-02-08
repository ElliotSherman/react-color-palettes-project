import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
import { ChromePicker } from 'react-color';
import { ValidatorForm,TextValidator } from 'react-material-ui-form-validator';
import { withStyles } from '@mui/styles';
import styles from './styles/ColorPickerFormStyles';



function ColorPickerForm(
  {classes , handleChange , changeColor , addNewColor , isPaletteFull , colorHex , newName , colorBoxes}) {
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
        <div className={classes.picker}>
        <ChromePicker className={classes.picker} color={colorHex} onChange={(newColor)=>changeColor(newColor)} disableAlpha />
        <ValidatorForm onSubmit={addNewColor}>
          <TextValidator
          validators={['required','isColorNameUnique','isColorUnique']}
          errorMessages={['Enter Color Name', 'Name Already Exists','Color Already Exists!']}
          variant="filled"
          placeholder='Color Name'
          label='Color Name'
          value={newName}
          onChange={handleChange}
          className={classes.colorNameInput}
          margin='normal'
          />
          <Button 
          className={classes.newColorBtn}
          disabled={isPaletteFull}
          type='submit'
          variant='contained' 
          style={ isPaletteFull ? {backgroundColor:'lightgray'} : {backgroundColor:colorHex}} 
          color='info' >{isPaletteFull? 'Palette Full' : 'Add Color'}</Button>
        </ValidatorForm>
        </div>
    );
}

export default withStyles(styles)(ColorPickerForm);