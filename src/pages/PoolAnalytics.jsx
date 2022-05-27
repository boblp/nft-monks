import React, { useState, useEffect } from 'react';
import { FlexibleWidthXYPlot, VerticalBarSeries, XAxis, YAxis } from 'react-vis';
import {
  Container, Grid, FormControl, InputLabel, MenuItem, Select
} from '@mui/material';
import { getPools } from '../models/api';

export default function PoolAnalytics () {
  const [pools, setPools] = useState([]);
  const [selectedPool, setSelectedPool] = useState('');
  const [graphData, setGraphData] = useState();

  
  useEffect(() => {
    getPools().then((response) => {
      setPools(response);
    })
  }, [])

  const handleInputChange = (e) => {
    setSelectedPool(e.target.value);
    const selectedPoolNfts = pools.find(x => x._id === e.target.value);
    setGraphData(getPercentages(selectedPoolNfts.nfts));
  }

  const graphColors = ['#f44336', '#ab47bc', '#5c6bc0', '#29b6f6', '#66bb6a', '#ffee58', '#ffa726', '#8d6e63', '#78909c'];

  const getPercentages = (nftArray) => {
    const hash = structuredClone(nftArray[0])
    Object.keys(hash).forEach(v => hash[v] = {})

    nftArray.forEach((nft) => {
      Object.entries(nft).forEach((v) => {
        hash[v[0]][v[1]] = (hash[v[0]][v[1]] || 0) + 1;
      })
    })

    return hash
  };

  const tableTransform = (obj) => {
    const transArray = []
    Object.entries(obj).forEach((v, i) => {
      transArray.push({
        x: v[0],
        y: v[1],
      })
    })
    return transArray
  }

  return (
    <Container maxWidth="xl">
      <Grid container spacing="5">
        <FormControl sx={{ margin: '20px 0px' }} fullWidth>
          <InputLabel sx={{ backgroundColor: 'white' }}>Pool</InputLabel>
          <Select onChange={handleInputChange} value={selectedPool}>
            {pools.map((val, key) => {
              return (<MenuItem key={key} value={val._id}>{val.name}</MenuItem>)
            })}
          </Select>
        </FormControl>
      
        {typeof graphData === 'object' && Object.entries(graphData).map((v, k) => {
          return (
            <Grid item key={k} xs={3}>
              <h4 style={{ textAlign: 'center' }}>{v[0]}</h4>
              <FlexibleWidthXYPlot
                height={200}
                stroke="black">
                <XAxis />
                <YAxis />
                <VerticalBarSeries
                  data={tableTransform(v[1])}
                  color={graphColors[k]} />
              </FlexibleWidthXYPlot>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}