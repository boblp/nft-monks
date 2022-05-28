import React, { useState, useEffect } from 'react';
import { 
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
  RadialChart,
  Hint
 } from 'react-vis';
import {
  Container, Grid, FormControl, InputLabel, MenuItem, Select
} from '@mui/material';
import { getPools } from '../models/api';

export default function PoolAnalytics () {
  const [pools, setPools] = useState([]);
  const [selectedPool, setSelectedPool] = useState('');
  const [graphData, setGraphData] = useState();
  const [val, setVal] = useState(false);
  
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
    const hash = JSON.parse(JSON.stringify(nftArray[0]))
    Object.keys(hash).forEach(v => hash[v] = {})

    nftArray.forEach((nft) => {
      Object.entries(nft).forEach((v) => {
        hash[v[0]][v[1]] = (hash[v[0]][v[1]] || 0) + 1;
      })
    })

    return hash
  };

  const tableTransform = (obj, type) => {
    const transArray = []
    Object.entries(obj).forEach((v, i) => {
      if(type == "pie"){
        transArray.push({
          angle: v[1], 
          label:v[0]
        })
      }else{
        transArray.push({
          x: v[0],
          y: v[1],
        })
      }
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
              <XYPlot
                className="clustered-stacked-bar-chart-example"
                xType="ordinal"
                stackBy="y"
                width={300}
                height={300}
              >
                <VerticalGridLines />
                <HorizontalGridLines />
                <XAxis />
                <YAxis />
                <VerticalBarSeries
                  cluster="2015"
                  color={graphColors[k]}
                  data={tableTransform(v[1], 'bar')}
                />
              </XYPlot>
              <RadialChart
                data={tableTransform(v[1], 'pie')}
                showLabels
                labelsRadiusMultiplier={0.9}
                onValueMouseOver={v => setVal(v)}
                onSeriesMouseOut={v => setVal(false)}
                width={300}
                height={300}>
                {val !== false && <p>{val.angle}</p>}   
              </RadialChart>
            </Grid>
          )
        })}
      </Grid>
    </Container>
  )
}