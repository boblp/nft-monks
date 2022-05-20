import React, { useState, useEffect } from 'react';
import Grid from "@mui/material/Grid";
import { traits } from '../traits';
import AForm from '../components/attributesForm';
import ImgDisplay from '../components/imgDisplay';

export default function NftSpecifics () {
  const [traitsSelected, setTraitsSelected] = useState({});
  
  useEffect(()=>{
    let defaultValues = {};
    Object.keys(traits).forEach(trait => {
      defaultValues[trait] = traits[trait][0];
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

  const randomize = () => {
    const randomObj = {}
    Object.entries(traits).forEach((v) => {
      const random = v[1][(Math.random() * v[1].length) | 0];
      randomObj[v[0]] = random;
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
          values={traitsSelected}
          traits={traits}
          randomize={randomize} />
      </Grid>
      <Grid item xs m={3}>
        <ImgDisplay traitsObj={traitsSelected} />
      </Grid>
    </Grid>
  )
}