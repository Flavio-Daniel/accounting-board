import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputCell from '../components/empty-cell'

const MovementsTable = ({ defaultRowsNumber }) => {

  const rowNumber = Array(defaultRowsNumber).fill().map((element, index) => index + 1)
  const columns = ["id", "account", "movement", "entry-type", "amount"]

  const table =
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" stickyHeader
      id="movements"
      >
        {/* todo: maybe the table head and body could be different components */}
        <TableHead>
          <TableRow>
            {columns.map((column) => (<TableCell align="center" sx={{ border: '1px solid grey' }}><strong>{column}</strong></TableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowNumber.map((row) => (
            <TableRow key={row}>
              {columns.map((column) => (<TableCell align="left" sx={{ border: '1px solid grey' }} id={column + "_" + row}><InputCell column={column}></InputCell></TableCell>))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  console.log(typeof(table));
  return (table);
};

export default MovementsTable;
