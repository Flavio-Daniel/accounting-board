import React from 'react';
import InputUnstyled from '@mui/base/InputUnstyled';
import TextField from '@mui/material/TextField';

const handleChange = (event, column) => {
  console.log(column);
  console.log(event.target.value);
}


const InputCell = ( { column } ) => {
    
    return (
      <div className="TextField-without-border-radius">
        <TextField 
          className="empty-cell"
          autoComplete="none"     
          fullWidth
          onChange={(e) => handleChange(e, column)}
          inputProps={{
            style: {
              padding: 0
            }}}/>
      </div>
    );
  };

export default InputCell;