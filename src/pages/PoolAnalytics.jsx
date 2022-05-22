import React, { useState } from 'react';
import { XYPlot, VerticalBarSeries } from 'react-vis';
import {
  Container, Grid, FormControl, InputLabel, MenuItem, Select
} from '@mui/material';

export default function PoolAnalytics () {
  const [pools, setPools] = useState(['test1', 'test2']);
  const [selectedPool, setSelectedPool] = useState('test1');
  // const [poolNfts, setPoolNfts] = useState([]);

  const handleInputChange = (e) => {
    setSelectedPool(e.target.value);
  }

  const data = [
    {x: 0, y: 8},
    {x: 1, y: 5},
    {x: 2, y: 4},
    {x: 3, y: 9},
    {x: 4, y: 1},
    {x: 5, y: 7},
    {x: 6, y: 6},
    {x: 7, y: 3},
    {x: 8, y: 2},
    {x: 9, y: 0}
  ];

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

      <XYPlot height={200} width={200}>
        <VerticalBarSeries data={data} />
      </XYPlot>
    </Container>
  )
}