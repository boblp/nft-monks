import React, { useState } from 'react';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function PoolAnalytics () {
  const [pools, setPools] = useState(['test1', 'test2']);
  const [selectedPool, setSelectedPool] = useState('test1');
  // const [poolNfts, setPoolNfts] = useState([]);

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
    </Container>
  )
}