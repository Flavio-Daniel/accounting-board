import { React, useState, useContext } from 'react';
import TextField from '@mui/material/TextField';
import LedgerState from '../contexts/ledger-state'

const UpdateMap = (state, row, content) => {
  const stateContent = state.get(row)

  if (stateContent == undefined) {
    return state.set(row, content)
  } 
  else {
    const updatedContent = {...stateContent, ...content}
    return state.set(row, updatedContent)
  }
} 

const InputCell = ({ column, row }) => {

  const [state, setState] = useContext(LedgerState);
  const handleChange = (event, column, row) => {
    setState(state => new Map(UpdateMap(state, row, {[column]: event.target.value})))
  }

  return (
    <div className="TextField-without-border-radius">
      <TextField
        className="empty-cell"
        autoComplete="none"
        fullWidth
        onChange={(event) => handleChange(event, column, row)}
        inputProps={{
          style: {
            padding: 0
          }
        }} />
    </div>
  );
};

export default InputCell;