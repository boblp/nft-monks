import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function EditPools () {
  const [pools, setPools] = useState(['test1', 'test2']);
  const [selectedPool, setSelectedPool] = useState('test1');
  const [poolNfts, setPoolNfts] = useState([]);

  const handleInputChange = (e) => {
    setSelectedPool(e.target.value);
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing="5">
        <FormControl sx={{ margin: '20px 0px' }} fullWidth>
          <InputLabel sx={{ backgroundColor: 'white' }}>Pool</InputLabel>
          <Select onChange={handleInputChange} value={selectedPool}>
            {pools.map((val, key) => {
              return (<MenuItem key={key} value={val}>{val}</MenuItem>)
            })}
          </Select>
        </FormControl>
      </Grid>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Background</TableCell>
              <TableCell>Body</TableCell>
              <TableCell>Face</TableCell>
              <TableCell>Hat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {poolNfts.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}