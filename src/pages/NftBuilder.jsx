import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import { traitsWeights } from '../traits';
import AForm from '../components/attributesForm';
import ImgDisplay from '../components/imgDisplay';

export default function NftSpecifics () {
  const [traitsSelected, setTraitsSelected] = useState({});
  
  useEffect(()=>{
    let defaultValues = {};
    Object.keys(traitsWeights).forEach(trait => {
      defaultValues[trait] = Object.keys(traitsWeights[trait])[0];
    })
    setTraitsSelected(defaultValues);
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTraitsSelected({
        ...traitsSelected,
        [name]: value,
    });
  };

  const handleTextChange = (e) => {
    let obj = traitsSelected;
    try{
      obj = JSON.parse(e.target.value);
    }catch(e){
      console.log(e)
    }
    setTraitsSelected(obj);
  };

  const randomize = () => {
    const randomObj = {}
    Object.entries(traitsWeights).forEach((v) => {
      const random = Object.keys(traitsWeights[v])[1][(Math.random() * Object.keys(traitsWeights[v])[1].length) | 0];
      randomObj[Object.keys(traitsWeights[v])[0]] = random;
    })

    setTraitsSelected(randomObj)
  };

  return (
    <Grid 
      container 
      direction="row"
      alignItems="alignItems" 
      justifyContent="space-evenly" 
      spacing={2}>
      <Grid item xs={4} m={5} sx={{ marginTop: '10px' }}>
        <AForm 
          handleInputChange={handleInputChange}
          handleTextChange={handleTextChange}
          values={traitsSelected}
          traits={traitsWeights}
          randomize={randomize} />
      </Grid>
      <Grid item xs m={3}>
        <ImgDisplay traitsObj={traitsSelected} />
      </Grid>
    </Grid>
  )
}